'use client';

import {
  createContext,
  ReactElement,
  ReactNode,
  RefObject,
  useContext,
  useRef,
} from 'react';

const ButtonRefContext = createContext<RefObject<HTMLButtonElement> | null>(
  null,
);

export function ButtonRefProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <ButtonRefContext.Provider value={buttonRef}>
      {children}
    </ButtonRefContext.Provider>
  );
}

export function useButtonRef(): RefObject<HTMLButtonElement> | null {
  return useContext(ButtonRefContext);
}
