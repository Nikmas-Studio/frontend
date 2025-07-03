'use client';

import aiCircle from '@/public/images/ai-circle.png';
import bookCover from '@/public/images/book-cover-empty-master-english-with-sherlock-holmes.jpg';
import sherlock from '@/public/images/sherlock.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { ReactElement, useEffect, useRef, useState } from 'react';

function BookCover(): ReactElement {
  const aiCircleRef = useRef<HTMLImageElement | null>(null);
  const [coverIsLoaded, setCoverIsLoaded] = useState(false);
  const [sherlockIsLoaded, setSherlockIsLoaded] = useState(false);
  const [aiCircleIsLoaded, setAiCircleIsLoaded] = useState(false);
  const [showSherlock, setShowSherlock] = useState(false);
  const [showAiCircle, setShowAiCircle] = useState(false);

  useEffect(() => {
    if (coverIsLoaded && sherlockIsLoaded && aiCircleIsLoaded) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShowSherlock(true);
          setTimeout(() => {
            setShowAiCircle(true);
          }, 1000);
        });
      });
    }
  }, [aiCircleIsLoaded, coverIsLoaded, sherlockIsLoaded]);

  useGSAP(() => {
    gsap.to(aiCircleRef.current, {
      rotation: 360,
      duration: 40,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <div className='relative'>
      <Image
        src={bookCover}
        alt='Master English with Sherlock Holmes'
        className='pointer-events-none  block  w-full
                           select-none  rounded-[14px]'
        sizes='(max-width: 639px) 100vw, (max-width: 1023px) 400px, (max-width: 1279px) 30vw, 400px'
        onLoad={() => setCoverIsLoaded(true)}
        quality={100}
        priority
      />
      <Image
        alt='Sherlock Holmes'
        src={sherlock}
        className='absolute  bottom-0  left-1/2  z-20  w-[58%]  -translate-x-1/2
                   opacity-0  transition-opacity  duration-[2000ms]'
        sizes='(max-width: 639px) 58vw, (max-width: 1023px) 232px, (max-width: 1279px) 18vw, 232px'
        style={{
          opacity: showSherlock ? 1 : 0,
        }}
        onLoad={() => setSherlockIsLoaded(true)}
        quality={100}
        priority
      />
      <div
        className='absolute  bottom-[11%]  left-1/2  z-10  w-[77.7%]  
                   -translate-x-1/2  opacity-0  transition-opacity  duration-[3000ms]'
        style={{
          opacity: showAiCircle ? 1 : 0,
        }}
      >
        <Image
          ref={aiCircleRef}
          alt='AI Circle'
          src={aiCircle}
          className='w-full'
          sizes='(max-width: 639px) 78vw, (max-width: 1023px) 311px, (max-width: 1279px) 24vw, 311px'
          onLoad={() => setAiCircleIsLoaded(true)}
          quality={100}
          priority
        />
      </div>
    </div>
  );
}

export default BookCover;
