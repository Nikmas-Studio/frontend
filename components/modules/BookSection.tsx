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

      console.log('scale in useGSAP', scale);

      const bookTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 400',
          scrub: true,
          end: '+=300',
        },
      });

      bookTimeline.to(
        anchorRef.current,
        {
          pointerEvents: 'auto',
        },
        0,
      );

      bookTimeline.from(
        lightBookCoverRef.current,
        {
          scale,
          opacity: 0,
        },
        0,
      );

      bookTimeline.from(
        darkBookCoverRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        0,
      );

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
    { dependencies: [scale], revertOnUpdate: true },
  );

  return (
    <section
      ref={sectionRef}
      className='w-screen  pb-32  pt-16
                [background:linear-gradient(135deg,#ff5013,#271ad3)]'
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
            className='max-h-[1000px]  w-full  rounded-[3vw]  sm:h-[65vh]  
                       sm:w-auto  
                       sm:rounded-[1.5vh]  dark:hidden'
            priority
          />
          <Image
            ref={darkBookCoverRef}
            src={bookCoverDark}
            alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
            className='hidden  max-h-[1000px]  w-full  rounded-[3vw]  
                       sm:h-[65vh]  sm:w-auto  sm:rounded-[1.5vh]  
                       dark:inline-block'
            priority
          />
        </Link>
      </MainContainer>
    </section>
  );
}

export default BookSection;
