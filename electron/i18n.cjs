// Translations for text the main process shows itself (native dialogs, menus, errors it reports).
// Same rules as src/i18n.ts: English text is the key, unknown text comes back unchanged, {name} placeholders.
// Dictionaries are electron/locales/<language>.cjs. The language is the system's first preferred language;
// FOLIO_LANG=<language> forces one (tests run in English).
const { app } = require("electron");
const fs = require("node:fs");
const path = require("node:path");

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

// The language chosen in Settings ("auto" follows the system), kept beside Folio's other settings.
const settingFile = () => path.join(app.getPath("userData"), "language-settings.json");
function languageSetting() {
  try {
    const value = JSON.parse(fs.readFileSync(settingFile(), "utf8")).language;
    return value === "en" || LANGUAGES.includes(value) ? value : "auto";
  } catch { return "auto"; }
}
/** Saves the Settings choice; it takes effect the next time Folio starts. */
function setLanguageSetting(value) {
  if (value !== "auto" && value !== "en" && !LANGUAGES.includes(value)) throw new Error("Invalid language");
  const file = settingFile();
  fs.writeFileSync(file + ".tmp", JSON.stringify({ language: value }));
  fs.renameSync(file + ".tmp", file);
  return value;
}

/** The UI language code. Read lazily: the system language is only reliable once Electron has started. */
function uiLanguage() {
  if (language) return language;
  const chosen = languageSetting();
  const forced = process.env.FOLIO_LANG || (chosen !== "auto" ? chosen : undefined);
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

module.exports = { t, uiLanguage, LANGUAGES, languageSetting, setLanguageSetting };
