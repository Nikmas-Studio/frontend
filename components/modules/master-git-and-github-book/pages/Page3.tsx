'use client';

import { BASE_PATH_READ } from '@/constants/master-git-and-github-book';
import {
  useActiveBackground,
  useActiveBackgroundDispatch,
} from '@/context/background-master-git-and-github-book/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';
import Controls from './Controls';

gsap.registerPlugin(ScrollTrigger);

function Page3(): ReactElement {
  const { activeBackground } = useActiveBackground();
  const { setActiveBackground } = useActiveBackgroundDispatch();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { gsapShouldUpdate } = useGsapResizeUpdate();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'bottom 280px',
        end: '+=0',
        onEnter: () => {
          setActiveBackground(ActiveBackground.DEFAULT);
          gsap.to(sectionRef.current, {
            duration: 0.15,
            marginBottom: 0,
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
          });
        },
        onEnterBack: () => {
          setActiveBackground(ActiveBackground.PART1);
          gsap.to(sectionRef.current, {
            duration: 0.15,
            marginBottom: '1.25rem',
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
          });
        },
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 3,
    basePath: BASE_PATH_READ,
  });

  const pageClasses = classNames(
    `relative  z-30  my-5  h-[820px]  w-full 
                            bg-white  pt-36
                          dark:bg-[#00040a]`,
    {
      'border-b  border-[#EBEBEB]  dark:border-[#414141]':
        activeBackground === ActiveBackground.DEFAULT,
    },
  );
  return (
    <section id='page-3' ref={sectionRef} className={pageClasses}>
      <Controls pageNumber={3} />
      <h1
        className='text-center  text-5xl  text-[#00040a]  
                   dark:text-white'
      >
        Page 3
      </h1>
    </section>
  );
}

export default Page3;
