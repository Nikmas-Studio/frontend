import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface BookSectionStateContextProps {
  bookSectionInViewport: boolean;
}

interface BookSectionStateDispatchContextProps {
  setBookSectionInViewport: Dispatch<SetStateAction<boolean>>;
}

const BookSectionStateContext =
  createContext<BookSectionStateContextProps | null>(null);
const BookSectionStateDispatchContext =
  createContext<BookSectionStateDispatchContextProps | null>(null);

export function BookSectionStateProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [bookSectionInViewport, setBookSectionInViewport] =
    useState<boolean>(false);

  return (
    <BookSectionStateContext.Provider value={{ bookSectionInViewport }}>
      <BookSectionStateDispatchContext.Provider
        value={{ setBookSectionInViewport }}
      >
        {children}
      </BookSectionStateDispatchContext.Provider>
    </BookSectionStateContext.Provider>
  );
}

export function useBookSectionState() {
  const context = useContext(BookSectionStateContext);

  if (!context) {
    throw new Error(
      'BookSectionStateContext must be used within a BookSectionStateProvider',
    );
  }

  return context;
}

export function useBookSectionStateDispatch() {
  const context = useContext(BookSectionStateDispatchContext);

  if (!context) {
    throw new Error(
      'BookSectionStateDispatchContext must be used within a BookSectionStateProvider',
    );
  }

  return context;
}
