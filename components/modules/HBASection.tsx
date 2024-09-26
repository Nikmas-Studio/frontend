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

    mm.add('(min-width: 1024px)', () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hbaSectionRef.current,
          scrub: true,
          start: 'top 750',
          end: '+=550',
        },
      });

      timeline
        .to(
          hbaBlock.current,
          {
            x: 0,
            opacity: 1,
          },
          0,
        )
        .to(
          circleRef.current,
          {
            rotation: 90,
          },
          0,
        );
    });

    mm.add('(max-width: 1023px)', () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hbaSectionRef.current,
          scrub: true,
          start: 'top 390',
          end: '+=250',
        },
      });

      timeline
        .to(
          hbaBlock.current,
          {
            x: 0,
            opacity: 1,
          },
          0,
        )
        .to(
          circleRef.current,
          {
            rotation: 90,
          },
          0,
        );
    });
  }, []);

  return (
    <section ref={hbaSectionRef} className='mb-32  mt-16  lg:mb-40  lg:mt-24'>
      <MainContainer>
        <div
          ref={hbaBlock}
          className='relative  mx-auto  aspect-square  w-[55vw]  translate-x-[-300px]  opacity-0
                     sm:w-[45vw]  lg:translate-x-[-800px]  xl:w-[30vw]  2xl:w-[460.5px]'
        >
          <Image
            ref={circleRef}
            src={circle}
            alt='Dotted elipse'
            className='size-full'
          />
          <div
            className='absolute  left-1/2  top-1/2  z-20  flex  -translate-x-1/2
                       translate-y-[-85%]  items-end  gap-[1.5vw]  
                       xl:gap-[1.4vw]  2xl:gap-[21.49px]'
          >
            <p
              className='flex  translate-y-[2vw]  items-end gap-[1.2vw] 
                         text-[9vw]  font-bold  leading-none
                         sm:translate-y-[1.6vw]  sm:text-[7vw]  lg:text-[6.5vw]
                         xl:translate-y-[1.02vw]  xl:gap-[1.1vw]
                         xl:text-[4.5vw]  2xl:translate-y-[15.657px]
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
              className='w-[8vw]  max-w-none  sm:w-[6vw]  lg:w-[5.5vw]  xl:w-[4vw]  2xl:w-[61.4px]'
              src={cakeHBA}
              alt='Cake HBA'
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default HBASection;
