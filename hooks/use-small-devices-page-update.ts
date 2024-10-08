import {
  usePendingUrlUpdatedDispatch,
  usePendingUrlUpdates,
} from '@/context/pending-url-updates/Context';
import { updateUrl } from '@/utils/update-url';
import { useEffect, useRef } from 'react';

interface UseSmallDevicesUrlUpdateProps {
  basePath: string;
}

export function useSmallDevicesUrlUpdate({
  basePath,
}: UseSmallDevicesUrlUpdateProps): void {
  const { pendingUrlUpdates } = usePendingUrlUpdates();
  const { setPendingUrlUpdates } = usePendingUrlUpdatedDispatch();
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleScroll(): void {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      function handleUrlUpdate(): void {
        if (pendingUrlUpdates.length > 0) {
          console.log('pendingUrlUpdates', pendingUrlUpdates);
          const lastPendingUrl = pendingUrlUpdates.at(-1)!;

          if (lastPendingUrl.end !== undefined) {
            if (lastPendingUrl.end.previousPage !== undefined) {
              updateUrl({
                page: lastPendingUrl.end.previousPage,
                basePath,
              });
            } else {
              updateUrl({ basePath: `${basePath}/end` });
            }
          } else {
            if (!lastPendingUrl.currentPage.enterBack) {
              updateUrl({
                page: lastPendingUrl.currentPage.pageNumber,
                basePath,
              });
            } else {
              if (lastPendingUrl.currentPage.pageNumber > 1) {
                updateUrl({
                  page: lastPendingUrl.currentPage.pageNumber - 1,
                  basePath,
                });
              } else {
                updateUrl({ basePath });
              }
            }
          }

          setPendingUrlUpdates([]);
        }
      }

      if (window.scrollY === 0) {
        handleUrlUpdate();
        return;
      }

      scrollTimeoutRef.current = setTimeout(handleUrlUpdate, 150);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [basePath, pendingUrlUpdates, setPendingUrlUpdates]);
}
