'use client';

import { BookSectionStateProvider } from '@/context/book-section/Context';
import { HeaderButtonsProvider } from '@/context/header-buttons/Context';
import { ThemeProvider } from '@/context/theme/Context';
import { ReactElement, ReactNode } from 'react';

function Providers({ children }: { children: ReactNode }): ReactElement {
  return (
    <ThemeProvider>
      <BookSectionStateProvider>
        <HeaderButtonsProvider>{children}</HeaderButtonsProvider>
      </BookSectionStateProvider>
    </ThemeProvider>
  );
}

export default Providers;
