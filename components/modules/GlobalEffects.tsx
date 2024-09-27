'use client';

import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode, useEffect } from 'react';

function GlobalEffects({ children }: { children: ReactNode }): ReactElement {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return <>{children}</>;
}

export default GlobalEffects;
