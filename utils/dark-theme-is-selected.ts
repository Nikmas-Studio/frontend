import { Theme } from '@/types/theme';
import getSystemTheme from '@/utils/get-system-theme';

function darkThemeIsSelected(theme: Theme): boolean {
  return (
    theme === Theme.DARK ||
    (theme === Theme.SYSTEM && getSystemTheme() === Theme.DARK)
  );
}

export default darkThemeIsSelected;
