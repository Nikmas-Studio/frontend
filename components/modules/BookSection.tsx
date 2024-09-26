'use client';

import { useBookSectionStateDispatch } from '@/context/book-section/Context';
import { useTheme } from '@/context/theme/Context';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light.jpg';
import { lightThemeIsSelected } from '@/utils/check-selected-theme';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useEffect, useRef, useState } from 'react';
import MainContainer from '../elements/MainContainer';

gsap.registerPlugin(ScrollTrigger);

function BookSection(): ReactElement {
  const lightBookCoverRef = useRef<HTMLImageElement | null>(null);
  const darkBookCoverRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const sectionWrapperRef = useRef<HTMLDivElement | null>(null);
  const { setBookSectionInViewport } = useBookSectionStateDispatch();
  const [scale, setScale] = useState(3);
  const { selectedTheme } = useTheme();
  const selectedThemeRef = useRef(selectedTheme);

  useEffect(() => {
    selectedThemeRef.current = selectedTheme;

    if (lightThemeIsSelected(selectedThemeRef.current)) {
      setScale(calcScale());
    }
  }, [selectedTheme]);

  useEffect(() => {
    function handleResize(): void {
      if (lightThemeIsSelected(selectedThemeRef.current)) {
        setScale(calcScale());
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calcScale(): number {
    const imageWidth = lightBookCoverRef.current!.width;

    const viewportWidth = window.innerWidth;
    let scale = viewportWidth / imageWidth!;
    scale = scale + scale * 0.1;
    if (viewportWidth < 640) {
      scale = scale * 3;
    }

    return scale;
  }

  useGSAP(
    () => {
      const headerElement = document.getElementById('main-header');
      const headerHeight = headerElement?.offsetHeight;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1280px)', () => {
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
            pointerEvents: 'auto',
          },
          0,
        );

        bookTimeline.fromTo(
          lightBookCoverRef.current,
          {
            scale,
          },
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
    {
      dependencies: [scale],
      revertOnUpdate: true,
    },
  );

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(max-width: 1279px)', () => {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 320',
        },
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
      });

      const bookTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 300',
        },
      });

      bookTimeline.to(
        anchorRef.current,
        {
          pointerEvents: 'auto',
          duration: 0,
        },
        0,
      );

      bookTimeline.to(
        lightBookCoverRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
        },
        0,
      );

      bookTimeline.to(
        darkBookCoverRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
        },
        0,
      );
    });
  }, []);

  return (
    <div ref={sectionWrapperRef}>
      <section
        ref={sectionRef}
        className='w-screen  pb-32  pt-16  opacity-0  [background:linear-gradient(135deg,#ff5013,#271ad3)]
                xl:opacity-100'
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
            className='pointer-events-none'
            href='/book-master-git-and-github'
          >
            <Image
              ref={lightBookCoverRef}
              src={bookCoverLight}
              alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
              className='max-h-[1000px]  w-full  scale-0  select-none  rounded-[3vw]  opacity-0
                       will-change-transform  sm:h-[65vh]  sm:w-auto
                       sm:rounded-[1.5vh]  xl:scale-100  dark:hidden'
              priority
            />
            <Image
              ref={darkBookCoverRef}
              src={bookCoverDark}
              alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
              className='hidden  max-h-[1000px]  w-full  scale-0  select-none  rounded-[3vw]  
                       opacity-0  will-change-transform  sm:h-[65vh]
                       sm:w-auto  sm:rounded-[1.5vh]  dark:inline-block'
              priority
            />
          </Link>
        </MainContainer>
      </section>
    </div>
  );
}

export default BookSection;
