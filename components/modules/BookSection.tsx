'use client';

import { useBookSectionStateDispatch } from '@/context/book-section/Context';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useRef } from 'react';
import MainContainer from '../elements/MainContainer';

gsap.registerPlugin(ScrollTrigger);

function BookSection(): ReactElement {
  const lightBookCoverRef = useRef<HTMLImageElement | null>(null);
  const darkBookCoverRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const sectionWrapperRef = useRef<HTMLDivElement | null>(null);
  const { setBookSectionInViewport } = useBookSectionStateDispatch();

  useGSAP(() => {
    const headerElement = document.getElementById('main-header');
    const headerHeight = headerElement?.offsetHeight;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1280px)', () => {
      ScrollTrigger.create({
        trigger: sectionWrapperRef.current,
        start: 'top 700',
        onEnter: () => {
          gsap.to(sectionRef.current, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
          });
        },
      });

      const bookTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 600',
          scrub: true,
          end: '+=520',
        },
      });

      bookTimeline.to(
        anchorRef.current,
        {
          scale: 1,
        },
        0,
      );

      bookTimeline.to(
        lightBookCoverRef.current,
        {
          scale: 1,
          opacity: 1,
        },
        0,
      );

      bookTimeline.to(
        darkBookCoverRef.current,
        {
          scale: 1,
          opacity: 1,
        },
        0,
      );
    });

    mm.add('(max-width: 1279px)', () => {
      ScrollTrigger.create({
        trigger: sectionWrapperRef.current,
        start: 'top 320',
        onEnter: () => {
          gsap.set(sectionRef.current, {
            opacity: 1,
            // duration: 1,
            // ease: 'power2.out',
          });
        },
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
  }, []);

  return (
    <div ref={sectionWrapperRef}>
      <section
        ref={sectionRef}
        className='w-screen  pb-32  pt-16  opacity-0 
                  [background:linear-gradient(135deg,#ff5013,#271ad3)]
                  [transition:opacity_1s_ease-in-out]  xl:transition-none
                  '
      >
        <MainContainer className='flex  flex-col  items-center  !px-12'>
          <h2
            className='mb-8  text-3xl  font-bold  text-white  
                       sm:text-[2.7rem]  dark:text-black'
          >
            Our first book
          </h2>
          <Link
            ref={anchorRef}
            className='xl:scale-0'
            href='/book-master-git-and-github'
          >
            <Image
              ref={lightBookCoverRef}
              src={bookCoverLight}
              alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
              className='max-h-[570px]  w-full  select-none  rounded-[3vw]  sm:h-[65vh]
                       sm:w-auto  sm:rounded-[1.5vh]  xl:scale-0  xl:opacity-0
                       xl:will-change-[transform,opacity]  dark:hidden'
              priority
            />
            <Image
              ref={darkBookCoverRef}
              src={bookCoverDark}
              alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
              className='hidden  max-h-[570px]  w-full  select-none  
                       rounded-[3vw]  sm:h-[65vh]  sm:w-auto  sm:rounded-[1.5vh]
                       xl:scale-0  xl:opacity-0  xl:will-change-[transform,opacity]  dark:inline-block'
              priority
            />
          </Link>
        </MainContainer>
      </section>
    </div>
  );
}

export default BookSection;
