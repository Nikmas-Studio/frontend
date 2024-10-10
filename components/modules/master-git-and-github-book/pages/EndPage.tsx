'use client';

import { BASE_PATH_READ } from '@/constants/master-git-and-github-book';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import { useUrlUpdate } from '@/hooks/use-url-update';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark-no-spine.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light-no-spine.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { ReactElement, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function EndPage(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const innerContentRef = useRef<HTMLDivElement | null>(null);
  const spineRef = useRef<HTMLDivElement | null>(null);
  const { gsapShouldUpdate } = useGsapResizeUpdate();
  const afterwordRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      function getScale(): number {
        return Number(
          (window.innerWidth / spineRef.current!.offsetWidth + 2).toFixed(1),
        );
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: true,
          start: 'top top',
          end: '+=800',
        },
      });

      timeline.fromTo(
        spineRef.current,
        {
          scale: getScale,
        },
        {
          scale: 1,
          ease: 'power1.inOut',
        },
        0,
      );

      timeline.to(
        afterwordRef.current,
        {
          opacity: 1,
          pointerEvents: 'auto',
        },
        '-=0.3',
      );

      document.documentElement.classList.remove('overflow-hidden');
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  useUrlUpdate({
    pageRef: sectionRef,
    basePath: BASE_PATH_READ,
    end: {
      previousPage: 3,
    },
  });

  return (
    <section
      id='page-end'
      ref={sectionRef}
      className='relative  z-30  grid  h-lvh  
     w-lvw  place-content-center  overflow-hidden 
     [background:linear-gradient(135deg,#ff5013,#271ad3)]'
    >
      <div
        ref={innerContentRef}
        className='relative 
        translate-y-[-20px]  px-[10vw]  [transition:opacity_1s_ease-out]  
        max-xl:translate-y-[-40px]  max-sm:translate-y-[-30px]
        h-sm:translate-y-0'
      >
        <div
          className='relative   h-[70svh]  w-auto
                       max-sm:h-auto  max-sm:w-full'
        >
          <Image
            src={bookCoverLight}
            alt='Git and Github book cover'
            className='h-full max-h-[70svh]  w-auto
                       rounded-[1.61svh]  dark:hidden'
            placeholder='blur'
            priority
          />
          <Image
            src={bookCoverDark}
            alt='Git and Github book cover'
            className='hidden  h-full  max-h-[70svh]  w-auto
                       rounded-[1.61svh]  dark:inline-block'
            placeholder='blur'
            priority
          />
          <div
            ref={spineRef}
            className='absolute  left-1/2  top-[45.1%]  z-50  h-[29.5%]  w-[9%]
                       origin-center  translate-x-[calc(-50%-1px)] 
                       rounded-[0.8svh]  bg-white [-webkit-font-smoothing:subpixel-antialiased]
                       max-sm:translate-x-[calc(-50%-0.5vw)]  
                       max-sm:rounded-[1.3vw]  dark:bg-git-black'
          ></div>
        </div>
      </div>
      <div
        ref={afterwordRef}
        className='pointer-events-none  absolute  h-screen  w-screen opacity-0
                    [background-color:rgba(0,0,0,0.8)]'
      >
        <p
          className='absolute  left-1/2  top-[43%]  -translate-x-1/2  -translate-y-1/2
                    text-center  text-[8vw]  font-bold  leading-tight  
                    text-white  max-sm:text-[12vw]'
        >
          To Be Continued...
        </p>
      </div>
    </section>
  );
}

export default EndPage;
