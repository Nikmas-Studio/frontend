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
import { RESIZE_THRESHOLD } from '@/constants/general';

function Page1(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const aiCircleRef = useRef<HTMLImageElement | null>(null);

  function calcSherlockHeight(): number {
    if (innerWidth <= 460) {
      return innerWidth * 1.2;
    }

    if (innerWidth <= 640) {
      return innerWidth;
    }

    if (innerWidth <= 768) {
      return window.innerWidth * 0.8;
    }

    if (window.innerWidth <= 1120) {
      return window.innerWidth * 0.64;
    }
    return window.innerHeight * 0.92;
  }

  function calcAiCircleHeight(): number {
    if (innerWidth <= 460) {
      return innerWidth * 0.9;
    }

    if (innerWidth <= 640) {
      return innerWidth * 0.77;
    }

    if (innerWidth <= 768) {
      return innerWidth * 0.62;
    }

    if (window.innerWidth <= 1120) {
      return window.innerWidth * 0.49;
    }
    return window.innerHeight * 0.7;
  }

  function calcAiCircleBottom(): number {
    if (innerWidth <= 460) {
      return innerWidth * 0.27;
    }

    if (innerWidth <= 640) {
      return innerWidth * 0.2;
    }

    if (innerWidth <= 768) {
      return innerWidth * 0.16;
    }

    if (window.innerWidth <= 1120) {
      return window.innerWidth * 0.13;
    }

    return window.innerHeight * 0.19;
  }

  const [sherlockHeight, setSherlockHeight] = useState(() => {
    return calcSherlockHeight();
  });
  const [aiCircleHeight, setAiCircleHeight] = useState(() => {
    return calcAiCircleHeight();
  });
  const [aiCircleBottom, setAiCircleBottom] = useState(() => {
    return calcAiCircleBottom();
  });

  useGSAP(() => {
    gsap.to(aiCircleRef.current, {
      rotation: 360,
      duration: 40,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    let initialHeight = window.innerHeight;
    let initialWidth = window.innerWidth;

    function handleResize(): void {
      const currentHeight = window.innerHeight;
      const currentWidth = window.innerWidth;

      const heightChanged =
        Math.abs(currentHeight - initialHeight) > RESIZE_THRESHOLD;
      const widthChanged =
        Math.abs(currentWidth - initialWidth) > RESIZE_THRESHOLD;

      if (heightChanged || widthChanged) {
        initialHeight = currentHeight;
        initialWidth = currentWidth;

        console.log('Resizing...');

        setSherlockHeight(calcSherlockHeight());
        setAiCircleHeight(calcAiCircleHeight());
        setAiCircleBottom(calcAiCircleBottom());
      }
    }

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                      max-lg:text-[1.6rem]  max-sm:text-2xl  dark:text-smooth-white
                      max-2sm:text-[5.5vw]`}
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
                      text-6xl  font-bold  text-[#69a2ff]  max-lg:mt-[1.2rem]
                      max-lg:text-5xl  max-1.5lg:mb-[50vw]  max-2md:mb-[58vw]  max-md:mb-[77vw]
                      max-sm:mb-[94vw]  max-sm:mt-[0.65rem]  max-sm:text-4xl
                      max-2sm:mb-[108vw]  max-2sm:text-[8.5vw]`}
        >
          Powered by AI
        </p>
        <Image
          src={sherlock}
          alt='Sherlock Holmes'
          height={sherlockHeight}
          className='absolute  bottom-0  right-[20px]
                     max-2md:right-1/2  max-2md:translate-x-1/2'
        />
        <div
          style={{
            bottom: aiCircleBottom,
            height: aiCircleHeight,
            width: aiCircleHeight,
          }}
          className='absolute  right-[-32px]  z-[-1]  max-2md:right-1/2
                     max-2md:translate-x-1/2'
        >
          <Image
            ref={aiCircleRef}
            src={aiCircle}
            alt='Sherlock Holmes'
            height={aiCircleHeight}
          />
        </div>
        <ScrollHintMouse
          wrapperClassName='absolute  bottom-[30px]  left-1/2  -translate-x-1/2  
                            border-white  dark:border-smooth-white'
          wheelClassName='bg-white  dark:bg-smooth-white'
        />
      </BookMainContainer>
    </Page>
  );
}

export default Page1;
