// Translations for text the main process shows itself (native dialogs, menus, errors it reports).
// Same rules as src/i18n.ts: English text is the key, unknown text comes back unchanged, {name} placeholders.
// Dictionaries are electron/locales/<language>.cjs. The language is the system's first preferred language;
// FOLIO_LANG=<language> forces one (tests run in English).
const { app } = require("electron");

// Keep in sync with LANGUAGES in src/i18n.ts.
const LANGUAGES = ["cs", "sk", "de", "fr", "es", "it", "pt", "ru", "pl", "zh", "ja", "ko",
  "uk", "nl", "ro", "hu", "el", "sv", "sr", "bg", "hr", "da", "fi", "nb", "ca", "sq"];
const ALIASES = { no: "nb", nn: "nb" };
const dictionaries = Object.fromEntries(LANGUAGES.map((code) => {
  try { return [code, require(`./locales/${code}.cjs`)]; } catch { return [code, {}]; }
}));
let language;

/** The supported language for a BCP 47 tag ("de-AT" → "de"), or "en". */
function languageFor(tag) {
  const subtag = String(tag ?? "").toLowerCase().split(/[-_]/)[0];
  const primary = ALIASES[subtag] ?? subtag;
  return LANGUAGES.includes(primary) ? primary : "en";
}

/** The UI language code. Read lazily: the system language is only reliable once Electron has started. */
function uiLanguage() {
  if (language) return language;
  const forced = process.env.FOLIO_LANG;
  let preferred = forced;
  if (!preferred) {
    try { preferred = app.getPreferredSystemLanguages?.()[0]; } catch {}
    if (!preferred && app.isReady()) preferred = app.getLocale();
  }
  const detected = languageFor(preferred);
  if (forced || app.isReady()) language = detected;
  return detected;
}

function t(text, vars) {
  const lang = uiLanguage();
  const out = lang === "en" ? text : dictionaries[lang]?.[text] ?? text;
  return vars ? out.replace(/\{(\w+)\}/g, (all, name) => (name in vars ? String(vars[name]) : all)) : out;
}

module.exports = { t, uiLanguage, LANGUAGES };
