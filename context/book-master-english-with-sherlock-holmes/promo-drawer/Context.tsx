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

interface PromoDrawerContextProps {
  drawerIsOpened: 'subscription' | 'demo' | null;
}

interface PromoDrawerDispatchContextProps {
  setDrawerIsOpened: Dispatch<SetStateAction<'subscription' | 'demo' | null>>;
}

const PromoDrawerContext = createContext<PromoDrawerContextProps | null>(null);

const PromoDrawerDispatchContext =
  createContext<PromoDrawerDispatchContextProps | null>(null);

export function PromoDrawerProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [drawerIsOpened, setDrawerIsOpened] = useState<
    'subscription' | 'demo' | null
  >(null);

  return (
    <PromoDrawerContext.Provider value={{ drawerIsOpened }}>
      <PromoDrawerDispatchContext.Provider value={{ setDrawerIsOpened }}>
        {children}
      </PromoDrawerDispatchContext.Provider>
    </PromoDrawerContext.Provider>
  );
}

export function usePromoDrawer(): PromoDrawerContextProps {
  const context = useContext(PromoDrawerContext);

  if (!context) {
    throw new Error(
      'TouchDeviceContext must be used within a TouchDeviceContextProvider',
    );
  }

  return context;
}

export function usePromoDrawerDispatch(): PromoDrawerDispatchContextProps {
  const context = useContext(PromoDrawerDispatchContext);

  if (!context) {
    throw new Error(
      'PromoDrawerDispatchContext must be used within a PromoDrawerDispatchContextProvider',
    );
  }

  return context;
}
