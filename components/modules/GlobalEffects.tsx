'use client';

import { useEffect } from 'react';

function GlobalEffects(): null {
  useEffect(() => {
    document.documentElement.classList.remove('overflow-hidden');
  }, []);

  return null;
}

export default GlobalEffects;
