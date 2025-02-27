'use client';

import MainContainer from '@/components/elements/MainContainer';
import cakeEleven from '@/public/images/cake-eleven.png';
import circle from '@/public/images/dotted-elipse.svg';
import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { ReactElement, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Eleven(): ReactElement {
  const [circleIsRotated, setCircleIsRotated] = useState(false);
  const circleClasses = classNames(
    'pointer-events-auto  absolute  inset-0  transition-transform  duration-[1.2s]',
    {
      'rotate-45': circleIsRotated,
    },
  );

  return (
    <section className='pointer-events-none  mb-[5.5rem]  select-none  lg:mb-40'>
      <MainContainer>
        <div
          className='relative  mx-auto  aspect-square  w-[80vw]  
                     place-items-center  sm:w-[460px]'
        >
          <Image
            src={circle}
            alt='Dotted elipse'
            className={circleClasses}
            onClick={() => setCircleIsRotated((prev) => !prev)}
            onMouseEnter={() => setCircleIsRotated((prev) => !prev)}
            onMouseLeave={() => setCircleIsRotated((prev) => !prev)}
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
                className='w-[21vw]  opacity-0  sm:w-[120px]'
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
