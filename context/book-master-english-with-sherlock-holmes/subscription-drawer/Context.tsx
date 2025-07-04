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

interface SubscriptionDrawerContextProps {
  drawerIsOpened: boolean;
}

interface SubscriptionDrawerDispatchContextProps {
  setDrawerIsOpened: Dispatch<SetStateAction<boolean>>;
}

const SubscriptionDrawerContext =
  createContext<SubscriptionDrawerContextProps | null>(null);

const SubscriptionDrawerDispatchContext =
  createContext<SubscriptionDrawerDispatchContextProps | null>(null);

export function SubscriptionDrawerProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [drawerIsOpened, setDrawerIsOpened] = useState(false);

  return (
    <SubscriptionDrawerContext.Provider value={{ drawerIsOpened }}>
      <SubscriptionDrawerDispatchContext.Provider value={{ setDrawerIsOpened }}>
        {children}
      </SubscriptionDrawerDispatchContext.Provider>
    </SubscriptionDrawerContext.Provider>
  );
}

export function useSubscriptionDrawer(): SubscriptionDrawerContextProps {
  const context = useContext(SubscriptionDrawerContext);

  if (!context) {
    throw new Error(
      'TouchDeviceContext must be used within a TouchDeviceContextProvider',
    );
  }

  return context;
}

export function useSubscriptionDrawerDispatch(): SubscriptionDrawerDispatchContextProps {
  const context = useContext(SubscriptionDrawerDispatchContext);

  if (!context) {
    throw new Error(
      'SubscriptionDrawerDispatchContext must be used within a SubscriptionDrawerDispatchContextProvider',
    );
  }

  return context;
}
