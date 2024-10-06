'use client';

import { useActiveBackgroundDispatch } from '@/context/background-master-git-and-github-book/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Page1(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { setActiveBackground } = useActiveBackgroundDispatch();
  const { gsapShouldUpdate } = useGsapResizeUpdate();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: '-100px top',
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

  return (
    <section
      ref={sectionRef}
      className='relative  z-30  h-[820px]  w-full  bg-git-orange  pt-36'
    >
      <h1
        className='text-center  text-7xl  font-bold  text-white  
                   dark:text-git-black'
      >
        Part 1. Everyday Tasks
      </h1>
    </section>
  );
}

export default Page1;
