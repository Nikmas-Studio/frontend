import { Theme } from '@/types/theme';

function getSystemTheme(): Theme {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.Dark;
  }

  return Theme.Light;
}

export default getSystemTheme;