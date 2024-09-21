'use client';

import { useBookSectionStateDispatch } from '@/context/book-section/Context';
import { useHeaderButtons } from '@/context/header-buttons/Context';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useEffect, useRef } from 'react';
import MainContainer from '../elements/MainContainer';

gsap.registerPlugin(ScrollTrigger);

function BookSection(): ReactElement {
  const bookRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  const { lightModeIconRef, accountIconRef } = useHeaderButtons();
  const { setBookSectionInViewport } = useBookSectionStateDispatch();
  const scaleRef = useRef(2);

  useEffect(() => {
    function handleResize() {
      scaleRef.current = calcScale();
    }

    scaleRef.current = calcScale();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calcScale(): number {
    const imageWidth = bookRef.current?.width;
    const viewportWidth = window.innerWidth;
    let scale = viewportWidth / imageWidth!;
    scale = scale + scale * 0.1;
    if (viewportWidth < 640) {
      scale = scale * 3;
    }

    return scale;
  }

  useGSAP(() => {
    const headerElement = document.getElementById('main-header');
    const headerHeight = headerElement?.offsetHeight;
    const headerLogoElement = document.getElementById('main-header-logo');

    const accountIconSpine = accountIconRef.current?.querySelector('div');

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
      bookRef.current,
      {
        scale: scaleRef.current,
        opacity: 0,
      },
      0,
    );

    const headerTimeline = gsap.timeline({
      scrollTrigger: {
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
      },
    });

    headerTimeline.to(
      headerElement,
      {
        backgroundImage: 'linear-gradient(135deg,#ff5013,#271ad3)',
        duration: 0.3,
        ease: 'linear',
      },
      0,
    );

    headerTimeline.to(
      headerLogoElement,
      {
        color: 'white',
        duration: 0.3,
        ease: 'linear',
      },
      0,
    );

    headerTimeline.to(
      lightModeIconRef.current,
      {
        fill: 'white',
        duration: 0.3,
        ease: 'linear',
      },
      0,
    );

    headerTimeline.to(
      accountIconRef.current,
      {
        backgroundColor: 'white',
        duration: 0.3,
        ease: 'linear',
      },
      0,
    );

    headerTimeline.to(
      accountIconSpine as HTMLElement,
      {
        backgroundColor: 'black',
        duration: 0.3,
        ease: 'linear',
      },
      0,
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className='w-screen  pb-32  pt-16  [background:linear-gradient(135deg,#ff5013,#271ad3)]'
    >
      <MainContainer className='flex  flex-col  items-center  px-12'>
        <h2 className='text-4xl  font-bold  text-white  mb-8'>
          Our first book
        </h2>
        <Link
          ref={anchorRef}
          className='pointer-events-none'
          href='/book-master-git-and-github'
        >
          <Image
            ref={bookRef}
            src={bookCoverLight}
            alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
            className='w-full  max-h-[1000px]  rounded-[3vw]  sm:h-[65vh]  sm:w-auto  sm:rounded-[1.5vh]'
            priority
          />
        </Link>
      </MainContainer>
    </section>
  );
}

export default BookSection;
