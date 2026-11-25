import { AnnotationEditorType } from "pdfjs-dist";
import type { PDFViewer } from "./viewer";

export type Shape = "Line" | "Rectangle" | "Oval" | "Arrow";
/** How an arrow ends: an open "V", a filled head, or a head at both ends. */
export type ArrowStyle = "open" | "filled" | "double";
export const ARROW_STYLES: ArrowStyle[] = ["open", "filled", "double"];
/** Inside a rectangle or oval: nothing, the line color, or the line color seen through. */
export type Fill = "none" | "solid" | "translucent";
export const FILLS: Fill[] = ["none", "solid", "translucent"];
/** What a shape keeps besides its color and width, so a drawn shape can be changed later. */
export interface ShapeStyle { arrow: ArrowStyle; arrowSize: number; fill: Fill }
/** Line widths offered for drawing, in PDF points. */
export const INK_WIDTHS = [1, 2, 3, 5, 8];
export const DEFAULT_INK_WIDTH = 3;
type Point = [number, number];

/** A see-through fill makes the whole shape see-through: ink has one opacity. */
export const shapeOpacity = (shape: Shape, style: ShapeStyle) => fills(shape) && style.fill === "translucent" ? 0.35 : 1;
export const fills = (shape: Shape) => shape === "Rectangle" || shape === "Oval";

/** The head at `tip` of a line coming from `from`: its two wings, or (filled) a fan of strokes covering it. */
function head(from: Point, tip: Point, size: number, filled: boolean, width: number): Point[][] {
  const angle = Math.atan2(tip[1] - from[1], tip[0] - from[0]);
  const length = Math.min(size, Math.hypot(tip[0] - from[0], tip[1] - from[1]) / 2);
  const wing = (offset: number): Point => [tip[0] - length * Math.cos(angle + offset), tip[1] - length * Math.sin(angle + offset)];
  const left = wing(0.45), right = wing(-0.45);
  if (!filled) return [[left, tip], [tip, right]];
  // Ink can only stroke, so a solid head is strokes from the tip to points across its base, close enough to touch.
  const base = Math.hypot(left[0] - right[0], left[1] - right[1]);
  const steps = Math.max(2, Math.ceil(base / Math.max(0.5, width * 0.6)));
  const fan = Array.from({ length: steps + 1 }, (_, i): Point[] => {
    const t = i / steps;
    return [tip, [left[0] + (right[0] - left[0]) * t, left[1] + (right[1] - left[1]) * t]];
  });
  return [[left, tip, right, left], ...fan];
}

/**
 * A fill as straight strokes across the shape, close enough to overlap. Their round ends stop half a stroke inside
 * the outline. One stroke command paints them all, so a see-through fill stays even.
 */
function fillRows(shape: Shape, start: Point, end: Point, width: number): Point[][] {
  const left = Math.min(start[0], end[0]), right = Math.max(start[0], end[0]);
  const top = Math.min(start[1], end[1]), bottom = Math.max(start[1], end[1]);
  const inset = width / 2;
  const step = Math.max(width * 0.8, (bottom - top) / 1500);
  const rows: Point[][] = [];
  const cx = (left + right) / 2, cy = (top + bottom) / 2, rx = (right - left) / 2, ry = (bottom - top) / 2;
  for (let y = top + inset; y <= bottom - inset + 0.001; y += step) {
    let from = left + inset, to = right - inset;
    if (shape === "Oval") {
      const half = rx * Math.sqrt(Math.max(0, 1 - ((y - cy) / ry) ** 2)) - inset;
      from = cx - half; to = cx + half;
    }
    if (to > from) rows.push([[from, y], [to, y]]);
  }
  return rows;
}

/**
 * With Ctrl (or Shift) held: a rectangle becomes a square and an oval a circle; a line or arrow keeps to the nearest
 * 45° direction.
 */
function constrain(shape: Shape, start: Point, end: Point): Point {
  const dx = end[0] - start[0], dy = end[1] - start[1];
  if (fills(shape)) {
    const side = Math.max(Math.abs(dx), Math.abs(dy));
    return [start[0] + Math.sign(dx || 1) * side, start[1] + Math.sign(dy || 1) * side];
  }
  const angle = Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) * (Math.PI / 4), length = Math.hypot(dx, dy);
  return [start[0] + length * Math.cos(angle), start[1] + length * Math.sin(angle)];
}

/**
 * The strokes of a shape from `start` to `end`. `unit` is the size of a PDF point in these coordinates (the zoom on
 * screen, 1 in PDF space). The outline always comes first, so the ends can be read back (see `shapeEnds`).
 */
export function strokes(shape: Shape, start: Point, end: Point, unit: number, width: number, style: ShapeStyle): Point[][] {
  const [x, y] = start, [a, b] = end;
  if (shape === "Line") return [[start, end]];
  if (shape === "Arrow") {
    // The head grows with the line, so thick arrows keep their shape.
    const size = Math.max(12, 4 * width) * style.arrowSize * unit, filled = style.arrow === "filled";
    const lines: Point[][] = [[start, end]];
    lines.push(...head(start, end, size, filled, width * unit));
    if (style.arrow === "double") lines.push(...head(end, start, size, false, width * unit));
    return lines;
  }
  const fill = style.fill === "none" ? [] : fillRows(shape, start, end, width * unit);
  if (shape === "Rectangle") {
    // Individual straight segments keep pdf.js from smoothing the corners as freehand ink.
    return [[start, [a, y]], [[a, y], end], [end, [x, b]], [[x, b], start], ...fill];
  }
  const oval = Array.from({ length: 64 }, (_, i): Point => {
    const angle = i * Math.PI / 32;
    return [(a + x + (a - x) * Math.cos(angle)) / 2, (b + y + (b - y) * Math.sin(angle)) / 2];
  });
  // The ink fitter ends midway between its final two samples.
  return [[...oval, oval[0], oval[0]], ...fill];
}

