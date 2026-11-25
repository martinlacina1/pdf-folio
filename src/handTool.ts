// The hand: drag the page to move around it instead of selecting text. It's on while the Hand tool is chosen,
// and for as long as Space is held with the Select tool. The middle mouse button drags the page with any tool.
// State for the styles (reading-tools.css): data-hand="ready" while dragging is possible, "dragging" during a drag.

const EDITABLE = "input, textarea, select, [contenteditable]:not([contenteditable='false'])";

export function enableHandTool(container: HTMLElement, handChosen: () => boolean, spaceAllowed: () => boolean) {
  const controller = new AbortController();
  const { signal } = controller;
  const win = container.ownerDocument.defaultView ?? window;
  let spaceHeld = false;
  let drag: { pointerId: number; x: number; y: number; left: number; top: number; moved: boolean } | null = null;
  let swallowClick = false;

  const update = () => {
    if (drag) container.dataset.hand = "dragging";
    else if (handChosen() || spaceHeld) container.dataset.hand = "ready";
    else delete container.dataset.hand;
  };

  container.addEventListener("pointerdown", event => {
    const middle = event.button === 1;
    if (drag || !event.isPrimary || event.pointerType === "touch" || !(middle || (event.button === 0 && (handChosen() || spaceHeld)))) return;
    // Form fields and links in the page keep working with the hand.
    if (!middle && (event.target as Element).closest(`.annotationLayer :is(${EDITABLE}, a)`)) return;
    event.preventDefault(); // no text selection, no middle-click autoscroll
    win.getSelection()?.removeAllRanges();
    drag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, left: container.scrollLeft, top: container.scrollTop, moved: false };
    container.setPointerCapture(event.pointerId);
    update();
  }, { signal });
  container.addEventListener("pointermove", event => {
    if (drag?.pointerId !== event.pointerId) return;
    container.scrollLeft = drag.left - (event.clientX - drag.x);
    container.scrollTop = drag.top - (event.clientY - drag.y);
    if (Math.abs(event.clientX - drag.x) + Math.abs(event.clientY - drag.y) > 3) drag.moved = true;
  }, { signal });
  const end = (event: PointerEvent) => {
    if (drag?.pointerId !== event.pointerId) return;
    swallowClick = drag.moved;
    drag = null;
    if (container.hasPointerCapture(event.pointerId)) container.releasePointerCapture(event.pointerId);
    update();
  };
  container.addEventListener("pointerup", end, { signal });
  container.addEventListener("pointercancel", end, { signal });
  container.addEventListener("lostpointercapture", end, { signal });
  // A drag isn't a click: it mustn't open the highlight or image menus where it ends.
  container.addEventListener("click", event => {
    if (swallowClick) { event.stopPropagation(); event.preventDefault(); }
    swallowClick = false;
  }, { signal, capture: true });
  container.addEventListener("pointerdown", () => { swallowClick = false; }, { signal, capture: true });
  // Chrome opens its autoscroll circle on middle-button mousedown; the drag replaces it.
  container.addEventListener("mousedown", event => { if (event.button === 1) event.preventDefault(); }, { signal });

  win.addEventListener("keydown", event => {
    if (event.code !== "Space" || event.ctrlKey || event.metaKey || event.altKey) return;
    const target = event.target as Element | null;
    if (target?.closest?.(`${EDITABLE}, [role=dialog], [role=menu], .modal`) || !spaceAllowed()) return;
    // A toolbar button keeps focus after a click; Space would press it again instead of grabbing the page.
    if (target instanceof HTMLElement && target.closest("button, [role=button]")) target.blur();
    event.preventDefault(); // Space would otherwise scroll a screen down
    if (!spaceHeld) { spaceHeld = true; update(); }
  }, { signal });
  const release = () => { if (spaceHeld) { spaceHeld = false; update(); } };
  win.addEventListener("keyup", event => { if (event.code === "Space") release(); }, { signal });
  win.addEventListener("blur", release, { signal });

  update();
  return { refresh: update, stop: () => { controller.abort(); delete container.dataset.hand; } };
}
