import { useInitialScrollToPageState } from '@/context/initial-scroll-to-page/Context';
import { usePendingUrlUpdatedDispatch } from '@/context/pending-url-updates/Context';
import { updateUrl } from '@/utils/update-url';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { RefObject } from 'react';
import useGsapResizeUpdate from './use-gsap-resize-update';

gsap.registerPlugin(ScrollTrigger);

interface EndOption {
  previousPage: number;
}

interface OptionsWithCurrentPage {
  pageRef: RefObject<HTMLElement>;
  currentPage: number;
  basePath: string;
  offset?: string;
  end?: undefined;
}

interface OptionsWithEnd {
  pageRef: RefObject<HTMLElement>;
  currentPage?: undefined;
  basePath: string;
  offset?: string;
  end: EndOption;
}

type Options = OptionsWithCurrentPage | OptionsWithEnd;

export function useUrlUpdate({
  pageRef,
  currentPage,
  basePath,
  offset,
  end,
}: Options): void {
  const { gsapShouldUpdate } = useGsapResizeUpdate();
  const { initialScrollToPageIsCompletedRef } = useInitialScrollToPageState();

  const { setPendingUrlUpdates } = usePendingUrlUpdatedDispatch();

  function isMobileOrTablet(): boolean {
    return window.innerWidth < 1024;
  }

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: pageRef.current,
        start: `top ${offset ?? '280px'}`,
        end: '+=0',
        onEnter: () => {
          if (!initialScrollToPageIsCompletedRef.current) {
            return;
          }

          if (isMobileOrTablet()) {
            if (end) {
              setPendingUrlUpdates((prev) => [...prev, { end: {} }]);
            } else {
              setPendingUrlUpdates((prev) => [
                ...prev,
                { currentPage: { pageNumber: currentPage } },
              ]);
            }

            return;
          }

          if (end) {
            updateUrl({ basePath: `${basePath}/end` });
            return;
          }

          updateUrl({ page: currentPage, basePath });
        },
        onEnterBack: () => {
          if (!initialScrollToPageIsCompletedRef.current) {
            return;
          }

          if (isMobileOrTablet()) {
            if (end) {
              setPendingUrlUpdates((prev) => [
                ...prev,
                { end: { previousPage: end.previousPage } },
              ]);
            } else {
              setPendingUrlUpdates((prev) => [
                ...prev,
                { currentPage: { pageNumber: currentPage, enterBack: true } },
              ]);
            }

            return;
          }

          if (end) {
            updateUrl({ page: end.previousPage, basePath });
            return;
          }

          if (currentPage > 1) {
            updateUrl({ page: currentPage - 1, basePath });
            return;
          }

          updateUrl({ basePath });
        },
      });
    },
    {
      dependencies: [gsapShouldUpdate],
      revertOnUpdate: true,
    },
  );
}
