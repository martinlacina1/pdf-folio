import { useEffect, useState, type ReactNode } from "react";
import type { PDFDocumentProxy } from "./pdf";
import { Icon } from "./icons";
import { keys } from "./platform";
import { LOCALE, t } from "./i18n";

export function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <div className="modal-head">
          <h2>{title}</h2>
          <button className="pill-btn" onClick={onClose} aria-label={t("Close")}>
            <Icon name="close" size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function formatBytes(n: number) {
  const number = (value: number, digits: number) => value.toLocaleString(LOCALE, { minimumFractionDigits: digits, maximumFractionDigits: digits });
  if (n < 1024) return `${n} B`;
  if (n < 1024 ** 2) return `${number(n / 1024, 0)} KB`;
  return `${number(n / 1024 ** 2, 1)} MB`;
}

const EDITIONS: Record<string, string> = {
  installed: t("Installed"),
  portable: t("Portable - update manually"),
  appimage: "AppImage",
  package: t("Linux package (updates via apt)"),
};

export function AboutDialog({ onClose }: { onClose: () => void }) {
  const desktop = window.folioDesktop;
  const [info, setInfo] = useState<Awaited<ReturnType<FolioDesktop["getAppInfo"]>> | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    desktop?.getAppInfo().then(info => { if (!cancelled) setInfo(info); }).catch(() => {
      if (!cancelled) setError(t("Couldn't read application details."));
    });
    return () => { cancelled = true; };
  }, [desktop]);
  return <Modal title={t("About Folio")} onClose={onClose}>
    <dl className="info-list">
      <div><dt>{t("Version")}</dt><dd>{info?.version ?? (desktop ? t("Loading...") : t("Browser edition"))}</dd></div>
      <div><dt>{t("Edition")}</dt><dd>{EDITIONS[info?.mode ?? ""] ?? (desktop ? t("Development") : t("Web"))}</dd></div>
      {info && <div><dt>{t("Location")}</dt><dd className="installation-path">{info.location}</dd></div>}
    </dl>
    <div className="about-update">
      {!desktop && <p>{t("Documents and reading preferences stay on this device.")}</p>}
      {info?.mode === "portable" && <p className="search-hint">{t("Use the Setup installer for automatic updates and a single installed copy.")}</p>}
      {info?.mode === "package" && <p className="search-hint">{t("New versions arrive with your system's software updates (apt).")}</p>}
      <div className="form-actions">
        {desktop && <button className="btn ghost" onClick={() => {
          void desktop.openInstallation().then(message => setError(message ? t(message) : null)).catch(() => setError(t("Couldn't open the installation folder.")));
        }}>{t("Open installation folder")}</button>}
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  </Modal>;
}

function parsePdfDate(s?: string) {
  const m = s?.match(/D:(\d{4})(\d{2})?(\d{2})?(\d{2})?(\d{2})?/);
  if (!m) return null;
  const d = new Date(+m[1], +(m[2] ?? 1) - 1, +(m[3] ?? 1), +(m[4] ?? 0), +(m[5] ?? 0));
  return d.toLocaleString(LOCALE, { dateStyle: "medium", timeStyle: "short" });
}

