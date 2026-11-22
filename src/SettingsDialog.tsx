import { useEffect, useState, type ReactNode } from "react";
import { Modal } from "./Dialogs";
import { CLAUDE_CODE_URL, signInChatGPT, USAGE_URL, type AiProvider } from "./ai";
import { updateSummary } from "./updates";
import { LANGUAGE, LANGUAGE_NAMES, LOCALE, t, type Language } from "./i18n";

const PROJECT_URL = "https://github.com/martinlacina1/pdf-folio";

/** One place for every Folio preference. */
interface Props {
  theme: string;
  onTheme: (theme: "light" | "dark") => void;
  night: boolean;
  onNight: (on: boolean) => void;
  wheelPaging: boolean;
  onWheelPaging: (on: boolean) => void;
  onOpenChangelog: () => void;
  onClose: () => void;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="settings-section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function Row({ label, hint, children }: { label: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <div className="settings-row">
      <div className="settings-label">
        <span>{label}</span>
        {hint && <small>{hint}</small>}
      </div>
      <div className="settings-control">{children}</div>
    </div>
  );
}

function Switch({ checked, onChange, label, disabled }: { checked: boolean; onChange: (on: boolean) => void; label: string; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      className={`switch ${checked ? "on" : ""}`}
      onClick={() => onChange(!checked)}
    >
      <span />
    </button>
  );
}

function Choice<T extends string>({ value, options, onChange, label }: { value: T; options: { id: T; name: string }[]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="segmented small" role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button key={o.id} role="radio" aria-checked={value === o.id} className={value === o.id ? "on" : ""} onClick={() => onChange(o.id)}>
          {o.name}
        </button>
      ))}
    </div>
  );
}

