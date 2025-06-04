'use client';

import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { useActivePageDispatch } from '@/context/active-page/Context';
import { useBookVersion } from '@/context/book-version/Context';
import { useInitialScrollToPageStateDispatch } from '@/context/initial-scroll-to-page/Context';
import { useSelectTranslation } from '@/hooks/book-master-english-with-sherlock-holmes/use-select-translation';
import { BookVersion } from '@/types/book-version';
import { updateUrl } from '@/utils/update-url';
import { ReactElement, ReactNode, useEffect } from 'react';

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

  const { setInitialScrollToPageIsCompleted } =
    useInitialScrollToPageStateDispatch();

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
        scrollTo({
          top: document.body.scrollHeight,
          behavior: 'instant',
        });

        updateUrl({ basePath: `${basePath}/end` });
        setActivePage('end');
        setInitialScrollToPageIsCompleted(true);
        showBook();

        return;
      }

      const page = document.getElementById(`page-${initialPageId}`);
      page?.scrollIntoView({ behavior: 'instant' });
      updateUrl({ page: Number(initialPageId), basePath });
      setActivePage(Number(initialPageId));
      setInitialScrollToPageIsCompleted(true);
      showBook();
    }

    scrollToPage(initialPageId);
  }, [
    initialPageId,
    basePath,
    setInitialScrollToPageIsCompleted,
    setActivePage,
  ]);

  useSelectTranslation();

  return <>{children}</>;
}

export default GlobalEffects;
