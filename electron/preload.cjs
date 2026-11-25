// Minimal bridge between the Folio page and the desktop shell.
const { contextBridge, ipcRenderer, webUtils } = require("electron");

const language = process.argv.find((a) => a.startsWith("--folio-language="))?.slice("--folio-language=".length);

contextBridge.exposeInMainWorld("folioDesktop", {
  language,
  /** Called with (name, data, note?) whenever a PDF is opened from Explorer, or a Word document has been converted. */
  onOpenFile(callback) {
    const listener = (_e, file) => callback(file.name, new Uint8Array(file.data), file.note ?? undefined, file.token, file.path ?? undefined);
    ipcRenderer.on("folio:open-file", listener);
    return () => ipcRenderer.removeListener("folio:open-file", listener);
  },
  /** Called with the file name when a Word document starts converting, and with a message if it fails. */
  onConverting(callback) {
    const listener = (_e, file) => callback(file.name, file.token);
    ipcRenderer.on("folio:converting", listener);
    return () => ipcRenderer.removeListener("folio:converting", listener);
  },
  onOpenFailed(callback) {
    const listener = (_e, failure) => callback(failure.message, failure.token);
    ipcRenderer.on("folio:open-failed", listener);
    return () => ipcRenderer.removeListener("folio:open-failed", listener);
  },
  onTabCommand(callback) {
    const listener = (_e, command) => callback(command);
    ipcRenderer.on("folio:tab-command", listener);
    return () => ipcRenderer.removeListener("folio:tab-command", listener);
  },
  /** Returns the converted PDF to the tab that opened the Word document. */
  openDocument: (file) => ipcRenderer.invoke("folio:open-document", webUtils.getPathForFile(file)),
  /** The disk path of a picked or dropped PDF, which "Save" may then overwrite; undefined if it has none. */
  pathForFile(file) {
    const filePath = webUtils.getPathForFile(file);
    if (!filePath || !/\.pdf$/i.test(filePath)) return undefined;
    ipcRenderer.send("folio:register-file", filePath);
    return filePath;
  },
  /** Overwrites a PDF that was opened from disk. */
  saveFile: (filePath, data) => ipcRenderer.invoke("folio:save-file", filePath, data),
  /** Asks where to save a document that has no file; resolves to the chosen path, or null if cancelled. */
  saveFileAs: (name, data) => ipcRenderer.invoke("folio:save-file-as", name, data),
  /** Whether a file remembered in Recent still holds the document with this content key (then Save may overwrite it). */
  verifyFile: (filePath, id) => ipcRenderer.invoke("folio:verify-file", filePath, id),
  /** Called when closing Folio should save every tab with unsaved changes first; resolve true if all were saved. */
  onSaveAll(callback) {
    const listener = (_e, id) => { void Promise.resolve(callback()).catch(() => false).then((ok) => ipcRenderer.send("folio:save-all-result", id, ok)); };
    ipcRenderer.on("folio:save-all", listener);
    return () => ipcRenderer.removeListener("folio:save-all", listener);
  },
  ready: () => ipcRenderer.invoke("folio:ready"),
  /** The language chosen in Settings ("auto" or a code) and the one Folio runs in now. */
  getLanguageSetting: () => ipcRenderer.invoke("folio:language-setting"),
  setLanguageSetting: (value) => ipcRenderer.invoke("folio:set-language-setting", value),
  /** Closes Folio (asking about unsaved changes as usual) and starts it again. */
  relaunch: () => ipcRenderer.send("folio:relaunch"),
  /** Shows a native right-click menu with these labels; resolves to the chosen index, or null when dismissed. */
  contextMenu: (labels) => ipcRenderer.invoke("folio:context-menu", labels),
  /** Puts the Folio window into full screen or back. */
  setFullScreen: (on) => ipcRenderer.send("folio:set-full-screen", !!on),
  /** Called with the window's new state whenever it enters or leaves full screen (also from the system, like F11). */
  onFullScreenChange(callback) {
    const listener = (_e, on) => callback(!!on);
    ipcRenderer.on("folio:full-screen", listener);
    return () => ipcRenderer.removeListener("folio:full-screen", listener);
  },
  platform: process.platform,
  openDownload: () => ipcRenderer.invoke("folio:open-download"),
  /** Downloads a PDF from an http(s) link; resolves to { name, data: Uint8Array }, or null if the user said no. */
  async fetchPdf(url) {
    const file = await ipcRenderer.invoke("folio:fetch-pdf", url);
    if (file.cancelled) return null;
    if (file.error) throw new Error(file.error);
    return { name: file.name, data: new Uint8Array(file.data) };
  },
  getAppInfo: () => ipcRenderer.invoke("folio:app-info"),
  openInstallation: () => ipcRenderer.invoke("folio:open-installation"),
  setTheme: (theme) => ipcRenderer.send("folio:theme", theme),
  installUpdate: () => ipcRenderer.send("folio:install-update"),
  /** Called with the updater state ({ state, version?, percent?, message? }) now and whenever it changes. */
  onUpdateStatus(callback) {
    const listener = (_e, status) => callback(status);
    ipcRenderer.on("folio:update-status-changed", listener);
    ipcRenderer.invoke("folio:update-state").then(callback);
    return () => ipcRenderer.removeListener("folio:update-status-changed", listener);
  },
  checkForUpdates: () => ipcRenderer.send("folio:check-update"),
  getAutoUpdateEnabled: () => ipcRenderer.invoke("folio:auto-update-setting"),
  setAutoUpdateEnabled: (enabled) => ipcRenderer.invoke("folio:set-auto-update-setting", enabled),
  ai: {
    status: () => ipcRenderer.invoke("folio:ai-status"),
    signInChatGPT: () => ipcRenderer.invoke("folio:ai-chatgpt-signin"),
    signOutChatGPT: () => ipcRenderer.invoke("folio:ai-chatgpt-signout"),
    chatgptWelcomeSeen: () => ipcRenderer.invoke("folio:ai-chatgpt-welcome-seen"),
    chatgptModels: () => ipcRenderer.invoke("folio:ai-chatgpt-models"),
    recheckClaude: () => ipcRenderer.invoke("folio:ai-claude-recheck"),
    ask: (request) => ipcRenderer.invoke("folio:ai-ask", request),
    cancel: (id) => ipcRenderer.invoke("folio:ai-cancel", id),
    /** Called with { id, type: "delta" | "done" | "error", text?, message?, code?, link? } for every answer. */
    onEvent(callback) {
      const listener = (_e, event) => callback(event);
      ipcRenderer.on("folio:ai-event", listener);
      return () => ipcRenderer.removeListener("folio:ai-event", listener);
    },
  },
});
