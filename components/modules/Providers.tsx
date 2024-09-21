'use client';

import { BookSectionStateProvider } from '@/context/book-section/Context';
import { HeaderButtonsProvider } from '@/context/header-buttons/Context';
import { ReactNode } from 'react';

function Providers({ children }: { children: ReactNode }) {
  return (
    <BookSectionStateProvider>
      <HeaderButtonsProvider>{children}</HeaderButtonsProvider>
    </BookSectionStateProvider>
  );
}

export default Providers;
