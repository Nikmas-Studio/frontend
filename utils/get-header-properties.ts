import { Theme } from '@/types/theme';
import { darkThemeIsSelected } from './check-selected-theme';

export function getBackgroundImage(
  bookSectionInViewport: boolean,
  selectedTheme: Theme,
): string {
  if (bookSectionInViewport) {
    return 'linear-gradient(135deg,#ff5013,#271ad3)';
  }

  if (darkThemeIsSelected(selectedTheme)) {
    return 'linear-gradient(135deg,#000000,#000000)';
  } else {
    return 'linear-gradient(135deg,#ffffff,#ffffff)';
  }
}

export function getHeaderLogoColor(
  bookSectionInViewport: boolean,
  selectedTheme: Theme,
): string {
  if (bookSectionInViewport) {
    return 'white';
  }

  if (darkThemeIsSelected(selectedTheme)) {
    return 'white';
  } else {
    return 'black';
  }
}
