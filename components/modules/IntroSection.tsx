'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ReactElement, useEffect, useRef } from 'react';
import IntroDescrLine from '../elements/IntroDescrLine';
import MainContainer from '../elements/MainContainer';

function IntroSection(): ReactElement {
  const container = useRef<HTMLDivElement | null>(null);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    const handleTouchStart = (): void => {
      isTouchDevice.current = true;
    };

    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  useGSAP(
    (context, contextSave) => {
      const nextGenElements = container.current?.querySelectorAll(
        '[data-element="studio-intro-next-gen"]',
      );

      const nextGenFirstElement = nextGenElements![0];

      const publishingStudioElements = container.current?.querySelectorAll(
        '[data-element="studio-intro-publishing-studio"]',
      );

      const publishingStudioFirstElement = publishingStudioElements![0];

      const thatSpecializesElements = container.current?.querySelectorAll(
        '[data-element="studio-intro-that-specializes"]',
      );

      const thatSpecializesFirstElement = thatSpecializesElements![0];

      const inCreatingElements = container.current?.querySelectorAll(
        '[data-element="studio-intro-in-creating"]',
      );

      const inCreatingFirstElement = inCreatingElements![0];

      const interactiveElements = container.current?.querySelectorAll(
        '[data-element="studio-intro-interactive"]',
      );

      const interactiveFirstElement = interactiveElements![0];
      const interactiveSecondElement = interactiveElements![1];

      const webBooksElements = container.current?.querySelectorAll(
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
            if (!isTouchDevice.current) {
              if (!charsTimeline.isActive()) {
                charsTimeline.restart();
              }
            }
          });

          handleMouseLeave = contextSave!((): void => {
            if (!isTouchDevice.current) {
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
    { scope: container, dependencies: [] },
  );

  return (
    <section className='mt-2'>
      <MainContainer
        className='flex  justify-between  overflow-x-hidden'
        ref={container}
      >
        <h1
          aria-hidden='true'
          className='translate-x-[-1.5px]  translate-y-[-4px]  select-none  
                     text-[11.5vw]  leading-none  text-black  
                     sm:translate-x-[-2px]  sm:text-[9vw]  md:translate-x-[-3px]
                     md:translate-y-[-5px]  lg:translate-x-[-5px]  
                     lg:translate-y-[-7px]  xl:translate-y-[-7px]  xl:text-[7vw]
                     2xl:text-[107.45px]  dark:text-white'
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
          />
          <br />
          <IntroDescrLine
            text='interactive'
            dataElement='studio-intro-interactive'
            isAnimated
          />
          <br />
          <IntroDescrLine text='e-books' dataElement='studio-intro-e-books' />
        </h1>
        <h1 className='sr-only'>
          Nikmas Studio is a next-gen publishing studio that specializes in
          creating interactive web-books.
        </h1>
        <div
          data-element='studio-intro-spine'
          className='hidden  h-[51.5vw]  w-[7vw]  translate-x-[300px]  rounded-[1.5vw]  
                     bg-black  sm:block  xl:h-[39.95vw]  
                     xl:w-[4.3vw]  xl:rounded-[1vw]  2xl:h-[614.531px]  
                     2xl:w-[66px]  2xl:rounded-[15px]  dark:bg-white'
        ></div>
      </MainContainer>
    </section>
  );
}

export default IntroSection;
