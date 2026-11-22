import { init, type WrappedPdfiumModule } from "@embedpdf/pdfium";
import wasmUrl from "@embedpdf/pdfium/pdfium.wasm?url";
import { checkPdfSize } from "./pdfInput";
import { replacePageImage } from "./pdfImageEdit";

export interface EditTarget {
  index: number;
  end: number;
  ordinal?: number;
  kind: "text" | "image";
  label: string;
  /** Unrotated PDF coordinates, shared with pdf.js's page viewport. */
  box: number[];
  style?: { origin: number[]; axis: number[]; size: number; flags: number; bold: boolean; color: string };
}
export type Change = { kind: "text"; index: number; text: string } | { kind: "image"; index: number; file: File };
export type EditorRequest = { source: Uint8Array } | { page: number } | { page: number; change: Change; snapshot: Uint8Array };
export type EditorReply = { page: number; targets: EditTarget[] } | { bytes: Uint8Array } | { error: string; page?: number };

const ready = (async () => {
  const response = await fetch(wasmUrl);
  if (!response.ok) throw new Error("Couldn't load the PDF editor.");
  const engine = await init({ wasmBinary: await response.arrayBuffer() });
  engine.PDFiumExt_Init();
  return engine;
})();
let source: Uint8Array;

// Fallback for subset fonts that lack the typed characters: Liberation Sans (bundled with pdf.js) covers Latin
// Extended, so accented text can still be written. Indexed by bold * 2 + italic.
const FALLBACK_FONTS = ["Regular", "Italic", "Bold", "BoldItalic"];
let fallbackFonts: Promise<Uint8Array[]> | undefined;
function loadFallbackFonts() {
  fallbackFonts ??= Promise.all(FALLBACK_FONTS.map(async style => {
    const url = new URL(`${import.meta.env.BASE_URL}pdfjs/standard_fonts/LiberationSans-${style}.ttf`, self.location.href);
    const response = await fetch(url);
    if (!response.ok) throw new Error("Couldn't load a replacement font.");
    return new Uint8Array(await response.arrayBuffer());
  }));
  fallbackFonts.catch(() => { fallbackFonts = undefined; });
  return fallbackFonts;
}

function buffer<T>(m: WrappedPdfiumModule, size: number, use: (ptr: number) => T): T {
  const ptr = m.pdfium.wasmExports.malloc(size);
  if (!ptr) throw new Error("There isn't enough memory to edit this PDF.");
  try { return use(ptr); } finally { m.pdfium.wasmExports.free(ptr); }
}

function withPage<T>(m: WrappedPdfiumModule, bytes: Uint8Array, number: number, use: (doc: number, page: number) => T): T {
  return buffer(m, bytes.length, ptr => {
    m.pdfium.HEAPU8.set(bytes, ptr);
    const doc = m.FPDF_LoadMemDocument(ptr, bytes.length, "");
    if (!doc) throw new Error("Couldn't open this PDF for editing.");
    try {
      if (m.EPDF_IsEncrypted(doc) || m.FPDF_GetSignatureCount(doc) > 0) {
        throw new Error("Editing requires an unsigned, unencrypted PDF.");
      }
      const page = m.FPDF_LoadPage(doc, number - 1);
      if (!page) throw new Error("Couldn't open this page.");
      try { return use(doc, page); } finally { m.FPDF_ClosePage(page); }
    } finally { m.FPDF_CloseDocument(doc); }
  });
}

function objectText(m: WrappedPdfiumModule, page: number) {
  const chars = new Map<number, string>();
  const textPage = m.FPDFText_LoadPage(page);
  if (!textPage) return chars;
  try {
    const count = m.FPDFText_CountChars(textPage);
    if (count > 200000) throw new Error("This page contains too much text to edit.");
    for (let i = 0; i < count; i++) {
      if (m.FPDFText_IsGenerated(textPage, i)) continue;
      const object = m.FPDFText_GetTextObject(textPage, i);
      const code = m.FPDFText_GetUnicode(textPage, i);
      if (object && code > 0 && code <= 0x10ffff) chars.set(object, (chars.get(object) ?? "") + String.fromCodePoint(code));
    }
    return chars;
  } finally { m.FPDFText_ClosePage(textPage); }
}

