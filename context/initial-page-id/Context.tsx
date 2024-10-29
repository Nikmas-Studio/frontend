'use client';

import { createContext, ReactElement, ReactNode, useContext } from 'react';

const InitialPageIdContext = createContext<string | undefined>(undefined);

export function InitialPageIdProvider({
  children,
  initialPageId,
}: {
  children: ReactNode;
  initialPageId: string | undefined;
}): ReactElement {
  return (
    <InitialPageIdContext.Provider value={initialPageId}>
      {children}
    </InitialPageIdContext.Provider>
  );
}

export function useInitialPageId(): string | undefined {
  return useContext(InitialPageIdContext);
}
