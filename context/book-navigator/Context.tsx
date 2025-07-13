import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface BookNavigatorContextProps {
  bookNavigatorIsOpened: boolean;
}

interface BookNavigatorDispatchContextProps {
  setBookNavigatorIsOpened: Dispatch<SetStateAction<boolean>>;
}

const BookNavigatorContext = createContext<BookNavigatorContextProps | null>(
  null,
);
const BookNavigatorDispatchContext =
  createContext<BookNavigatorDispatchContextProps | null>(null);

export function BookNavigatorProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [bookNavigatorIsOpened, setBookNavigatorIsOpened] = useState(false);

  return (
    <BookNavigatorContext.Provider value={{ bookNavigatorIsOpened }}>
      <BookNavigatorDispatchContext.Provider
        value={{ setBookNavigatorIsOpened }}
      >
        {children}
      </BookNavigatorDispatchContext.Provider>
    </BookNavigatorContext.Provider>
  );
}

export function useBookNavigator(): BookNavigatorContextProps {
  const context = useContext(BookNavigatorContext);

  if (!context) {
    throw new Error(
      'BookNavigatorContext must be used within a BookNavigatorContextProvider',
    );
  }

  return context;
}

export function useBookNavigatorDispatch(): BookNavigatorDispatchContextProps {
  const context = useContext(BookNavigatorDispatchContext);

  if (!context) {
    throw new Error(
      'BookNavigatorDispatchContext must be used within a BookNavigatorContextProvider',
    );
  }

  return context;
}
