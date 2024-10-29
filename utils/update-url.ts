interface Options {
  basePath: string;
  page?: number;
}

export function updateUrl({ page, basePath }: Options): void {
  console.log('updateUrl', page, basePath);

  if (page === undefined) {
    window.requestAnimationFrame(() => {
      window.history.replaceState(null, '', basePath);
    });

    return;
  }

  window.requestAnimationFrame(() => {
    window.history.replaceState(null, '', `${basePath}/${page}`);
  });
}
