import { ActiveBackground } from '@/types/git-and-github-book/active-background';
import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ActiveBackgroundContextProps {
  activeBackground: ActiveBackground;
}

interface ActiveBackgroundDispatchContextProps {
  setActiveBackground: Dispatch<SetStateAction<ActiveBackground>>;
}

const ActiveBackgroundContext =
  createContext<ActiveBackgroundContextProps | null>(null);

const ActiveBackgroundDispatchContext =
  createContext<ActiveBackgroundDispatchContextProps | null>(null);

export function ActiveBackgroundProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [activeBackground, setActiveBackground] = useState(
    ActiveBackground.DEFAULT,
  );

  return (
    <ActiveBackgroundContext.Provider value={{ activeBackground }}>
      <ActiveBackgroundDispatchContext.Provider value={{ setActiveBackground }}>
        {children}
      </ActiveBackgroundDispatchContext.Provider>
    </ActiveBackgroundContext.Provider>
  );
}

export function useAciveBackground(): ActiveBackgroundContextProps {
  const context = useContext(ActiveBackgroundContext);

  if (!context) {
    throw new Error(
      'ActiveBackgroundContext must be used within a ActiveBackgroundContextProvider',
    );
  }

  return context;
}

export function useActiveBackgroundDispatch(): ActiveBackgroundDispatchContextProps {
  const context = useContext(ActiveBackgroundDispatchContext);

  if (!context) {
    throw new Error(
      'ActiveBackgroundDispatchContext must be used within a ActiveBackgroundDispatchContextProvider',
    );
  }

  return context;
}
