import { Theme } from '@/types/theme';

function getSystemTheme(): Theme {
  if (typeof window !== 'undefined') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return Theme.DARK;
    }
  }

  return Theme.LIGHT;
}

export default getSystemTheme;
