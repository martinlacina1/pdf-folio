import { useEffect, useRef, useState } from "react";
import type { PDFDocumentProxy } from "./pdf";
import type { EventBus, PDFFindController } from "./viewer";
import { plural, t } from "./i18n";

interface PageResult {
  page: number;
  count: number;
  before: string;
  match: string;
  after: string;
}

export function SearchResults({ pdf, controller, bus, onSelect }: {
  pdf: PDFDocumentProxy;
  controller: PDFFindController;
  bus: EventBus;
  onSelect: (page: number) => void;
}) {
  const [results, setResults] = useState<PageResult[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const textCache = useRef(new Map<number, Promise<string>>());

  useEffect(() => {
    let generation = 0;
    let timer = 0;
    textCache.current.clear();
    const refresh = async () => {
      const request = ++generation;
      const pages = (controller.pageMatches ?? []).flatMap((matches: number[], index: number) =>
        matches?.length ? [{ page: index + 1, offset: matches[0], count: matches.length, length: controller.pageMatchesLength?.[index]?.[0] ?? 0 }] : []);
      setPageCount(pages.length);
      const next: PageResult[] = [];
      for (const entry of pages.slice(0, 100)) {
        if (request !== generation) return;
        let text = textCache.current.get(entry.page);
        if (!text) {
          text = pdf.getPage(entry.page).then(page => page.getTextContent()).then(content =>
            content.items.map(item => "str" in item ? item.str : "").join(""));
          textCache.current.set(entry.page, text);
        }
        const content = await text.catch(() => "");
        const offset = entry.offset;
        next.push({ page: entry.page, count: entry.count,
          before: (offset > 55 ? "..." : "") + content.slice(Math.max(0, offset - 55), offset),
          match: content.slice(offset, offset + entry.length),
          after: content.slice(offset + entry.length, offset + entry.length + 100) + (content.length > offset + entry.length + 100 ? "..." : "") });
        if (next.length % 10 === 0 && request === generation) {
          setResults([...next]);
          await new Promise(resolve => window.setTimeout(resolve, 0));
        }
      }
      if (request === generation) setResults(next);
    };
    const schedule = () => {
      generation++;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => void refresh(), 100);
    };
    const clear = () => {
      generation++;
      window.clearTimeout(timer);
      setResults([]);
      setPageCount(0);
    };
    bus.on("updatetextlayermatches", schedule);
    bus.on("updatefindmatchescount", schedule);
    bus.on("find", clear);
    schedule();
    return () => {
      generation++;
      window.clearTimeout(timer);
      bus.off("updatetextlayermatches", schedule);
      bus.off("updatefindmatchescount", schedule);
      bus.off("find", clear);
    };
  }, [pdf, controller, bus]);

  return <aside className="search-results" aria-label={t("Search results")}>
    <h3>{t("Matching pages")} <span>{pageCount}</span></h3>
    {results.length === 0 && <p className="search-hint">{t("Search above to see matching pages. Enter and Shift+Enter navigate individual matches.")}</p>}
    <div className="search-result-list">
      {results.map(result => <button key={result.page} aria-label={plural(result.count, { one: "Go to page {page}, {n} match", few: "Go to page {page}, {n} matches (2-4)", other: "Go to page {page}, {n} matches" }, { page: result.page })} onClick={() => onSelect(result.page)}>
        <strong>{t("Page {page}", { page: result.page })} <span>{plural(result.count, { one: "{n} match", few: "{n} matches (2-4)", other: "{n} matches" })}</span></strong>
        <span>{result.before}<mark>{result.match}</mark>{result.after}</span>
      </button>)}
    </div>
    {pageCount > 100 && <p className="search-hint">{t("Showing the first 100 matching pages. Use Enter to reach every match.")}</p>}
  </aside>;
}
