import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface EndOption {
  previousPage?: number;
}

interface CurrentPageOption {
  pageNumber: number;
  enterBack?: boolean;
}

interface UrlUpdateWithCurrentPage {
  currentPage: CurrentPageOption;
  end?: undefined;
}

interface UrlUpdateWithEnd {
  end: EndOption;
  currentPage?: undefined;
}

type UrlUpdate = UrlUpdateWithCurrentPage | UrlUpdateWithEnd;

interface PendingUrlUpdatesContextProps {
  pendingUrlUpdates: UrlUpdate[];
}

interface PendingUrlUpdatesDispatchContextProps {
  setPendingUrlUpdates: Dispatch<SetStateAction<UrlUpdate[]>>;
}

const PendingUrlUpdatesContext =
  createContext<PendingUrlUpdatesContextProps | null>(null);

const PendingUrlUpdatesDispatchContext =
  createContext<PendingUrlUpdatesDispatchContextProps | null>(null);

export function PendingUrlUpdatesProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [pendingUrlUpdates, setPendingUrlUpdates] = useState<UrlUpdate[]>([]);

  return (
    <PendingUrlUpdatesContext.Provider value={{ pendingUrlUpdates }}>
      <PendingUrlUpdatesDispatchContext.Provider
        value={{ setPendingUrlUpdates }}
      >
        {children}
      </PendingUrlUpdatesDispatchContext.Provider>
    </PendingUrlUpdatesContext.Provider>
  );
}

export function usePendingUrlUpdates(): PendingUrlUpdatesContextProps {
  const context = useContext(PendingUrlUpdatesContext);

  if (!context) {
    throw new Error(
      'PendingUrlUpdatesContext must be used within a PendingUrlUpdatesContextProvider',
    );
  }

  return context;
}

export function usePendingUrlUpdatedDispatch(): PendingUrlUpdatesDispatchContextProps {
  const context = useContext(PendingUrlUpdatesDispatchContext);

  if (!context) {
    throw new Error(
      'PendigingUrlUpdatesDispatchContext must be used within a PendingUrlUpdatesDispatchContextProvider',
    );
  }

  return context;
}
