import { useActivePageDispatch } from '@/context/active-page/Context';
import { useInitialScrollToPageState } from '@/context/initial-scroll-to-page/Context';
import { useIsScrollingToPageRef } from '@/context/is-scrolling-to-page/Context';
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
  const { initialScrollToPageIsCompleted } = useInitialScrollToPageState();
  const { setActivePage } = useActivePageDispatch();
  const isScrollingToPageRef = useIsScrollingToPageRef();

  useGSAP(
    () => {
      if (initialScrollToPageIsCompleted) {
        setTimeout(() => {
          ScrollTrigger.create({
            trigger: pageRef.current,
            start: `top ${offset ?? '280px'}`,
            end: '+=0',
            onEnter: () => {
              if (isScrollingToPageRef.current) {
                return;
              }

              const pageBottom =
                pageRef.current?.getBoundingClientRect().bottom;
              if (pageBottom && pageBottom < 0) {
                return;
              }

              if (end) {
                updateUrl({ basePath: `${basePath}/end` });
                setActivePage('end');
                return;
              }

              updateUrl({ page: currentPage, basePath });
              setActivePage(currentPage);
            },
            onEnterBack: () => {
              if (isScrollingToPageRef.current) {
                return;
              }

              if (end) {
                updateUrl({ page: end.previousPage, basePath });
                setActivePage(end.previousPage);
                return;
              }

              if (currentPage > 1) {
                updateUrl({ page: currentPage - 1, basePath });
                setActivePage(currentPage - 1);
                return;
              }

              updateUrl({ basePath });
              setActivePage('');
            },
          });
        }, 20);
      }
    },
    {
      dependencies: [gsapShouldUpdate, initialScrollToPageIsCompleted],
      revertOnUpdate: true,
    },
  );
}
