// pdf.js labels its editing controls (the toolbar under a selected drawing, its color picker, resize handles)
// from its own English messages, keyed by data-l10n-id. Folio puts its translations on the ones it shows.
import { t } from "./i18n";

type Label = { attribute: "title" | "aria-label"; text: () => string };

const LABELS: Record<string, Label[]> = {
  "pdfjs-editor-remove-ink-button": [{ attribute: "title", text: () => t("Remove drawing") }],
  "pdfjs-editor-remove-freetext-button": [{ attribute: "title", text: () => t("Remove text") }],
  "pdfjs-editor-remove-stamp-button": [{ attribute: "title", text: () => t("Remove image") }],
  "pdfjs-editor-remove-signature-button": [{ attribute: "title", text: () => t("Remove signature") }],
  "pdfjs-editor-remove-highlight-button": [{ attribute: "title", text: () => t("Remove highlight") }],
  "pdfjs-editor-colorpicker-button": [{ attribute: "title", text: () => t("Change color") }],
  "pdfjs-editor-color-picker-ink-input": [{ attribute: "title", text: () => t("Change color") }],
  "pdfjs-editor-color-picker-free-text-input": [{ attribute: "title", text: () => t("Change color") }],
  "pdfjs-editor-colorpicker-dropdown": [{ attribute: "aria-label", text: () => t("Color choices") }],
  "pdfjs-editor-colorpicker-yellow": [{ attribute: "title", text: () => t("Yellow") }],
  "pdfjs-editor-colorpicker-green": [{ attribute: "title", text: () => t("Green") }],
  "pdfjs-editor-colorpicker-blue": [{ attribute: "title", text: () => t("Blue") }],
  "pdfjs-editor-colorpicker-pink": [{ attribute: "title", text: () => t("Pink") }],
  "pdfjs-editor-colorpicker-red": [{ attribute: "title", text: () => t("Red") }],
  "pdfjs-editor-add-comment-button": [{ attribute: "title", text: () => t("Add comment") }],
  ...Object.fromEntries(["top-left", "top-middle", "top-right", "middle-right", "bottom-right", "bottom-middle", "bottom-left", "middle-left"]
    .map((corner) => [`pdfjs-editor-resizer-${corner}`, [{ attribute: "aria-label", text: () => t("Resize") } as Label]])),
};

function label(element: Element) {
  const labels = LABELS[element.getAttribute("data-l10n-id") ?? ""];
  if (!labels) return;
  for (const { attribute, text } of labels) {
    const value = text();
    // pdf.js fills in its English text asynchronously; this runs again when it does.
    if (element.getAttribute(attribute) !== value) element.setAttribute(attribute, value);
    if (attribute === "title" && element.getAttribute("aria-label") !== null && element.getAttribute("aria-label") !== value) {
      element.setAttribute("aria-label", value);
    }
  }
}

/** Keeps pdf.js's editing controls inside `root` in the UI language. */
export function translatePdfjsLabels(root: HTMLElement) {
  const scan = (node: Node) => {
    if (!(node instanceof Element)) return;
    label(node);
    node.querySelectorAll("[data-l10n-id]").forEach(label);
  };
  scan(root);
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "attributes") label(record.target as Element);
      else record.addedNodes.forEach(scan);
    }
  });
  observer.observe(root, { subtree: true, childList: true, attributes: true, attributeFilter: ["data-l10n-id", "title", "aria-label"] });
  return () => observer.disconnect();
}
