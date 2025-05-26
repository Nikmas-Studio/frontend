'use client';

import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
  MAX_SELECTION_LENGTH,
} from '@/constants/book-master-english-with-sherlock-holmes';
import { BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI } from '@/constants/general';
import { useBookVersion } from '@/context/book-version/Context';
import { useInitialScrollToPageStateDispatch } from '@/context/initial-scroll-to-page/Context';
import { useSmallDevicesUrlUpdate } from '@/hooks/use-small-devices-page-update';
import { BookVersion } from '@/types/book-version';
import { getSelectionData } from '@/utils/get-selection-data';
import { translate } from '@/utils/translate';
import { updateUrl } from '@/utils/update-url';
import { CircularProgress } from '@mui/material';
import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

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

  const { setInitialScrollToPageIsCompleted } =
    useInitialScrollToPageStateDispatch();

  const previousPathRef = useRef<string | null>(null);
  const path = usePathname();

  const tooltipRoot = useRef<ReturnType<typeof createRoot> | null>(null);

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
        setInitialScrollToPageIsCompleted(true);
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
  }, [initialPageId, basePath, setInitialScrollToPageIsCompleted]);

  useSmallDevicesUrlUpdate({ basePath });

  useEffect(() => {
    let selectionTimeout: NodeJS.Timeout | undefined;

    function handleSelectionChange(): void {
      clearTimeout(selectionTimeout);

      selectionTimeout = setTimeout(async () => {
        const selectionData = getSelectionData();

        if (selectionData === null) {
          return;
        }

        if (selectionData.fragment.length > MAX_SELECTION_LENGTH) {
          showTranslationTooltip({
            range: selectionData.range,
            content:
              'Selected text is too long. Please select a shorter fragment.',
          });
          return;
        }

        showTranslationTooltip({
          range: selectionData.range,
        });

        const translation = await translate({
          bookURI: BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI,
          targetLanguage: 'Russian',
          context: selectionData.context,
          fragment: selectionData.fragment,
        });

        showTranslationTooltip({
          range: selectionData.range,
          content: translation,
        });

        function showTranslationTooltip({
          range,
          content,
        }: {
          range: Range;
          content?: string;
        }): void {
          const rects = range.getClientRects();
          if (rects.length === 0) {
            return;
          }
          const rect = rects[0];

          const tooltip = document.getElementById('translation-tooltip');
          if (!tooltip) {
            return;
          }

          if (tooltipRoot.current === null) {
            tooltipRoot.current = createRoot(tooltip);
          }

          if (content !== undefined) {
            tooltipRoot.current.render(<span>{content}</span>);
          } else {
            tooltipRoot.current.render(
              <div className='flex  w-24  items-center  justify-center'>
                <CircularProgress size={20} className='!text-black' />
              </div>,
            );
          }
          tooltip.style.display = 'block';

          requestAnimationFrame(() => {
            const tooltipHeight = tooltip.offsetHeight;
            const top = window.scrollY + rect.top - tooltipHeight - 8;
            const left = window.scrollX + rect.left;

            tooltip.style.top = `${top}px`;
            tooltip.style.left = `${left}px`;
          });
        }
      }, 500);
    }

    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  return <>{children}</>;
}

export default GlobalEffects;
