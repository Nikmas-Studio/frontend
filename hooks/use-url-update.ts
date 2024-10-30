import { useInitialPageId } from '@/context/initial-page-id/Context';
import { useInitialScrollToPageState } from '@/context/initial-scroll-to-page/Context';
import { usePendingUrlUpdatedDispatch } from '@/context/pending-url-updates/Context';
import { updateUrl } from '@/utils/update-url';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { RefObject, useRef } from 'react';
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
  const { initialScrollToPageIsCompleted } = useInitialScrollToPageState();
  const initialPageId = useInitialPageId();
  const firstOnEnterCallRef = useRef(true);

  const { setPendingUrlUpdates } = usePendingUrlUpdatedDispatch();

  function isMobileOrTablet(): boolean {
    return window.innerWidth < 1024;
  }

  useGSAP(
    () => {
      console.log(
        'initialScrollToPageIsCompleted',
        initialScrollToPageIsCompleted,
      );

      if (initialScrollToPageIsCompleted) {
        ScrollTrigger.create({
          trigger: pageRef.current,
          start: `top ${offset ?? '280px'}`,
          end: '+=0',
          onEnter: () => {
            console.log('onEnter attempt');

            if (firstOnEnterCallRef.current) {
              console.log('firstOnEnterCall');
              console.log('initialPageId', initialPageId);
              console.log('currentPage', currentPage);

              if (initialPageId === 'end') {
                firstOnEnterCallRef.current = false;
                console.log('return from === end');
                return;
              }

              if (currentPage !== undefined) {
                if (currentPage <= Number(initialPageId)) {
                  firstOnEnterCallRef.current = false;
                  console.log('return from second condition');
                  return;
                }
              }

              firstOnEnterCallRef.current = false;
            }

            console.log('useUrlUpdate onEnter let it');

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
            console.log('useUrlUpdate onEnterBack');

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
      }
    },
    {
      dependencies: [gsapShouldUpdate, initialScrollToPageIsCompleted],
      revertOnUpdate: true,
    },
  );
}
