export function buildBookAccessRoute(bookUri: string): string {
  return `/api/books/${bookUri}/access`;
}