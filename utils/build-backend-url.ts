export function buildBackendUrl(route: string): string {
  return `${process.env.NEXT_PUBLIC_BACKEND_URL}${route}`;
}
