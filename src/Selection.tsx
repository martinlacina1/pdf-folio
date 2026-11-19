import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Icon } from "./icons";
import { keys } from "./platform";
import { copyText } from "./clipboard";
import { t } from "./i18n";
import type { PDFDocumentProxy } from "./pdf";

export interface SelectionInfo {
  text: string;
  /** A copy of the selection, so it can be restored after the note field takes focus. */
  range: Range;
  page: number;
  /** Center x and top/bottom of the selection, relative to the stage. */
  x: number;
  top: number;
  bottom: number;
  /** Where the mouse was released after selecting, relative to the stage; absent for keyboard selections. */
  cursor?: { x: number; y: number };
  /** The stage's visible height, so the popover can stay on screen. */
  stageHeight?: number;
}

const POPOVER_H = 86;

/** Tracks the reader's text selection inside the document (hidden while the mouse is still dragging). */
export function useTextSelection(container: HTMLElement | null, enabled: boolean, pdf: PDFDocumentProxy | undefined) {
  const [info, setInfo] = useState<(SelectionInfo & { pdf: PDFDocumentProxy }) | null>(null);
  useEffect(() => {
    if (!enabled || !container || !pdf) {
      setInfo(null);
      return;
    }
    let frame = 0;
    let pointerDown = false;
    // The mouse release that ended the selection, with the scroll position then, so the point follows scrolling.
    let release: { x: number; y: number; scrollLeft: number; scrollTop: number } | null = null;
    const update = () => {
      frame = 0;
      const selection = document.getSelection();
      if (pointerDown || !selection || selection.isCollapsed || !selection.rangeCount) return setInfo(null);
      const anchor = selection.anchorNode instanceof Element ? selection.anchorNode : selection.anchorNode?.parentElement;
      if (!anchor || !container.contains(anchor) || !anchor.closest(".textLayer")) return setInfo(null);
      const text = selection.toString().replace(/\s+/g, " ").trim();
      const rects = [...selection.getRangeAt(0).getClientRects()].filter((r) => r.width > 0 && r.height > 0);
      if (!text || !rects.length) return setInfo(null);
      const stage = (container.parentElement ?? container).getBoundingClientRect();
      const left = Math.min(...rects.map((r) => r.left));
      const right = Math.max(...rects.map((r) => r.right));
      setInfo({
        pdf,
        text,
        range: selection.getRangeAt(0).cloneRange(),
        page: Number((anchor.closest(".page") as HTMLElement | null)?.dataset.pageNumber) || 1,
        x: (left + right) / 2 - stage.left,
        top: Math.min(...rects.map((r) => r.top)) - stage.top,
        bottom: Math.max(...rects.map((r) => r.bottom)) - stage.top,
        cursor: release ? {
          x: release.x - stage.left + release.scrollLeft - container.scrollLeft,
          y: release.y - stage.top + release.scrollTop - container.scrollTop,
        } : undefined,
        stageHeight: stage.height,
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const down = (e: PointerEvent) => { if (e.button === 0) { pointerDown = true; release = null; setInfo(null); } };
    const up = (e: PointerEvent) => {
      if (!pointerDown) return;
      pointerDown = false;
      release = { x: e.clientX, y: e.clientY, scrollLeft: container.scrollLeft, scrollTop: container.scrollTop };
      schedule();
    };
    // A selection changed with the keyboard has no mouse position: fall back to placing it by the text.
    const key = (e: KeyboardEvent) => { if (e.shiftKey || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a")) release = null; };
    document.addEventListener("keydown", key);
    document.addEventListener("selectionchange", schedule);
    container.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    container.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", key);
      document.removeEventListener("selectionchange", schedule);
      container.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      container.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [container, enabled, pdf]);
  return info?.pdf === pdf ? info : null;
}

/** Places a floating card above (or, near the top edge, below) a selection, kept inside the stage. */
function place(info: { x: number; top: number; bottom: number }, width: number, height: number, stageWidth: number) {
  const left = Math.min(Math.max(8, info.x - width / 2), Math.max(8, stageWidth - width - 8));
  const top = info.top - height - 10 >= 8 ? info.top - height - 10 : info.bottom + 10;
  return { left, top };
}

/**
 * Places the selection popover right next to the mouse pointer: below and to the right when there is room,
 * otherwise flipped to the left and/or above. Returns which way it opened, so the buttons can face the pointer.
 */
function placeAtCursor(cursor: { x: number; y: number }, width: number, height: number, stageWidth: number, stageHeight: number) {
  // The pointer arrow points up-left from its hotspot, so leave it room below and to the right.
  const GAP_X = 4, GAP_BELOW = 12, GAP_ABOVE = 8, EDGE = 8;
  const right = cursor.x + GAP_X + width <= stageWidth - EDGE || cursor.x - GAP_X - width < EDGE;
  const below = cursor.y + GAP_BELOW + height <= stageHeight - EDGE || cursor.y - GAP_ABOVE - height < EDGE;
  const left = right ? cursor.x - GAP_X : cursor.x + GAP_X - width;
  const top = below ? cursor.y + GAP_BELOW : cursor.y - GAP_ABOVE - height;
  return {
    style: {
      left: Math.min(Math.max(EDGE, left), Math.max(EDGE, stageWidth - width - EDGE)),
      top: Math.min(Math.max(EDGE, top), Math.max(EDGE, stageHeight - height - EDGE)),
    },
    right,
    below,
  };
}

interface PopoverProps {
  info: SelectionInfo;
  stageWidth: number;
  colors: { name: string; hex: string }[];
  current: string;
  /** Highlights the selection in a color, with the note typed so far (may be empty). */
  onHighlight: (hex: string, note: string) => void;
  onAsk: () => void;
  /** The note field took focus (which clears the page selection): keep the popover open. */
  onPin: () => void;
  onDismiss: () => void;
}

/** Shown as soon as text is selected: one-click colors, plus a note field that's ready to type in. */
export function SelectionPopover({ info, stageWidth, colors, current, onHighlight, onAsk, onPin, onDismiss }: PopoverProps) {
  const [copy, setCopy] = useState<"idle" | "done" | "failed">("idle");
  const [note, setNote] = useState("");
  const card = useRef<HTMLDivElement>(null);
  // Start from an estimate, then use the measured size so the card ends exactly beside the pointer.
  const [size, setSize] = useState({ width: 30 * colors.length + 210, height: POPOVER_H });
  useLayoutEffect(() => {
    const el = card.current;
    if (el && (el.offsetWidth !== size.width || el.offsetHeight !== size.height)) setSize({ width: el.offsetWidth, height: el.offsetHeight });
  }, [size, copy]);
  const atCursor = info.cursor && info.stageHeight
    ? placeAtCursor(info.cursor, size.width, size.height, stageWidth, info.stageHeight) : null;
  // Facing the pointer: the row with Copy sits on the side of the card nearest to it.
  const className = "selection-popover" + (atCursor ? " at-cursor" + (atCursor.right ? "" : " opens-left") + (atCursor.below ? "" : " opens-up") : "");
  return (
    <div
      ref={card}
      className={className}
      role="dialog"
      aria-label={t("Selected text")}
      style={atCursor?.style ?? place(info, size.width, size.height, stageWidth)}
      // Keep the text selection alive while clicking buttons (but let the note field take focus).
      onMouseDown={(e) => { if (!(e.target as HTMLElement).closest("input")) e.preventDefault(); }}
    >
      <div className="pop-row" role="toolbar" aria-label={t("Highlight")}>
        {colors.map((c) => (
          <button
            key={c.hex}
            className={`swatch-btn ${c.hex === current ? "on" : ""}`}
            style={{ "--swatch": c.hex } as React.CSSProperties}
            title={t("Highlight {color}", { color: t(c.name).toLowerCase() }) + (c.hex === current ? " (H)" : "")}
            aria-label={t("Highlight {color}", { color: t(c.name).toLowerCase() })}
            onClick={() => onHighlight(c.hex, note.trim())}
          />
        ))}
        <span className="divider" />
        <button
          className="pop-btn copy-btn"
          title={copy === "done" ? t("Copied") : copy === "failed" ? t("Copy failed") : t("Copy")}
          aria-label={t("Copy")}
          onClick={async () => {
            const ok = await copyText(info.text);
            setCopy(ok ? "done" : "failed");
            setTimeout(() => setCopy("idle"), ok ? 1200 : 2500);
          }}
        >
          <Icon name={copy === "done" ? "check" : copy === "failed" ? "close" : "copy"} size={18} />
          {copy === "done" ? t("Copied") : copy === "failed" ? t("Failed") : t("Copy")}
        </button>
        <button className="pop-btn icon-only ask-small" onClick={onAsk} title={t("Ask AI about this passage")} aria-label={t("Ask AI")}>
          <Icon name="sparkle" size={13} />
        </button>
      </div>
      <input
        className="pop-note"
        value={note}
        placeholder={t("Add a note… (Enter to highlight)")}
        aria-label={t("Note for this highlight")}
        onFocus={onPin}
        onChange={(e) => setNote(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") { e.preventDefault(); onHighlight(current, note.trim()); }
          if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); onDismiss(); }
        }}
      />
    </div>
  );
}

interface HighlightMenuProps {
  rect: { left: number; top: number; right: number; bottom: number };
  stageWidth: number;
  colors: { name: string; hex: string }[];
  current: string;
  hasNote: boolean;
  onRecolor: (hex: string) => void;
  onNote: () => void;
  onAsk: () => void;
  onRemove: () => void;
}

/** Shown when clicking an existing highlight. */
export function HighlightMenu({ rect, stageWidth, colors, current, hasNote, onRecolor, onNote, onAsk, onRemove }: HighlightMenuProps) {
  const width = 30 * colors.length + 300;
  const anchor = { x: (rect.left + rect.right) / 2, top: rect.top, bottom: rect.bottom };
  return (
    <div className="selection-popover" role="toolbar" aria-label={t("Highlight")} style={place(anchor, width, 44, stageWidth)}>
      <div className="pop-row">
        {colors.map((c) => (
          <button
            key={c.hex}
            className={`swatch-btn ${c.hex.toLowerCase() === current.toLowerCase() ? "on" : ""}`}
            style={{ "--swatch": c.hex } as React.CSSProperties}
            title={t("Change to {color}", { color: t(c.name).toLowerCase() })}
            aria-label={t("Change to {color}", { color: t(c.name).toLowerCase() })}
            onClick={() => onRecolor(c.hex)}
          />
        ))}
        <span className="divider" />
        <button className="pop-btn" onClick={onNote} title={hasNote ? t("Edit note") : t("Add a note")}>
          <Icon name="note" size={15} /> {hasNote ? t("Edit note") : t("Note")}
        </button>
        <button className="pop-btn" onClick={onAsk} title={t("Ask AI about this highlight")}>
          <Icon name="sparkle" size={15} /> {t("Ask AI")}
        </button>
        <button className="pop-btn danger" onClick={onRemove} title={t("Remove highlight (Delete)")}>
          <Icon name="trash" size={15} /> {t("Remove")}
        </button>
      </div>
    </div>
  );
}

interface NoteBoxProps {
  anchor: { x: number; top: number; bottom: number };
  stageWidth: number;
  quote: string;
  initial: string;
  onSave: (note: string) => void;
  onClose: () => void;
}

/** A small floating box for writing the note attached to a highlight. */
export function NoteBox({ anchor, stageWidth, quote, initial, onSave, onClose }: NoteBoxProps) {
  const [value, setValue] = useState(initial);
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const el = ref.current!;
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
  }, []);
  const save = () => {
    onSave(value.trim());
    onClose();
  };
  return (
    <div className="note-box" role="dialog" aria-label={t("Note")} style={place(anchor, 320, 170, stageWidth)}>
      {quote && <blockquote>{quote.length > 140 ? quote.slice(0, 140) + "…" : quote}</blockquote>}
      <textarea
        ref={ref}
        value={value}
        placeholder={t("Add a note…")}
        rows={3}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); onClose(); }
          if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); save(); }
        }}
      />
      <div className="note-actions">
        <span className="hint">{keys(t("Ctrl+Enter to save"))}</span>
        <button className="btn ghost" onClick={onClose}>{t("Cancel")}</button>
        <button className="btn primary" onClick={save}>{t("Save")}</button>
      </div>
    </div>
  );
}
