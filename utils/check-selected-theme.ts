import { Theme } from '@/types/theme';
import getSystemTheme from '@/utils/get-system-theme';

export function darkThemeIsSelected(theme: Theme): boolean {
  return (
    theme === Theme.DARK ||
    (theme === Theme.SYSTEM && getSystemTheme() === Theme.DARK)
  );
}

export function lightThemeIsSelected(theme: Theme): boolean {
  return (
    theme === Theme.LIGHT ||
    (theme === Theme.SYSTEM && getSystemTheme() === Theme.LIGHT)
  );
}

export function getSelectedThemeByDocumentClass(): Theme.DARK | Theme.LIGHT {
  if (typeof window === 'undefined') {
    return Theme.LIGHT;
  } else {
    return document.documentElement.classList.contains('dark')
      ? Theme.DARK
      : Theme.LIGHT;
  }

}
