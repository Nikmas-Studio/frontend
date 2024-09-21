import {
  ReactElement,
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useRef,
} from 'react';

interface HeaderButtonsRefElements {
  lightModeIconRef: RefObject<SVGSVGElement>;
  accountIconRef: RefObject<HTMLDivElement>;
}

const HeaderButtonsContext = createContext<HeaderButtonsRefElements | null>(
  null,
);

interface HeaderButtonsContext {
  children: ReactNode;
}

export function HeaderButtonsProvider({
  children,
}: HeaderButtonsContext): ReactElement {
  const refElements = {
    lightModeIconRef: useRef<SVGSVGElement | null>(null),
    accountIconRef: useRef<HTMLDivElement | null>(null),
  };

  return (
    <HeaderButtonsContext.Provider value={refElements}>
      {children}
    </HeaderButtonsContext.Provider>
  );
}

export function useHeaderButtons(): HeaderButtonsRefElements {
  const context = useContext(HeaderButtonsContext);

  if (!context) {
    throw new Error('HeaderButtonsContext must be used within a HeaderButtonsProvider');
  }

  return context;
}
