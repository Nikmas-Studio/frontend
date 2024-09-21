'use client';

import cakeHBA from '@/public/images/cake-hba.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { ReactElement, useRef } from 'react';
import MainContainer from '../elements/MainContainer';

gsap.registerPlugin(ScrollTrigger);

function HBA(): ReactElement {
  const circleRef = useRef<SVGSVGElement | null>(null);
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
        .from(hbaSectionRef.current, {
          x: '-800',
          opacity: 0,
        })
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
        .from(hbaSectionRef.current, {
          x: '-300',
          opacity: 0,
        })
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
    <section ref={hbaSectionRef} className='mb-36  mt-16  lg:mt-24'>
      <MainContainer>
        <div
          ref={hbaBlock}
          className='relative mx-auto  aspect-square  w-[55vw]  sm:w-[45vw]  xl:w-[32vw]  2xl:w-[540px]'
        >
          <svg
            ref={circleRef}
            width='100%'
            height='100%'
            viewBox='0 0 520 520'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-[#4CBB17]  stroke-[8px]  [stroke-dasharray:0.01,20.01]  [stroke-linecap:round]  lg:stroke-[7px]'
          >
            <circle cx='260' cy='260' r='255' />
          </svg>
          <div
            className='absolute  left-1/2  top-1/2  z-20  flex
                       -translate-x-1/2  translate-y-[-85%]  items-end  gap-[1.5vw]  2xl:gap-[22px]'
          >
            <p className='flex  translate-y-[2vw]  items-end  gap-[1.2vw]  font-bold  leading-none  sm:translate-y-[1.6vw]  xl:translate-y-[1.2vw]  2xl:translate-y-[18px]  2xl:gap-[18px]'>
              <span className='text-[9vw]  [-webkit-text-fill-color:white]  [-webkit-text-stroke-color:rgba(76,187,23,0.3)]  [-webkit-text-stroke-width:1px]  sm:text-[7vw] xl:text-[5.4vw] 2xl:text-[80px]'>
                5
              </span>
              <span className='text-[9vw]  text-[#4CBB17]  sm:text-[7vw]  xl:text-[5.4vw]  2xl:text-[80px]'>
                HBA
              </span>
            </p>
            <Image
              className='w-[7vw]  max-w-none  sm:w-[5.5vw]  xl:w-[4vw]  2xl:w-[90px]'
              src={cakeHBA}
              alt='Cake HBA'
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default HBA;
