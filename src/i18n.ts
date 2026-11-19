// Translations. English text is the key: t("Save copy") returns the Czech text when Folio runs in Czech, and the
// English text itself otherwise (or when a string has no translation yet), so untranslated text still reads fine.
//
// The language follows the computer: the desktop app passes the system's preferred language (electron/i18n.cjs),
// the browser edition uses the browser's. FOLIO_LANG (desktop) or localStorage "folio:language" can force one.
//
// Czech strings live in src/locales/cs/*.ts, one file per area of the app, each a default-exported
// Record<English, Czech>. Placeholders are written {name} in both languages: t("Opening {host}…", { host }).

export type Language = "en" | "cs";

const dictionaries = import.meta.glob<Record<string, string>>("./locales/cs/*.ts", { eager: true, import: "default" });
const cs: Record<string, string> = Object.assign({}, ...Object.values(dictionaries));

function parentDesktopLanguage() {
  try { return window.parent !== window ? window.parent.folioDesktop?.language : undefined; } catch { return undefined; }
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
  return /^cs\b/i.test(preferred) ? "cs" : "en";
}

export const LANGUAGE: Language = detect();
/** The BCP 47 tag for dates and numbers in the UI language. */
export const LOCALE = LANGUAGE === "cs" ? "cs-CZ" : undefined;

if (typeof document !== "undefined") document.documentElement.lang = LANGUAGE;

function fill(text: string, vars?: Record<string, string | number>) {
  return vars ? text.replace(/\{(\w+)\}/g, (all, name: string) => (name in vars ? String(vars[name]) : all)) : text;
}

/**
 * Translates English UI text into the UI language. Unknown text is returned unchanged.
 * When the same English word needs different Czech (a verb and a noun), add a context after "@@":
 * t("Highlight@@noun") shows "Highlight" in English and looks up "Highlight@@noun" in Czech.
 */
export function t(text: string, vars?: Record<string, string | number>): string {
  const english = text.includes("@@") ? text.slice(0, text.indexOf("@@")) : text;
  return fill(LANGUAGE === "cs" ? cs[text] ?? english : english, vars);
}

/**
 * Picks the plural form for a count, in the UI language. English uses `one` and `other`; Czech also has `few`
 * (2–4). Each form is English text looked up with t(), and may use {n} for the count.
 * Example: plural(n, { one: "{n} page", few: "{n} pages (2-4)", other: "{n} pages" }) with Czech entries
 * "{n} page": "{n} strana", "{n} pages (2-4)": "{n} strany", "{n} pages": "{n} stran".
 */
export function plural(n: number, forms: { one: string; few?: string; other: string }, vars?: Record<string, string | number>): string {
  const all = { n, ...vars };
  if (n === 1) return t(forms.one, all);
  if (LANGUAGE === "cs" && forms.few && n >= 2 && n <= 4) return t(forms.few, all);
  return t(forms.other, all);
}
