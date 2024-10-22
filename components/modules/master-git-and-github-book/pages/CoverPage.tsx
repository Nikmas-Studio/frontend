'use client';

import ScrollHintMouse from '@/components/elements/ScrollHintMouse';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark-no-spine.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light-no-spine.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { ReactElement, useRef } from 'react';
import Page from '../../../elements/master-git-and-github-book/Page';
import ThemeToggleDefault from '../../header/theme-toggle/ThemeToggleDefault';

gsap.registerPlugin(ScrollTrigger);

function CoverPage(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const innerContentRef = useRef<HTMLDivElement | null>(null);
  const spineRef = useRef<HTMLDivElement | null>(null);
  const { gsapShouldUpdate } = useGsapResizeUpdate();

  useGSAP(() => {
    gsap.delayedCall(0.7, () => {
      gsap.set(innerContentRef.current, {
        opacity: 1,
      });
    });
  }, []);

  useGSAP(
    () => {
      function getScale(): number {
        return Number(
          (window.innerWidth / spineRef.current!.offsetWidth + 2).toFixed(1),
        );
      }

      gsap.to(spineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          anticipatePin: 1,
          scrub: true,
          end: '+=800',
        },
        scale: getScale,
        ease: 'power1.inOut',
      });

      document.documentElement.classList.remove('overflow-hidden');
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  return (
    <Page
      id='cover-page'
      ref={sectionRef}
      className='grid  h-lvh  place-content-center  overflow-hidden 
                      [background:linear-gradient(135deg,#ff5013,#271ad3)]'
    >
      <h1 className='sr-only'>
        Master Git & GitHub: From Everyday Tasks to Deep Waters
      </h1>
      <div
        ref={innerContentRef}
        className='relative  px-[10vw]  opacity-0
        [transition:opacity_1s_ease-out]  max-xl:translate-y-[-40px]  max-sm:translate-y-[-30px]
        h-2md:translate-y-0
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
                       rounded-[0.8svh]  bg-white  [-webkit-font-smoothing:subpixel-antialiased]
                       max-sm:translate-x-[calc(-50%-0.5vw)]
                       max-sm:rounded-[1.3vw]  dark:bg-git-black'
          ></div>
        </div>
        <ScrollHintMouse
          wrapperClassName='mt-10  border-white  
                                           dark:border-git-black'
          wheelClassName='bg-white  dark:bg-git-black'
        />
      </div>
    </Page>
  );
}

export default CoverPage;