function pageView(m: WrappedPdfiumModule, page: number) {
  const count = m.FPDFPage_CountObjects(page);
  if (count > 20000) throw new Error("This page has too many objects to edit.");
  const chars = objectText(m, page);
  const targets: EditTarget[] = [];
  let imageCount = 0;
  buffer(m, 32, ptr => {
    let previous: { style: string; right: number; x: number; target: EditTarget } | undefined;
    for (let index = 0; index < count; index++) {
      const obj = m.FPDFPage_GetObject(page, index);
      const type = m.FPDFPageObj_GetType(obj);
      const ordinal = type === 3 ? imageCount++ : 0;
      if (type !== 1 && type !== 3) continue;
      if (!m.FPDFPageObj_GetBounds(obj, ptr, ptr + 4, ptr + 8, ptr + 12)) continue;
      const [left, bottom, right, top] = m.pdfium.HEAPF32.subarray(ptr / 4, ptr / 4 + 4);
      const box = [left, bottom, right, top];
      if (type === 3) {
        if (box[2] > box[0] && box[3] > box[1]) targets.push({ index, end: index, ordinal, kind: "image", label: `Image ${ordinal + 1}`, box });
        continue;
      }
      const mode = m.FPDFTextObj_GetTextRenderMode(obj);
      const label = chars.get(obj);
      if (!label || mode < 0 || mode > 2) continue; // Omit invisible OCR and clipping text.
      if (!m.FPDFPageObj_GetMatrix(obj, ptr) || !m.FPDFTextObj_GetFontSize(obj, ptr + 24)) continue;
      const [a, b, c, d, x, y, size] = m.pdfium.HEAPF32.subarray(ptr / 4, ptr / 4 + 7);
      const color = (stroke: boolean) => {
        const get = stroke ? m.FPDFPageObj_GetStrokeColor : m.FPDFPageObj_GetFillColor;
        return get(obj, ptr, ptr + 4, ptr + 8, ptr + 12) ? m.pdfium.HEAP32.subarray(ptr / 4, ptr / 4 + 4).join(",") : null;
      };
      const fill = mode === 1 ? "" : color(false), stroke = mode === 0 ? "" : color(true);
      const style = [m.FPDFTextObj_GetFont(obj), size, a, b, c, d, y, fill, stroke, mode, m.FPDFPageObj_GetMarkedContentID(obj)].join("/");
      const gap = previous ? x - previous.right : 0;
      const em = size * a;
      // Many PDFs position each glyph separately. Join consecutive, same-style runs on one horizontal baseline.
      if (previous && previous.target.end === index - 1 && previous.style === style && fill !== null && stroke !== null
        && a > 0 && b === 0 && c === 0 && d > 0 && x > previous.x && gap >= -0.25 * em && gap < 0.65 * em) {
        const target = previous.target;
        const space = gap > 0.16 * em && !/\s$/.test(target.label) && !/^\s/.test(label);
        target.label += (space ? " " : "") + label;
        target.end = index;
        target.box = [Math.min(target.box[0], box[0]), Math.min(target.box[1], box[1]),
          Math.max(target.box[2], box[2]), Math.max(target.box[3], box[3])];
        previous.right = right; previous.x = x;
      } else {
        const font = m.FPDFTextObj_GetFont(obj);
        const ink = (fill || stroke || "0,0,0,255").split(",").slice(0, 3);
        const target: EditTarget = { index, end: index, kind: "text", label, box,
          style: { origin: [x, y], axis: [a, b], size: size * Math.hypot(c, d), flags: m.FPDFFont_GetFlags(font),
            bold: m.FPDFFont_GetWeight(font) >= 600, color: `rgb(${ink.join(" ")})` } };
        targets.push(target);
        previous = { target, style, right, x };
      }
    }
  });

  return { targets: targets.filter(t => t.label.trim() && t.box[2] > t.box[0] && t.box[3] > t.box[1]), imageCount };
}