/** Where a drawn shape starts and ends, read from its saved strokes (PDF points, as pdf.js serializes them). */
export function shapeEnds(shape: Shape, points: ArrayLike<number>[]): [Point, Point] | null {
  const first = points[0], second = points[1];
  if (!first || first.length < 4) return null;
  if (shape === "Line" || shape === "Arrow") return [[first[0], first[1]], [first[2], first[3]]];
  if (shape === "Rectangle") return second && second.length >= 4 ? [[first[0], first[1]], [second[2], second[3]]] : null;
  const xs = Array.from(first).filter((_, i) => i % 2 === 0), ys = Array.from(first).filter((_, i) => i % 2 === 1);
  return [[Math.min(...xs), Math.min(...ys)], [Math.max(...xs), Math.max(...ys)]];
}

/** pdf.js editor data for a shape whose strokes are already in PDF points. */
export function shapeData(shape: Shape, pageIndex: number, paths: Point[][], color: number[], width: number, style: ShapeStyle) {
  const xs = paths.flat().map(p => p[0]), ys = paths.flat().map(p => p[1]);
  return { annotationType: AnnotationEditorType.INK, pageIndex, rotation: 0, thickness: width, opacity: shapeOpacity(shape, style),
    color, rect: [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)],
    paths: { points: paths.map(line => Float32Array.from(line.flat())) } };
}

export function drawShapes(container: HTMLElement, viewer: PDFViewer, shape: Shape, color: string, width: number,
  style: ShapeStyle, add: (pageIndex: number, data: Record<string, unknown>) => void) {
  const listeners = new AbortController();
  let cancel: (() => void) | undefined;

  container.addEventListener("pointerdown", down => {
    const layer = down.target;
    if (cancel || !down.isPrimary || down.button !== 0 || !(layer instanceof HTMLElement)
      || !layer.matches(".annotationEditorLayer.inkEditing")) return;
    const page = layer.closest<HTMLElement>(".page")!;
    const pageIndex = Number(page.dataset.pageNumber) - 1;
    const view = viewer.getPageView(pageIndex);
    const surface = page.querySelector(".canvasWrapper");
    if (!view?.viewport || !surface) return;
    down.preventDefault();
    down.stopPropagation();
    const viewport = view.viewport;
    const localPoint = (event: PointerEvent): Point => {
      const box = surface.getBoundingClientRect();
      return [Math.max(0, Math.min(1, (event.clientX - box.left) / box.width)) * viewport.width,
        Math.max(0, Math.min(1, (event.clientY - box.top) / box.height)) * viewport.height];
    };
    const start = localPoint(down);
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS(svg.namespaceURI!, "path");
    svg.classList.add("shape-preview");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("viewBox", `0 0 ${viewport.width} ${viewport.height}`);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-opacity", String(shapeOpacity(shape, style)));
    path.setAttribute("stroke-width", String(viewport.scale * width));
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.append(path);
    page.append(svg);
    const gesture = new AbortController();
    const options = { signal: gesture.signal, capture: true };
    const finish = () => {
      gesture.abort();
      cancel = undefined;
      svg.remove();
      if (layer.hasPointerCapture(down.pointerId)) layer.releasePointerCapture(down.pointerId);
    };
    cancel = finish;
    layer.setPointerCapture(down.pointerId);
    layer.addEventListener("pointermove", event => {
      if (event.pointerId !== down.pointerId) return;
      const point = localPoint(event);
      const paths = strokes(shape, start, event.ctrlKey || event.shiftKey ? constrain(shape, start, point) : point, viewport.scale, width, style);
      path.setAttribute("d", paths.map(points => "M" + points.map(p => p.join(" ")).join(" L")).join(" "));
    }, options);
    layer.addEventListener("pointerup", event => {
      if (event.pointerId !== down.pointerId) return;
      event.stopPropagation();
      const end = event.ctrlKey || event.shiftKey ? constrain(shape, start, localPoint(event)) : localPoint(event);
      finish();
      const dx = Math.abs(start[0] - end[0]), dy = Math.abs(start[1] - end[1]);
      if ((shape === "Arrow" || shape === "Line" ? Math.hypot(dx, dy) : Math.min(dx, dy)) < 2) return;
      // Strokes in PDF points, so the fill rows are spaced for the line width whatever the zoom.
      const [p1, p2] = [start, end].map(([x, y]) => viewport.convertToPdfPoint(x, y) as Point);
      add(pageIndex, shapeData(shape, pageIndex, strokes(shape, p1, p2, 1, width, style),
        [1, 3, 5].map(i => parseInt(color.slice(i, i + 2), 16)), width, style));
    }, options);
    const cancelled = (event: PointerEvent) => { if (event.pointerId === down.pointerId) finish(); };
    layer.addEventListener("pointercancel", cancelled, options);
    layer.addEventListener("lostpointercapture", cancelled, options);
    window.addEventListener("blur", finish, options);
  }, { signal: listeners.signal, capture: true });
  return () => { cancel?.(); listeners.abort(); };
}