export function InfoDialog({ pdf, name, size, onClose }: { pdf: PDFDocumentProxy; name: string; size: number; onClose: () => void }) {
  const [rows, setRows] = useState<[string, string][]>([]);

  useEffect(() => {
    (async () => {
      const { info } = (await pdf.getMetadata()) as { info: Record<string, string> };
      const first = await pdf.getPage(1);
      const [, , w, h] = first.view;
      const inches = (pt: number) => (pt / 72).toLocaleString(LOCALE, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      setRows(
        [
          [t("File"), name],
          [t("Title"), info.Title],
          [t("Author"), info.Author],
          [t("Subject"), info.Subject],
          [t("Pages"), String(pdf.numPages)],
          [t("Page size"), t("{width} × {height} in", { width: inches(w), height: inches(h) })],
          [t("File size"), formatBytes(size)],
          [t("Created"), parsePdfDate(info.CreationDate)],
          [t("Modified"), parsePdfDate(info.ModDate)],
          [t("Application"), info.Creator],
          [t("Producer"), info.Producer],
          [t("PDF version"), info.PDFFormatVersion],
        ].filter((r): r is [string, string] => !!r[1]),
      );
    })();
  }, [pdf, name, size]);

  return (
    <Modal title={t("Document info")} onClose={onClose}>
      <dl className="info-list">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </Modal>
  );
}

const SHORTCUTS: [string, string][] = [
  [t("Open file"), "Ctrl O"],
  [t("New tab"), "Ctrl T"],
  [t("Close tab"), "Ctrl W"],
  [t("Next tab"), "Control Tab"],
  [t("Previous tab"), "Control Shift Tab"],
  [t("Open from URL"), "Ctrl Shift O"],
  [t("Highlight selection or enter Highlight mode"), "H"],
  [t("Write a note on the selection"), "N"],
  [t("Remove a clicked highlight"), "Delete"],
  [t("Find"), "Ctrl F"],
  [t("Save to the original file"), "Ctrl S"],
  [t("Save a copy"), "Ctrl Shift S"],
  [t("Print"), "Ctrl P"],
  [t("Zoom in / out"), "Ctrl + / −"],
  [t("Reset zoom"), "Ctrl 0"],
  [t("Toggle sidebar"), "Ctrl \\"],
  [t("Select tool"), "V"],
  [t("Move the page by dragging (hand)"), t("Space@@key")],
  [t("Draw"), "D"],
  [t("Add text"), "T"],
  [t("Rotate pages"), "R"],
  [t("Two-page view"), "2"],
  [t("Full screen"), "F"],
  [t("First / last page"), "Home / End"],
  [t("Settings"), "Ctrl ,"],
  [t("Shortcuts"), "?"],
];

export function ShortcutsDialog({ onClose }: { onClose: () => void }) {
  return (
    <Modal title={t("Keyboard shortcuts")} onClose={onClose}>
      <dl className="info-list shortcuts">
        {SHORTCUTS.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>
              {keys(v).split(" ").map((key, i) => (key === "/" ? <span key={i}> / </span> : <kbd key={i}>{key}</kbd>))}
            </dd>
          </div>
        ))}
      </dl>
    </Modal>
  );
}

/** Returns the http(s) URL in `text`, or null if it isn't a single web link. */
export function parseWebUrl(text: string | null | undefined) {
  const value = (text ?? "").trim();
  if (!value || /\s/.test(value)) return null;
  try {
    const explicit = /^[a-z][a-z\d+.-]*:/i.test(value);
    const url = new URL(explicit ? value : "https://" + value);
    // Without a scheme, only accept text that looks like a domain ("example.com/a.pdf").
    return (url.protocol === "http:" || url.protocol === "https:") && (explicit || url.hostname.includes(".")) ? url.toString() : null;
  } catch {
    return null;
  }
}

export function OpenUrlDialog({ initial = "", onSubmit, onClose }: { initial?: string; onSubmit: (url: string) => void; onClose: () => void }) {
  const [value, setValue] = useState(initial);
  const url = parseWebUrl(value);
  return (
    <Modal title={t("Open from URL")} onClose={onClose}>
      <form
        className="password-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (url) onSubmit(url);
        }}
      >
        <p>{t("Paste a link to a PDF or a webpage. Webpages become a PDF you can highlight and mark up. You can also drop or paste a link anywhere in Folio.")}</p>
        <input type="url" autoFocus value={value} onChange={(e) => setValue(e.target.value)} placeholder="https://example.com/article" aria-label={t("PDF URL")} />
        {value.trim() && !url && <p className="form-error">{t("Enter an http:// or https:// address.")}</p>}
        <div className="form-actions">
          <button type="button" className="btn ghost" onClick={onClose}>
            {t("Cancel")}
          </button>
          <button type="submit" className="btn primary" disabled={!url}>
            {t("Open")}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export function PasswordDialog({
  name,
  error,
  onSubmit,
  onCancel,
}: {
  name: string;
  error?: string;
  onSubmit: (pw: string) => void;
  onCancel: () => void;
}) {
  const [pw, setPw] = useState("");
  return (
    <Modal title={t("Password required")} onClose={onCancel}>
      <form
        className="password-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(pw);
        }}
      >
        <p>
          {t("“{name}” is protected. Enter its password to open it.", { name })}
        </p>
        <input type="password" autoFocus value={pw} onChange={(e) => setPw(e.target.value)} placeholder={t("Password")} />
        {error && <p className="form-error">{t(error)}</p>}
        <div className="form-actions">
          <button type="button" className="btn ghost" onClick={onCancel}>
            {t("Cancel")}
          </button>
          <button type="submit" className="btn primary" disabled={!pw}>
            {t("Open")}
          </button>
        </div>
      </form>
    </Modal>
  );
}