function save(m: WrappedPdfiumModule, doc: number) {
  const writer = m.PDFiumExt_OpenFileWriter();
  if (!writer) throw new Error("Couldn't create an edited copy.");
  try {
    if (!m.FPDF_SaveAsCopy(doc, writer, 2)) throw new Error("Couldn't write the edited PDF.");
    const size = m.PDFiumExt_GetFileWriterSize(writer);
    checkPdfSize(size);
    return buffer(m, size, ptr => {
      if (m.PDFiumExt_GetFileWriterData(writer, ptr, size) !== size) throw new Error("Couldn't read the edited PDF.");
      return (m.pdfium.HEAPU8 as Uint8Array).slice(ptr, ptr + size);
    });
  } finally { m.PDFiumExt_CloseFileWriter(writer); }
}

/** Text extraction collapses runs of spaces, so compare written and read-back text with whitespace normalized. */
const sameText = (a: string | undefined, b: string) => (a ?? "").replace(/\s+/g, " ").trim() === b.replace(/\s+/g, " ").trim();

const glyphShape = (m: WrappedPdfiumModule, font: number, code: number, widthPtr: number) => {
  const width = m.FPDFFont_GetGlyphWidth(font, code, 12, widthPtr) ? m.pdfium.HEAPF32[widthPtr / 4] : 0;
  const glyph = m.FPDFFont_GetGlyphPath(font, code, 12);
  const segments = glyph ? m.FPDFGlyphPath_CountGlyphSegments(glyph) : 0;
  const points: string[] = [];
  for (let i = 0; glyph && i < Math.min(segments, 8); i++) {
    const segment = m.FPDFGlyphPath_GetGlyphPathSegment(glyph, i);
    if (segment && m.FPDFPathSegment_GetPoint(segment, widthPtr, widthPtr + 4)) {
      points.push(`${m.pdfium.HEAPF32[widthPtr / 4].toFixed(3)},${m.pdfium.HEAPF32[widthPtr / 4 + 1].toFixed(3)}`);
    }
  }
  return { width, segments, key: `${segments}|${width.toFixed(3)}|${points.join(" ")}` };
};

/**
 * Whether `font` can really draw every character of `text`. A missing character can come back as nothing, as a
 * zero-width shape (common in embedded subset fonts) or as the font's .notdef box with a normal width (common in full
 * TrueType fonts), while text extraction still reads the character back. So each visible character needs its own
 * outline, a width, and a shape different from .notdef (the shape of a private-use code no font defines); spaces
 * need a width and no outline.
 */
function fontCovers(m: WrappedPdfiumModule, font: number, text: string) {
  return buffer(m, 8, ptr => {
    const notdef = glyphShape(m, font, 0x10fffd, ptr);
    return [...new Set(text)].every(ch => {
      const shape = glyphShape(m, font, ch.codePointAt(0)!, ptr);
      if (/\s/u.test(ch)) return shape.width > 0 && shape.segments === 0;
      return shape.segments > 0 && shape.width > 0 && !(notdef.segments > 0 && shape.key === notdef.key);
    });
  });
}

// Typographic spaces (no-break, thin, hair…), invisible format characters and special hyphens often come along from
// the document's own text, where the user can't see them. A font that lacks them shouldn't block the edit.
const SPACE_LIKE = /[\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000]/gu;
const INVISIBLE = /[\u00ad\u180e\u200b-\u200f\u2060-\u2064\ufeff]/gu;
const HYPHEN_LIKE = /[\u2010\u2011]/gu;

/**
 * Adapts the text to what `font` can draw: drops invisible format characters (soft hyphens, zero-width spaces —
 * some fonts would draw them visibly), and turns typographic spaces and special hyphens the font lacks into a plain
 * space or hyphen.
 */
function adaptToFont(m: WrappedPdfiumModule, font: number, text: string) {
  const keep = (ch: string, plain: string) => (fontCovers(m, font, ch) ? ch : plain);
  return text.replace(INVISIBLE, "").replace(SPACE_LIKE, ch => keep(ch, " ")).replace(HYPHEN_LIKE, ch => keep(ch, "-"));
}

/**
 * Replaces `obj` with a new text object in a fallback font, keeping its position, size, colors and style. The
 * fallback is stretched or narrowed horizontally so the original text would take the same width as before, which
 * keeps condensed or wide fonts looking close to the original.
 */
