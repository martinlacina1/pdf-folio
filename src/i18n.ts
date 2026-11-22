// Translations. English text is the key: t("Save copy") returns the text in the UI language, and the English text
// itself when Folio runs in English (or when a string has no translation yet), so untranslated text still reads fine.
//
// The language follows the computer: the desktop app passes the system's preferred language (electron/i18n.cjs),
// the browser edition uses the browser's. FOLIO_LANG (desktop) or localStorage "folio:language" can force one.
//
// Translations live in src/locales/<language>/*.ts, one file per area of the app, each a default-exported
// Record<English, translation>. Placeholders are written {name} in every language: t("Opening {host}…", { host }).
// `npm run test:locales` checks that every language has every string with the same placeholders.

/** UI languages besides English, by their BCP 47 primary language subtag. */
export const LANGUAGES = ["cs", "sk", "de", "fr", "es", "it", "pt", "ru", "pl", "zh", "ja", "ko",
  "uk", "nl", "ro", "hu", "el", "sv", "sr", "bg", "hr", "da", "fi", "nb", "ca", "sq"] as const;
/** Each UI language in its own name, for the language picker in Settings. */
export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English", cs: "Čeština", sk: "Slovenčina", de: "Deutsch", fr: "Français", es: "Español", it: "Italiano",
  pt: "Português (Brasil)", ru: "Русский", pl: "Polski", zh: "中文（简体）", ja: "日本語", ko: "한국어",
  uk: "Українська", nl: "Nederlands", ro: "Română", hu: "Magyar", el: "Ελληνικά", sv: "Svenska", sr: "Srpski",
  bg: "Български", hr: "Hrvatski", da: "Dansk", fi: "Suomi", nb: "Norsk bokmål", ca: "Català", sq: "Shqip",
};
/** Other primary subtags that use one of the dictionaries above (Norwegian "no"/Nynorsk read Bokmål). */
const ALIASES: Record<string, string> = { no: "nb", nn: "nb" };
export type Language = "en" | (typeof LANGUAGES)[number];

const files = import.meta.glob<Record<string, string>>("./locales/*/*.ts", { eager: true, import: "default" });
const dictionaries: Partial<Record<Language, Record<string, string>>> = {};
for (const [file, entries] of Object.entries(files)) {
  const language = file.split("/")[2] as Language;
  dictionaries[language] = Object.assign(dictionaries[language] ?? {}, entries);
}

function parentDesktopLanguage() {
  try { return window.parent !== window ? window.parent.folioDesktop?.language : undefined; } catch { return undefined; }
}

/** The supported UI language for a BCP 47 tag such as "de-AT" or "zh-Hans-CN"; English when unsupported. */
export function languageFor(tag: string | null | undefined): Language {
  const subtag = (tag ?? "").toLowerCase().split(/[-_]/)[0];
  const primary = ALIASES[subtag] ?? subtag;
  return (LANGUAGES as readonly string[]).includes(primary) ? (primary as Language) : "en";
}

function detect(): Language {
  let forced: string | null = null;
  try { forced = typeof localStorage !== "undefined" ? localStorage.getItem("folio:language") : null; } catch {}
  const preferred = forced
    ?? (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.FOLIO_LANG
    // Document tabs are same-origin iframes that only copy the desktop bridge from the parent after this runs.
    ?? (typeof window !== "undefined" ? window.folioDesktop?.language ?? parentDesktopLanguage() : undefined)
    ?? (typeof navigator !== "undefined" ? navigator.languages?.[0] ?? navigator.language : undefined)
    ?? "en";
  return languageFor(preferred);
}

export const LANGUAGE: Language = detect();
const dictionary = LANGUAGE === "en" ? {} : dictionaries[LANGUAGE] ?? {};
// Serbian is translated in Latin script, so dates and numbers use it too.
const LOCALES: Partial<Record<Language, string>> = { cs: "cs-CZ", sk: "sk-SK", zh: "zh-CN", pt: "pt-BR", sr: "sr-Latn" };
/** The BCP 47 tag for dates and numbers in the UI language (undefined: the system's own). */
export const LOCALE = LANGUAGE === "en" ? undefined : LOCALES[LANGUAGE] ?? LANGUAGE;
const pluralRules = new Intl.PluralRules(LANGUAGE === "en" ? "en" : LOCALE);

if (typeof document !== "undefined") document.documentElement.lang = LANGUAGE;

function fill(text: string, vars?: Record<string, string | number>) {
  return vars ? text.replace(/\{(\w+)\}/g, (all, name: string) => (name in vars ? String(vars[name]) : all)) : text;
}

/**
 * Translates English UI text into the UI language. Unknown text is returned unchanged.
 * When the same English word needs different translations (a verb and a noun), add a context after "@@":
 * t("Highlight@@noun") shows "Highlight" in English and looks up "Highlight@@noun" in the dictionary.
 */
export function t(text: string, vars?: Record<string, string | number>): string {
  const english = text.includes("@@") ? text.slice(0, text.indexOf("@@")) : text;
  return fill(dictionary[text] ?? english, vars);
}

/**
 * Picks the plural form for a count, following the UI language's plural rules (Intl.PluralRules). Each form is
 * English text looked up with t(), and may use {n} for the count. English has no `few` form, so its key gets a
 * " (2-4)" suffix; translations put each language's forms under the three keys:
 *  - `one`: CLDR "one" (Czech/Slovak/German/… 1; Russian/Polish 1, 21, 31…),
 *  - `few`: CLDR "few" (Czech/Slovak/Russian/Polish 2–4, 22–24…), in other languages the same text as `other`,
 *  - `other`: everything else (Russian/Polish "many": 5–20, 25…; Chinese/Japanese/Korean: always).
 * Example: plural(n, { one: "{n} page", few: "{n} pages (2-4)", other: "{n} pages" }) with Czech entries
 * "{n} page": "{n} strana", "{n} pages (2-4)": "{n} strany", "{n} pages": "{n} stran".
 */
export function plural(n: number, forms: { one: string; few?: string; other: string }, vars?: Record<string, string | number>): string {
  const all = { n, ...vars };
  const category = pluralRules.select(n);
  if (category === "one") return t(forms.one, all);
  if (category === "few" && forms.few) return t(forms.few, all);
  return t(forms.other, all);
}
