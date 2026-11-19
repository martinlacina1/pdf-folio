import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Icon } from "./icons";
import { keys } from "./platform";
import { MoreMenu } from "./MoreMenu";
import { t, plural } from "./i18n";
import type { Mark, MarkupState } from "./markup";

interface Props {
  state: MarkupState;
  onExport: (format: "markdown" | "json") => void;
  persisted: boolean;
  onReveal: (id: string) => void;
  onNote: (id: string, note: string) => void;
  onRemove: (id: string) => void;
  onDocNote: (note: string) => void;
  onAsk: (mark: Mark) => void;
}

/** Commits text after the reader pauses typing (and on blur), so every keystroke isn't a save. */
function useDebouncedField(value: string, commit: (v: string) => void) {
  const [draft, setDraft] = useState(value);
  const timer = useRef(0);
  const focused = useRef(false);
  useEffect(() => { if (!focused.current) setDraft(value); }, [value]);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  return {
    value: draft,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const next = e.target.value;
      setDraft(next);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => commit(next), 500);
    },
    onFocus: () => { focused.current = true; },
    onBlur: () => {
      focused.current = false;
      window.clearTimeout(timer.current);
      if (draft !== value) commit(draft);
    },
  };
}

function fit(el: HTMLTextAreaElement | null) {
  if (!el) return;
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight + 2}px`;
}
const autoGrow = (e: React.FormEvent<HTMLTextAreaElement>) => fit(e.currentTarget);

/** A textarea that grows with its content, including content set from outside. */
function GrowingTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useLayoutEffect(() => fit(ref.current), [props.value]);
  return <textarea ref={ref} {...props} onInput={autoGrow} />;
}

export function NotesPanel({ state, onExport, persisted, onReveal, onNote, onRemove, onDocNote, onAsk }: Props) {
  const docNote = useDebouncedField(state.note, onDocNote);
  const highlights = state.marks.filter((m) => m.type === "highlight" || (m.type === "freetext" && m.text));
  const other = state.marks.length - highlights.length;

  return (
    <div className="notes-panel">
      <div className="notes-head">
        <span>{highlights.length ? plural(highlights.length, { one: "{n} highlight", few: "{n} highlights (2-4)", other: "{n} highlights" }) : t("Notes")}</span>
        <MoreMenu label={t("Export")} items={[
          { kind: "action", icon: "copy", label: t("Copy Markdown"), disabled: !state.marks.length && !docNote.value.trim() && !state.bookmarkedPages?.length,
            onSelect: () => onExport("markdown") },
          { kind: "action", icon: "download", label: t("Save JSON…"), disabled: state.bookmarkedPages === null, onSelect: () => onExport("json") },
        ]} />
      </div>

      <GrowingTextarea
        className="doc-note"
        placeholder={t("Notes about this document…")}
        aria-label={t("Notes about this document")}
        rows={3}
        {...docNote}
      />

      {highlights.length === 0 ? (
        <div className="notes-empty">
          <Icon name="highlight" size={22} />
          <p>{t("Select text and click a color to highlight it. Highlights and their notes show up here.")}</p>
        </div>
      ) : (
        <ul className="mark-list">
          {highlights.map((mark) => (
            <MarkCard key={mark.id} mark={mark} onReveal={onReveal} onNote={onNote} onRemove={onRemove} onAsk={onAsk} />
          ))}
        </ul>
      )}
      {other > 0 && <p className="notes-foot">{plural(other, { one: "Plus {n} drawing on the pages.", few: "Plus {n} drawings on the pages. (2-4)", other: "Plus {n} drawings on the pages." })}</p>}
      <p className="notes-foot">
        {keys(persisted ? t("Saved automatically on this computer. Ctrl+S saves them into the PDF; Ctrl+Shift+S saves a copy instead.")
          : t("Password-protected documents aren't saved in Folio. Use Ctrl+S to keep a copy with your highlights."))}
      </p>
    </div>
  );
}

function MarkCard({ mark, onReveal, onNote, onRemove, onAsk }: {
  mark: Mark;
  onReveal: (id: string) => void;
  onNote: (id: string, note: string) => void;
  onRemove: (id: string) => void;
  onAsk: (mark: Mark) => void;
}) {
  const note = useDebouncedField(mark.note, (v) => onNote(mark.id, v.trim()));
  return (
    <li className="mark-card" style={{ "--mark": mark.color } as React.CSSProperties}>
      <button className="mark-quote" onClick={() => onReveal(mark.id)} title={t("Show on page")}>
        <span className="mark-page">{t("p. {n}", { n: mark.page + 1 })}</span>
        {mark.text || (mark.type === "freetext" ? t("Text box") : t("Highlight@@noun"))}
      </button>
      {mark.type === "highlight" && (
        <GrowingTextarea className="mark-note" placeholder={t("Add a note…")} aria-label={t("Note")} rows={1} {...note} />
      )}
      <div className="mark-actions">
        {mark.type === "highlight" && (
          <button className="pill-btn" onClick={() => onAsk(mark)} title={t("Ask AI about this highlight")} aria-label={t("Ask AI about this highlight")}>
            <Icon name="sparkle" size={14} />
          </button>
        )}
        <button className="pill-btn" onClick={() => onRemove(mark.id)} title={t("Delete")} aria-label={t("Delete highlight")}>
          <Icon name="trash" size={14} />
        </button>
      </div>
    </li>
  );
}
