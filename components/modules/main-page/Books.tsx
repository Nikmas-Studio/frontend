'use client';

import { useBookSectionStateDispatch } from '@/context/book-section/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import sherlockCover from '@/public/images/book-cover-master-english-with-sherlock-holmes.jpg';
import gitCoverDark from '@/public/images/git-and-github-book-cover-dark.jpg';
import gitCoverLight from '@/public/images/git-and-github-book-cover-light.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useRef } from 'react';
import MainContainer from '../../elements/MainContainer';

gsap.registerPlugin(ScrollTrigger);

function Books(): ReactElement {
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

      // const mm = gsap.matchMedia();

      // mm.add('(min-width: 1280px)', () => {
      //   gsap.to(imageWrapperRef.current, {
      //     scrollTrigger: {
      //       trigger: sectionRef.current,
      //       start: 'top 600',
      //       scrub: true,
      //       end: '+=520',
      //     },
      //     scale: 1,
      //     opacity: 1,
      //   });
      // });

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
        className='w-screen  pb-32  pt-16 
                  [background:linear-gradient(135deg,#F5F9FF,#0041b0)]
                  [transition:opacity_1s_ease-out]'
      >
        <MainContainer className='flex  flex-col  items-center  !px-11'>
          <h2
            className='mb-8  text-[2.1rem]  font-bold  text-black 
                       sm:text-[2.7rem]'
          >
            Our first books
          </h2>
          <div className='flex  flex-col  gap-20  lg:flex-row  1.5lg:gap-28'>
            <div className='flex  flex-col  items-center'>
              <div ref={imageWrapperRef}>
                <Link
                  ref={anchorRef}
                  href='/book-master-english-with-sherlock-holmes'
                >
                  <Image
                    ref={lightBookCoverRef}
                    src={sherlockCover}
                    alt='Master English with Sherlock Holmes [Interactive e-book]'
                    className='w-full  select-none  rounded-[14px]  
                           sm:h-[65vh]  sm:max-h-[570px] 
                           sm:w-auto'
                    sizes='(max-width: 639px) 100vw, 378px'
                    quality={100}
                    priority
                  />
                </Link>
              </div>
              <Link
                href='/book-master-english-with-sherlock-holmes'
                className='button mt-10  bg-[#003896]
                           text-white  hover:bg-white
                           hover:text-[#003896]
                         '
              >
                Details
              </Link>
            </div>
            <div className='flex  flex-col  items-center'>
              <div ref={imageWrapperRef}>
                <Link ref={anchorRef} href='/book-master-git-and-github'>
                  <Image
                    ref={lightBookCoverRef}
                    src={gitCoverLight}
                    alt='Master Git & GitHub: From Everyday Tasks to Deep Waters [Interactive e-book]'
                    className='w-full  select-none  rounded-[14px]  
                           sm:h-[65vh]  sm:max-h-[570px] 
                           sm:w-auto  dark:hidden'
                    sizes='(max-width: 639px) 100vw, 378px'
                    quality={100}
                    priority
                  />
                  <Image
                    ref={darkBookCoverRef}
                    src={gitCoverDark}
                    alt='Master Git & GitHub: From Everyday Tasks to Deep Waters [Interactive e-book]'
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
                        dark:text-white  dark:hover:bg-white
                         dark:hover:text-git-dark-blue'
              >
                Details
              </Link>
            </div>
          </div>
        </MainContainer>
      </section>
    </div>
  );
}

export default Books;
