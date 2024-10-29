import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface InitialScrollToPageStateContextProps {
  initialScrollToPageIsCompleted: boolean;
}

interface InitialScrollToPageStateDispatchContextProps {
  setInitialScrollToPageIsCompleted: Dispatch<SetStateAction<boolean>>;
}

const InitialScrollToPageStateContext =
  createContext<InitialScrollToPageStateContextProps | null>(null);

const InitialScrollToPageStateDispatchContext =
  createContext<InitialScrollToPageStateDispatchContextProps | null>(null);

export function InitialScrollToPageStateProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [initialScrollToPageIsCompleted, setInitialScrollToPageIsCompleted] =
    useState(false);

  return (
    <InitialScrollToPageStateContext.Provider
      value={{ initialScrollToPageIsCompleted }}
    >
      <InitialScrollToPageStateDispatchContext.Provider
        value={{ setInitialScrollToPageIsCompleted }}
      >
        {children}
      </InitialScrollToPageStateDispatchContext.Provider>
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

export function useInitialScrollToPageStateDispatch(): InitialScrollToPageStateDispatchContextProps {
  const context = useContext(InitialScrollToPageStateDispatchContext);

  if (!context) {
    throw new Error(
      'InitialScrollToPageStateDispatchContext must be used within a InitialScrollToPageStateContextDispatchProvider',
    );
  }

  return context;
}
