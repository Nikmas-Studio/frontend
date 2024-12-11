'use client';

import { Session } from '@/types/session';
import { getSession } from '@/utils/get-session';
import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface SessionContextProps {
  session: Session | null;
  loading: boolean;
}

interface SessionDispatchContextProps {
  setSession: Dispatch<SetStateAction<Session | null>>;
}

const SessionContext = createContext<SessionContextProps | null>(null);
const SessionDispatchContext =
  createContext<SessionDispatchContextProps | null>(null);

export function SessionProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchSession(): Promise<void> {
    setLoading(true);
    const session = await getSession();
    setSession(session);
    setLoading(false);
  }

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, loading }}>
      <SessionDispatchContext.Provider value={{ setSession }}>
        {children}
      </SessionDispatchContext.Provider>
    </SessionContext.Provider>
  );
}

export function useSession(): SessionContextProps {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }

  return context;
}

export function useSessionDispatch(): SessionDispatchContextProps {
  const context = useContext(SessionDispatchContext);
  
  if (!context) {
    throw new Error('useSessionDispatch must be used within a SessionProvider');
  }
  
  return context;
}
