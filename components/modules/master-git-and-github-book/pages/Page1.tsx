'use client';

import BookMainContainer from '@/components/elements/master-git-and-github-book/BookMainContainer';
import H1 from '@/components/elements/master-git-and-github-book/H1';
import { BASE_PATH_READ } from '@/constants/master-git-and-github-book';
import { useActiveBackgroundDispatch } from '@/context/background-master-git-and-github-book/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';
import Page from '../../../elements/master-git-and-github-book/Page';
import Controls from './Controls';

gsap.registerPlugin(ScrollTrigger);

function Page1(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { gsapShouldUpdate } = useGsapResizeUpdate();
  const { setActiveBackground } = useActiveBackgroundDispatch();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=0',
        onEnter: () => {
          setActiveBackground(ActiveBackground.PART1);
        },
        onEnterBack: () => {
          setActiveBackground(ActiveBackground.DEFAULT);
        },
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 1,
    basePath: BASE_PATH_READ,
  });

  return (
    <Page
      id='page-1'
      ref={sectionRef}
      className='flex  h-[calc(100vh+10px)]  bg-git-orange'
    >
      <Controls reversedColors />
      <BookMainContainer>
        <H1 className='mt-[25vh]'>Part 1. Everyday Tasks</H1>
      </BookMainContainer>
    </Page>
  );
}

export default Page1;
