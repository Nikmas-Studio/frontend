'use client';

import cakeHBA from '@/public/images/cake-hba.png';
import circle from '@/public/images/dotted-elipse.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { ReactElement, useRef } from 'react';
import MainContainer from '../elements/MainContainer';

gsap.registerPlugin(ScrollTrigger);

function HBASection(): ReactElement {
  const circleRef = useRef<HTMLImageElement | null>(null);
  const hbaSectionRef = useRef<HTMLElement | null>(null);
  const hbaBlock = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1280px)', () => {
      ScrollTrigger.create({
        trigger: hbaSectionRef.current,
        start: 'top 750',
        onEnter: () => {
          gsap.set(hbaBlock.current, {
            opacity: 1,
          });
        },
      });
    });

    mm.add('(max-width: 1279px)', () => {
      ScrollTrigger.create({
        trigger: hbaSectionRef.current,
        start: 'top 390',
        onEnter: () => {
          gsap.set(hbaBlock.current, {
            opacity: 1,
          });
        },
      });
    });
  }, []);

  return (
    <section
      ref={hbaSectionRef}
      className='pointer-events-none  mb-32  mt-16  select-none  lg:mb-40  lg:mt-32'
    >
      <MainContainer>
        <div
          ref={hbaBlock}
          className='relative  mx-auto  aspect-square  w-[55vw]  opacity-0  
                     [transition:transform_1s_ease-out,opacity_1s_ease-out]  
                     sm:w-[45vw]  lg:w-[40vw]  xl:w-[30vw]  xl:translate-x-0  2xl:w-[460.5px]'
        >
          <Image
            ref={circleRef}
            src={circle}
            alt='Dotted elipse'
            className='size-full  [transition:transform_1s_ease-out]  xl:transition-none'
          />
          <div
            className='absolute  left-1/2  top-1/2  z-20  flex  -translate-x-1/2
                       translate-y-[-85%]  items-end  gap-[1.7vw]  
                       lg:gap-[1.4vw]  2xl:gap-[21.49px]'
          >
            <p
              className='flex  translate-y-[2.14vw]  items-end gap-[1.2vw] 
                         text-[9vw]  font-bold  leading-none
                         sm:translate-y-[1.67vw]  sm:text-[7vw]  
                         lg:translate-y-[1.23vw]
                         lg:gap-[1vw]
                         lg:text-[5.5vw]
                         xl:translate-y-[1vw]
                         xl:text-[4.5vw]  2xl:translate-y-[15.6px]
                         2xl:gap-[16.885px]  2xl:text-[69.075px]'
            >
              <span
                className='[-webkit-text-fill-color:white]  
                           [-webkit-text-stroke-color:rgba(76,187,23,0.3)]
                           [-webkit-text-stroke-width:1px]
                           dark:[-webkit-text-fill-color:black]
                           dark:[-webkit-text-stroke-color:rgba(76,187,23,0.5)]'
              >
                5
              </span>
              <span className='text-[#4CBB17]'>HBA</span>
            </p>
            <Image
              className='w-[8vw]  max-w-none  sm:w-[6vw]  lg:w-[5vw]  
                         xl:w-[4vw]  2xl:w-[61.4px]'
              src={cakeHBA}
              alt='Cake HBA'
              priority
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default HBASection;
