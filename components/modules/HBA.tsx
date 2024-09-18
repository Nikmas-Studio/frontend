'use client';

import cakeHBA from '@/public/images/cake-hba.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import MainContainer from '../elements/MainContainer';

function HBA() {
  const circleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(circleRef.current, {
      rotation: 360,
      ease: 'linear',
      duration: 35,
      repeat: -1,
    });
  });

  return (
    <section className='mt-16  lg:mt-24  mb-24'>
      <MainContainer>
        <div className='relative aspect-square  w-[55vw]  sm:w-[45vw]  xl:w-[37vw]  2xl:w-[540px]  mx-auto'>
          <div
            ref={circleRef}
            className='rounded-full  bg-white  border-dotted  border-[1.2vw]  sm:border-[1vw]  2xl:border-[10px]  
                        aspect-square  w-[55vw]  sm:w-[45vw]  xl:w-[37vw]  2xl:w-[540px]  xl:border-[0.7vw]  border-[#00EAFF]  absolute top-1/2  left-1/2  -translate-x-1/2  -translate-y-1/2  z-10'
          ></div>
          <div
            className='absolute  top-1/2  left-1/2  -translate-x-1/2  -translate-y-[85%]
                       flex  items-end  gap-[1.5vw]  2xl:gap-[22px]  z-20'
          >
            <p className='flex  items-end  font-bold  leading-none  translate-y-[2.2vw]  sm:translate-y-[1.6vw]  xl:translate-y-[1.2vw]  2xl:translate-y-[18px]  gap-[1.2vw]  2xl:gap-[18px]'>
              <span className='text-[9vw]  sm:text-[7vw]  xl:text-[5.4vw]  2xl:text-[80px]  text-[#FFDB00]'>
                5
              </span>
              <span className='text-[9vw]  sm:text-[7vw]  xl:text-[5.4vw]  2xl:text-[80px]  text-[#FF7800]'>
                HBA
              </span>
            </p>
            <Image
              className='w-[9.8vw]  sm:w-[8vw]  xl:w-[6.1vw]  2xl:w-[90px]  max-w-none'
              src={cakeHBA}
              alt='Cake HBA'
            />
          </div>
        </div>
        <div className='w-[8vw]  h-[65vw]  sm:w-[7vw]  sm:h-[51.5vw]  xl:w-[4.3vw]  xl:h-[40.1vw]  2xl:w-[66px]  2xl:h-[615.531px]  bg-[#4CBB17]  rounded-[1.7vw]  sm:rounded-[1.2vw]  xl:rounded-[1vw]  2xl:rounded-[15px]  mt-20  lg:mt-32  2xl:mt-[140px]  mx-auto'></div>
      </MainContainer>
    </section>
  );
}

export default HBA;
