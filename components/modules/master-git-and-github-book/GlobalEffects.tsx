'use client';

import { BASE_PATH_READ } from '@/constants/master-git-and-github-book';
import { useSmallDevicesUrlUpdate } from '@/hooks/use-small-devices-page-update';
import { ReactElement, ReactNode, useEffect } from 'react';

interface GlobalEffectsProps {
  initialPageId?: string;
  children: ReactNode;
}

function GlobalEffects({
  initialPageId,
  children,
}: GlobalEffectsProps): ReactElement {
  useEffect(() => {
    if (initialPageId === undefined) {
      return;
    }

    function scrollToPage(initialPageId: string): void {
      if (initialPageId === 'end') {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'instant',
        });

        return;
      }

      const page = document.getElementById(`page-${initialPageId}`);
      page?.scrollIntoView({ behavior: 'instant' });
    }

    scrollToPage(initialPageId);
  }, [initialPageId]);

  useSmallDevicesUrlUpdate({ basePath: BASE_PATH_READ });

  return <>{children}</>;
}

export default GlobalEffects;
