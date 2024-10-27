'use client';

import { BookVersion } from '@/types/book-version';
import { createContext, ReactElement, ReactNode, useContext } from 'react';

const BookVersionContext = createContext<BookVersion | null>(null);

export function BookVersionProvider({
  children,
  version,
}: {
  children: ReactNode;
  version: BookVersion;
}): ReactElement {
  return (
    <BookVersionContext.Provider value={version}>
      {children}
    </BookVersionContext.Provider>
  );
}

export function useBookVersion(): BookVersion {
  const context = useContext(BookVersionContext);

  if (!context) {
    throw new Error(
      'BookVersionContext must be used within a BookVersionProvider',
    );
  }

  return context;
}
