'use client';

import { BookState, DetailedBookState } from '@/types/book-state';
import { buildBookAccessRoute } from '@/utils/build-book-access-route';
import axios from 'axios';
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface BookStateContextProps {
  bookState: DetailedBookState;
}

const BookStateContext = createContext<BookStateContextProps | null>(null);

interface BookStateProviderProps {
  bookURI: string;
  children: ReactNode;
}

export function BookStateProvider({
  bookURI,
  children,
}: BookStateProviderProps): ReactElement {
  const [bookState, setBookState] = useState<DetailedBookState>(
    BookState.LOADING,
  );

  useEffect(() => {
    async function defineBookState(): Promise<void> {
      try {
        const res = await axios.get(buildBookAccessRoute(bookURI));
        if (res.data.accessGranted) {
          setBookState({ paidUntil: res.data.paidTill });
        } else {
          setBookState(BookState.UNBOUGHT);
        }
      } catch (error) {
        setBookState(BookState.UNBOUGHT);
      }
    }

    defineBookState();
  }, [bookURI]);

  return (
    <BookStateContext.Provider value={{ bookState }}>
      {children}
    </BookStateContext.Provider>
  );
}

export function useBookState(): BookStateContextProps {
  const context = useContext(BookStateContext);

  if (context === null) {
    throw new Error('useBookState must be used within a BookStateProvider');
  }

  return context;
}