function rewriteInFallbackFont(m: WrappedPdfiumModule, doc: number, page: number, target: EditTarget, obj: number,
  text: string, fonts: Uint8Array[], keepAlive: number[]) {
  const index = target.index;
  const original = m.FPDFTextObj_GetFont(obj);
  // Many embedded fonts only say their style in the name, e.g. "ABCDEF+Lato-Bold".
  const name = buffer(m, 256, ptr => {
    const length = m.FPDFFont_GetBaseFontName(original, ptr, 256);
    return length > 1 && length <= 256 ? m.pdfium.UTF8ToString(ptr) : "";
  });
  const bold = m.FPDFFont_GetWeight(original) >= 600 || (m.FPDFFont_GetFlags(original) & (1 << 18)) !== 0
    || /bold|black|heavy|semibold|demi/i.test(name);
  const italic = (m.FPDFFont_GetFlags(original) & (1 << 6)) !== 0 || /italic|oblique/i.test(name);
  const data = fonts[(bold ? 2 : 0) + (italic ? 1 : 0)];
  const fontPtr = m.pdfium.wasmExports.malloc(data.length);
  if (!fontPtr) throw new Error("There isn't enough memory to edit this PDF.");
  keepAlive.push(fontPtr);
  m.pdfium.HEAPU8.set(data, fontPtr);
  const font = m.FPDFText_LoadFont(doc, fontPtr, data.length, 2 /* FPDF_FONT_TRUETYPE */, true);
  if (!font) throw new Error("Couldn't load a replacement font.");
  try {
    text = adaptToFont(m, font, text);
    if (!fontCovers(m, font, text)) throw new Error("This font can't display all of those characters.");
    buffer(m, 32, ptr => {
      if (!m.FPDFPageObj_GetMatrix(obj, ptr) || !m.FPDFTextObj_GetFontSize(obj, ptr + 24)) {
        throw new Error("Couldn't change this text.");
      }
      const size = m.pdfium.HEAPF32[ptr / 4 + 6];
      const replacement = m.FPDFPageObj_CreateTextObj(doc, font, size);
      if (!replacement) throw new Error("Couldn't change this text.");
      const setText = (value: string) => {
        const bytes = (value.length + 1) * 2;
        buffer(m, bytes, textPtr => {
          m.pdfium.stringToUTF16(value, textPtr, bytes);
          if (!m.FPDFText_SetText(replacement, textPtr)) throw new Error("Couldn't change this text.");
        });
      };
      let inserted = false;
      try {
        // Match the original run's width: lay out its old text in the fallback font and compare.
        const oldWidth = target.box[2] - target.box[0];
        const [a, b] = m.pdfium.HEAPF32.subarray(ptr / 4, ptr / 4 + 2);
        const oldText = adaptToFont(m, font, target.label);
        if (oldText.trim() && oldWidth > 0 && b === 0 && a > 0 && fontCovers(m, font, oldText)) {
          setText(oldText);
          if (m.FPDFPageObj_SetMatrix(replacement, ptr)) {
            const widthNow = buffer(m, 16, box => m.FPDFPageObj_GetBounds(replacement, box, box + 4, box + 8, box + 12)
              ? m.pdfium.HEAPF32[box / 4 + 2] - m.pdfium.HEAPF32[box / 4] : 0);
            const scale = widthNow > 0 ? Math.min(1.3, Math.max(0.5, oldWidth / widthNow)) : 1;
            if (Math.abs(scale - 1) > 0.03) m.pdfium.HEAPF32[ptr / 4] = a * scale;
          }
        }
        if (!m.FPDFPageObj_SetMatrix(replacement, ptr)) throw new Error("Couldn't change this text.");
        const mode = m.FPDFTextObj_GetTextRenderMode(obj);
        if (mode >= 0) m.FPDFTextObj_SetTextRenderMode(replacement, mode);
        if (m.FPDFPageObj_GetFillColor(obj, ptr, ptr + 4, ptr + 8, ptr + 12)) {
          const [r, g, b, a] = m.pdfium.HEAPU32.subarray(ptr / 4, ptr / 4 + 4);
          m.FPDFPageObj_SetFillColor(replacement, r, g, b, a);
        }
        if (m.FPDFPageObj_GetStrokeColor(obj, ptr, ptr + 4, ptr + 8, ptr + 12)) {
          const [r, g, b, a] = m.pdfium.HEAPU32.subarray(ptr / 4, ptr / 4 + 4);
          m.FPDFPageObj_SetStrokeColor(replacement, r, g, b, a);
        }
        setText(text);
        if (!m.FPDFPage_InsertObjectAtIndex(page, replacement, index)) throw new Error("Couldn't change this text.");
        inserted = true;
      } finally {
        if (!inserted) m.FPDFPageObj_Destroy(replacement);
      }
      if (!m.FPDFPage_RemoveObject(page, obj)) throw new Error("Couldn't replace the full text run.");
      m.FPDFPageObj_Destroy(obj);
      if (!sameText(objectText(m, page).get(replacement), text)) throw new Error("This font can't display all of those characters.");
    });
  } finally { m.FPDFFont_Close(font); }
}

