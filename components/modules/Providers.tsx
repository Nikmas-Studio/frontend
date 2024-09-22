'use client';

import { BookSectionStateProvider } from '@/context/book-section/Context';
import { HeaderButtonsProvider } from '@/context/header-buttons/Context';
import { ReactElement, ReactNode } from 'react';

function Providers({ children }: { children: ReactNode }): ReactElement {
  return (
    <BookSectionStateProvider>
      <HeaderButtonsProvider>{children}</HeaderButtonsProvider>
    </BookSectionStateProvider>
  );
}

export default Providers;
