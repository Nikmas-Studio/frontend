import {
  createContext,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useContext,
  useRef,
} from 'react';

interface InitialScrollToPageStateContextProps {
  initialScrollToPageIsCompletedRef: MutableRefObject<boolean>;
}

const InitialScrollToPageStateContext =
  createContext<InitialScrollToPageStateContextProps | null>(null);

export function InitialScrollToPageStateProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const initialScrollToPageIsCompletedRef = useRef(false);

  return (
    <InitialScrollToPageStateContext.Provider
      value={{ initialScrollToPageIsCompletedRef }}
    >
      {children}
    </InitialScrollToPageStateContext.Provider>
  );
}

export function useInitialScrollToPageState(): InitialScrollToPageStateContextProps {
  const context = useContext(InitialScrollToPageStateContext);

  if (!context) {
    throw new Error(
      'InitialScrollToPageStateContext must be used within a InitialScrollToPageStateContextProvider',
    );
  }

  return context;
}