export function SettingsDialog({ theme, onTheme, night, onNight, wheelPaging, onWheelPaging, onOpenChangelog, onClose }: Props) {
  const desktop = window.folioDesktop;
  const ai = desktop?.ai;
  const [error, setError] = useState<string | null>(null);

  // Updates
  const [info, setInfo] = useState<Awaited<ReturnType<FolioDesktop["getAppInfo"]>> | null>(null);
  const [status, setStatus] = useState<UpdateStatus>({ state: "idle" });
  const [autoUpdate, setAutoUpdate] = useState<boolean | null>(null);
  const [savingUpdate, setSavingUpdate] = useState(false);
  useEffect(() => {
    if (!desktop) return;
    let cancelled = false;
    desktop.getAppInfo().then((i) => { if (!cancelled) setInfo(i); }).catch(() => {});
    desktop.getAutoUpdateEnabled().then((on) => { if (!cancelled) setAutoUpdate(on); }).catch(() => {});
    const unsubscribe = desktop.onUpdateStatus(setStatus);
    return () => { cancelled = true; unsubscribe?.(); };
  }, [desktop]);
  // Installed Windows copies and Linux AppImages update themselves; Macs check and offer the download.
  const updatable = info?.mode === "installed" || info?.mode === "appimage";
  // Unsigned Mac builds only announce updates (with a download link); signed ones install them.
  const notifyOnly = !!info?.notifyOnly;

  // Ask AI
  const [aiStatus, setAiStatus] = useState<AiStatus | null>(null);
  const [provider, setProvider] = useState(() => localStorage.getItem("folio:ai-provider") || "chatgpt");
  const [signingIn, setSigningIn] = useState(false);
  useEffect(() => { void ai?.status().then(setAiStatus).catch(() => {}); }, [ai]);

  // Language: "auto" follows the system. The choice applies when Folio starts again.
  const [language, setLanguage] = useState<string>(() => {
    if (desktop) return "auto";
    try { return localStorage.getItem("folio:language") ?? "auto"; } catch { return "auto"; }
  });
  const [startLanguage, setStartLanguage] = useState<string | null>(null);
  useEffect(() => {
    void desktop?.getLanguageSetting?.().then((value) => { setLanguage(value.setting); setStartLanguage(value.setting); }).catch(() => {});
  }, [desktop]);
  const languageChanged = desktop ? startLanguage !== null && language !== startLanguage : false;
  const chooseLanguage = async (value: string) => {
    setError(null);
    try {
      if (desktop?.setLanguageSetting) await desktop.setLanguageSetting(value);
      else if (value === "auto") localStorage.removeItem("folio:language");
      else localStorage.setItem("folio:language", value);
      setLanguage(value);
      if (!desktop) location.reload();
    } catch { setError(t("Couldn't save the language. Try again.")); }
  };

  // Signature
  const [savedSignature, setSavedSignature] = useState(() => {
    try { return !!localStorage.getItem("folio:signature"); } catch { return false; }
  });

  return (
    <Modal title={t("Settings")} onClose={onClose}>
      <div className="settings">
        {desktop && <p className="search-hint">{t("Manage language, appearance, updates, and Ask AI accounts.")}</p>}
        <Section title={t("Language")}>
          <Row label={t("Language")} hint={languageChanged
            ? t("The new language is used after Folio restarts.")
            : t("Automatic uses your system language ({language}).", { language: LANGUAGE_NAMES[LANGUAGE] })}>
            <div className="settings-language">
              <select aria-label={t("Language")} value={language} onChange={(event) => void chooseLanguage(event.target.value)}>
                <option value="auto">{t("Automatic (system language)")}</option>
                {(Object.entries(LANGUAGE_NAMES) as [Language, string][])
                  .sort((a, b) => a[1].localeCompare(b[1], LOCALE))
                  .map(([code, name]) => <option key={code} value={code}>{name}</option>)}
              </select>
              {languageChanged && desktop?.relaunch && <button className="btn primary" onClick={() => desktop.relaunch!()}>{t("Restart now")}</button>}
            </div>
          </Row>
        </Section>

        <Section title={t("Appearance")}>
          <Row label={t("Theme")}>
            <Choice label={t("Theme")} value={theme === "dark" ? "dark" : "light"} onChange={onTheme}
              options={[{ id: "light", name: t("Light") }, { id: "dark", name: t("Dark") }]} />
          </Row>
          <Row label={t("PDF dark mode")} hint={t("Dims bright pages for night reading. Images keep their colors.")}>
            <Switch label={t("PDF dark mode")} checked={night} onChange={onNight} />
          </Row>
        </Section>

        <Section title={t("Reading")}>
          <Row label={t("Scroll one page at a time")} hint={t("Turn a page with each mouse wheel click or trackpad swipe.")}>
            <Switch label={t("Scroll one page at a time")} checked={wheelPaging} onChange={onWheelPaging} />
          </Row>
        </Section>

        {desktop && (
          <Section title={t("Ask AI")}>
            <Row label={t("Default provider")} hint={t("Which assistant Ask AI opens with.")}>
              <Choice label={t("Default provider")} value={provider as AiProvider}
                onChange={(p) => { setProvider(p); localStorage.setItem("folio:ai-provider", p); }}
                options={[{ id: "chatgpt", name: "ChatGPT" }, { id: "claude", name: "Claude" }]} />
            </Row>
            <Row
              label="ChatGPT"
              hint={!aiStatus ? t("Checking…") : aiStatus.chatgpt.connected
                ? <>{aiStatus.chatgpt.email ? t("Signed in as {email}.", { email: aiStatus.chatgpt.email }) : t("Signed in.")} {t("Uses your ChatGPT plan")} · <a href={USAGE_URL} target="_blank" rel="noreferrer">{t("Manage usage")}</a></>
                : t("Use your ChatGPT plan (Go, Plus, or Pro). No API key needed.")}
            >
              {aiStatus?.chatgpt.connected ? (
                <button className="btn ghost" onClick={async () => setAiStatus({ ...aiStatus, chatgpt: await ai!.signOutChatGPT() })}>{t("Sign out")}</button>
              ) : (
                <button className="btn primary" disabled={!aiStatus || signingIn} onClick={async () => {
                  setSigningIn(true);
                  setError(null);
                  const result = await signInChatGPT(ai!);
                  setSigningIn(false);
                  setError(result.error);
                  setAiStatus(result.status);
                }}>{signingIn ? t("Waiting for browser…") : t("Continue with ChatGPT")}</button>
              )}
            </Row>
            <Row
              label="Claude"
              hint={!aiStatus ? t("Checking…") : !aiStatus.claude.installed
                ? <>{t("Uses your Claude subscription through")} <a href={CLAUDE_CODE_URL} target="_blank" rel="noreferrer">Claude Code</a>. {t("Install it and sign in once.")}</>
                : aiStatus.claude.loggedIn
                  ? (aiStatus.claude.subscription
                    ? t("Claude Code {version} is signed in with your Claude subscription.", { version: aiStatus.claude.version ?? "" })
                    : t("Claude Code {version} is signed in.", { version: aiStatus.claude.version ?? "" })).replace("  ", " ")
                  : t("Claude Code is installed but not signed in. Run claude in a terminal and sign in.")}
            >
              <button className="btn ghost" disabled={!aiStatus} onClick={async () => setAiStatus({ ...aiStatus!, claude: await ai!.recheckClaude() })}>{t("Check again")}</button>
            </Row>
          </Section>
        )}

        <Section title={t("Signature")}>
          <Row label={t("Remembered signature")} hint={savedSignature
            ? t("Saved on this computer (unencrypted) for quick signing.")
            : t("None. You can choose to remember one when you sign a document.")}>
            <button className="btn ghost" disabled={!savedSignature} onClick={() => {
              try { localStorage.removeItem("folio:signature"); setSavedSignature(false); }
              catch { setError(t("Couldn't forget the signature. Please try again.")); }
            }}>{t("Forget")}</button>
          </Row>
        </Section>

        {desktop && (
          <Section title={t("Updates")}>
            {updatable && (
              <Row label={t("Automatic updates")} hint={autoUpdate === false
                ? t("Off: no background checks or downloads. You can still check manually.")
                : notifyOnly
                  ? t("Folio checks for new versions and lets you know; download them from the releases page.")
                  : t("Downloads updates in the background and installs them when Folio closes.")}>
                <Switch label={t("Automatic updates")} checked={autoUpdate === true} disabled={autoUpdate === null || savingUpdate} onChange={async (on) => {
                  setSavingUpdate(true);
                  setError(null);
                  try { setAutoUpdate(await desktop.setAutoUpdateEnabled(on)); }
                  catch { setError(t("Couldn't save the update setting. Try again.")); }
                  finally { setSavingUpdate(false); }
                }} />
              </Row>
            )}
            <Row label={`Folio ${info?.version ?? ""}`.trim()} hint={updateSummary(status) || (status.checkedAt ? t("Last checked {time}", { time: new Date(status.checkedAt).toLocaleString(LOCALE) }) : undefined)}>
              {updatable ? (
                <button className="btn ghost" disabled={status.state === "checking" || status.state === "downloading"}
                  onClick={() => status.state === "ready" ? desktop.installUpdate() : status.state === "available" ? void desktop.openDownload() : desktop.checkForUpdates()}>
                  {status.state === "ready" ? t("Restart and update") : status.state === "available" ? t("Download {version}", { version: status.version ?? "" }) : t("Check for updates")}
                </button>
              ) : <button className="btn ghost" onClick={() => void desktop.openDownload()}>{t("Open releases page")}</button>}
            </Row>
          </Section>
        )}

        <Section title={t("About")}>
          <Row label={t("Author")} hint={t("{author}. Based on Folio by Forward Future (MIT license).", { author: "Martin Lacina" })}>
            <a className="btn ghost" href={PROJECT_URL} target="_blank" rel="noreferrer">{t("Project page")}</a>
          </Row>
          <Row label={t("What's new")} hint={t("Changes in each version of Folio.")}>
            <button className="btn ghost" onClick={onOpenChangelog}>{t("View changelog")}</button>
          </Row>
        </Section>

        {error && <p className="form-error">{t(error)}</p>}
      </div>
    </Modal>
  );
}
