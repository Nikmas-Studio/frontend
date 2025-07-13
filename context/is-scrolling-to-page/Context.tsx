import {
  createContext,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useContext,
  useRef,
} from 'react';

type IsScrollingToPageRef = MutableRefObject<boolean>;

const IsScrollingToPageContext = createContext<IsScrollingToPageRef | null>(
  null,
);

export function IsScrollingToPageProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const activePageRef = useRef(false);

  return (
    <IsScrollingToPageContext.Provider value={activePageRef}>
      {children}
    </IsScrollingToPageContext.Provider>
  );
}

export function useIsScrollingToPageRef(): IsScrollingToPageRef {
  const context = useContext(IsScrollingToPageContext);
  if (!context) {
    throw new Error(
      'useIsScrollingToPageRef must be used within an IsScrollingToPageProvider',
    );
  }
  return context;
}
