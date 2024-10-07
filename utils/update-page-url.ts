interface Options {
  basePath: string;
  page?: number;
}

export function updatePageUrl({ page, basePath }: Options): void {
  if (page === undefined) {
    window.history.replaceState(null, '', basePath);
    return;
  }

  window.history.replaceState(null, '', `${basePath}/${page}`);
}
