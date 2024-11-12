'use client';

import MainContainer from '@/components/elements/MainContainer';
import cakeEleven from '@/public/images/cake-1111.png';
import circle from '@/public/images/dotted-elipse.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { ReactElement, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Eleven(): ReactElement {
  const circleRef = useRef<HTMLImageElement | null>(null);
  const elevenSectionRef = useRef<HTMLElement | null>(null);
  const elevenBlock = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1280px)', () => {
      ScrollTrigger.create({
        trigger: elevenSectionRef.current,
        start: 'top 750',
        onEnter: () => {
          gsap.set(elevenBlock.current, {
            opacity: 1,
          });
        },
      });
    });

    mm.add('(max-width: 1279px)', () => {
      ScrollTrigger.create({
        trigger: elevenSectionRef.current,
        start: 'top 390',
        onEnter: () => {
          gsap.set(elevenBlock.current, {
            opacity: 1,
          });
        },
      });
    });
  }, []);

  return (
    <section
      ref={elevenSectionRef}
      className='pointer-events-none  mb-32  mt-20  select-none  lg:mb-40  lg:mt-32'
    >
      <MainContainer>
        <div
          ref={elevenBlock}
          className='relative  mx-auto  aspect-square  w-[80vw]  place-items-center  opacity-0  [transition:transform_1s_ease-out,opacity_1s_ease-out]  
                     sm:w-[460px]'
        >
          <Image
            ref={circleRef}
            src={circle}
            alt='Dotted elipse'
            className='absolute  inset-0  [transition:transform_1s_ease-out]  xl:transition-none'
            quality={100}
            priority
          />
          <div className='grid  size-full  place-items-center'>
            <div className='z-20  flex  translate-y-[-40%]  flex-row  items-end  gap-[20px]'>
              <div className='flex  flex-row  gap-[2vw]  sm:gap-[10px]'>
                <div className='h-[13vw]  w-[2.5vw]  rounded-[2px]  bg-[#4CBB17]  sm:h-[75px]  sm:w-[12px]'></div>
                <div className='h-[13vw]  w-[2.5vw]  rounded-[2px]  bg-[#4CBB17]  sm:h-[75px]  sm:w-[12px]'></div>
              </div>
              <Image
                className='w-[21vw]  sm:w-[120px]'
                src={cakeEleven}
                alt='Cake Eleven Eleven'
                quality={100}
                sizes='(max-width: 639px) 21vw, 120px'
                priority
              />
              <div className='flex  flex-row  gap-[2vw]  sm:gap-[10px]'>
                <div className='h-[13vw]  w-[2.5vw]  rounded-[2px]  bg-[#4CBB17]  sm:h-[75px]  sm:w-[12px]'></div>
                <div className='h-[13vw]  w-[2.5vw]  rounded-[2px]  bg-[#4CBB17]  sm:h-[75px]  sm:w-[12px]'></div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default Eleven;
