// Checks the translations: every language has the same keys as the reference language (Czech, which covers all
// UI text), with the same {placeholders}, in both the page (src/locales/<lang>/*.ts) and the main process
// (electron/locales/<lang>.cjs). Also checks that every literal t("…") key used in src/ is translated.
// Run: npm run test:locales
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const REFERENCE = "cs";
const src = (...p) => path.join(root, "src", ...p);

/** Reads a dictionary file (a default-exported object literal) without TypeScript tooling. */
function readObject(file) {
  const text = readFileSync(file, "utf8");
  return Function(`return (${text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1)});`)();
}
function pageDictionary(lang) {
  const dir = src("locales", lang);
  if (!existsSync(dir)) return null;
  return Object.assign({}, ...readdirSync(dir).filter((f) => f.endsWith(".ts")).map((f) => readObject(path.join(dir, f))));
}
function mainDictionary(lang) {
  const file = path.join(root, "electron", "locales", `${lang}.cjs`);
  return existsSync(file) ? readObject(file) : null;
}
const vars = (s) => [...String(s).matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(",");

const languages = readFileSync(src("i18n.ts"), "utf8").match(/LANGUAGES = \[([^\]]+)\]/)[1].match(/"(\w+)"/g).map((s) => s.slice(1, -1));
const problems = [];

// Keys used in code must exist in the reference dictionary.
const reference = { page: pageDictionary(REFERENCE), main: mainDictionary(REFERENCE) };
const call = /\b(?:t|tr)\(\s*"((?:[^"\\]|\\.)*)"/g;
const form = /\b(?:one|few|other):\s*"((?:[^"\\]|\\.)*)"/g;
for (const f of readdirSync(src()).filter((f) => /\.tsx?$/.test(f) && f !== "i18n.ts")) {
  const code = readFileSync(src(f), "utf8");
  for (const re of [call, form]) for (const m of code.matchAll(re)) {
    const key = JSON.parse(`"${m[1]}"`);
    if (!(key in reference.page)) problems.push(`${REFERENCE}: src/${f} uses "${key}" with no translation`);
  }
}

for (const lang of languages) {
  for (const [kind, ref, dict] of [["page", reference.page, pageDictionary(lang)], ["main", reference.main, mainDictionary(lang)]]) {
    if (!dict) { problems.push(`${lang}: no ${kind} dictionary`); continue; }
    const missing = Object.keys(ref).filter((k) => !(k in dict));
    const extra = Object.keys(dict).filter((k) => !(k in ref));
    const empty = Object.keys(dict).filter((k) => typeof dict[k] !== "string" || !dict[k].trim() && ref[k]?.trim());
    const badVars = Object.keys(dict).filter((k) => k in ref && vars(dict[k]) !== vars(k));
    if (missing.length) problems.push(`${lang} ${kind}: ${missing.length} missing, e.g. ${JSON.stringify(missing.slice(0, 3))}`);
    if (extra.length) problems.push(`${lang} ${kind}: ${extra.length} unknown keys, e.g. ${JSON.stringify(extra.slice(0, 3))}`);
    if (empty.length) problems.push(`${lang} ${kind}: empty translations ${JSON.stringify(empty.slice(0, 3))}`);
    if (badVars.length) problems.push(`${lang} ${kind}: placeholders differ in ${JSON.stringify(badVars.slice(0, 3))}`);
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`PASS (${languages.length} languages: ${languages.join(", ")})`);
