'use client';

import {
  useActiveBackground,
  useActiveBackgroundDispatch,
} from '@/context/background-master-git-and-github-book/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark-no-spine.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light-no-spine.jpg';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { ReactElement, useRef, useState } from 'react';
import ThemeToggleDefault from '../../header/theme-toggle/ThemeToggleDefault';

gsap.registerPlugin(ScrollTrigger);

function WrapUpPage(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const innerContentRef = useRef<HTMLDivElement | null>(null);
  const spineRef = useRef<HTMLDivElement | null>(null);
  const { gsapShouldUpdate } = useGsapResizeUpdate();
  const { setActiveBackground } = useActiveBackgroundDispatch();
  const { activeBackground } = useActiveBackground();
  const [hideBorder, setHideBorder] = useState(false);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: '-50% top',
        end: '+=0',
        onEnter: () => {
          setActiveBackground(ActiveBackground.DEFAULT);
        },
        onEnterBack: () => {
          setActiveBackground(ActiveBackground.PART1);
        },
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=0',
        onEnter: () => {
          setHideBorder(true);
        },
        onEnterBack: () => {
          setHideBorder(false);
        },
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  useGSAP(
    () => {
      function getScale(): number {
        return Number(
          (window.innerWidth / spineRef.current!.offsetWidth + 2).toFixed(1),
        );
      }

      gsap.fromTo(
        spineRef.current,
        {
          scale: getScale,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: true,
            start: 'top top',
            end: '+=800',
          },
          scale: 1,
          ease: 'power1.inOut',
        },
      );

      document.documentElement.classList.remove('overflow-hidden');
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  const sectionClasses = classNames(
    `relative  z-30  grid  h-lvh  
     w-lvw  place-content-center  overflow-hidden 
     [background:linear-gradient(135deg,#ff5013,#271ad3)] 
     `,
    {
      'border-t  border-[#EBEBEB]  dark:border-[#414141]':
        activeBackground === ActiveBackground.DEFAULT && !hideBorder,
    },
  );

  return (
    <section ref={sectionRef} className={sectionClasses}>
      <div
        ref={innerContentRef}
        className='relative  px-[10vw]
        [transition:opacity_1s_ease-out]  max-xl:translate-y-[-40px]  max-sm:translate-y-[-30px]
        h-sm:translate-y-0'
      >
        <div
          className='relative   h-[70svh]  w-auto
                       max-sm:h-auto  max-sm:w-full'
        >
          <div
            className='absolute  right-[6.7%]  top-[6%]  z-30  
                       max-sm:right-[5vw]  h-sm:right-[3%]  h-sm:top-[4%]'
          >
            <ThemeToggleDefault />
          </div>
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
                       rounded-[0.8svh]  bg-white 
                       max-sm:translate-x-[calc(-50%-0.5vw)]  
                       max-sm:rounded-[1.3vw]  dark:bg-git-black'
          ></div>
        </div>
      </div>
    </section>
  );
}

export default WrapUpPage;
