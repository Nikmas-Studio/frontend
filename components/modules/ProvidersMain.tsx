'use client';

import { BookSectionStateProvider } from '@/context/book-section/Context';
import { ReactElement, ReactNode } from 'react';

function ProvidersMain({ children }: { children: ReactNode }): ReactElement {
  return <BookSectionStateProvider>{children}</BookSectionStateProvider>;
}

export default ProvidersMain;
