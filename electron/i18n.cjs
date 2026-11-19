// Translations for text the main process shows itself (native dialogs, menus, errors it reports).
// Same rules as src/i18n.ts: English text is the key, unknown text comes back unchanged, {name} placeholders.
// The language is the system's first preferred language; FOLIO_LANG=en|cs forces one (tests run in English).
const { app } = require("electron");

const cs = require("./locales/cs.cjs");
let language;

/** "cs" or "en". Read lazily: the system language is only reliable once Electron has started. */
function uiLanguage() {
  if (language) return language;
  const forced = process.env.FOLIO_LANG;
  let preferred = forced;
  if (!preferred) {
    try { preferred = app.getPreferredSystemLanguages?.()[0]; } catch {}
    if (!preferred && app.isReady()) preferred = app.getLocale();
  }
  const detected = /^cs\b/i.test(preferred ?? "") ? "cs" : "en";
  if (forced || app.isReady()) language = detected;
  return detected;
}

function t(text, vars) {
  const out = uiLanguage() === "cs" ? cs[text] ?? text : text;
  return vars ? out.replace(/\{(\w+)\}/g, (all, name) => (name in vars ? String(vars[name]) : all)) : out;
}

module.exports = { t, uiLanguage };
