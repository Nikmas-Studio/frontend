export function isInViewportWithinContainer(
  element: HTMLElement,
  container: HTMLElement,
): boolean {
  const elementRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return (
    elementRect.bottom > containerRect.top &&
    elementRect.top < containerRect.bottom &&
    elementRect.right > containerRect.left &&
    elementRect.left < containerRect.right
  );
}
