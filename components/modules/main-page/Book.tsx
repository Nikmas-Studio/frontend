'use client';

import { useBookSectionStateDispatch } from '@/context/book-section/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useRef } from 'react';
import MainContainer from '../../elements/MainContainer';

gsap.registerPlugin(ScrollTrigger);

function Book(): ReactElement {
  const lightBookCoverRef = useRef<HTMLImageElement | null>(null);
  const darkBookCoverRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const sectionWrapperRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const { setBookSectionInViewport } = useBookSectionStateDispatch();
  const { gsapShouldUpdate } = useGsapResizeUpdate();

  useGSAP(
    () => {
      const headerElement = document.getElementById('main-header');
      const headerHeight = headerElement?.offsetHeight;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1280px)', () => {
        gsap.to(imageWrapperRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 600',
            scrub: true,
            end: '+=520',
          },
          scale: 1,
          opacity: 1,
        });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top ${headerHeight}`,
        end: `bottom ${headerHeight}`,
        toggleActions: 'play reverse play reverse',
        onEnter: () => {
          setBookSectionInViewport(true);
        },
        onEnterBack: () => {
          setBookSectionInViewport(true);
        },
        onLeave: () => {
          setBookSectionInViewport(false);
        },
        onLeaveBack: () => {
          setBookSectionInViewport(false);
        },
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  return (
    <div ref={sectionWrapperRef}>
      <section
        ref={sectionRef}
        className='w-screen  pb-32  pt-16  opacity-1 
                  [background:linear-gradient(135deg,#ff5013,#271ad3)]
                  [transition:opacity_1s_ease-out]'
      >
        <MainContainer className='flex  flex-col  items-center  !px-11'>
          <h2
            className='mb-8  text-[2.1rem]  font-bold  text-white  
                       sm:text-[2.7rem]  dark:text-git-dark-blue'
          >
            Our first book
          </h2>
          <div
            ref={imageWrapperRef}
            className='xl:scale-0  xl:opacity-0  
                       xl:will-change-[transform,opacity]'
          >
            <Link ref={anchorRef} href='/book-master-git-and-github'>
              <Image
                ref={lightBookCoverRef}
                src={bookCoverLight}
                alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
                className='w-full  select-none  rounded-[14px]  
                           sm:h-[65vh]  sm:max-h-[570px] 
                           sm:w-auto  dark:hidden'
                sizes='(max-width: 639px) 100vw, 378px'
                quality={100}
                priority
              />
              <Image
                ref={darkBookCoverRef}
                src={bookCoverDark}
                alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
                className='hidden  w-full  select-none 
                         rounded-[14px]  sm:h-[65vh]  sm:max-h-[570px]  
                         sm:w-auto  dark:inline-block'
                sizes='(max-width: 639px) 100vw, 378px'
                quality={100}
                priority
              />
            </Link>
          </div>
          <Link
            href='/book-master-git-and-github'
            className='button mt-10
                         bg-white  text-black
                         hover:bg-blue  hover:text-white  dark:bg-git-dark-blue
                         dark:text-white'
          >
            Details
          </Link>
        </MainContainer>
      </section>
    </div>
  );
}

export default Book;