function replaceText(m: WrappedPdfiumModule, doc: number, page: number, target: EditTarget, text: string,
  fonts: Uint8Array[], keepAlive: number[]) {
  const obj = m.FPDFPage_GetObject(page, target.index);
  if (m.FPDFPageObj_GetType(obj) !== 1 || text.length > 32767 || /[\u0000-\u001f]/u.test(text)) {
    throw new Error("Enter a single line of text.");
  }
  const firstToRemove = text ? target.index + 1 : target.index;
  for (let i = target.end; i >= firstToRemove; i--) {
    const fragment = m.FPDFPage_GetObject(page, i);
    if (!m.FPDFPage_RemoveObject(page, fragment)) throw new Error("Couldn't replace the full text run.");
    m.FPDFPageObj_Destroy(fragment);
  }
  if (!text) return;
  // Keep the document's own font when it can draw every character; otherwise write the line in a full fallback font
  // (which adapts the user's original text to its own character set).
  const typed = text;
  text = adaptToFont(m, m.FPDFTextObj_GetFont(obj), text);
  if (!fontCovers(m, m.FPDFTextObj_GetFont(obj), text)) {
    rewriteInFallbackFont(m, doc, page, target, obj, typed, fonts, keepAlive);
    return;
  }
  const size = (text.length + 1) * 2;
  const written = buffer(m, size, ptr => {
    m.pdfium.stringToUTF16(text, ptr, size);
    return m.FPDFText_SetText(obj, ptr);
  });
  // Some fonts still can't encode a character they seem to have (no code for it in the PDF's encoding): check what
  // was written and fall back if it differs.
  if (!written || !sameText(objectText(m, page).get(obj), text)) rewriteInFallbackFont(m, doc, page, target, obj, typed, fonts, keepAlive);
}

self.onmessage = async ({ data }: MessageEvent<EditorRequest>) => {
  if ("source" in data) { source = data.source; return; }
  try {
    const m = await ready;
    const { page } = data;
    if (!("change" in data)) {
      const { targets } = withPage(m, source, page, (_doc, handle) => pageView(m, handle));
      self.postMessage({ page, targets } satisfies EditorReply);
      return;
    }
    const { change, snapshot } = data;
    const fonts = change.kind === "text" ? await loadFallbackFonts() : [];
    const keepAlive: number[] = [];
    let result;
    try {
      result = withPage(m, snapshot, page, (doc, handle) => {
        const { targets, imageCount } = pageView(m, handle);
        const target = targets.find(t => t.index === change.index && t.kind === change.kind);
        if (!target) throw new Error("Select the item again.");
        if (change.kind === "image") return replacePageImage(snapshot, page, target.ordinal!, imageCount, change.file);
        replaceText(m, doc, handle, target, change.text, fonts, keepAlive);
        if (!m.FPDFPage_GenerateContent(handle)) throw new Error("Couldn't write this page.");
        return save(m, doc);
      });
    } finally { keepAlive.forEach(ptr => m.pdfium.wasmExports.free(ptr)); }
    const bytes = await result;
    self.postMessage({ bytes } satisfies EditorReply, { transfer: [bytes.buffer as ArrayBuffer] });
  } catch (reason) {
    self.postMessage({ error: reason instanceof Error ? reason.message : "Couldn't edit this PDF.",
      page: "change" in data ? undefined : data.page } satisfies EditorReply);
  }
};
