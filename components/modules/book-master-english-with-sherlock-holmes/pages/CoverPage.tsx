'use client';

import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H1 from '@/components/elements/book-master-english-with-sherlock-holmes/H1';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import ScrollHintMouse from '@/components/elements/ScrollHintMouse';
import { libreBaskerville } from '@/fonts';
import aiCircle from '@/public/images/ai-circle.png';
import sherlock from '@/public/images/sherlock.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { ReactElement, useEffect, useRef, useState } from 'react';
import Controls from '../Controls';

function Page1(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const aiCircleRef = useRef<HTMLImageElement | null>(null);

  function calcSherlockHeight(): number {
    if (outerWidth <= 460) {
      return outerWidth * 1.2;
    }

    if (outerWidth <= 640) {
      return outerWidth;
    }

    if (outerWidth <= 768) {
      return window.outerWidth * 0.8;
    }

    if (window.outerWidth <= 1120) {
      return window.outerWidth * 0.64;
    }
    return window.outerHeight * 0.92;
  }

  function calcAiCircleHeight(): number {
    if (outerWidth <= 460) {
      return outerWidth * 0.9;
    }

    if (outerWidth <= 640) {
      return outerWidth * 0.77;
    }

    if (outerWidth <= 768) {
      return outerWidth * 0.62;
    }

    if (window.outerWidth <= 1120) {
      return window.outerWidth * 0.49;
    }
    return window.outerHeight * 0.7;
  }

  function calcAiCircleBottom(): number {
    if (outerWidth <= 460) {
      return outerWidth * 0.27;
    }

    if (outerWidth <= 640) {
      return outerWidth * 0.2;
    }

    if (outerWidth <= 768) {
      return outerWidth * 0.16;
    }

    if (window.outerWidth <= 1120) {
      return window.outerWidth * 0.13;
    }

    return window.outerHeight * 0.19;
  }

  const [sherlockHeight, setSherlockHeight] = useState<number | null>(null);
  const [aiCircleHeight, setAiCircleHeight] = useState<number | null>(null);
  const [aiCircleBottom, setAiCircleBottom] = useState<number | null>(null);

  const [showSherlock, setShowSherlock] = useState(false);
  const [sherlockIsLoaded, setSherlockIsLoaded] = useState(false);

  const [showAiCircle, setShowAiCircle] = useState(false);
  const [aiCircleIsLoaded, setAiCircleIsLoaded] = useState(false);

  useGSAP(() => {
    gsap.to(aiCircleRef.current, {
      rotation: 360,
      duration: 40,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    // let initialHeight = window.outerHeight;
    // let initialWidth = window.outerWidth;
    // let initialOuterWidth = window.outerWidth;
    // test

    function recalculateSizes(): void {
      setSherlockHeight(calcSherlockHeight);
      setAiCircleHeight(calcAiCircleHeight);
      setAiCircleBottom(calcAiCircleBottom);
    }

    // function handleResize(): void {
    //   const currentHeight = window.outerHeight;
    //   const currentWidth = window.outerWidth;
    //   const currentOuterWidth = window.outerWidth;

    //   const initialZoomRatio = initialOuterWidth / initialWidth;
    //   const currentZoomRatio = currentOuterWidth / currentWidth;
    //   const zoomChanged = Math.abs(initialZoomRatio - currentZoomRatio) > 0.05;

    //   if (zoomChanged) {
    //     return;
    //   }

    //   const heightChanged =
    //     Math.abs(currentHeight - initialHeight) > RESIZE_THRESHOLD;
    //   const widthChanged =
    //     Math.abs(currentWidth - initialWidth) > RESIZE_THRESHOLD;

    //   if (heightChanged || widthChanged) {
    //     initialOuterWidth = currentOuterWidth;
    //     initialHeight = currentHeight;
    //     initialWidth = currentWidth;

    //     recalculateSizes();
    //   }
    // }

    recalculateSizes();

    // window.addEventListener('resize', handleResize);

    // return (): void => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []);

  useEffect(() => {
    if (sherlockIsLoaded && aiCircleIsLoaded) {
      setShowSherlock(true);
      setTimeout(() => {
        setShowAiCircle(true);
      }, 500);
    }
  }, [sherlockIsLoaded, aiCircleIsLoaded]);

  return (
    <Page
      id='cover-page'
      className='mb-5  [background:linear-gradient(135deg,#0047A6,#002786)]'
      ref={sectionRef}
    >
      <Controls alwaysWhite />
      <BookMainContainer>
        <p
          className={`${libreBaskerville.className}  text-3xl  text-white  
                      max-lg:text-[1.6rem]  max-sm:text-2xl  max-2sm:text-[4.7vw]
                      dark:text-smooth-white`}
        >
          Arthur Conan Doyle
        </p>
        <H1 className='!text-white  dark:!text-smooth-white'>
          Master English
          <br /> with&nbsp;Sherlock
          <br className='hidden  max-1.5xl:inline  max-1.5lg:hidden' /> Holmes
        </H1>
        <p
          className={`${libreBaskerville.className}  mt-6  
                      text-6xl  font-bold  text-[#7aadff]  max-lg:mt-[1.2rem]
                      max-lg:text-5xl  max-1.5lg:mb-[50vw]  max-2md:mb-[58vw]  max-md:mb-[77vw]
                      max-sm:mb-[94vw]  max-sm:mt-[0.65rem]  max-sm:text-4xl
                      max-2sm:mb-[112vw]  max-2sm:text-[8.5vw]`}
        >
          Powered by AI
        </p>
        <Image
          src={sherlock}
          alt='Sherlock Holmes'
          style={{
            opacity:
              showSherlock && sherlockIsLoaded && aiCircleIsLoaded ? 1 : 0,
          }}
          height={sherlockHeight ?? undefined}
          className='absolute  bottom-0  right-[20px] z-[-1]  transition-opacity
                     duration-[2000ms]  max-2md:right-1/2  max-2md:translate-x-1/2'
          onLoad={() => {
            setSherlockIsLoaded(true);
          }}
          priority
          quality={100}
        />
        <div
          style={{
            bottom: aiCircleBottom ?? undefined,
            height: aiCircleHeight ?? undefined,
            width: aiCircleHeight ?? undefined,
            opacity:
              showAiCircle && aiCircleIsLoaded && sherlockIsLoaded ? 1 : 0,
          }}
          className='absolute  right-[-32px]  z-[-2]  transition-opacity
                     duration-[3000ms]  will-change-transform  max-2md:right-1/2
                     max-2md:translate-x-1/2'
        >
          <Image
            ref={aiCircleRef}
            src={aiCircle}
            alt='Sherlock Holmes'
            height={aiCircleHeight ?? undefined}
            onLoad={() => {
              setAiCircleIsLoaded(true);
            }}
            priority
            quality={100}
          />
        </div>
        <ScrollHintMouse
          wrapperClassName='absolute  bottom-[30px]  left-1/2  -translate-x-1/2  
                            border-white  dark:border-smooth-white  will-change-transform'
          wheelClassName='bg-white  dark:bg-smooth-white  will-change-transform'
        />
      </BookMainContainer>
    </Page>
  );
}

export default Page1;
