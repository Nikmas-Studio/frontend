import { updatePageUrl } from '@/utils/update-page-url';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { RefObject } from 'react';
import useGsapResizeUpdate from './use-gsap-resize-update';

gsap.registerPlugin(ScrollTrigger);

interface EndOption {
  previousPage: number;
}

interface WithcurrentPage {
  pageRef: RefObject<HTMLElement>;
  currentPage: number;
  basePath: string;
  offset?: string;
  end?: undefined;
}

interface WithEnd {
  pageRef: RefObject<HTMLElement>;
  currentPage?: undefined;
  basePath: string;
  offset?: string;
  end: EndOption;
}

type Options = WithcurrentPage | WithEnd;

export function usePageUpdate({
  pageRef,
  currentPage,
  basePath,
  offset,
  end,
}: Options): void {
  const { gsapShouldUpdate } = useGsapResizeUpdate();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: pageRef.current,
        start: `top ${offset ?? '280px'}`,
        end: '+=0',
        onEnter: () => {
          if (end) {
            updatePageUrl({ basePath: `${basePath}/end` });
            return;
          }

          updatePageUrl({ page: currentPage, basePath });
        },
        onEnterBack: () => {
          if (end) {
            updatePageUrl({ page: end.previousPage, basePath });
            return;
          }

          if (currentPage > 1) {
            updatePageUrl({ page: currentPage - 1, basePath });
            return;
          }

          updatePageUrl({ basePath });
        },
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );
}
