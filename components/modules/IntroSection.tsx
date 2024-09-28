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

  // from 640px viewport

  // 75% of viewport height (priority)
  // 75% of container width

  // 92.16px — 713.31px
  // 0.13 — font size / h1 container width ratio

  // 92.16px — 552.94px
  // 0.17 — font size / h1 container height ratio

  // 1. get viewport height
  // 2. h1 container height = viewport height * 0.75
  // 3. h1 font size = h1 container height * 0.17
  // 4. h1 container width = h1 font size / 0.13
  // 5. get intro container width without paddings
  // 6. h1 percentage of intro container width = h1 container width / intro container width * 100
  // 7. if h1 percentage of intro container width > 75 {
  //      h1 container width = intro container width * 0.75
  //      h1 font size = h1 container width * 0.13
  //      h1 container height = h1 font size / 0.17
  //      spine height = h1 container height
  //    } else {
  //      h1 container height = h1 font size / 0.17
  //      spine height = h1 container height
  //    }
  useEffect(() => {
    function setSizes(): void {
      if (window.innerWidth >= 640) {
        let h1ContainerHeight = window.innerHeight * 0.72;
        let h1FontSize = h1ContainerHeight * 0.17;
        let h1ContainerWidth = h1FontSize / 0.13;
        const introContainerPaddings =
          parseFloat(
            window.getComputedStyle(containerRef.current!).paddingLeft,
          ) * 2;
        const introContainerWidth =
          containerRef.current!.clientWidth - introContainerPaddings;
        const h1PercentageOfIntroContainerWidth =
          (h1ContainerWidth / introContainerWidth) * 100;

        if (h1PercentageOfIntroContainerWidth > 75) {
          h1ContainerWidth = introContainerWidth * 0.75;
          h1FontSize = h1ContainerWidth * 0.13;
          h1ContainerHeight = h1FontSize / 0.17;
        } else {
          h1ContainerHeight = h1FontSize / 0.17;
        }

        const charSpan = lineSpanRef.current!.querySelector('span span span');
        console.log('charSpan', charSpan);
        const charSpanRect = charSpan!.getBoundingClientRect();
        console.log('charSpanRect', charSpanRect);
        const charSpanRatio = charSpanRect.width / charSpanRect.height;
        const spineTranslateRatio = charSpanRatio < 0.4 ? 0.024 : 0.012;

        const spineHeight = h1ContainerHeight - h1ContainerHeight * 0.029;
        const spineTranslate = h1ContainerHeight * spineTranslateRatio;

        h1Ref.current!.style.fontSize = `${h1FontSize}px`;
        spineRef.current!.style.height = `${spineHeight}px`;
        const spineWidth = h1ContainerHeight / 9.29;
        spineRef.current!.style.width = `${spineWidth}px`;
        spineRef.current!.style.borderRadius = `${spineWidth * 0.2}px`;
        const spineExistingTransformX =
          parseFloat(
            window.getComputedStyle(spineRef.current!).transform.split(',')[4],
          ) || 0;

        console.log('spineExistingTransform', spineExistingTransformX);
        spineRef.current!.style.transform = `translateX(${spineExistingTransformX}px) translateY(${spineTranslate}px)`;
      }
    }

    setSizes();

    window.addEventListener('resize', setSizes);

    return () => {
      window.removeEventListener('resize', setSizes);
    };
  }, []);

  return (
    <section className='mt-2'>
      <MainContainer
        className='flex  justify-between  overflow-hidden'
        ref={containerRef}
      >
        <h1
          ref={h1Ref}
          aria-hidden='true'
          className='translate-x-[-1.5px]  select-none  
                     text-[11.5vw]  leading-none  text-black
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
          className='hidden  h-[51.5vw]  w-[7vw]  translate-x-[300px]
                     bg-black  sm:block  dark:bg-white'
        ></div>
      </MainContainer>
    </section>
  );
}

export default IntroSection;
