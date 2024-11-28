'use client';

import { Session } from '@/types/session';
import { getSession } from '@/utils/get-session';
import { usePathname } from 'next/navigation';
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface SessionContextProps {
  session: Session | null;
  loading: boolean;
}

const SessionContext = createContext<SessionContextProps | null>(null);

export function SessionProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  async function fetchSession(): Promise<void> {
    setLoading(true);
    const session = await getSession();
    setSession(session);
    setLoading(false);
  }

  useEffect(() => {
    fetchSession();
  }, [pathname]);

  return (
    <SessionContext.Provider value={{ session, loading }}>
      {children}
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
