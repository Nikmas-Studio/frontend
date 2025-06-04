import { ActivePage } from '@/types/active-page';
import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ActivePageContextProps {
  activePage: ActivePage;
}

interface ActivePageDispatchContextProps {
  setActivePage: Dispatch<SetStateAction<ActivePage>>;
}

const ActivePageContext = createContext<ActivePageContextProps | null>(null);

const ActivePageDispatchContext =
  createContext<ActivePageDispatchContextProps | null>(null);

export function ActivePageProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [activePage, setActivePage] = useState<ActivePage>('');

  return (
    <ActivePageContext.Provider value={{ activePage: activePage }}>
      <ActivePageDispatchContext.Provider value={{ setActivePage }}>
        {children}
      </ActivePageDispatchContext.Provider>
    </ActivePageContext.Provider>
  );
}

export function useActivePage(): ActivePageContextProps {
  const context = useContext(ActivePageContext);

  if (!context) {
    throw new Error(
      'ActivePageContext must be used within a ActivePageContextProvider',
    );
  }

  return context;
}

export function useActivePageDispatch(): ActivePageDispatchContextProps {
  const context = useContext(ActivePageDispatchContext);

  if (!context) {
    throw new Error(
      'ActivePageDispatchContext must be used within a ActivePageDispatchContextProvider',
    );
  }

  return context;
}
