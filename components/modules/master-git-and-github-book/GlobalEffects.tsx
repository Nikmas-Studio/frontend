'use client';

import { BASE_PATH_READ } from '@/constants/master-git-and-github-book';
import { useActiveBackgroundDispatch } from '@/context/background-master-git-and-github-book/Context';
import { useSmallDevicesUrlUpdate } from '@/hooks/use-small-devices-page-update';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import { updateUrl } from '@/utils/update-url';
import { ReactElement, ReactNode, useEffect } from 'react';

interface GlobalEffectsProps {
  initialPageId?: string;
  basePath: string;
  children: ReactNode;
}

function GlobalEffects({
  initialPageId,
  basePath,
  children,
}: GlobalEffectsProps): ReactElement {
  const { setActiveBackground } = useActiveBackgroundDispatch();

  useEffect(() => {
    function showBook(): void {
      document.body.classList.remove('invisible');
    }

    if (initialPageId === undefined) {
      return;
    }

    function scrollToPage(initialPageId: string): void {
      if (initialPageId === 'end') {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'instant',
        });

        setTimeout(() => {
          updateUrl({ basePath: `${BASE_PATH_READ}/end` });
          setActiveBackground(ActiveBackground.DARK);
          document.documentElement.classList.add('!bg-black');
          setTimeout(() => {
            showBook();
          }, 30);
        }, 10);

        return;
      }

      const page = document.getElementById(`page-${initialPageId}`);
      page?.scrollIntoView({ behavior: 'instant' });
      setTimeout(() => {
        updateUrl({ page: Number(initialPageId), basePath });
      }, 10);

      showBook();
    }

    scrollToPage(initialPageId);
  }, [initialPageId, basePath, setActiveBackground]);

  useSmallDevicesUrlUpdate({ basePath });

  return <>{children}</>;
}

export default GlobalEffects;
