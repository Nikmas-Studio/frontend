'use client';

import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import {
  useActivePage,
  useActivePageDispatch,
} from '@/context/active-page/Context';
import { useBookVersion } from '@/context/book-version/Context';
import { useInitialScrollToPageStateDispatch } from '@/context/initial-scroll-to-page/Context';
import { useTouchDevice } from '@/context/touch-device/Context';
import { useSelectTranslation } from '@/hooks/book-master-english-with-sherlock-holmes/use-select-translation';
import { BookVersion } from '@/types/book-version';
import { updateUrl } from '@/utils/update-url';
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';

interface GlobalEffectsProps {
  initialPageId?: string;
  children: ReactNode;
}

function GlobalEffects({
  initialPageId,
  children,
}: GlobalEffectsProps): ReactElement {
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;
  const { setActivePage } = useActivePageDispatch();
  const { activePage } = useActivePage();
  const { isTouchDevice } = useTouchDevice();

  const { setInitialScrollToPageIsCompleted } =
    useInitialScrollToPageStateDispatch();

  useEffect(() => {
    function showBook(): void {
      const cover = document.getElementById('book-page-cover');
      if (cover !== null) {
        cover.classList.remove('invisible');
      }
    }

    if (initialPageId === undefined) {
      showBook();
      setInitialScrollToPageIsCompleted(true);
      return;
    }

    function scrollToPage(initialPageId: string): void {
      if (initialPageId === 'end') {
        scrollTo({
          top: document.body.scrollHeight,
          behavior: 'instant',
        });

        updateUrl({ basePath: `${basePath}/end` });
        setActivePage('end');
        setInitialScrollToPageIsCompleted(true);

        setTimeout(() => {
          showBook();
        }, 2000);

        return;
      }

      const page = document.getElementById(`page-${initialPageId}`);
      page?.scrollIntoView({ behavior: 'instant' });
      updateUrl({ page: Number(initialPageId), basePath });
      setActivePage(Number(initialPageId));
      setInitialScrollToPageIsCompleted(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            showBook();
          }, 2000);
        });
      });
    }

    scrollToPage(initialPageId);
  }, [
    initialPageId,
    basePath,
    setInitialScrollToPageIsCompleted,
    setActivePage,
  ]);

  useEffect(() => {
    localStorage.setItem(
      `book-master-english-with-sherlock-holmes/${bookVersion}/last-visited-page`,
      activePage.toString(),
    );
  }, [activePage, bookVersion]);

  useSelectTranslation();

  const [isResizing, setIsResizing] = useState(false);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = (): void => {
      if (!isTouchDevice) {
        setIsResizing(true);

        if (resizeTimeoutRef.current) {
          clearTimeout(resizeTimeoutRef.current);
        }

        resizeTimeoutRef.current = setTimeout(() => {
          window.location.reload();
        }, 200);
      }
    };

    if (!isTouchDevice) {
      window.addEventListener('resize', handleResize);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [isTouchDevice]);

  useEffect(() => {
    const handleOrientationChange = (): void => {
      setIsResizing(true);

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        window.location.reload();
      }, 200);
    };

    screen.orientation.addEventListener('change', handleOrientationChange);

    return () => {
      screen.orientation.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return (
    <>
      {isResizing && (
        <div
          className='fixed  inset-0  z-[999999999]
                   bg-white  dark:bg-black'
        ></div>
      )}
      {children}
    </>
  );
}

export default GlobalEffects;
