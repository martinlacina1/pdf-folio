import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import {
  EventBus,
  LinkTarget,
  PDFFindController,
  PDFLinkService,
  PDFViewer,
  ScrollMode,
  SpreadMode,
} from "./viewer";
import { AnnotationEditorParamsType, AnnotationEditorType } from "pdfjs-dist";
import { loadPdf, reorderPdf, thumbnailDataUrl, type PDFDocumentProxy } from "./pdf";
import { contentKey, getRecent, MAX_RECENT_FILE_BYTES, removeRecent, saveRecent, updateLastPage } from "./recent";
import { readPdfBlob, readPdfResponse } from "./pdfInput";
import { FIT_SCALES, readView, writeView, type ReadingView } from "./session";
import { DocumentTabBar } from "./DocumentTabBar";
import { trackTitlebar } from "./titlebar";
import type { DocumentTabs, OpenSource } from "./documentTabs";
import { SearchResults } from "./SearchResults";
import { Icon, type IconName } from "./icons";
import { Welcome } from "./Welcome";
import { Sidebar, type SidebarTab } from "./Sidebar";
import { MarkupController, type Mark, type MarkupState } from "./markup";
import { HighlightMenu, NoteBox, SelectionPopover, useTextSelection, type SelectionInfo } from "./Selection";
import { NotesPanel } from "./NotesPanel";
import { notesJson, notesMarkdown } from "./noteExport";
import { copyText } from "./clipboard";
import { trackPageImages } from "./nightImages";
import { recognizeScannedPages } from "./pageOcr";
import { MoreMenu, type MoreItem } from "./MoreMenu";
import { keys } from "./platform";
import { t } from "./i18n";
import { AiPanel, type AiContext } from "./AiPanel";
import { ZoomMenu } from "./ZoomMenu";
import { SearchBar, type FindResult } from "./SearchBar";
import { AboutDialog, InfoDialog, OpenUrlDialog, PasswordDialog, ShortcutsDialog, parseWebUrl } from "./Dialogs";
import { SignatureDialog } from "./SignatureDialog";
import { ContentEditor, type ContentEditorHandle, type NextSelection } from "./ContentEditor";
import { VersionHistoryPanel } from "./VersionHistoryPanel";
import { saveVersion, type PdfChange } from "./versionHistory";
import { SettingsDialog } from "./SettingsDialog";
import { ChangelogDialog } from "./ChangelogDialog";
import type { Release } from "./releaseNotes";
import { detectSignatureTargets, placeSignature, type SignatureTarget } from "./signatures";
import { keepDrawingPointer } from "./drawing";
import { enableHandTool } from "./handTool";
import { ARROW_STYLES, DEFAULT_INK_WIDTH, FILLS, INK_WIDTHS, drawShapes, fills, type ArrowStyle, type Fill, type Shape, type ShapeStyle } from "./shapes";
import { translatePdfjsLabels } from "./pdfjsLabels";
import { enableWheelPaging } from "./wheelPaging";

type Tool = "select" | "hand" | "highlight" | "ink" | "freetext";

const TOOL_MODES: Record<Tool, number> = {
  select: AnnotationEditorType.NONE,
  hand: AnnotationEditorType.NONE,
  highlight: AnnotationEditorType.HIGHLIGHT,
  ink: AnnotationEditorType.INK,
  freetext: AnnotationEditorType.FREETEXT,
};

const TOOLS: { id: Tool; icon: IconName; label: string; key: string }[] = [
  { id: "select", icon: "cursor", label: "Select", key: "V" },
  { id: "hand", icon: "hand", label: "Hand", key: "Space" },
  { id: "highlight", icon: "highlight", label: "Highlight", key: "H" },
  { id: "ink", icon: "pen", label: "Draw", key: "D" },
  { id: "freetext", icon: "text", label: "Text", key: "T" },
];

const HIGHLIGHTS = [
  { name: "Yellow", hex: "#FFD84D" },
  { name: "Green", hex: "#5EDC9A" },
  { name: "Blue", hex: "#6CB8FF" },
  { name: "Pink", hex: "#FF8FC7" },
  { name: "Red", hex: "#FF5A4E" },
];

const INKS = [
  { name: "Black", hex: "#1C1B19" },
  { name: "Red", hex: "#E5533D" },
  { name: "Blue", hex: "#2F6FED" },
  { name: "Green", hex: "#1F9D55" },
  { name: "Purple", hex: "#8B5CF6" },
];

/** Font sizes offered for text boxes, in points. */
const TEXT_SIZES = [8, 10, 12, 14, 18, 24, 36, 48];

const PALETTE: Partial<Record<Tool, typeof INKS>> = { highlight: HIGHLIGHTS, ink: INKS, freetext: INKS };

const COLOR_PARAM: Partial<Record<Tool, number>> = {
  highlight: AnnotationEditorParamsType.HIGHLIGHT_COLOR,
  ink: AnnotationEditorParamsType.INK_COLOR,
  freetext: AnnotationEditorParamsType.FREETEXT_COLOR,
};

interface OpenDoc {
  /** Full content identity for Recent, reading position, annotations and chat. */
  id: string;
  name: string;
  /** The file's size; its bytes live in pdf.js's worker (pdf.getData()) rather than in a second copy here. */
  size: number;
  pdf: PDFDocumentProxy;
  /** Used only in memory when reopening an annotated snapshot for page reordering. */
  password?: string;
  /** Original library entry while content edits are held in memory. */
  sourceId?: string;
  historyAllowed: boolean;
  edits?: { original?: Blob; changes: PdfChange[] };
  /** The file on disk this document came from, which "Save" overwrites (desktop app only). */
  path?: string;
}

function changesForCopy(doc: OpenDoc, annotated: boolean, order?: number[]) {
  const changes = [...(doc.edits?.changes ?? [])];
  if (annotated && !changes.some(change => change.kind === "annotations")) changes.push({ kind: "annotations" });
  if (order) changes.push({ kind: "pages", order });
  return changes;
}

interface Pending {
  name: string;
  data: Uint8Array;
  error?: string;
}

// Blob copies the bytes itself, so no copy is made here. (The cast: BlobPart rules out views over a
// SharedArrayBuffer, which pdf.js never hands out, but its types don't say so.)
const pdfBlob = (bytes: Uint8Array) => new Blob([bytes as Uint8Array<ArrayBuffer>], { type: "application/pdf" });

function saveBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

