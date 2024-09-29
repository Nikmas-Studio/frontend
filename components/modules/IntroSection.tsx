'use client';

import { useTouchDevice } from '@/context/touch-device/Context';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ReactElement, useEffect, useRef } from 'react';
import IntroDescrLine from '../elements/IntroDescrLine';
import MainContainer from '../elements/MainContainer';

function IntroSection(): ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const spineRef = useRef<HTMLDivElement | null>(null);
  const lineSpanRef = useRef<HTMLSpanElement | null>(null);
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const { isTouchDevice } = useTouchDevice();
  const isTouchDeviceRef = useRef(false);

  useEffect(() => {
    isTouchDeviceRef.current = isTouchDevice;
  }, [isTouchDevice]);

  useGSAP(
    (context, contextSave) => {
      const nextGenElements = containerRef.current?.querySelectorAll(
        '[data-element="studio-intro-next-gen"]',
      );

      const nextGenFirstElement = nextGenElements![0];

      const publishingStudioElements = containerRef.current?.querySelectorAll(
        '[data-element="studio-intro-publishing-studio"]',
      );

      const publishingStudioFirstElement = publishingStudioElements![0];

      const thatSpecializesElements = containerRef.current?.querySelectorAll(
        '[data-element="studio-intro-that-specializes"]',
      );

      const thatSpecializesFirstElement = thatSpecializesElements![0];

      const inCreatingElements = containerRef.current?.querySelectorAll(
        '[data-element="studio-intro-in-creating"]',
      );

      const inCreatingFirstElement = inCreatingElements![0];

      const interactiveElements = containerRef.current?.querySelectorAll(
        '[data-element="studio-intro-interactive"]',
      );

      const interactiveFirstElement = interactiveElements![0];
      const interactiveSecondElement = interactiveElements![1];

      const webBooksElements = containerRef.current?.querySelectorAll(
        '[data-element="studio-intro-e-books"]',
      );

      const webBooksFirstElement = webBooksElements![0];

      const initialTimelineLines = [
        nextGenFirstElement,
        publishingStudioFirstElement,
        thatSpecializesFirstElement,
        inCreatingFirstElement,
        interactiveFirstElement,
        webBooksFirstElement,
      ];

      let wrapper: HTMLElement;
      let handleMouseEnter: () => void;
      let handleMouseLeave: () => void;
      let handleClick: () => void;

      const initialTimeline = gsap.timeline({
        onComplete: () => {
          const colorsTimeline = gsap.timeline({
            defaults: {
              duration: 0.5,
              ease: 'power2.inOut',
            },
          });

          colorsTimeline
            .to(
              interactiveFirstElement,
              {
                color: '#4CBB17',
              },
              0,
            )
            .to(
              interactiveSecondElement,
              {
                color: '#4CBB17',
              },
              0,
            )
            .fromTo(
              interactiveFirstElement.querySelectorAll('span:nth-child(odd)'),
              { yPercent: 100 },
              { yPercent: 0 },
              0,
            )
            .fromTo(
              interactiveSecondElement.querySelectorAll('span:nth-child(odd)'),
              {
                yPercent: 0,
              },
              { yPercent: -100 },
              0,
            )
            .fromTo(
              interactiveFirstElement.querySelectorAll('span:nth-child(even)'),
              { yPercent: 0 },
              { yPercent: 100 },
              0,
            )
            .fromTo(
              interactiveSecondElement.querySelectorAll('span:nth-child(even)'),
              {
                yPercent: -100,
              },
              { yPercent: 0 },
              0,
            );

          const charsTimeline = gsap.timeline({
            defaults: {
              duration: 0.5,
              ease: 'power2.inOut',
            },
          });

          charsTimeline
            .fromTo(
              interactiveFirstElement.querySelectorAll('span:nth-child(odd)'),
              { yPercent: 100 },
              { yPercent: 0 },
              0,
            )
            .fromTo(
              interactiveSecondElement.querySelectorAll('span:nth-child(odd)'),
              {
                yPercent: 0,
              },
              { yPercent: -100 },
              0,
            )
            .fromTo(
              interactiveFirstElement.querySelectorAll('span:nth-child(even)'),
              { yPercent: 0 },
              { yPercent: 100 },
              0,
            )
            .fromTo(
              interactiveSecondElement.querySelectorAll('span:nth-child(even)'),
              {
                yPercent: -100,
              },
              { yPercent: 0 },
              0,
            );

          handleMouseEnter = contextSave!((): void => {
            if (!isTouchDeviceRef.current) {
              if (!charsTimeline.isActive()) {
                charsTimeline.restart();
              }
            }
          });

          handleMouseLeave = contextSave!((): void => {
            if (!isTouchDeviceRef.current) {
              if (!charsTimeline.isActive()) {
                charsTimeline.reverse();
              }
            }
          });

          handleClick = contextSave!((): void => {
            if (!charsTimeline.isActive()) {
              charsTimeline.restart();
            }
          });

          interactiveSecondElement.classList.remove('hidden');

          wrapper = interactiveSecondElement.parentNode! as HTMLElement;
          wrapper.classList.add('cursor-pointer');

          wrapper.addEventListener('mouseenter', handleMouseEnter);
          wrapper.addEventListener('mouseleave', handleMouseLeave);
          wrapper.addEventListener('click', handleClick);
        },
        delay: 0.2,
      });

      initialTimelineLines.forEach((element) => {
        initialTimeline.to(element.querySelectorAll('span'), {
          visibility: 'visible',
          duration: 0.1,
          ease: 'none',
          stagger: 0.1,
        });
      });

      initialTimeline.to(
        '[data-element="studio-intro-spine"',
        {
          x: 0,
          duration: 0.9,
          ease: 'power2.out',
        },
        '-=0.6',
      );

      return () => {
        wrapper?.removeEventListener('mouseenter', handleMouseEnter);
        wrapper?.removeEventListener('mouseleave', handleMouseLeave);
        wrapper?.removeEventListener('click', handleClick);
      };
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <section className='mt-2'>
      <MainContainer
        className='flex  justify-between  overflow-hidden'
        ref={containerRef}
      >
        <h1
          ref={h1Ref}
          aria-hidden='true'
          className='translate-x-[-1.5px]  translate-y-[-4px]  select-none  
                     text-[11.5vw] leading-none 
                     text-black sm:text-[clamp(1px,12vh,min(122px,9vw))]  
                   dark:text-white'
        >
          <IntroDescrLine text='Next-gen' dataElement='studio-intro-next-gen' />
          <br />
          <IntroDescrLine
            text='publishing studio'
            dataElement='studio-intro-publishing-studio'
          />
          <br />
          <IntroDescrLine
            text='that specializes'
            dataElement='studio-intro-that-specializes'
          />
          <br />
          <IntroDescrLine
            text='in creating'
            dataElement='studio-intro-in-creating'
            className='z-50'
          />
          <br />
          <IntroDescrLine
            text='interactive'
            dataElement='studio-intro-interactive'
            isAnimated
          />
          <br />
          <IntroDescrLine
            ref={lineSpanRef}
            text='e-books'
            dataElement='studio-intro-e-books'
          />
        </h1>
        <h1 className='sr-only'>
          Nikmas Studio is a next-gen publishing studio that specializes in
          creating interactive e-books.
        </h1>
        <div
          ref={spineRef}
          data-element='studio-intro-spine'
          className='hidden  h-[clamp(1px,69vh,min(700px,51.7vw))]  w-[clamp(1px,7.7vh,min(66px,6vw))]  
                     translate-x-[300px]
                     rounded-[1.3vw]  bg-black  sm:block
                     xl:rounded-[1vw]  2xl:rounded-[15px]
                     dark:bg-white
                     '
        ></div>
      </MainContainer>
    </section>
  );
}

export default IntroSection;
