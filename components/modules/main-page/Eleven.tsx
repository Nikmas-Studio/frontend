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
  return (
    <section
      className='pointer-events-none  mb-[5.5rem]  select-none  lg:mb-40'
    >
      <MainContainer>
        <div
          className='relative  mx-auto  aspect-square  w-[80vw]  place-items-center  opacity-1  [transition:transform_1s_ease-out,opacity_1s_ease-out]  
                     sm:w-[460px]'
        >
          <Image
            src={circle}
            alt='Dotted elipse'
            className='absolute  inset-0  [transition:transform_1s_ease-out]  xl:transition-none'
            quality={100}
            priority
          />
          <div className='grid  size-full  place-items-center'>
            <div className='z-20  flex  -translate-y-1/2  flex-row  items-end  gap-[20px]'>
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
