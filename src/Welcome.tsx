import { useEffect, useState } from "react";
import { clearRecent, listRecent, removeRecent, type RecentFile } from "./recent";
import { Icon } from "./icons";
import { keys } from "./platform";
import { formatBytes } from "./Dialogs";
import { updateSummary } from "./updates";
import { LOCALE, plural, t } from "./i18n";

function timeAgo(time: number) {
  const s = (Date.now() - time) / 1000;
  if (s < 60) return t("Just now");
  if (s < 3600) return t("{n}m ago", { n: Math.floor(s / 60) });
  if (s < 86400) return t("{n}h ago", { n: Math.floor(s / 3600) });
  if (s < 86400 * 7) return t("{n}d ago", { n: Math.floor(s / 86400) });
  return new Date(time).toLocaleDateString(LOCALE, { month: "short", day: "numeric" });
}

function UpdateLine({ status }: { status: UpdateStatus }) {
  const desktop = window.folioDesktop!;
  const check = (
    <button className="link version-action" onClick={() => desktop.checkForUpdates()}>
      {t("Check for updates")}
    </button>
  );
  switch (status.state) {
    case "ready":
      return (
        <>
          {" · "}
          <button className="link version-action" onClick={() => desktop.installUpdate()}>
            {t("Restart to update to {version}", { version: status.version ?? "" })}
          </button>
        </>
      );
    case "latest":
      return <> · {t("Up to date")} · {check}</>;
    case "error":
      return (
        <>
          <span title={status.message && t(status.message)}> · {t("Couldn't check for updates")}</span> · {check}
        </>
      );
    case "available":
      return (
        <>
          {" · "}
          <button className="link version-action" onClick={() => void desktop.openDownload()}>
            {t("Download Folio {version}", { version: status.version ?? "" })}
          </button>
        </>
      );
    case "idle":
      return <> · {check}</>;
    default:
      return <> · {updateSummary(status)}</>;
  }
}

interface Props {
  active: boolean;
  onPick: () => void;
  onOpenUrl: () => void;
  onOpenRecent: (file: RecentFile) => void;
  onSample: () => void;
  loading: boolean;
}

export function Welcome({ active, onPick, onOpenUrl, onOpenRecent, onSample, loading }: Props) {
  const [recent, setRecent] = useState<RecentFile[]>([]);
  const [version, setVersion] = useState<string | null>(null);

  const [update, setUpdate] = useState<UpdateStatus | null>(null);

  useEffect(() => {
    window.folioDesktop?.getAppInfo().then((info) => setVersion(info.version)).catch(() => {});
    return window.folioDesktop?.onUpdateStatus?.(setUpdate);
  }, []);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    void listRecent().then(files => { if (!cancelled) setRecent(files); });
    return () => { cancelled = true; };
  }, [active]);

  const forget = async (id: string) => {
    await removeRecent(id);
    setRecent((r) => r.filter((f) => f.id !== id));
  };

  return (
    <div className="welcome">
      <div className="welcome-inner">
        <div className="hero">
          <h1>{t("Read beautifully.")}</h1>
          <p>{t("A calm, fast PDF reader. Your files never leave this device.")}</p>
        </div>

        <button className="dropzone" onClick={onPick} disabled={loading}>
          <div className="dropzone-icon">
            <Icon name={loading ? "file" : "upload"} size={26} />
          </div>
          <div className="dropzone-text">
            <strong>{loading ? t("Opening…") : t("Open a PDF")}</strong>
            <span>{window.folioDesktop ? t("Drop a PDF, a Word document, a link, or a webpage anywhere, or click to browse")
              : t("Drop a PDF, a link, or a webpage anywhere, or click to browse")}</span>
          </div>
          <kbd>{keys("Ctrl O")}</kbd>
        </button>

        <div className="welcome-links">
          <button className="link" onClick={onOpenUrl} disabled={loading}>
            <Icon name="link" size={15} /> {t("Open from URL")}
          </button>
          <button className="link" onClick={onSample}>
            <Icon name="book" size={15} /> {t("Try a sample document")}
          </button>
        </div>

        {recent.length > 0 && (
          <section className="recent">
            <div className="recent-head">
              <h3>{t("Recent")}</h3>
              <button
                className="link"
                onClick={async () => {
                  if (!confirm(t("Remove all recent files from Folio? The original files aren't affected."))) return;
                  await clearRecent();
                  setRecent([]);
                }}
              >
                {t("Clear all")}
              </button>
            </div>
            <div className="recent-grid">
              {recent.map((f) => (
                <div key={f.id} className="recent-card" onClick={() => onOpenRecent(f)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onOpenRecent(f)}>
                  <div className="recent-thumb">
                    {f.thumb ? <img src={f.thumb} alt="" /> : <Icon name="file" size={28} />}
                    {f.lastPage > 1 && (
                      <span className="recent-progress" style={{ width: `${(f.lastPage / f.pages) * 100}%` }} />
                    )}
                  </div>
                  <div className="recent-meta">
                    <strong title={f.name}>{f.name.replace(/\.pdf$/i, "")}</strong>
                    <span>
                      {timeAgo(f.openedAt)} · {plural(f.pages, { one: "{n} page", few: "{n} pages (2-4)", other: "{n} pages" })} · {formatBytes(f.size)}
                    </span>
                  </div>
                  <button
                    className="recent-remove"
                    title={t("Remove from recent")}
                    onClick={(e) => {
                      e.stopPropagation();
                      forget(f.id);
                    }}
                  >
                    <Icon name="close" size={13} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {version && (
          <p className="version">
            Folio {version}
            {update && <UpdateLine status={update} />}
          </p>
        )}
      </div>
    </div>
  );
}
