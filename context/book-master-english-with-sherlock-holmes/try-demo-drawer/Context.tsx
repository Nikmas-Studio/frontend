'use client';

import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface TryDemoDrawerContextProps {
  drawerIsOpened: boolean;
}

interface TryDemoDrawerDispatchContextProps {
  setDrawerIsOpened: Dispatch<SetStateAction<boolean>>;
}

const TryDemoDrawerContext = createContext<TryDemoDrawerContextProps | null>(
  null,
);

const TryDemoDrawerDispatchContext =
  createContext<TryDemoDrawerDispatchContextProps | null>(null);

export function TryDemoDrawerProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [drawerIsOpened, setDrawerIsOpened] = useState(false);

  return (
    <TryDemoDrawerContext.Provider value={{ drawerIsOpened }}>
      <TryDemoDrawerDispatchContext.Provider value={{ setDrawerIsOpened }}>
        {children}
      </TryDemoDrawerDispatchContext.Provider>
    </TryDemoDrawerContext.Provider>
  );
}

export function useTryDemoDrawer(): TryDemoDrawerContextProps {
  const context = useContext(TryDemoDrawerContext);

  if (!context) {
    throw new Error(
      'TouchDeviceContext must be used within a TouchDeviceContextProvider',
    );
  }

  return context;
}

export function useTryDemoDrawerDispatch(): TryDemoDrawerDispatchContextProps {
  const context = useContext(TryDemoDrawerDispatchContext);

  if (!context) {
    throw new Error(
      'TryDemoDrawerDispatchContext must be used within a TryDemoDrawerDispatchContextProvider',
    );
  }

  return context;
}
