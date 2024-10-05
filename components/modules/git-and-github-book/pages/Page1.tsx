'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Page1(): ReactElement {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // const { setActiveBackground } = useActiveBackgroundDispatch();

  useGSAP(() => {
    ScrollTrigger.create({
      markers: true,
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=0',
      onEnter: () => {
        console.log('enter');
        // setActiveBackground(ActiveBackground.PART1);
      },
      onEnterBack: () => {
        console.log('enter back');
      },
      onLeave: () => {
        console.log('leave');
      },
      onLeaveBack: () => {
        console.log('leave back');
      },
    });
  }, []);

  return (
    <section className='relative  z-30  h-[820px]  w-full  bg-git-orange  pt-36'>
      <div ref={sectionRef}>
        <h1
          className='text-center  text-7xl  font-bold  text-white  
                   dark:text-git-black'
        >
          Part 1. Everyday Tasks
        </h1>
      </div>
    </section>
  );
}

export default Page1;
