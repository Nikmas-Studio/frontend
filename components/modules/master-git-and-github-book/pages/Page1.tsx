'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';
import Controls from './Controls';

gsap.registerPlugin(ScrollTrigger);

function Page1(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className='relative  z-30  h-[820px]  w-full  bg-git-orange  pt-36'
    >
      <Controls reversedColors />
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