export default function App({ tabs, tabKey, upgradeNotes }: { tabs: DocumentTabs; tabKey: number; upgradeNotes: Release[] }) {
  const headerRef = useRef<HTMLElement>(null);
  const active = useSyncExternalStore(tabs.subscribe, () => tabs.active === tabKey);
  const multipleTabs = useSyncExternalStore(tabs.subscribe, () => tabs.all.length > 1);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PDFViewer | null>(null);
  const busRef = useRef<EventBus | null>(null);
  const linkRef = useRef<PDFLinkService | null>(null);
  const findRef = useRef<PDFFindController | null>(null);
  const restoreRef = useRef<ReadingView | null>(null);
  const restoringRef = useRef(false);
  const preferencesRef = useRef({ sidebar: false, spread: false });
  const opening = useRef<AbortController | null>(null);
  const lastPageRef = useRef<number>(1);
  const docRef = useRef<OpenDoc | null>(null);
  const markupRef = useRef<MarkupController | null>(null);
  const persistRef = useRef(false);
  const exporting = useRef<PDFDocumentProxy | null>(null);
  const savingCopy = useRef(false);
  const saveRef = useRef<() => Promise<boolean>>(async () => false);

  const [doc, setDoc] = useState<OpenDoc | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [textStatus, setTextStatus] = useState<string | null>(null);
  const [pageInput, setPageInput] = useState("1");
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1);
  const [wheelPaging, setWheelPaging] = useState(() => localStorage.getItem("folio:wheel-paging") === "1");
  const wheelPagingRef = useRef(wheelPaging);
  wheelPagingRef.current = wheelPaging;
  const [rotation, setRotation] = useState(0);
  // The page and zoom controls: where the reader dragged them (their center, as a share of the stage), and whether hidden.
  const [pillAt, setPillAt] = useState<{ x: number; y: number } | null>(() => {
    try {
      const at = JSON.parse(localStorage.getItem("folio:pill-position") || "null");
      return at && Number.isFinite(at.x) && Number.isFinite(at.y) ? at : null;
    } catch { return null; }
  });
  const [pillHidden, setPillHidden] = useState(() => localStorage.getItem("folio:pill-hidden") === "1");
  const pillRef = useRef<HTMLDivElement>(null);
  const placePill = (at: { x: number; y: number } | null) => {
    setPillAt(at);
    try { if (at) localStorage.setItem("folio:pill-position", JSON.stringify(at)); else localStorage.removeItem("folio:pill-position"); } catch {}
  };
  const hidePill = (hidden: boolean) => {
    setPillHidden(hidden);
    try { localStorage.setItem("folio:pill-hidden", hidden ? "1" : "0"); } catch {}
  };
  // A remembered spot can fall partly outside a smaller window: move the bar back in whenever it shows or the stage
  // changes size, so it never ends up cut off.
  useLayoutEffect(() => {
    const pill = pillRef.current, stage = pill?.parentElement;
    if (!pill || !stage || pillHidden || !pillAt) return;
    const fit = () => {
      const area = stage.getBoundingClientRect(), box = pill.getBoundingClientRect();
      if (!area.width || !area.height) return;
      const halfW = box.width / 2 + 8, halfH = box.height / 2 + 8;
      const x = Math.min(Math.max(pillAt.x * area.width, halfW), Math.max(halfW, area.width - halfW)) / area.width;
      const y = Math.min(Math.max(pillAt.y * area.height, halfH), Math.max(halfH, area.height - halfH)) / area.height;
      if (Math.abs(x - pillAt.x) > 1e-4 || Math.abs(y - pillAt.y) > 1e-4) setPillAt({ x, y });
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [pillAt, pillHidden, doc]);
  const dragPill = (event: React.PointerEvent<HTMLElement>) => {
    const pill = pillRef.current, stage = pill?.parentElement;
    if (!pill || !stage || event.button !== 0) return;
    event.preventDefault();
    const handle = event.currentTarget;
    handle.setPointerCapture(event.pointerId);
    const box = pill.getBoundingClientRect();
    const grab = { x: event.clientX - (box.left + box.width / 2), y: event.clientY - (box.top + box.height / 2) };
    const move = (e: PointerEvent) => {
      const area = stage.getBoundingClientRect();
      // Keep the whole bar inside the stage.
      const halfW = box.width / 2 + 8, halfH = box.height / 2 + 8;
      const x = Math.min(Math.max(e.clientX - grab.x - area.left, halfW), area.width - halfW);
      const y = Math.min(Math.max(e.clientY - grab.y - area.top, halfH), area.height - halfH);
      placePill({ x: x / area.width, y: y / area.height });
    };
    const stop = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", stop);
      handle.removeEventListener("pointercancel", stop);
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", stop);
    handle.addEventListener("pointercancel", stop);
  };
  const [sidebar, setSidebar] = useState(() => localStorage.getItem("folio:sidebar") === "1" && window.innerWidth > 760);
  const [searchOpen, setSearchOpen] = useState(false);
  const [find, setFind] = useState<FindResult>({ current: 0, total: 0, state: null });
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || "light");
  const [spread, setSpread] = useState(() => localStorage.getItem("folio:spread") === "1");
  const spreadRef = useRef(spread);
  spreadRef.current = spread;
  const [night, setNight] = useState(() => {
    try { return localStorage.getItem("folio:night") === "1"; }
    catch { return false; }
  });
  const [tool, setTool] = useState<Tool>("select");
  const [drawTool, setDrawTool] = useState<"Pen" | Shape>("Pen");
  // Line width (PDF points) for the pen and shapes, and how arrows end; both remembered.
  const [inkWidth, setInkWidth] = useState(() => {
    const saved = Number(localStorage.getItem("folio:line-width"));
    return INK_WIDTHS.includes(saved) ? saved : DEFAULT_INK_WIDTH;
  });
  const inkWidthRef = useRef(inkWidth);
  inkWidthRef.current = inkWidth;
  const [arrowStyle, setArrowStyle] = useState<ArrowStyle>(() => {
    const saved = localStorage.getItem("folio:arrow-style") as ArrowStyle | null;
    return saved && ARROW_STYLES.includes(saved) ? saved : "open";
  });
  /** Redraws the selected arrow or filled shape with the change; anything else gets `otherwise`. */
  const restyleOr = (change: { style?: Partial<ShapeStyle>; width?: number }, otherwise = () => {}) => {
    const markup = markupRef.current;
    if (!markup) return otherwise();
    void markup.restyleSelected(change).then((done) => { if (!done) otherwise(); });
  };
  const chooseInkWidth = (width: number) => {
    setInkWidth(width);
    try { localStorage.setItem("folio:line-width", String(width)); } catch {}
    restyleOr({ width }, () => {
      markupRef.current?.endDrawing();
      busRef.current?.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.INK_THICKNESS, value: width });
    });
  };
  // Font size (points) for new text boxes; also resizes the selected one, as pdf.js does. Remembered.
  const [textSize, setTextSize] = useState(() => {
    const saved = Number(localStorage.getItem("folio:text-size"));
    return TEXT_SIZES.includes(saved) ? saved : 12;
  });
  const textSizeRef = useRef(textSize);
  textSizeRef.current = textSize;
  const chooseTextSize = (size: number) => {
    setTextSize(size);
    try { localStorage.setItem("folio:text-size", String(size)); } catch {}
    busRef.current?.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.FREETEXT_SIZE, value: size });
  };
  // Arrow head size, relative to the line width.
  const [arrowSize, setArrowSize] = useState(() => {
    const saved = Number(localStorage.getItem("folio:arrow-size"));
    return saved >= 0.5 && saved <= 3 ? saved : 1;
  });
  // The slider redraws a selected arrow once it rests, not at every step of the drag.
  const arrowSizeTimer = useRef(0);
  const chooseArrowSize = (size: number) => {
    setArrowSize(size);
    try { localStorage.setItem("folio:arrow-size", String(size)); } catch {}
    window.clearTimeout(arrowSizeTimer.current);
    arrowSizeTimer.current = window.setTimeout(() => restyleOr({ style: { arrowSize: size } }), 200);
  };
  const chooseArrowStyle = (style: ArrowStyle) => {
    setArrowStyle(style);
    try { localStorage.setItem("folio:arrow-style", style); } catch {}
    restyleOr({ style: { arrow: style } });
  };
  // Inside rectangles and ovals.
  const [fill, setFill] = useState<Fill>(() => {
    const saved = localStorage.getItem("folio:shape-fill") as Fill | null;
    return saved && FILLS.includes(saved) ? saved : "none";
  });
  const chooseFill = (value: Fill) => {
    setFill(value);
    try { localStorage.setItem("folio:shape-fill", value); } catch {}
    restyleOr({ style: { fill: value } });
  };
  const shapeStyle = useMemo<ShapeStyle>(() => ({ arrow: arrowStyle, arrowSize, fill }), [arrowStyle, arrowSize, fill]);
  // Whether pdf.js has a change to take back; shows Undo in the top bar.
  const [canUndo, setCanUndo] = useState(false);
  const [colors, setColors] = useState<Partial<Record<Tool, string>>>({
    highlight: HIGHLIGHTS[0].hex,
    ink: INKS[0].hex,
    freetext: INKS[0].hex,
  });
  const colorsRef = useRef(colors);
  colorsRef.current = colors;
  const pageRef = useRef(1);
  const [dirty, setDirty] = useState(false);
  const [contentEditing, setContentEditing] = useState(false);
  const contentRef = useRef<ContentEditorHandle>(null);
  const nextSelection = useRef<NextSelection | null>(null);
  const [editorDirty, setEditorDirty] = useState(false);
  const [pageDraft, setPageDraft] = useState<{ order: number[]; copy?: Uint8Array } | null>(null);
  const pageOrder = pageDraft?.order.some((n, i) => n !== i + 1) ? pageDraft.order : undefined;
  // The desktop app can always save: to the document's file, or with Save as… (not password-protected documents).
  const canSave = !!doc && !!window.folioDesktop?.saveFileAs && !doc.password;
  const unsaved = !!doc?.sourceId || dirty || editorDirty || (!!pageOrder && !pageDraft?.copy);
  const [focus, setFocus] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dialog, setDialog] = useState<"info" | "shortcuts" | "about" | "url" | "settings" | "changelog" | "upgrade" | null>(
    upgradeNotes.length ? "upgrade" : null);
  // A pasted or dropped link waits in Open from URL, so the user sees where it goes before Folio contacts it.
  const [linkDraft, setLinkDraft] = useState("");
  const openUrlDialog = (link = "") => { setLinkDraft(link); setDialog("url"); };
  const [pending, setPending] = useState<Pending | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [updateVersion, setUpdateVersion] = useState<string | null>(null);
  const [signing, setSigning] = useState(false);
  const [signatureTargets, setSignatureTargets] = useState<SignatureTarget[]>([]);
  const [signatureDismissed, setSignatureDismissed] = useState(false);
  const [markup, setMarkup] = useState<MarkupState>({ marks: [], note: "", bookmarkedPages: null });
  const [sidebarTab, setSidebarTab] = useState<SidebarTab>("pages");
  const [noteBox, setNoteBox] = useState<{ markId: string; anchor: { x: number; top: number; bottom: number }; quote: string; initial: string } | null>(null);
  const [stageWidth, setStageWidth] = useState(800);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [pinned, setPinned] = useState<SelectionInfo | null>(null);
  const [highlightMenu, setHighlightMenu] = useState<{ id: string; rect: { left: number; top: number; right: number; bottom: number } } | null>(null);
  const [aiOpen, setAiOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [aiContext, setAiContext] = useState<AiContext | null>(null);

  useLayoutEffect(() => {
    if (active && window.folioDesktop && !focus && !dialog && !signing && !pending) {
      return trackTitlebar(headerRef.current!);
    }
  }, [active, doc, focus, dialog, signing, pending]);

  useEffect(() => {
    setSigning(false); setSignatureTargets([]); setSignatureDismissed(false);
    if (!doc || contentEditing) return;
    let cancelled = false;
    const timer = setTimeout(() => {
      void detectSignatureTargets(doc.pdf, page).then(targets => {
        if (!cancelled) setSignatureTargets(targets);
      }).catch(() => {});
    }, 350);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [doc, page, contentEditing]);

  docRef.current = doc;
  preferencesRef.current = { sidebar, spread };

  useLayoutEffect(() => tabs.markDirty(tabKey, unsaved), [tabs, tabKey, unsaved]);
  useEffect(() => { window.dispatchEvent(new Event("folio:tab-visibility")); }, [active]);

  const toastTimer = useRef(0);
  const flash = useCallback((msg: string) => {
    setToast(msg);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  // ── Viewer bootstrap ────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current!;
    const eventBus = new EventBus();
    const linkService = new PDFLinkService({ eventBus, externalLinkTarget: LinkTarget.BLANK });
    const findController = new PDFFindController({ eventBus, linkService });
    findRef.current = findController;
    const viewer = new PDFViewer({
      container,
      viewer: innerRef.current!,
      eventBus,
      linkService,
      findController,
      annotationEditorMode: AnnotationEditorType.NONE,
      annotationEditorHighlightColors: HIGHLIGHTS.map((c) => `${c.name.toLowerCase()}=${c.hex}`).join(","),
      // Records where images are drawn (used to keep them true to color in night reading). The huge
      // minimum size turns off pdf.js's own right-click image targets, which Folio doesn't use.
      imagesRightClickMinSize: 1e9,
    });
    trackPageImages(eventBus);
    const stopDrawingPointer = keepDrawingPointer(container);
    const stopLabels = translatePdfjsLabels(container);
    linkService.setViewer(viewer);
    viewerRef.current = viewer;
    markupRef.current = new MarkupController(eventBus, viewer, setMarkup);
    busRef.current = eventBus;
    linkRef.current = linkService;

    eventBus.on("pagesinit", () => {
      restoringRef.current = true;
      const saved = restoreRef.current;
      if (wheelPagingRef.current) viewer.scrollMode = ScrollMode.PAGE;
      viewer.spreadMode = (saved?.spread ?? spreadRef.current) ? SpreadMode.ODD : SpreadMode.NONE;
      viewer.pagesRotation = saved?.rotation ?? 0;
      viewer.currentScaleValue = saved?.scale ?? (window.innerWidth < 900 ? "page-width" : "auto");
      const restoredPage = Math.min(lastPageRef.current, viewer.pagesCount);
      viewer.currentPageNumber = restoredPage;
      if (saved && Number.isFinite(saved.top) && Number.isFinite(saved.left)) {
        viewer.scrollPageIntoView({ pageNumber: restoredPage, destArray: [null, { name: "XYZ" }, saved.left, saved.top, null] });
      }
      restoringRef.current = false;
      recognizeScannedPages(eventBus, viewer, setTextStatus);
    });
    eventBus.on("updateviewarea", ({ location }: { location: { pageNumber: number; top: number; left: number } }) => {
      const current = docRef.current;
      if (!current || restoringRef.current) return;
      writeView(current.id, { page: location.pageNumber, scale: viewer.currentScaleValue,
        rotation: viewer.pagesRotation, ...preferencesRef.current, top: location.top, left: location.left });
    });
    eventBus.on("pagechanging", ({ pageNumber }: { pageNumber: number }) => {
      pageRef.current = pageNumber;
      setPage(pageNumber);
      setPageInput(String(pageNumber));
    });
    eventBus.on("scalechanging", ({ scale }: { scale: number }) => setScale(scale));
    // pdf.js reports a selected drawing's or text box's style: show it in the bar, which then restyles it.
    eventBus.on("annotationeditorparamschanged", ({ details }: { details: [number, unknown][] }) => {
      // pdf.js also reports its own defaults when a mode starts; the bar keeps Folio's.
      if (!markupRef.current?.hasSelection) return;
      for (const [type, value] of details) {
        if (type === AnnotationEditorParamsType.INK_THICKNESS && typeof value === "number") setInkWidth(value);
        else if (type === AnnotationEditorParamsType.FREETEXT_SIZE && typeof value === "number") setTextSize(value);
        else if (type === AnnotationEditorParamsType.INK_COLOR && typeof value === "string") setColors((c) => ({ ...c, ink: value.toUpperCase() }));
        else if (type === AnnotationEditorParamsType.FREETEXT_COLOR && typeof value === "string") setColors((c) => ({ ...c, freetext: value.toUpperCase() }));
      }
      // A selected drawing shows its kind, arrow head and fill in the bar, ready to be changed.
      const picked = markupRef.current?.selectedShape();
      if (picked) {
        setDrawTool(picked.shape);
        if (picked.style) {
          setArrowStyle(picked.style.arrow);
          setArrowSize(picked.style.arrowSize);
          setFill(picked.style.fill);
        }
      }
    });
    eventBus.on("editingstateschanged", ({ details }: { details: { hasSomethingToUndo?: boolean } }) => {
      if (details.hasSomethingToUndo !== undefined) setCanUndo(details.hasSomethingToUndo);
    });
    eventBus.on("rotationchanging", ({ pagesRotation }: { pagesRotation: number }) => setRotation(pagesRotation));
    eventBus.on("updatefindmatchescount", ({ matchesCount }: { matchesCount: { current: number; total: number } }) =>
      setFind((f) => ({ ...f, ...matchesCount })),
    );
    eventBus.on(
      "updatefindcontrolstate",
      ({ state, matchesCount }: { state: number; matchesCount: { current: number; total: number } }) =>
        setFind({ ...matchesCount, state }),
    );
    eventBus.on("annotationeditormodechanged", ({ mode }: { mode: number }) => {
      // One-click highlights pass through highlight mode; the reader stays in Select.
      if (markupRef.current?.quickHighlighting) return;
      const entry = Object.entries(TOOL_MODES).find(([, m]) => m === mode);
      // The hand and Select share pdf.js's "no editor" mode.
      const next = mode === AnnotationEditorType.NONE && toolRef.current === "hand" ? "hand" : entry ? (entry[0] as Tool) : "select";
      setTool(next);
      // Apply the remembered colour once the editor layer for this mode is live. Not when an object was picked:
      // pdf.js would restyle it with the bar's settings.
      if (pickedRef.current || markupRef.current?.hasSelection) return;
      const param = COLOR_PARAM[next];
      const value = colorsRef.current[next];
      if (param && value) eventBus.dispatch("switchannotationeditorparams", { source: null, type: param, value });
      if (next === "ink") eventBus.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.INK_THICKNESS, value: inkWidthRef.current });
      if (next === "freetext") eventBus.dispatch("switchannotationeditorparams", { source: null, type: AnnotationEditorParamsType.FREETEXT_SIZE, value: textSizeRef.current });
    });

    // Ctrl/⌘ + wheel or trackpad pinch zooms around the cursor.
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      if (!viewer.pdfDocument) return;
      viewer.updateScale({
        drawingDelay: 300,
        scaleFactor: Math.exp(-e.deltaY / 300),
        origin: [e.clientX, e.clientY],
      });
    };
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => { stopDrawingPointer(); stopLabels(); container.removeEventListener("wheel", onWheel); };
  }, []);

  useEffect(() => {
    const viewer = viewerRef.current!;
    if (viewer.pagesCount) viewer.scrollMode = wheelPaging ? ScrollMode.PAGE : ScrollMode.VERTICAL;
    if (wheelPaging) return enableWheelPaging(containerRef.current!, viewer);
  }, [wheelPaging, doc]);

  // ── Opening documents ───────────────────────────────────────────────
  const beginOpen = useCallback(() => {
    opening.current?.abort();
    opening.current = new AbortController();
    setPending(null);
    setToast(null);
    return opening.current.signal;
  }, []);

  const openBytes = useCallback(
    async (name: string, data: Uint8Array, password?: string, signal = beginOpen(), initialPage?: number,
      edit?: { doc: OpenDoc; change: PdfChange }, exported?: OpenDoc, exportedOrder?: number[], filePath?: string) => {
      const revision = edit?.doc;
      const viewer = viewerRef.current!;
      setLoading(true);
      setError(null);
      let unattached: PDFDocumentProxy | undefined;
      try {
        const pdf = await loadPdf(data, signal, password);
        unattached = pdf;
        const id = await contentKey(data);
        signal.throwIfAborted();
        const existing = revision ? undefined : await getRecent(id);
        const historyAllowed = !password && data.byteLength <= MAX_RECENT_FILE_BYTES && (revision ? revision.historyAllowed :
          await pdf.getMetadata().then(({ info }) => !(info as { EncryptFilterName?: string }).EncryptFilterName).catch(() => false));
        const edits = edit && { original: edit.doc.edits?.original ?? (historyAllowed ? pdfBlob(await edit.doc.pdf.getData()) : undefined),
          changes: [...changesForCopy(edit.doc, edit.doc.pdf.annotationStorage.size > 0), edit.change] };
        signal.throwIfAborted();
        const previous = revision ?? exported;
        if (previous && docRef.current !== previous) return false;
        if (!revision && !tabs.opened(tabKey, id, name)) return false;
        const saved = previous ? readView(previous.id) ?? { page: pageRef.current, scale: viewer.currentScaleValue,
          rotation: viewer.pagesRotation, ...preferencesRef.current } : readView(id);
        restoreRef.current = initialPage && !previous ? null : saved;
        lastPageRef.current = Math.min(initialPage ?? saved?.page ?? existing?.lastPage ?? 1, pdf.numPages);
        pageRef.current = lastPageRef.current;
        if (saved) {
          setSidebar(saved.sidebar);
          setSpread(saved.spread);
          spreadRef.current = saved.spread;
          preferencesRef.current = { sidebar: saved.sidebar, spread: saved.spread };
        }

        const prev = docRef.current;
        const next: OpenDoc = { id, name, size: data.byteLength, pdf, password, sourceId: revision?.sourceId ?? revision?.id, historyAllowed, edits,
          path: filePath ?? revision?.path };
        docRef.current = next;
        // Password-protected documents aren't stored by Folio (same rule as Recent).
        const reading = previous ? markupRef.current!.state : undefined;
        if (reading?.bookmarkedPages && exportedOrder) {
          const bookmarks = new Set(reading.bookmarkedPages);
          reading.bookmarkedPages = exportedOrder.flatMap((n, i) => bookmarks.has(n) ? [i + 1] : []);
        }
        persistRef.current = !password && !revision;
        setCanUndo(false);
        void markupRef.current!.load(id, persistRef.current, reading);
        setNoteBox(null);
        setPinned(null);
        setAiContext(null);
        viewer.setDocument(pdf);
        unattached = undefined;
        linkRef.current!.setDocument(pdf, null);
        prev?.pdf.loadingTask.destroy();

        // Markup is saved automatically; only documents Folio can't store count as having unsaved changes.
        (pdf.annotationStorage as { onSetModified: unknown }).onSetModified = () => {
          if (docRef.current === next && !persistRef.current) setDirty(true);
        };
        (pdf.annotationStorage as { onResetModified: unknown }).onResetModified = () => {
          if (docRef.current === next) setDirty(false);
        };

        setDoc(next);
        if (!revision) { nextSelection.current = null; setContentEditing(false); }
        setEditorDirty(false);
        setPageDraft(draft => revision && draft ? { order: draft.order } : null);
        setNumPages(pdf.numPages);
        setPage(lastPageRef.current);
        setPageInput(String(lastPageRef.current));
        setRotation(revision ? saved?.rotation ?? 0 : 0);
        setDirty(false);
        setTool("select");
        setPending(null);
        setSearchOpen(false);
        setFind({ current: 0, total: 0, state: null });
        document.title = `${name} — Folio`;

        setLoading(false);
        // Password-protected documents stay out of Recent: it would keep their bytes and a page-1
        // thumbnail unprotected on disk. Very large files are skipped too — see MAX_RECENT_FILE_BYTES.
        if (!revision && !password && data.byteLength <= MAX_RECENT_FILE_BYTES) void (async () => {
          const thumb = existing?.thumb || (await thumbnailDataUrl(pdf).catch(() => ""));
          if (signal.aborted) return;
          await saveRecent({
            id,
            name,
            size: data.byteLength,
            pages: pdf.numPages,
            openedAt: Date.now(),
            lastPage: pageRef.current,
            thumb,
            data: pdfBlob(data),
            path: next.path,
          });
        })().catch(() => {});
        return true;
      } catch (err) {
        if (signal.aborted) return;
        const e = err as { name?: string; code?: number; message?: string };
        if (e?.name === "PasswordException") {
          setPending({ name, data, error: e.code === 2 ? t("Incorrect password. Try again.") : undefined });
        } else {
          tabs.failed(tabKey);
          setError(t("Couldn't open “{name}”. {reason}", { name, reason: e?.message ? t(e.message) : t("The file may be damaged.") }));
        }
      } finally {
        if (unattached) void unattached.loadingTask.destroy().catch(() => {});
        if (!signal.aborted) setLoading(false);
      }
    },
    [beginOpen, tabs, tabKey],
  );

  const openBlob = useCallback(async (name: string, blob: Blob, filePath?: string) => {
    const signal = beginOpen();
    setLoading(true);
    setError(null);
    try {
      const data = await readPdfBlob(blob, signal);
      if (!signal.aborted) await openBytes(name, data, undefined, signal, undefined, undefined, undefined, undefined, filePath);
    } catch (error) {
      if (!signal.aborted) {
        setLoading(false);
        tabs.failed(tabKey);
        setError(t("Couldn't open “{name}”. {reason}", { name, reason: t((error as Error).message) }));
        return false;
      }
    }
    return true;
  }, [beginOpen, openBytes, tabs, tabKey]);

  const openFiles = useCallback((files: FileList) => {
    tabs.open(Array.from(files, (file): OpenSource => {
      if (window.folioDesktop && /\.docx?$/i.test(file.name)) return { kind: "word", name: file.name, file };
      if (file.type && file.type !== "application/pdf" && !/\.pdf$/i.test(file.name))
        return { kind: "error", name: file.name, message: t("“{name}” isn't a PDF.", { name: file.name }) };
      return { kind: "blob", name: file.name, blob: file, path: window.folioDesktop?.pathForFile?.(file) };
    }));
  }, [tabs]);

  const pickFile = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = window.folioDesktop ? "application/pdf,.pdf,.doc,.docx" : "application/pdf,.pdf";
    input.onchange = () => { if (input.files?.length) openFiles(input.files); };
    input.click();
  }, [openFiles]);

  const openUrl = useCallback(
    async (url: string) => {
      const signal = beginOpen();
      const host = new URL(url).hostname;
      setLoading(true);
      setError(null);
      setToast(t("Opening {host}…", { host }));
      try {
        let file: { name: string; data: Uint8Array } | null;
        if (window.folioDesktop) {
          file = await window.folioDesktop.fetchPdf(url);
        } else {
          // The browser edition can only read links whose server allows cross-origin requests.
          const transfer = AbortSignal.any([signal, AbortSignal.timeout(60_000)]);
          const res = await fetch(url, { signal: transfer }).catch(() => {
            throw new Error(t("Couldn't download from {host}. The site may not allow it.", { host }));
          });
          const data = await readPdfResponse(res, transfer);
          const name = decodeURIComponent(new URL(res.url || url).pathname.split("/").filter(Boolean).pop() || host);
          file = { name: /\.pdf$/i.test(name) ? name : name + ".pdf", data };
        }
        if (signal.aborted) return;
        setToast(null);
        if (!file) { tabs.failed(tabKey); return setLoading(false); }
        await openBytes(file.name, file.data, undefined, signal);
      } catch (e: any) {
        if (signal.aborted) return;
        setToast(null);
        setLoading(false);
        tabs.failed(tabKey);
        setError(t("Couldn't open that link. {reason}", { reason: e?.message ? t(e.message) : "" }).trim());
      }
    },
    [beginOpen, openBytes, tabs, tabKey],
  );

  const openSample = useCallback(async () => {
    const signal = beginOpen();
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}sample.pdf`, { signal });
      const data = await readPdfResponse(res, signal);
      if (!signal.aborted) await openBytes("Folio sample.pdf", data, undefined, signal);
    } catch {
      if (!signal.aborted) { setLoading(false); tabs.failed(tabKey); setError(t("Couldn't open the sample document.")); }
    }
  }, [beginOpen, openBytes, tabs, tabKey]);

  // Remember where the reader left off.
  useEffect(() => {
    if (!doc) return;
    const saved = readView(doc.id);
    if (saved) writeView(doc.id, { ...saved, sidebar, spread });
  }, [doc, sidebar, spread]);
  useEffect(() => {
    if (!doc) return;
    const timer = window.setTimeout(() => void updateLastPage(doc.id, page), 600);
    return () => window.clearTimeout(timer);
  }, [doc, page]);

  // ── Actions ─────────────────────────────────────────────────────────
  const goTo = useCallback((n: number) => {
    const v = viewerRef.current!;
    if (!v.pdfDocument) return;
    v.currentPageNumber = Math.min(Math.max(1, n), v.pagesCount);
  }, []);
  const zoom = (steps: number) => {
    const v = viewerRef.current!;
    if (v.pdfDocument) v.updateScale({ steps, drawingDelay: 150, origin: undefined as unknown as number[] });
  };
  const setScaleValue = (value: string) => {
    const v = viewerRef.current!;
    if (v.pdfDocument) v.currentScaleValue = value;
  };
  const toggleSpread = () => {
    const v = viewerRef.current!;
    const next = !spread;
    setSpread(next);
    localStorage.setItem("folio:spread", next ? "1" : "0");
    if (!v.pdfDocument) return;
    const value = v.currentScaleValue;
    v.spreadMode = next ? SpreadMode.ODD : SpreadMode.NONE;
    // Re-fit so "fit width/page" accounts for two pages side by side.
    if (FIT_SCALES.includes(value)) v.currentScaleValue = value;
  };
  const rotate = () => {
    const v = viewerRef.current!;
    if (v.pdfDocument) v.pagesRotation = (v.pagesRotation + 90) % 360;
  };

  // An object picked with the Select tool: pdf.js edits it in its own mode until the reader clicks elsewhere.
  const pickedRef = useRef(false);
  const chooseToolRef = useRef<(next: Tool) => void>(() => {});
  const pickObject = (object: { mode: number; uid: number }) => {
    const v = viewerRef.current;
    if (!v?.pdfDocument) return;
    // Set first: the mode change below must not give the picked object the bar's style.
    pickedRef.current = true;
    try {
      v.annotationEditorMode = { mode: object.mode, editId: object.uid } as unknown as { mode: number };
    } catch { pickedRef.current = false; /* annotations unsupported in this document */ }
  };
  const pickObjectRef = useRef(pickObject);
  pickObjectRef.current = pickObject;
  const chooseTool = async (next: Tool, editContent = false) => {
    pickedRef.current = false;
    if (contentRef.current && !(await contentRef.current.finish())) return false;
    const v = viewerRef.current!;
    if (!v.pdfDocument) return false;
    try {
      const owner = v.pdfDocument;
      if (next !== "select") await v.firstPagePromise;
      if (v.pdfDocument !== owner) return false;
      const current = Number(v.annotationEditorMode);
      if (current !== TOOL_MODES[next] && !(next === "select" && current === AnnotationEditorType.DISABLE)) {
        v.annotationEditorMode = { mode: TOOL_MODES[next] };
      }
      nextSelection.current = null;
      setPinned(null);
      setTool(next); setContentEditing(editContent); return true;
    } catch { flash(t("Annotations aren’t supported for this document")); return false; }
  };
  const leaveEditMode = () => chooseTool("select");
  chooseToolRef.current = (next) => void chooseTool(next);
  // Clicking away from a picked object goes back to Select, instead of drawing or adding a text box there.
  useEffect(() => {
    const stage = container?.parentElement;
    if (!stage) return;
    const away = (e: PointerEvent) => {
      if (!pickedRef.current || e.button !== 0) return;
      const target = e.target as Element;
      if (!target.closest?.(".pdfViewer") || target.closest(".inkEditor, .freeTextEditor, .stampEditor, .signatureEditor, .editToolbar, .resizers")) return;
      e.preventDefault();
      e.stopPropagation();
      chooseToolRef.current("select");
    };
    stage.addEventListener("pointerdown", away, true);
    return () => stage.removeEventListener("pointerdown", away, true);
  }, [container]);
  const startSigning = async () => { if (await chooseTool("select")) setSigning(true); };

  useEffect(() => {
    if (!doc || tool !== "ink" || drawTool === "Pen") return;
    return drawShapes(containerRef.current!, viewerRef.current!, drawTool, colors.ink!, inkWidth, shapeStyle, (page, data) => {
      void markupRef.current!.addShape(page, drawTool, data, shapeStyle).catch(() => flash(t("Couldn't add the shape")));
    });
  }, [doc, tool, drawTool, colors.ink, inkWidth, shapeStyle, scale, rotation, flash]);

  const chooseColor = (hex: string) => {
    if (tool === "ink") markupRef.current?.endDrawing();
    // The palette sets the color for the next passage. pdf.js leaves the last highlight selected.
    if (tool === "highlight") markupRef.current?.clearEditorSelection();
    setColors((c) => ({ ...c, [tool]: hex }));
    const param = COLOR_PARAM[tool];
    if (param) busRef.current!.dispatch("switchannotationeditorparams", { source: null, type: param, value: hex });
  };

  // ── Highlights and notes ────────────────────────────────────────────
  const liveSelection = useTextSelection(container, !!doc && !contentEditing && tool === "select" && !signing && !noteBox, doc?.pdf);
  // Typing in the popover's note field clears the page selection, so the popover keeps its own copy.
  const selection = pinned ?? liveSelection;
  const highlightColor = colors.highlight ?? HIGHLIGHTS[0].hex;
  const toolRef = useRef(tool);
  toolRef.current = tool;
  const editingRef = useRef(contentEditing);
  editingRef.current = contentEditing;
  const handRef = useRef<ReturnType<typeof enableHandTool> | null>(null);
  useEffect(() => {
    if (!container) return;
    const hand = enableHandTool(container, () => toolRef.current === "hand",
      () => !!docRef.current && toolRef.current === "select" && !editingRef.current);
    handRef.current = hand;
    return () => { hand.stop(); handRef.current = null; };
  }, [container]);
  useEffect(() => handRef.current?.refresh(), [tool, contentEditing, container]);

  const quickHighlight = async (hex: string, note = "") => {
    const info = selection;
    if (!info) return;
    setColors((c) => ({ ...c, highlight: hex }));
    if (pinned) {
      const current = document.getSelection();
      current?.removeAllRanges();
      current?.addRange(info.range);
    }
    setPinned(null);
    const owner = docRef.current;
    const id = await markupRef.current!.highlightSelection(hex);
    if (owner !== docRef.current) return;
    if (!id) {
      flash(t("Couldn't highlight that selection"));
      return;
    }
    if (note) markupRef.current!.setNote(id, note);
  };

  const dismissSelection = () => {
    setPinned(null);
    document.getSelection()?.removeAllRanges();
  };

  // Clicking an existing highlight offers recolor, note, Ask AI, and one-click removal.
  useEffect(() => {
    if (!container) return;
    const onDown = () => setPinned(null);
    const onClick = (e: MouseEvent) => {
      if (toolRef.current !== "select" || e.button !== 0) return;
      const current = document.getSelection();
      if (current && !current.isCollapsed) return;
      if ((e.target as HTMLElement).closest("a, .annotationCommentButton, .folio-content-layer")) return;
      const hit = markupRef.current?.markAt(e.clientX, e.clientY);
      if (!hit) {
        // Drawings, text boxes and signatures can be selected too: to move, resize, restyle or delete them.
        const object = markupRef.current?.objectAt(e.clientX, e.clientY);
        if (object) pickObjectRef.current(object);
        return setHighlightMenu(null);
      }
      const stage = container.parentElement!.getBoundingClientRect();
      setHighlightMenu({ id: hit.id, rect: { left: hit.rect.left - stage.left, right: hit.rect.right - stage.left,
        top: hit.rect.top - stage.top, bottom: hit.rect.bottom - stage.top } });
    };
    const onScroll = () => setHighlightMenu(null);
    container.addEventListener("pointerdown", onDown);
    container.addEventListener("click", onClick);
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("pointerdown", onDown);
      container.removeEventListener("click", onClick);
      container.removeEventListener("scroll", onScroll);
    };
  }, [container]);
  useEffect(() => setHighlightMenu(null), [doc, scale, tool]);

  const menuMark = highlightMenu ? markup.marks.find((m) => m.id === highlightMenu.id) : undefined;

  const removeHighlight = (id: string) => {
    markupRef.current!.remove(id);
    setHighlightMenu(null);
    flash(t("Highlight removed"));
  };

  const askAbout = (text: string, pageNumber: number) => {
    setAiContext({ text, page: pageNumber });
    setAiOpen(true);
    setHistoryOpen(false);
    document.getSelection()?.removeAllRanges();
  };

  useEffect(() => setContainer(containerRef.current), []);
  // Panels and focus mode change the space the page has: re-fit "auto"/"fit" zoom once they finish sliding.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const v = viewerRef.current;
      if (v?.pdfDocument && FIT_SCALES.includes(v.currentScaleValue)) v.currentScaleValue = v.currentScaleValue;
    }, 280);
    return () => window.clearTimeout(timer);
  }, [aiOpen, sidebar, sidebarTab, focus]);
  useEffect(() => {
    const stage = container?.parentElement;
    if (!stage) return;
    const observer = new ResizeObserver(() => setStageWidth(stage.clientWidth));
    observer.observe(stage);
    return () => observer.disconnect();
  }, [container]);

  // pdf.js shows a small note button on highlights that have a note; open Folio's note box from it.
  useEffect(() => {
    if (!container) return;
    const onClick = (e: MouseEvent) => {
      const button = (e.target as HTMLElement).closest(".annotationCommentButton");
      const editorDiv = button?.parentElement?.closest<HTMLElement>("[id]");
      const markId = editorDiv && markupRef.current?.markForEditorId(editorDiv.id);
      if (!button || !markId) return;
      e.preventDefault();
      e.stopPropagation();
      const mark = markupRef.current!.state.marks.find((m) => m.id === markId);
      const stage = container.parentElement!.getBoundingClientRect();
      const r = button.getBoundingClientRect();
      setNoteBox({ markId, anchor: { x: r.left + r.width / 2 - stage.left, top: r.top - stage.top, bottom: r.bottom - stage.top },
        quote: mark?.text ?? "", initial: mark?.note ?? "" });
    };
    container.addEventListener("click", onClick, true);
    return () => container.removeEventListener("click", onClick, true);
  }, [container]);

  // Save notes and highlights before the window goes away.
  useEffect(() => {
    const flush = () => { markupRef.current?.sync(); markupRef.current?.flush(); };
    window.addEventListener("pagehide", flush);
    return () => window.removeEventListener("pagehide", flush);
  }, []);

  const currentBytes = async (doc = docRef.current, order = pageOrder) => {
    if (!doc || exporting.current === doc.pdf) return null;
    exporting.current = doc.pdf;
    const signal = opening.current!.signal;
    // Marks on pages that haven't been drawn yet aren't in pdf.js's annotation storage; add them for this copy only.
    // (pdf.js saves only entries keyed with its editor prefix.)
    const storage = doc.pdf.annotationStorage;
    const keys: string[] = [];
    try {
      const unrendered = await markupRef.current!.unrenderedMarks(doc.pdf);
      for (const data of unrendered) {
        const key = `pdfjs_internal_editor_folio-unrendered-${keys.length}`;
        storage.setValue(key, data);
        keys.push(key);
      }
      const annotated = storage.size > 0;
      if (order?.length) return { bytes: await reorderPdf(doc.pdf, order, signal, doc.password), annotated };
      return { bytes: annotated ? await doc.pdf.saveDocument() : await doc.pdf.getData(), annotated };
    } finally {
      for (const key of keys) storage.remove(key);
      if (exporting.current === doc.pdf) exporting.current = null;
    }
  };

  const copyName = pageOrder && doc ? t("{name} (reordered).pdf", { name: doc.name.replace(/\.pdf$/i, "") }) : doc?.name ?? "document.pdf";
  const saveBytes = (bytes: Uint8Array) => {
    saveBlob(pdfBlob(bytes), copyName.toLowerCase().endsWith(".pdf") ? copyName : `${copyName}.pdf`);
  };

  const exportNotes = async (format: "markdown" | "json") => {
    if (!doc) return;
    const controller = markupRef.current!;
    controller.sync();
    try {
      if (format === "markdown") {
        const ok = await copyText(notesMarkdown(doc.name, controller.state));
        if (docRef.current === doc) flash(ok ? t("Markdown copied") : t("Copy failed"));
      } else {
        const json = await notesJson(doc, controller.state);
        if (docRef.current === doc) saveBlob(new Blob([json], { type: "application/json" }), doc.name.replace(/\.pdf$/i, "") + ".notes.json");
      }
    } catch {
      if (docRef.current === doc) flash(t("Couldn't export notes"));
    }
  };

  const download = async () => {
    if (contentRef.current && !(await contentRef.current.finish())) return;
    const doc = docRef.current;
    if (!doc || savingCopy.current) return;
    savingCopy.current = true;
    try {
      const copy = await currentBytes();
      if (!copy || docRef.current !== doc) return;
      const name = doc.sourceId ? t("{name} (edited).pdf", { name: copyName.replace(/\.pdf$/i, "") }) : copyName;
      const blob = pdfBlob(copy.bytes);
      saveBlob(blob, /\.pdf$/i.test(name) ? name : name + ".pdf");
      const changes = changesForCopy(doc, copy.annotated, pageOrder);
      let historyMessage = "";
      if (changes.length && doc.historyAllowed && blob.size <= MAX_RECENT_FILE_BYTES) {
        try {
          const original = doc.edits?.original ?? pdfBlob(await doc.pdf.getData());
          await saveVersion({ id: doc.sourceId ?? doc.id, name: doc.name, data: original },
            { id: await contentKey(copy.bytes), name, data: blob }, changes);
        } catch { historyMessage = t("Copy exported. Couldn’t save its version history on this device."); }
      } else if (changes.length) {
        historyMessage = t("Copy exported. History is available for unencrypted PDFs up to 50 MB.");
      }
      if (docRef.current !== doc) return;
      setError(null);
      if (doc.sourceId) {
        await openBytes(name, copy.bytes, undefined, beginOpen(), pageOrder ? pageOrder.indexOf(pageRef.current) + 1 : pageRef.current, undefined, doc, pageOrder);
      } else if (pageOrder) {
        setPageDraft(draft => draft?.order === pageOrder ? { order: pageOrder, copy: copy.bytes } : draft);
        flash(t("Downloading reordered copy"));
      } else {
        flash(copy.annotated ? t("Saved a copy with your highlights and notes") : t("Download started"));
      }
      if (historyMessage) flash(historyMessage);
    } catch {
      if (docRef.current === doc) {
        if (dirty) setDirty(true);
        setError(t("Couldn't save a copy of this document."));
      }
    } finally { savingCopy.current = false; }
  };

  /**
   * Saves the document: back over the file it was opened from, or, when it has none (opened from a link, a converted
   * Word file, a document from Recent whose file changed), to a file chosen with Save as…. Resolves to whether it was
   * saved. Password-protected documents and the browser edition save a copy instead.
   */
  const save = async (): Promise<boolean> => {
    const desktop = window.folioDesktop;
    const opened = docRef.current;
    if (!opened || !desktop?.saveFile || !desktop.saveFileAs || opened.password) { await download(); return false; }
    if (contentRef.current && !(await contentRef.current.finish())) return false;
    const doc = docRef.current;
    if (!doc || savingCopy.current) return false;
    savingCopy.current = true;
    try {
      const copy = await currentBytes();
      if (!copy || docRef.current !== doc) return false;
      const changes = changesForCopy(doc, copy.annotated, pageOrder);
      if (doc.path && !changes.length && !doc.sourceId) { flash(t("No changes to save")); return true; }
      const blob = pdfBlob(copy.bytes);
      let historyMessage = "";
      // Keep the version being replaced in version history, so an overwrite can be undone.
      if (changes.length && doc.historyAllowed && blob.size <= MAX_RECENT_FILE_BYTES) {
        try {
          const original = doc.edits?.original ?? pdfBlob(await doc.pdf.getData());
          await saveVersion({ id: doc.sourceId ?? doc.id, name: doc.name, data: original },
            { id: await contentKey(copy.bytes), name: doc.name, data: blob }, changes);
        } catch { historyMessage = t("Saved. Couldn’t keep the previous version in version history."); }
      }
      let path = doc.path;
      if (path) await desktop.saveFile(path, copy.bytes);
      else {
        path = (await desktop.saveFileAs(doc.name, copy.bytes)) ?? undefined;
        if (!path) return false;
      }
      if (docRef.current !== doc) return true;
      const name = path.split(/[\\/]/).pop() || doc.name;
      setError(null);
      await openBytes(name, copy.bytes, undefined, beginOpen(), pageOrder ? pageOrder.indexOf(pageRef.current) + 1 : pageRef.current,
        undefined, doc, pageOrder, path);
      flash(historyMessage || t("Saved {name}", { name }));
      return true;
    } catch (error) {
      if (docRef.current === doc) {
        if (dirty) setDirty(true);
        const reason = (error as Error)?.message?.replace(/^Error invoking remote method '[^']+': (Error: )?/, "") ?? "";
        setError(t("Couldn't save “{name}”. {reason}", { name: doc.name, reason: reason && t(reason) }).trim());
      }
      return false;
    } finally { savingCopy.current = false; }
  };
  saveRef.current = save;

  const print = async () => {
    if (contentRef.current && !(await contentRef.current.finish())) return;
    const doc = docRef.current;
    // pdf.js marks the document as saved once it has written the bytes, but printing saves nothing.
    let copy: Awaited<ReturnType<typeof currentBytes>>;
    try {
      copy = await currentBytes();
    } catch {
      if (docRef.current === doc) setError(t("Couldn't print this document."));
      return;
    } finally {
      if (dirty && docRef.current === doc) setDirty(true);
    }
    if (!copy || docRef.current !== doc) return;
    const { bytes } = copy;
    const url = URL.createObjectURL(pdfBlob(bytes));
    const frame = document.createElement("iframe");
    frame.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
    frame.src = url;
    frame.onload = () => {
      setTimeout(() => {
        try {
          frame.contentWindow?.focus();
          frame.contentWindow?.print();
        } catch {
          // The desktop shell denies blob: pop-ups, so a saved copy is the working fallback there.
          if (window.folioDesktop) { saveBytes(bytes); flash(t("Couldn't print — saved a copy instead")); }
          else window.open(url, "_blank");
        }
      }, 250);
    };
    document.body.appendChild(frame);
    setTimeout(() => {
      frame.remove();
      URL.revokeObjectURL(url);
    }, 60_000);
  };

  useEffect(() => {
    const open = async (source: OpenSource) => {
      switch (source.kind) {
        case "bytes":
          await openBytes(source.name, new Uint8Array(source.data.buffer, source.data.byteOffset, source.data.byteLength), source.password,
            undefined, undefined, undefined, undefined, undefined, source.path);
          if (source.note && docRef.current?.name === source.name) flash(t(source.note));
          break;
        case "blob": {
          // A file remembered in Recent is only written back to while it still holds exactly this document.
          const path = source.path && source.recentId
            ? (await window.folioDesktop?.verifyFile?.(source.path, source.recentId).catch(() => false) ? source.path : undefined)
            : source.path;
          if (!await openBlob(source.name, source.blob, path) && source.recentId) void removeRecent(source.recentId);
          break;
        }
        case "word": {
          const signal = beginOpen();
          setLoading(true); setError(null); setToast(t("Converting {name} to PDF…", { name: source.name }));
          try {
            const file = await window.folioDesktop!.openDocument(source.file);
            if (signal.aborted) return;
            setToast(null);
            await openBytes(file.name, new Uint8Array(file.data), undefined, signal);
            if (file.note && docRef.current?.name === file.name) flash(t(file.note));
          } catch (error) {
            if (signal.aborted) return;
            setToast(null); setLoading(false); tabs.failed(tabKey);
            setError(t("Couldn't convert “{name}” to PDF. {reason}", { name: source.name, reason: t((error as Error).message) }));
          }
          break;
        }
        case "sample": await openSample(); break;
        case "url": await openUrl(source.url); break;
        case "converting": setLoading(true); setToast(t("Converting {name} to PDF…", { name: source.name })); break;
        case "error": setLoading(false); setToast(null); setError(t(source.message)); tabs.failed(tabKey); break;
      }
    };
    tabs.bind(tabKey, { open: source => { void open(source); }, save: () => saveRef.current(), flush: async () => {
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      markupRef.current?.sync();
      await markupRef.current?.flush();
      opening.current?.abort();
    } });
  }, [tabs, tabKey, openBytes, openBlob, openSample, openUrl, beginOpen, flash]);
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === "folio:theme" && (event.newValue === "light" || event.newValue === "dark")) {
        document.documentElement.dataset.theme = event.newValue; setTheme(event.newValue);
      }
      if (event.key === "folio:night") setNight(event.newValue === "1");
      if (event.key === "folio:wheel-paging") setWheelPaging(event.newValue === "1");
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => { if (active) window.folioDesktop?.setTheme(theme); }, [active, theme]);
  // The update banner appears once a new version has been downloaded (the status reports that right away too).
  useEffect(() => window.folioDesktop?.onUpdateStatus((status) => {
    if (status.state === "ready" && status.version) setUpdateVersion(status.version);
  }), []);

  const setThemeTo = (next: "light" | "dark") => {
    document.documentElement.dataset.theme = next;
    localStorage.setItem("folio:theme", next);
    setTheme(next);
  };

  const toggleFocusRef = useRef<() => Promise<void> | void>(() => {});
  const toggleFocus = async () => {
    const next = !focus;
    if (next && contentEditing) leaveEditMode();
    setFocus(next);
    // Document tabs are iframes, where the browser's fullscreen request doesn't reach the desktop window.
    if (window.folioDesktop?.setFullScreen) return window.folioDesktop.setFullScreen(next);
    try {
      if (next && !document.fullscreenElement) await document.documentElement.requestFullscreen();
      if (!next && document.fullscreenElement) await document.exitFullscreen();
    } catch {
      /* fullscreen can be refused; full-screen mode still hides the chrome */
    }
  };
  toggleFocusRef.current = toggleFocus;

  useEffect(() => {
    // Leaving full screen another way (F11, the system) leaves the full-screen view too.
    const stopDesktop = window.folioDesktop?.onFullScreenChange?.((on) => { if (!on) setFocus(false); });
    if (stopDesktop) return stopDesktop;
    const onFs = () => !document.fullscreenElement && setFocus(false);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  // In full screen the controls are hidden; right-click offers the way out (besides Esc and F).
  const focusRef = useRef(focus);
  focusRef.current = focus;
  useEffect(() => {
    const onMenu = (event: MouseEvent) => {
      if (!focusRef.current || (event.target as Element).closest?.("input, textarea, [contenteditable]")) return;
      event.preventDefault();
      const ask = window.folioDesktop?.contextMenu;
      if (ask) void ask([t("Exit full screen")]).then((choice) => { if (choice === 0 && focusRef.current) void toggleFocusRef.current(); });
      else void toggleFocusRef.current();
    };
    window.addEventListener("contextmenu", onMenu);
    return () => window.removeEventListener("contextmenu", onMenu);
  }, []);

  useEffect(() => localStorage.setItem("folio:sidebar", sidebar ? "1" : "0"), [sidebar]);
  const setNightTo = (next: boolean) => {
    try { localStorage.setItem("folio:night", next ? "1" : "0"); }
    catch { flash(t("PDF dark mode changed, but couldn't save the preference.")); }
    setNight(next);
  };

  // ── Keyboard shortcuts ──────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (tabs.active !== tabKey) return;
      const mod = e.ctrlKey || e.metaKey;
      if (mod && !e.altKey && !e.shiftKey && e.key.toLowerCase() === "t") {
        e.preventDefault(); tabs.library(); return;
      }
      if (mod && !e.altKey && !e.shiftKey && e.key.toLowerCase() === "w") {
        e.preventDefault(); void tabs.close(tabKey); return;
      }
      if (e.ctrlKey && e.key === "Tab") {
        e.preventDefault(); tabs.cycle(e.shiftKey ? -1 : 1); return;
      }
      if (signing) return;
      const target = e.target as HTMLElement;
      const typing = target.closest("input, textarea, select, [contenteditable=true], .freeTextEditor");

      if (mod && e.key === ",") {
        e.preventDefault();
        setDialog("settings");
        return;
      }
      if (mod && e.key.toLowerCase() === "o") {
        e.preventDefault();
        if (e.shiftKey) openUrlDialog();
        else pickFile();
        return;
      }
      if (!docRef.current) return;

      if (mod && !typing && Number(viewerRef.current?.annotationEditorMode) === AnnotationEditorType.NONE
        && (e.key.toLowerCase() === "z" || e.key.toLowerCase() === "y")) {
        e.preventDefault();
        busRef.current?.dispatch("editingaction", { source: null, name: e.shiftKey || e.key.toLowerCase() === "y" ? "redo" : "undo" });
      } else if (mod && e.key.toLowerCase() === "f") {
        e.preventDefault();
        setSearchOpen(true);
        requestAnimationFrame(() => document.getElementById("folio-search")?.focus());
      } else if (mod && e.key.toLowerCase() === "s") {
        e.preventDefault();
        void (e.shiftKey ? download() : save());
      } else if (mod && e.key.toLowerCase() === "p") {
        e.preventDefault();
        print();
      } else if (mod && (e.key === "=" || e.key === "+")) {
        e.preventDefault();
        zoom(1);
      } else if (mod && e.key === "-") {
        e.preventDefault();
        zoom(-1);
      } else if (mod && e.key === "0") {
        e.preventDefault();
        setScaleValue("auto");
      } else if (mod && e.key === "\\") {
        e.preventDefault();
        setSidebar((s) => !s);
      } else if (typing || mod || e.altKey) {
        return;
      } else if (selection && tool === "select" && /^h$/i.test(e.key)) {
        e.preventDefault();
        void quickHighlight(highlightColor);
      } else if (selection && tool === "select" && /^n$/i.test(e.key)) {
        e.preventDefault();
        document.querySelector<HTMLInputElement>(".pop-note")?.focus();
      } else if (highlightMenu && (e.key === "Delete" || e.key === "Backspace")) {
        e.preventDefault();
        removeHighlight(highlightMenu.id);
      } else if (e.key === "Escape") {
        if (highlightMenu) setHighlightMenu(null);
        else if (noteBox) setNoteBox(null);
        // Each dialog's Modal closes itself on Escape (the changelog goes back to Settings); closing here too would override it.
        else if (dialog) return;
        else if (searchOpen) setSearchOpen(false);
        else if (contentRef.current?.deselect()) return;
        else if (contentEditing || tool !== "select") void leaveEditMode();
        else if (focus) toggleFocus();
      } else if (e.key === "f" || e.key === "F") {
        toggleFocus();
      } else if (e.key === "?") {
        setDialog("shortcuts");
      } else if (e.key === "2") {
        toggleSpread();
      } else if (e.key === "r" || e.key === "R") {
        rotate();
      } else {
        const match = TOOLS.find((item) => item.key.toLowerCase() === e.key.toLowerCase());
        if (match && !dialog && !pending) {
          if (focus && match.id !== "select" && match.id !== "hand") void toggleFocus();
          chooseTool(match.id);
        }
        else if (e.key === "Home") goTo(1);
        else if (e.key === "End") goTo(numPages);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // ── Drag & drop anywhere ────────────────────────────────────────────
  useEffect(() => {
    let depth = 0;
    let internal = false; // dragging text or images from inside Folio isn't an "open" gesture
    const hasFiles = (e: DragEvent) => {
      const types = e.dataTransfer?.types ?? [];
      return !internal && (types.includes("Files") || types.includes("text/uri-list") || types.includes("text/plain"));
    };
    const droppedUrl = (data: DataTransfer) => {
      const fromList = data.getData("text/uri-list").split(/\r?\n/).find((line) => line.trim() && !line.startsWith("#"));
      return parseWebUrl(fromList) ?? parseWebUrl(data.getData("text/plain"));
    };
    const start = () => (internal = true);
    const end = () => (internal = false);
    const enter = (e: DragEvent) => {
      if (!hasFiles(e)) return;
      e.preventDefault();
      depth++;
      setDragging(true);
    };
    const leave = (e: DragEvent) => {
      if (!hasFiles(e)) return;
      if (--depth <= 0) {
        depth = 0;
        setDragging(false);
      }
    };
    const over = (e: DragEvent) => hasFiles(e) && e.preventDefault();
    const drop = (e: DragEvent) => {
      if (!hasFiles(e)) return;
      e.preventDefault();
      depth = 0;
      setDragging(false);
      const files = e.dataTransfer?.files;
      const url = !files?.length && e.dataTransfer ? droppedUrl(e.dataTransfer) : null;
      if (files?.length) openFiles(files);
      else if (url) openUrlDialog(url);
      else setError(t("Drop a PDF file or a link to a PDF."));
    };
    // Pasting a link (outside text fields) fills in Open from URL too.
    const paste = (e: ClipboardEvent) => {
      if (signing || (e.target as HTMLElement | null)?.closest?.("input, textarea, [contenteditable=true], .freeTextEditor")) return;
      const url = parseWebUrl(e.clipboardData?.getData("text/plain"));
      if (!url) return;
      e.preventDefault();
      openUrlDialog(url);
    };
    window.addEventListener("dragstart", start);
    window.addEventListener("dragend", end);
    window.addEventListener("paste", paste);
    window.addEventListener("dragenter", enter);
    window.addEventListener("dragleave", leave);
    window.addEventListener("dragover", over);
    window.addEventListener("drop", drop);
    return () => {
      window.removeEventListener("dragstart", start);
      window.removeEventListener("dragend", end);
      window.removeEventListener("paste", paste);
      window.removeEventListener("dragenter", enter);
      window.removeEventListener("dragleave", leave);
      window.removeEventListener("dragover", over);
      window.removeEventListener("drop", drop);
    };
  }, [openFiles, signing]);

  const runFind = (query: string, opts: { again?: boolean; previous?: boolean; caseSensitive?: boolean; entireWord?: boolean }) =>
    busRef.current!.dispatch("find", {
      source: null,
      type: opts.again ? "again" : "",
      query,
      caseSensitive: !!opts.caseSensitive,
      entireWord: !!opts.entireWord,
      highlightAll: true,
      findPrevious: !!opts.previous,
      matchDiacritics: false,
    });

  const closeSearch = () => {
    setSearchOpen(false);
    busRef.current!.dispatch("findbarclose", { source: null });
  };

  return (
    <div
      className="app"
      data-focus={focus || undefined}
      data-sidebar={(sidebar && !!doc && !focus) || undefined}
      data-night={night || undefined}
      data-content-edit={contentEditing || undefined}
      data-tool={tool}
    >
      <header className="topbar" ref={headerRef}>
        <div className="topbar-left">
          <button className="brand" onClick={doc ? () => tabs.library() : undefined} title={doc ? t("Back to library") : "Folio"}>
            <span className="brand-mark" />
            <span className="brand-name">Folio</span>
          </button>
          {doc && (
            <>
              <IconButton icon="sidebar" className="sidebar-toggle" label={keys(t("Toggle sidebar (Ctrl+\\)"))} active={sidebar} onClick={() => setSidebar(!sidebar)} />
              {!multipleTabs && <div className="doc-title" title={doc.name}>
                <span>{doc.name}</span>
                {unsaved && <span className="dirty-dot" role="img" aria-label={t("Unsaved changes")} title={t("Unsaved changes")} />}
              </div>}
            </>
          )}
        </div>

        <div className="topbar-center">
          {doc && (
            <div className="segmented" role="toolbar" aria-label={t("Tools")}>
              {TOOLS.map((item) => (
                <button
                  key={item.id}
                  className={!contentEditing && tool === item.id ? "on" : ""}
                  aria-label={t(item.label)}
                  aria-pressed={!contentEditing && tool === item.id}
                  onClick={() => chooseTool(item.id)}
                  title={item.id === "hand" ? t("Hand: drag to move the page (hold Space)")
                    : `${item.id === "highlight" ? t("Automatically highlight selected text") : t(item.label)} (${item.key})`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{t(item.label)}</span>
                </button>
              ))}
              <button onClick={startSigning} aria-label={t("Sign")} title={t("Add a signature")}><Icon name="signature" size={16} /><span>{t("Sign")}</span></button>
              <button className={contentEditing ? "on edit-mode-toggle" : "edit-mode-toggle"} aria-pressed={contentEditing}
                aria-label={contentEditing ? t("Exit edit mode") : t("Edit mode")} title={contentEditing ? t("Exit edit mode") : t("Edit existing text and images")}
                onClick={() => contentEditing ? leaveEditMode() : chooseTool("select", true)}>
                <Icon name={contentEditing ? "check" : "edit"} size={16} /><span>{contentEditing ? t("Exit edit mode") : t("Edit mode")}</span>
              </button>
              {unsaved && canSave && <button aria-label={t("Save")} title={keys(t("Save changes to {name} (Ctrl+S)", { name: doc.name }))} onClick={() => void save()}><Icon name="save" size={16} /><span>{t("Save")}</span></button>}
              {(doc.sourceId || editorDirty) && <button aria-label={t("Save copy")} title={keys(t("Save edited copy (Ctrl+Shift+S)"))} onClick={download}><Icon name="download" size={16} /><span>{t("Save copy")}</span></button>}
            </div>
          )}
        </div>

        <div className="topbar-right">
          {doc && (
            <>
              {/* Brings back the hidden page and zoom controls, without covering the page. */}
              {canUndo && !contentEditing && <IconButton icon="undo" label={keys(t("Undo (Ctrl+Z)"))}
                onClick={() => busRef.current!.dispatch("editingaction", { source: null, name: "undo" })} />}
              {pillHidden && !focus && <IconButton icon="controls" label={t("Show the controls")} onClick={() => hidePill(false)} />}
              <IconButton icon="sparkle" label={t("Ask AI")} active={aiOpen} onClick={() => { setHistoryOpen(false); setAiOpen(!aiOpen); }} />
              <IconButton icon="search" label={keys(t("Search (Ctrl+F)"))} active={searchOpen} onClick={() => (searchOpen ? closeSearch() : setSearchOpen(true))} />
            </>
          )}
          <MoreMenu
            items={[
              ...(doc
                ? ([
                    { kind: "action", icon: "plus", label: t("New tab"), shortcut: keys("Ctrl T"), onSelect: () => tabs.library() },
                    { kind: "action", icon: "close", label: t("Close document"), shortcut: keys("Ctrl W"), onSelect: () => void tabs.close(tabKey) },
                    { kind: "divider" },
                    ...(canSave ? [{ kind: "action", icon: "save", label: t(doc.path ? "Save" : "Save as…"), shortcut: keys("Ctrl S"), onSelect: () => void save() }] : []),
                    { kind: "action", icon: "download", label: t("Save a copy"), shortcut: keys(canSave ? "Ctrl Shift S" : "Ctrl S"), onSelect: download },
                    { kind: "action", icon: "history", label: t("Version history"), onSelect: () => { setAiOpen(false); setHistoryOpen(true); } },
                    { kind: "action", icon: "print", label: t("Print"), shortcut: keys("Ctrl P"), onSelect: print },
                    { kind: "action", icon: "info", label: t("Document info"), onSelect: () => setDialog("info") },
                    { kind: "divider" },
                    { kind: "toggle", icon: "moon", label: t("PDF dark mode"), checked: night, onSelect: () => setNightTo(!night) },
                    { kind: "action", icon: "expand", label: t("Full screen"), shortcut: "F", onSelect: toggleFocus },
                    { kind: "toggle", icon: "list", label: t("Page and zoom controls"), checked: !pillHidden, onSelect: () => hidePill(!pillHidden) },
                  ] as MoreItem[])
                : []),
              { kind: "action", icon: "settings", label: t("Settings"), shortcut: keys("Ctrl ,"), onSelect: () => setDialog("settings") },
              { kind: "action", icon: "keyboard", label: t("Keyboard shortcuts"), shortcut: "?", onSelect: () => setDialog("shortcuts") },
              { kind: "action", icon: "info", label: t("About Folio"), onSelect: () => setDialog("about") },
            ]}
          />
        </div>
      </header>
      {!focus && multipleTabs && <DocumentTabBar tabs={tabs} tabKey={tabKey} />}

      <div className="body" id="reader-panel" role={!focus && multipleTabs ? "tabpanel" : undefined}
        aria-labelledby={!focus && multipleTabs ? "selected-document-tab" : undefined}>
        {doc && (
          <Sidebar
            key={doc.pdf.loadingTask.docId}
            pdf={doc.pdf}
            page={page}
            rotation={rotation}
            onSelectPage={goTo}
            bookmarkedPages={markup.bookmarkedPages}
            onToggleBookmark={n => markupRef.current!.toggleBookmark(n)}
            order={pageDraft?.order ?? null}
            onOrder={order => setPageDraft(order ? { order } : null)}
            onSaveOrder={download}
            onOpenCopy={pageDraft?.copy ? () => {
              tabs.open([{ kind: "bytes", name: copyName, data: pageDraft.copy!, password: doc.password }]);
            } : undefined}
            onSelectDest={(dest) => linkRef.current!.goToDestination(dest as string)}
            tab={sidebarTab}
            onTab={setSidebarTab}
            noteCount={markup.marks.filter((m) => m.type === "highlight").length}
            notes={
              <NotesPanel
                state={markup}
                onExport={exportNotes}
                persisted={persistRef.current}
                onReveal={(id) => markupRef.current!.reveal(id)}
                onNote={(id, note) => markupRef.current!.setNote(id, note)}
                onRemove={(id) => markupRef.current!.remove(id)}
                onDocNote={(note) => markupRef.current!.setDocNote(note)}
                onAsk={(mark: Mark) => askAbout(mark.text, mark.page + 1)}
              />
            }
          />
        )}

        <main className="stage">
          <div ref={containerRef} className="viewer-container" tabIndex={-1}
            onInput={event => {
              // Form values live in the PDF until a copy is saved. Folio only auto-saves its own markup.
              if ((event.target as HTMLElement).closest(".annotationLayer :is(input, textarea, select)")) setDirty(true);
            }}>
            <div ref={innerRef} className="pdfViewer" />
          </div>
          {contentEditing && doc && <ContentEditor key={doc.pdf.loadingTask.docId} ref={contentRef} nextSelection={nextSelection} pdf={doc.pdf} viewer={viewerRef.current!} bus={busRef.current!}
            onDirty={setEditorDirty} snapshot={async () => {
              if (doc.password || await doc.pdf.getPermissions() || (await doc.pdf.getSignatures())?.length) throw new Error(t("Editing requires an unsigned, unencrypted PDF."));
              try {
                const copy = await currentBytes(doc, []);
                if (!copy || docRef.current !== doc) throw new Error(t("The document changed. Try again."));
                return copy.bytes;
              } finally { if (dirty && docRef.current === doc) setDirty(true); }
            }} apply={async (bytes, change) => docRef.current === doc && !!await openBytes(doc.name, bytes, undefined, opening.current!.signal, undefined, { doc, change })} />}
          {doc && <div className="page-text-status" role="status">{textStatus}</div>}

          {doc && searchOpen && (
            <>
              <SearchBar result={find} onFind={runFind} onClose={closeSearch} />
              <SearchResults pdf={doc.pdf} controller={findRef.current!} bus={busRef.current!} onSelect={goTo} />
            </>
          )}

          {doc && !contentEditing && PALETTE[tool] && (
            <div className="color-pill" role="toolbar" aria-label={t("Annotation options")}>
              <div className="pill-rows">
              {(tool === "ink" || tool === "freetext") && (
              <div className="pill-row">
              {tool === "ink" && (
                <select className="draw-tool" aria-label={t("Drawing tool")} title={t("Hold Ctrl for a square, a circle or lines at 45°")} value={drawTool}
                  onChange={e => { markupRef.current?.endDrawing(); setDrawTool(e.target.value as typeof drawTool); }}>
                  {["Pen", "Line", "Rectangle", "Oval", "Arrow"].map(name => <option key={name} value={name}>{t(name)}</option>)}
                </select>
              )}
              {tool === "ink" && drawTool === "Arrow" && (
                <select className="draw-tool" aria-label={t("Arrow style")} title={t("Arrow style")} value={arrowStyle}
                  onChange={e => chooseArrowStyle(e.target.value as ArrowStyle)}>
                  <option value="open">{"→ " + t("Open arrow")}</option>
                  <option value="filled">{"➞ " + t("Filled arrow")}</option>
                  <option value="double">{"↔ " + t("Double arrow")}</option>
                </select>
              )}
              {tool === "ink" && drawTool === "Arrow" && (
                <label className="arrow-size" title={t("Arrow size")}>
                  <Icon name="arrowHead" size={14} />
                  <input type="range" min="0.5" max="3" step="0.25" value={arrowSize} aria-label={t("Arrow size")}
                    onChange={e => chooseArrowSize(Number(e.target.value))} />
                </label>
              )}
              {tool === "ink" && drawTool !== "Pen" && fills(drawTool) && (
                <select className="draw-tool" aria-label={t("Fill")} title={t("Fill")} value={fill}
                  onChange={e => chooseFill(e.target.value as Fill)}>
                  <option value="none">{"○ " + t("No fill")}</option>
                  <option value="solid">{"● " + t("Solid fill")}</option>
                  <option value="translucent">{"◍ " + t("See-through fill")}</option>
                </select>
              )}
              {tool === "freetext" && (
                <select className="draw-tool" aria-label={t("Text size")} title={t("Text size")} value={textSize}
                  onChange={e => chooseTextSize(Number(e.target.value))}>
                  {TEXT_SIZES.map(size => <option key={size} value={size}>{size} pt</option>)}
                </select>
              )}
              </div>
              )}
              <div className="pill-row">
              {tool === "ink" && (
                <div className="ink-widths" role="radiogroup" aria-label={t("Line thickness")}>
                  {INK_WIDTHS.map((width) => (
                    <button key={width} role="radio" aria-checked={inkWidth === width} className={inkWidth === width ? "on" : ""}
                      title={`${t("Line thickness")}: ${width} pt`} aria-label={`${width} pt`} onClick={() => chooseInkWidth(width)}>
                      <span style={{ height: `${Math.min(10, 1 + width)}px` }} />
                    </button>
                  ))}
                </div>
              )}
              {tool === "ink" && <span className="divider" />}
              <div className="color-options" role="radiogroup" aria-label={t("Color")}>
                {PALETTE[tool]!.map((c) => (
                  <button
                    key={c.hex}
                    className={colors[tool] === c.hex ? "on" : ""}
                    style={{ "--swatch": c.hex } as React.CSSProperties}
                    onClick={() => chooseColor(c.hex)}
                    title={t(c.name)}
                    role="radio"
                    aria-checked={colors[tool] === c.hex}
                  />
                ))}
                {(tool === "ink" || tool === "freetext") && (() => {
                  // Any other color, from the system color picker; shown filled once it's in use.
                  const custom = !!colors[tool] && !PALETTE[tool]!.some((c) => c.hex.toLowerCase() === colors[tool]!.toLowerCase());
                  return (
                    <label className={custom ? "custom-color on" : "custom-color"} title={t("Custom color")}
                      style={custom ? { "--swatch": colors[tool] } as React.CSSProperties : undefined}>
                      <input type="color" aria-label={t("Custom color")} value={(colors[tool] ?? "#000000").toLowerCase()}
                        onChange={(e) => chooseColor(e.target.value.toUpperCase())} />
                    </label>
                  );
                })()}
              </div>
              </div>
              </div>
              <button className="pill-done" onClick={() => chooseTool("select")} aria-label={t("Done")} title={t("Done")}>
                <Icon name="close" size={14} />
              </button>
            </div>
          )}

          {doc && !pillHidden && (
            <div ref={pillRef} className={pillAt ? "pill moved" : "pill"} role="toolbar" aria-label={t("Navigation")}
              style={pillAt ? { left: `${pillAt.x * 100}%`, top: `${pillAt.y * 100}%` } : undefined}>
              <span className="pill-grip" onPointerDown={dragPill} onDoubleClick={() => placePill(null)}
                title={t("Move the controls (double-click to put them back)")} aria-hidden="true">
                <Icon name="grip" size={14} />
              </span>
              <button className="pill-btn" onClick={() => goTo(page - 1)} disabled={page <= 1} title={t("Previous page")}>
                <Icon name="chevronUp" size={17} />
              </button>
              <form
                className="page-field"
                onSubmit={(e) => {
                  e.preventDefault();
                  const n = parseInt(pageInput, 10);
                  if (Number.isFinite(n)) goTo(n);
                  else setPageInput(String(page));
                  (document.activeElement as HTMLElement)?.blur();
                }}
              >
                <input
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value.replace(/\D/g, ""))}
                  onFocus={(e) => e.target.select()}
                  onBlur={() => setPageInput(String(pageRef.current))}
                  style={{ width: `calc(${Math.max(2, String(numPages).length)}ch + 22px)` }}
                  aria-label={t("Page number")}
                />
                <span className="page-total">{t("of {n}", { n: numPages })}</span>
              </form>
              <button className="pill-btn" onClick={() => goTo(page + 1)} disabled={page >= numPages} title={t("Next page")}>
                <Icon name="chevronDown" size={17} />
              </button>
              <span className="divider" />
              <button className="pill-btn" onClick={() => zoom(-1)} title={keys(t("Zoom out (Ctrl −)"))}>
                <Icon name="minus" size={17} />
              </button>
              <ZoomMenu scale={scale} onPick={setScaleValue} spread={spread} onToggleSpread={toggleSpread} />
              <button className="pill-btn" onClick={() => zoom(1)} title={keys(t("Zoom in (Ctrl +)"))}>
                <Icon name="plus" size={17} />
              </button>
              <button className="pill-btn" onClick={toggleFocus} aria-pressed={focus}
                title={focus ? t("Exit full screen (Esc)") : t("Full screen (F)")}>
                <Icon name={focus ? "shrink" : "expand"} size={16} />
              </button>
              <span className="divider wide-only" />
              <button className="pill-btn wide-only" onClick={rotate} title={t("Rotate (R)")}>
                <Icon name="rotate" size={17} />
              </button>
              <span className="divider" />
              <button className="pill-btn" onClick={() => hidePill(true)} title={t("Hide the controls")} aria-label={t("Hide the controls")}>
                <Icon name="chevronDown" size={17} />
              </button>
            </div>
          )}

          {selection && !noteBox && !highlightMenu && (
            <SelectionPopover
              key={`${selection.page}:${selection.top}:${selection.text.slice(0, 40)}`}
              info={selection}
              stageWidth={stageWidth}
              colors={HIGHLIGHTS}
              current={highlightColor}
              onHighlight={(hex, note) => void quickHighlight(hex, note)}
              onAsk={() => { setPinned(null); askAbout(selection.text, selection.page); }}
              onPin={() => setPinned(selection)}
              onDismiss={dismissSelection}
            />
          )}
          {highlightMenu && menuMark && !noteBox && (
            <HighlightMenu
              rect={highlightMenu.rect}
              stageWidth={stageWidth}
              colors={HIGHLIGHTS}
              current={menuMark.color}
              hasNote={!!menuMark.note}
              onRecolor={(hex) => markupRef.current!.recolor(menuMark.id, hex)}
              onNote={() => {
                const r = highlightMenu.rect;
                setNoteBox({ markId: menuMark.id, anchor: { x: (r.left + r.right) / 2, top: r.top, bottom: r.bottom }, quote: menuMark.text, initial: menuMark.note });
                setHighlightMenu(null);
              }}
              onAsk={() => { askAbout(menuMark.text, menuMark.page + 1); setHighlightMenu(null); }}
              onRemove={() => removeHighlight(menuMark.id)}
            />
          )}
          {noteBox && (
            <NoteBox
              key={noteBox.markId}
              anchor={noteBox.anchor}
              stageWidth={stageWidth}
              quote={noteBox.quote}
              initial={noteBox.initial}
              onSave={(note) => markupRef.current!.setNote(noteBox.markId, note)}
              onClose={() => setNoteBox(null)}
            />
          )}

          {focus && (
            <button className="exit-focus" onClick={toggleFocus} title={t("Exit full screen")}>
              <kbd>Esc</kbd> {t("to exit full screen")}
            </button>
          )}
        </main>

        {doc && historyOpen && !focus && <VersionHistoryPanel key={doc.sourceId ?? doc.id} id={doc.sourceId ?? doc.id}
          allowed={doc.historyAllowed} active={active} pending={changesForCopy(doc, dirty || markup.marks.length > 0, pageOrder)}
          canOpen={id => !tabs.all.some(t => t.contentId === id && t.dirty)}
          onOpen={(v, blob) => tabs.open([{ kind: "blob", name: v.name, blob }])}
          onDownload={(v, blob) => saveBlob(blob, v.name.replace(/\.pdf$/i, "") + ` (v${v.number}).pdf`)}
          onClose={() => setHistoryOpen(false)} />}
        {doc && aiOpen && !focus && (
          <AiPanel
            key={doc.sourceId ?? doc.id}
            pdf={doc.pdf}
            docId={doc.sourceId ?? doc.id}
            persist={!doc.password}
            docName={doc.name}
            context={aiContext}
            onClearContext={() => setAiContext(null)}
            onGoToPage={goTo}
            onClose={() => setAiOpen(false)}
          />
        )}
      </div>

      {!doc && <Welcome active={active} onPick={pickFile} onOpenUrl={() => openUrlDialog()} onOpenRecent={file => tabs.open([{ kind: "blob", name: file.name, blob: file.data, recentId: file.id, path: file.path }])}
        onSample={() => tabs.open([{ kind: "sample", name: "Folio sample.pdf" }])} loading={loading} />}

      {loading && doc && <div className="loading-bar" />}

      {dragging && (
        <div className="drop-overlay">
          <div className="drop-card">
            <Icon name="upload" size={30} />
            <p>{t("Drop a PDF or link to open")}</p>
          </div>
        </div>
      )}

      {pending && (
        <PasswordDialog
          name={pending.name}
          error={pending.error}
          onSubmit={(pw) => openBytes(pending.name, pending.data, pw)}
          onCancel={() => { setPending(null); tabs.failed(tabKey); }}
        />
      )}
      {dialog === "info" && doc && <InfoDialog key={doc.pdf.loadingTask.docId} pdf={doc.pdf} name={doc.name} size={doc.size} onClose={() => setDialog(null)} />}
      {dialog === "shortcuts" && <ShortcutsDialog onClose={() => setDialog(null)} />}
      {dialog === "about" && <AboutDialog onClose={() => setDialog(null)} />}
      {dialog === "settings" && <SettingsDialog theme={theme} onTheme={setThemeTo} night={night} onNight={setNightTo}
        wheelPaging={wheelPaging} onWheelPaging={(next) => {
          setWheelPaging(next);
          try { localStorage.setItem("folio:wheel-paging", next ? "1" : "0"); }
          catch { flash(t("Page scrolling changed, but couldn't save the preference.")); }
        }}
        onOpenChangelog={() => setDialog("changelog")} onClose={() => setDialog(null)} />}
      {/* Closing goes back to Settings, where the changelog is opened from. */}
      {dialog === "changelog" && <ChangelogDialog onClose={() => setDialog("settings")} />}
      {dialog === "upgrade" && <ChangelogDialog upgradeNotes={upgradeNotes} onClose={() => setDialog(null)} />}
      {dialog === "url" && <OpenUrlDialog key={linkDraft} initial={linkDraft} onClose={() => setDialog(null)} onSubmit={(url) => { setDialog(null); tabs.open([{ kind: "url", name: new URL(url).hostname, url }]); }} />}
      {doc && signing && <SignatureDialog key={doc.id + ":" + page} pdf={doc.pdf} pageNumber={page} targets={signatureTargets}
        onClose={() => setSigning(false)} onApprove={async (signature, rect) => {
          await placeSignature(viewerRef.current!, doc.pdf, page, signature, rect);
          setDirty(true); setSignatureDismissed(true); flash(keys(t("Signature added. Ctrl+Z to undo; Save copy to export.")));
        }} />}
      {doc && !contentEditing && !signing && signatureTargets.length > 0 && !signatureDismissed && <div className="signature-suggestion" role="status">
        <span>{signatureTargets[0].kind === "field" ? t("Signature field detected on page {page}", { page }) : t("Possible signature area on page {page}", { page })}</span>
        <button className="btn primary" onClick={startSigning}>{t("Review signature")}</button>
        <button className="pill-btn" aria-label={t("Dismiss signature suggestion")} onClick={() => setSignatureDismissed(true)}><Icon name="close" size={14} /></button>
      </div>}

      {updateVersion && (
        <div className="update-card" role="status">
          <div>
            <strong>{t("Folio {version} is ready", { version: updateVersion })}</strong>
            <span>{t("Restart to update. Installation on close follows your auto-update setting.")}</span>
          </div>
          <button
            className="btn primary"
            onClick={() => {
              window.folioDesktop?.installUpdate();
            }}
          >
            {t("Restart")}
          </button>
          <button className="pill-btn" onClick={() => setUpdateVersion(null)} aria-label={t("Later")} title={t("Later")}>
            <Icon name="close" size={15} />
          </button>
        </div>
      )}

      {(toast || error) && (
        <div className={`toast ${error ? "error" : ""}`} onClick={() => setError(null)}>
          {error ?? toast}
        </div>
      )}
    </div>
  );
}

function IconButton({ icon, label, onClick, active, className = "" }: { icon: IconName; label: string; onClick: () => void; active?: boolean; className?: string }) {
  return (
    <button className={`icon-btn ${className} ${active ? "on" : ""}`.trim()} onClick={onClick} title={label} aria-label={label} aria-pressed={active}>
      <Icon name={icon} />
    </button>
  );
}
