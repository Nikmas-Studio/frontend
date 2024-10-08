'use client';

import { BASE_PATH_READ } from '@/constants/master-git-and-github-book';
import { useActiveBackgroundDispatch } from '@/context/background-master-git-and-github-book/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';
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
    <section
      id='page-1'
      ref={sectionRef}
      className='relative  z-30  flex  h-[calc(100vh+10px)]  w-full
                 flex-col  items-center  justify-center  bg-git-orange'
    >
      <Controls reversedColors />
      <h1
        className='translate-y-[-10vh]  text-7xl  font-bold  text-white  
                   max-lg:text-5xl  max-sm:text-4xl  dark:text-git-black'
      >
        Part 1. Everyday Tasks
      </h1>
    </section>
  );
}

export default Page1;
