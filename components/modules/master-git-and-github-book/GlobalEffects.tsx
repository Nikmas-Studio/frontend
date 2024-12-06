'use client';

import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/master-git-and-github-book';
import { useActiveBackgroundDispatch } from '@/context/background-master-git-and-github-book/Context';
import { useBookVersion } from '@/context/book-version/Context';
import { useInitialScrollToPageStateDispatch } from '@/context/initial-scroll-to-page/Context';
import { useSmallDevicesUrlUpdate } from '@/hooks/use-small-devices-page-update';
import { BookVersion } from '@/types/book-version';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import { updateUrl } from '@/utils/update-url';
import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode, useEffect, useRef } from 'react';

interface GlobalEffectsProps {
  initialPageId?: string;
  children: ReactNode;
}

function GlobalEffects({
  initialPageId,
  children,
}: GlobalEffectsProps): ReactElement {
  const { setActiveBackground } = useActiveBackgroundDispatch();
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  const { setInitialScrollToPageIsCompleted } =
    useInitialScrollToPageStateDispatch();

  const previousPathRef = useRef<string | null>(null);
  const path = usePathname();

  useEffect(() => {
    if (
      !previousPathRef.current?.endsWith('1') &&
      !previousPathRef.current?.endsWith('1/') &&
      (path.endsWith('demo') ||
        path.endsWith('demo/') ||
        path.endsWith('read') ||
        path.endsWith('read/'))
    ) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 20);
    }

    previousPathRef.current = path;
  }, [path]);

  // useEffect(() => {
  //   if (window.innerWidth > 1024) {
  //     return;
  //   }

  //   const hasReloaded = sessionStorage.getItem('hasReloaded');

  //   if (!hasReloaded) {
  //     sessionStorage.setItem('hasReloaded', 'true');
  //     window.location.reload();
  //   }
  // }, []);

  useEffect(() => {
    return () => {
      document.documentElement.classList.remove('!bg-black');
    };
  }, []);

  useEffect(() => {
    function showBook(): void {
      document.body.classList.remove('invisible');
    }

    if (initialPageId === undefined) {
      setInitialScrollToPageIsCompleted(true);
      return;
    }

    function scrollToPage(initialPageId: string): void {
      if (initialPageId === 'end') {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'instant',
        });

        updateUrl({ basePath: `${basePath}/end` });
        setInitialScrollToPageIsCompleted(true);
        setActiveBackground(ActiveBackground.DARK);
        document.documentElement.classList.add('!bg-black');
        showBook();

        return;
      }

      const page = document.getElementById(`page-${initialPageId}`);
      page?.scrollIntoView({ behavior: 'instant' });
      updateUrl({ page: Number(initialPageId), basePath });
      setInitialScrollToPageIsCompleted(true);
      showBook();
    }

    scrollToPage(initialPageId);
  }, [
    initialPageId,
    basePath,
    setActiveBackground,
    setInitialScrollToPageIsCompleted,
  ]);

  useSmallDevicesUrlUpdate({ basePath });

  return <>{children}</>;
}

export default GlobalEffects;
