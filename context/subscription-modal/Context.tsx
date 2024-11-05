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

interface SubscriptionModalContextProps {
  subscriptionModalIsOpened: boolean;
}

interface SubscriptionModalDispatchContextProps {
  setSubscriptionModalIsOpened: Dispatch<SetStateAction<boolean>>;
}

const SubscriptionModalContext =
  createContext<SubscriptionModalContextProps | null>(null);

const SubscriptionModalDispatchContext =
  createContext<SubscriptionModalDispatchContextProps | null>(null);

export function SubscriptionModalProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [subscriptionModalIsOpened, setSubscriptionModalIsOpened] =
    useState(false);

  return (
    <SubscriptionModalContext.Provider value={{ subscriptionModalIsOpened }}>
      <SubscriptionModalDispatchContext.Provider
        value={{ setSubscriptionModalIsOpened }}
      >
        {children}
      </SubscriptionModalDispatchContext.Provider>
    </SubscriptionModalContext.Provider>
  );
}

export function useSubscriptionModal(): SubscriptionModalContextProps {
  const context = useContext(SubscriptionModalContext);

  if (!context) {
    throw new Error(
      'SubscriptionModalContext must be used within a SubscriptionModalContextProvider',
    );
  }

  return context;
}

export function useSubscriptionModalDispatch(): SubscriptionModalDispatchContextProps {
  const context = useContext(SubscriptionModalDispatchContext);

  if (!context) {
    throw new Error(
      'SubscriptionModalDispatchContext must be used within a SubscriptionModalDispatchContextProvider',
    );
  }

  return context;
}
