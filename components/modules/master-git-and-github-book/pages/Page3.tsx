'use client';

import BookLeftPartContainer from '@/components/elements/master-git-and-github-book/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/master-git-and-github-book/BookMainContainer';
import H3 from '@/components/elements/master-git-and-github-book/H3';
import TextLi from '@/components/elements/master-git-and-github-book/TextLi';
import TextNode from '@/components/elements/master-git-and-github-book/TextNode';
import TextUl from '@/components/elements/master-git-and-github-book/TextUl';
import SpanSplitter from '@/components/elements/SpanSplitter';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/master-git-and-github-book';
import {
  useActiveBackground,
  useActiveBackgroundDispatch,
} from '@/context/background-master-git-and-github-book/Context';
import { useBookVersion } from '@/context/book-version/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';
import Page from '../../../elements/master-git-and-github-book/Page';
import Controls from './Controls';

gsap.registerPlugin(ScrollTrigger);

function Page3(): ReactElement {
  const { activeBackground } = useActiveBackground();
  const { setActiveBackground } = useActiveBackgroundDispatch();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { gsapShouldUpdate } = useGsapResizeUpdate();
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  const pageWrapperRef = useRef<HTMLDivElement | null>(null);

  const introContainerRef = useRef<HTMLDivElement | null>(null);
  const visualizationContainerRef = useRef<HTMLDivElement | null>(null);

  const initializeProjectCommitRef = useRef<HTMLLIElement | null>(null);

  const addHeaderCommitRef = useRef<HTMLLIElement | null>(null);
  const addHeaderCommitCircleRef = useRef<HTMLDivElement | null>(null);

  const addIntroSectionCommitRef = useRef<HTMLLIElement | null>(null);
  const addIntroSectionCommitCircleRef = useRef<HTMLDivElement | null>(null);

  const addProductsSectionCommitRef = useRef<HTMLLIElement | null>(null);
  const addProductsSectionCommitCircleRef = useRef<HTMLDivElement | null>(null);

  const addFooterCommitRef = useRef<HTMLLIElement | null>(null);
  const addFooterCommitCircleRef = useRef<HTMLDivElement | null>(null);

  const animateLettersCommitRef = useRef<HTMLLIElement | null>(null);
  const animateLettersCommitCircleRef = useRef<HTMLDivElement | null>(null);

  const animateLogoCommitRef = useRef<HTMLLIElement | null>(null);
  const animateLogoCommitCircleRef = useRef<HTMLDivElement | null>(null);

  const mergeCommitRef = useRef<HTMLLIElement | null>(null);
  const mergeCommitCircleRef = useRef<HTMLDivElement | null>(null);

  const headerSectionRef = useRef<HTMLDivElement | null>(null);
  const introSectionRef = useRef<HTMLDivElement | null>(null);
  const productsSectionRef = useRef<HTMLDivElement | null>(null);
  const footerSectionRef = useRef<HTMLDivElement | null>(null);

  const animationFeatureBranchRef = useRef<HTMLLIElement | null>(null);

  const introSectionTextRef = useRef<HTMLParagraphElement | null>(null);
  const introSectionSpineRef = useRef<HTMLDivElement | null>(null);
  const browserWrapperRef = useRef<HTMLDivElement | null>(null);

  const step1TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step1TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const step2TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step2TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const step3TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step3TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const step4TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step4TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const step5TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step5TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const step6TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step6TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const step7TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step7TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const step8TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step8TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const step9TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step9TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const step10TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step10TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const step11TextNodeRef = useRef<HTMLParagraphElement | null>(null);
  const step11TextNodeSmallRef = useRef<HTMLParagraphElement | null>(null);

  const lettersAnimationTweenRef = useRef<gsap.core.Tween | null>(null);
  const spineAnimationTweenRef = useRef<gsap.core.Tween | null>(null);

  const themeToggleRef = useRef<HTMLDivElement | null>(null);

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 3,
    basePath,
  });

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: '68.5%+=1100px top',
        end: '+=0',
        onEnter: () => {
          setActiveBackground(ActiveBackground.DEFAULT);
          gsap.to(pageWrapperRef.current, {
            duration: 0.15,
            marginBottom: 0,
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
          });
        },
        onEnterBack: () => {
          setActiveBackground(ActiveBackground.PART1);
          gsap.to(pageWrapperRef.current, {
            duration: 0.15,
            marginBottom: '1.25rem',
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
          });
        },
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  useGSAP(
    () => {
      function toggleLettersAnimation(
        action: 'start' | 'stop',
        direction: number | undefined,
        finalAnimation: boolean = false,
      ): void {
        function start(): void {
          lettersAnimationTweenRef.current = gsap.fromTo(
            introSectionTextRef.current!.querySelectorAll('span'),
            {
              visibility: 'hidden',
            },
            {
              visibility: 'visible',
              duration: 0.1,
              ease: 'none',
              stagger: 0.1,
              yoyo: true,
              repeat: finalAnimation ? 0 : -1,
            },
          );
        }

        function stop(): void {
          if (lettersAnimationTweenRef.current !== null) {
            lettersAnimationTweenRef.current.revert();
            lettersAnimationTweenRef.current = null;
          }
        }

        if (action === 'start') {
          if (lettersAnimationTweenRef.current === null) {
            start();
          } else {
            if (direction === -1) {
              stop();
            }
          }
        } else {
          if (lettersAnimationTweenRef.current !== null) {
            if (direction === 1) {
              stop();
            }
          } else {
            if (direction === -1) {
              start();
            }
          }
        }
      }

      function toggleSpineAnimation(
        action: 'start' | 'stop',
        direction: number | undefined,
        finalAnimation: boolean = false,
      ): void {
        function start(): void {
          spineAnimationTweenRef.current = gsap.fromTo(
            introSectionSpineRef.current,
            {
              opacity: 1,
            },
            {
              opacity: 0,
              duration: 0.9,
              ease: 'power2.out',
              yoyo: true,
              repeat: finalAnimation ? 7 : -1,
            },
          );
        }

        function stop(): void {
          if (spineAnimationTweenRef.current !== null) {
            spineAnimationTweenRef.current.revert();
            spineAnimationTweenRef.current = null;
          }
        }

        if (action === 'start') {
          if (spineAnimationTweenRef.current === null) {
            start();
          } else {
            if (direction === -1) {
              stop();
            }
          }
        } else {
          console.log('action === ', action);
          if (spineAnimationTweenRef.current !== null) {
            if (direction === 1) {
              stop();
            }
          } else {
            if (direction === -1) {
              start();
            }
          }
        }
      }

      function setUpCommonTimeline(timeline: gsap.core.Timeline): void {
        let shadowSize;

        if (window.innerWidth > 1024) {
          shadowSize = '0.5vw';
        } else {
          shadowSize = '0.7vw';
        }

        if (window.innerHeight < 560) {
          shadowSize = '0.7vh';
        }

        const blueBoxShadow = `0 0 0 ${shadowSize} rgba(39, 26, 211, 0.5)`;
        const greenBoxShadow = `0 0 0 ${shadowSize} rgba(76, 187, 23, 0.5)`;

        timeline.set(
          initializeProjectCommitRef.current,
          {
            boxShadow: blueBoxShadow,
          },
          '1',
        );
        timeline.set(introContainerRef.current, { opacity: 0 }, '1');
        timeline.set(visualizationContainerRef.current, { opacity: 1 }, '1');

        timeline.set(
          addHeaderCommitRef.current,
          {
            opacity: 1,
          },
          '2',
        );
        timeline.set(headerSectionRef.current, { opacity: 1 }, '2');
        timeline.set(
          addHeaderCommitCircleRef.current,
          { boxShadow: blueBoxShadow },
          '2',
        );
        timeline.set(
          initializeProjectCommitRef.current,
          { boxShadow: 'none' },
          '2',
        );
        timeline.set(step2TextNodeRef.current, { opacity: 1, zIndex: 50 }, '2');
        timeline.set(
          step2TextNodeSmallRef.current,
          { opacity: 1, zIndex: 50 },
          '2',
        );
        timeline.set(
          step1TextNodeRef.current,
          { opacity: 0, zIndex: 'auto' },
          '2',
        );
        timeline.set(
          step1TextNodeSmallRef.current,
          { opacity: 0, zIndex: 'auto' },
          '2',
        );

        timeline.set(
          addIntroSectionCommitRef.current,
          {
            opacity: 1,
          },
          '3',
        );
        timeline.set(introSectionRef.current, { opacity: 1 }, '3');
        timeline.set(
          addIntroSectionCommitCircleRef.current,
          { boxShadow: blueBoxShadow },
          '3',
        );
        timeline.set(
          addHeaderCommitCircleRef.current,
          { boxShadow: 'none' },
          '3',
        );
        timeline.set(step3TextNodeRef.current, { opacity: 1, zIndex: 50 }, '3');
        timeline.set(
          step3TextNodeSmallRef.current,
          { opacity: 1, zIndex: 50 },
          '3',
        );
        timeline.set(
          step2TextNodeRef.current,
          { opacity: 0, zIndex: 'auto' },
          '3',
        );
        timeline.set(
          step2TextNodeSmallRef.current,
          { opacity: 0, zIndex: 'auto' },
          '3',
        );

        timeline.set(animateLettersCommitRef.current, { opacity: 1 }, '4');
        timeline.set(introSectionTextRef.current, { color: '#4CBB17' }, '4');
        timeline.add(
          () =>
            toggleLettersAnimation('start', timeline.scrollTrigger?.direction),
          '4',
        );
        timeline.set(
          animateLettersCommitCircleRef.current,
          {
            boxShadow: greenBoxShadow,
          },
          '4',
        );
        timeline.set(
          addIntroSectionCommitCircleRef.current,
          {
            boxShadow: 'none',
          },
          '4',
        );
        timeline.set(animationFeatureBranchRef.current, { opacity: 1 }, '4');
        timeline.set(step4TextNodeRef.current, { opacity: 1, zIndex: 50 }, '4');
        timeline.set(
          step4TextNodeSmallRef.current,
          { opacity: 1, zIndex: 50 },
          '4',
        );
        timeline.set(
          step3TextNodeRef.current,
          { opacity: 0, zIndex: 'auto' },
          '4',
        );
        timeline.set(
          step3TextNodeSmallRef.current,
          { opacity: 0, zIndex: 'auto' },
          '4',
        );

        timeline.set(
          addIntroSectionCommitCircleRef.current,
          { boxShadow: blueBoxShadow },
          '5',
        );
        timeline.add(
          () =>
            toggleLettersAnimation('stop', timeline.scrollTrigger?.direction),
          '5',
        );
        timeline.set(introSectionTextRef.current, { color: '#271AD3' }, '5');
        timeline.set(
          animateLettersCommitCircleRef.current,
          { boxShadow: 'none' },
          '5',
        );
        timeline.set(animateLettersCommitRef.current, { opacity: 0.3 }, '5');
        timeline.set(step5TextNodeRef.current, { opacity: 1, zIndex: 50 }, '5');
        timeline.set(
          step5TextNodeSmallRef.current,
          { opacity: 1, zIndex: 50 },
          '5',
        );
        timeline.set(
          step4TextNodeRef.current,
          { opacity: 0, zIndex: 'auto' },
          '5',
        );
        timeline.set(
          step4TextNodeSmallRef.current,
          { opacity: 0, zIndex: 'auto' },
          '5',
        );

        timeline.set(addProductsSectionCommitRef.current, { opacity: 1 }, '6');
        timeline.set(productsSectionRef.current, { opacity: 1 }, '6');
        timeline.set(
          addProductsSectionCommitCircleRef.current,
          {
            boxShadow: blueBoxShadow,
          },
          '6',
        );
        timeline.set(
          addIntroSectionCommitCircleRef.current,
          { boxShadow: 'none' },
          '6',
        );
        timeline.set(step6TextNodeRef.current, { opacity: 1, zIndex: 50 }, '6');
        timeline.set(
          step6TextNodeSmallRef.current,
          { opacity: 1, zIndex: 50 },
          '6',
        );
        timeline.set(
          step5TextNodeRef.current,
          { opacity: 0, zIndex: 'auto' },
          '6',
        );
        timeline.set(
          step5TextNodeSmallRef.current,
          { opacity: 0, zIndex: 'auto' },
          '6',
        );

        timeline.set(addFooterCommitRef.current, { opacity: 1 }, '7');
        timeline.set(footerSectionRef.current, { opacity: 1 }, '7');
        timeline.set(
          addFooterCommitCircleRef.current,
          {
            boxShadow: blueBoxShadow,
          },
          '7',
        );
        timeline.set(
          addProductsSectionCommitCircleRef.current,
          {
            boxShadow: 'none',
          },
          '7',
        );
        timeline.set(step7TextNodeRef.current, { opacity: 1, zIndex: 50 }, '7');
        timeline.set(
          step7TextNodeSmallRef.current,
          { opacity: 1, zIndex: 50 },
          '7',
        );
        timeline.set(
          step6TextNodeRef.current,
          { opacity: 0, zIndex: 'auto' },
          '7',
        );
        timeline.set(
          step6TextNodeSmallRef.current,
          { opacity: 0, zIndex: 'auto' },
          '7',
        );

        timeline.set(animateLettersCommitRef.current, { opacity: 1 }, '8');
        timeline.set(
          animateLettersCommitCircleRef.current,
          { boxShadow: greenBoxShadow },
          '8',
        );
        timeline.add(
          () =>
            toggleLettersAnimation('start', timeline.scrollTrigger?.direction),
          '8',
        );
        timeline.set(introSectionTextRef.current, { color: '#4CBB17' }, '8');
        timeline.set(
          addFooterCommitCircleRef.current,
          { boxShadow: 'none' },
          '8',
        );
        timeline.set(addFooterCommitRef.current, { opacity: 0.3 }, '8');
        timeline.set(
          addProductsSectionCommitRef.current,
          { opacity: 0.3 },
          '8',
        );
        timeline.set(step8TextNodeRef.current, { opacity: 1, zIndex: 50 }, '8');
        timeline.set(
          step8TextNodeSmallRef.current,
          { opacity: 1, zIndex: 50 },
          '8',
        );
        timeline.set(
          step7TextNodeRef.current,
          { opacity: 0, zIndex: 'auto' },
          '8',
        );
        timeline.set(
          step7TextNodeSmallRef.current,
          { opacity: 0, zIndex: 'auto' },
          '8',
        );

        timeline.set(animateLogoCommitRef.current, { opacity: 1 }, '9');
        timeline.set(
          introSectionSpineRef.current,
          { backgroundColor: '#4CBB17' },
          '9',
        );
        timeline.add(
          () =>
            toggleSpineAnimation('start', timeline.scrollTrigger?.direction),
          '9',
        );
        timeline.set(
          animateLogoCommitCircleRef.current,
          {
            boxShadow: greenBoxShadow,
          },
          '9',
        );
        timeline.set(
          animateLettersCommitCircleRef.current,
          { boxShadow: 'none' },
          '9',
        );
        timeline.set(step9TextNodeRef.current, { opacity: 1, zIndex: 50 }, '9');
        timeline.set(
          step9TextNodeSmallRef.current,
          { opacity: 1, zIndex: 50 },
          '9',
        );
        timeline.set(
          step8TextNodeRef.current,
          { opacity: 0, zIndex: 'auto' },
          '9',
        );
        timeline.set(
          step8TextNodeSmallRef.current,
          { opacity: 0, zIndex: 'auto' },
          '9',
        );

        timeline.set(
          addFooterCommitCircleRef.current,
          { boxShadow: blueBoxShadow },
          '10',
        );
        timeline.set(addFooterCommitRef.current, { opacity: 1 }, '10');
        timeline.add(
          () =>
            toggleLettersAnimation('stop', timeline.scrollTrigger?.direction),
          '10',
        );
        timeline.add(
          () => toggleSpineAnimation('stop', timeline.scrollTrigger?.direction),
          '10',
        );
        timeline.set(introSectionTextRef.current, { color: '#271AD3' }, '10');
        timeline.set(
          introSectionSpineRef.current,
          { backgroundColor: '#271AD3' },
          '10',
        );
        timeline.set(addProductsSectionCommitRef.current, { opacity: 1 }, '10');
        timeline.set(animateLettersCommitRef.current, { opacity: 0.3 }, '10');
        timeline.set(animateLogoCommitRef.current, { opacity: 0.3 }, '10');
        timeline.set(
          animateLogoCommitCircleRef.current,
          { boxShadow: 'none' },
          '10',
        );
        timeline.set(
          step10TextNodeRef.current,
          { opacity: 1, zIndex: 50 },
          '10',
        );
        timeline.set(
          step10TextNodeSmallRef.current,
          { opacity: 1, zIndex: 50 },
          '10',
        );
        timeline.set(
          step9TextNodeRef.current,
          { opacity: 0, zIndex: 'auto' },
          '10',
        );
        timeline.set(
          step9TextNodeSmallRef.current,
          { opacity: 0, zIndex: 'auto' },
          '10',
        );

        timeline.set(mergeCommitRef.current, { opacity: 1 }, '11');
        timeline.set(
          mergeCommitCircleRef.current,
          { boxShadow: blueBoxShadow },
          '11',
        );
        timeline.set(
          addFooterCommitCircleRef.current,
          { boxShadow: 'none' },
          '11',
        );
        timeline.set(animateLettersCommitRef.current, { opacity: 1 }, '11');
        timeline.set(animateLogoCommitRef.current, { opacity: 1 }, '11');
        timeline.set(introSectionTextRef.current, { color: '#4CBB17' }, '11');
        timeline.set(
          introSectionSpineRef.current,
          { backgroundColor: '#4CBB17' },
          '11',
        );
        timeline.set(
          browserWrapperRef.current,
          {
            borderColor: '#ff5013',
          },
          '11',
        );
        timeline.set(
          step11TextNodeRef.current,
          { opacity: 1, zIndex: 50 },
          '11',
        );
        timeline.set(
          step11TextNodeSmallRef.current,
          { opacity: 1, zIndex: 50 },
          '11',
        );
        timeline.set(
          step10TextNodeRef.current,
          { opacity: 0, zIndex: 'auto' },
          '11',
        );
        timeline.set(
          step10TextNodeSmallRef.current,
          { opacity: 0, zIndex: 'auto' },
          '11',
        );
        timeline.add(
          () =>
            toggleLettersAnimation(
              'start',
              timeline.scrollTrigger?.direction,
              true,
            ),
          '11',
        );
        timeline.add(
          () =>
            toggleSpineAnimation(
              'start',
              timeline.scrollTrigger?.direction,
              true,
            ),
          '11',
        );
      }

      const mm = gsap.matchMedia();

      mm.add('(max-width: 640px)', () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'bottom bottom',
            end: '+=1100',
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onEnterBack: () => {
              toggleLettersAnimation('stop', 1);
              toggleSpineAnimation('stop', 1);
            },
          },
        });

        timeline.set(
          themeToggleRef.current,
          { opacity: 0, pointerEvents: 'none' },
          '1',
        );

        setUpCommonTimeline(timeline);
      });

      mm.add('(min-width: 641px) and (max-width: 1024px)', () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'bottom bottom',
            end: '+=1100',
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onEnterBack: () => {
              toggleLettersAnimation('stop', 1);
              toggleSpineAnimation('stop', 1);
            },
          },
        });

        setUpCommonTimeline(timeline);
      });

      mm.add('(min-width: 1025px)', () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=1100',
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onEnterBack: () => {
              toggleLettersAnimation('stop', 1);
              toggleSpineAnimation('stop', 1);
            },
          },
        });

        setUpCommonTimeline(timeline);
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  const pageClasses = classNames('bg-white  dark:bg-git-black', {
    'border-b  border-[#EBEBEB]  dark:border-[#414141]':
      activeBackground === ActiveBackground.DEFAULT,
  });

  return (
    <div ref={pageWrapperRef} className='my-5'>
      <Page id='page-3' ref={sectionRef} className={pageClasses}>
        <Controls themeToggleRef={themeToggleRef} pageNumber={3} />
        <BookMainContainer
          ref={introContainerRef}
          className='transition-opacity'
        >
          <H3>Visualizing Git</H3>
          <BookLeftPartContainer className='w-1/2  max-2md:w-full'>
            <TextNode>
              In&nbsp;Git, you work with&nbsp;checkpoints called{' '}
              <strong>commits.</strong> Each commit is&nbsp;a&nbsp;snapshot
              of&nbsp;an entire project at&nbsp;the&nbsp;moment the&nbsp;commit
              is&nbsp;created. The&nbsp;typical workflow looks like this: you
              make some changes to&nbsp;a&nbsp;project, commit
              those&nbsp;changes, do more work, and&nbsp;commit again. Then,
              with&nbsp;the&nbsp;help of&nbsp;Git, you can do
              the&nbsp;following:
            </TextNode>
            <TextUl>
              <TextLi>travel back to&nbsp;previous commits,</TextLi>
              <TextLi>
                compare different versions of&nbsp;a&nbsp;project,
              </TextLi>
              <TextLi>revert to&nbsp;an&nbsp;earlier version,</TextLi>
              <TextLi>
                create a&nbsp;new branch to&nbsp;start a&nbsp;different line
                of&nbsp;work from&nbsp;any&nbsp;commit,
              </TextLi>
              <TextLi>merge changes,</TextLi>
              <TextLi>collaborate and&nbsp;share changes seamlessly.</TextLi>
            </TextUl>
            <TextNode>
              Let&apos;s start by&nbsp;visualizing a&nbsp;basic Git workflow
              from&nbsp;a&nbsp;high-level perspective.
            </TextNode>
          </BookLeftPartContainer>
        </BookMainContainer>
        <BookMainContainer
          ref={visualizationContainerRef}
          className='absolute  inset-x-0  top-0  z-10  flex    
                     flex-row  justify-between  opacity-0
                     transition-opacity  max-lg:bottom-0  max-lg:top-auto  
                     max-2md:flex-col  max-md:!bottom-[4vh]  max-md:!top-auto  max-sm:!bottom-[15vh]
                     h-md:!bottom-[14vh]  h-md:flex-row  h-sm:!bottom-[10vh]  max-lg:portrait:bottom-auto
                     max-lg:portrait:top-0  h-2md:portrait:!bottom-[3.5vh]  wh-sm:portrait:!bottom-[10vh]'
        >
          <div
            className='flex  flex-col  justify-between  max-2md:translate-x-[-0.7rem]
                        h-md:translate-x-0'
          >
            <div
              className='origin-top-left  translate-x-[1.2rem]  translate-y-6  
                        rotate-[25deg]  max-2md:rotate-[15deg]  h-md:translate-x-[0.3rem]'
            >
              <div className='float-left'>
                <ul
                  className='flex  flex-row  gap-[5vw]  max-xl:gap-[4vw]
                           max-2md:gap-[10vw]  max-md:gap-[11vw] 
                           h-md:gap-[5vh]'
                >
                  <li
                    ref={initializeProjectCommitRef}
                    className='relative  z-[70]  size-[5vw]  rounded-full
                           bg-blue  transition-shadow  h-md:size-[5vh]'
                  >
                    <p
                      className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left   rotate-[-25deg]
                              text-xl  leading-normal  text-blue  max-md:text-[3vw]  h-md:bottom-[4.5vh]
                              h-md:left-[0.5vh]  h-md:text-[3vh]  dark:text-[#3D32D1]'
                    >
                      Initialize&nbsp;the&nbsp;project
                    </p>
                  </li>
                  <li
                    ref={addHeaderCommitRef}
                    className='relative  z-[60]  size-[5vw]  rounded-full
                           opacity-0  transition-opacity  h-md:size-[5vh]'
                  >
                    <div
                      ref={addHeaderCommitCircleRef}
                      className='absolute  inset-0  z-30  rounded-full  bg-blue
                               transition-shadow'
                    >
                      <p
                        className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                                text-xl  leading-normal  text-blue  max-md:text-[3vw]
                                h-md:bottom-[4.5vh]  h-md:left-[0.5vh]  h-md:text-[3vh]  dark:text-[#3D32D1]'
                      >
                        Add&nbsp;the&nbsp;header
                      </p>
                    </div>
                    <div
                      className='absolute  right-[5vw]  top-1/2  z-20  h-[4px]   
                             w-[5vw]  -translate-y-1/2  bg-[#CECECE] 
                             max-xl:w-[4vw]  max-2md:h-[3px]  max-2md:w-[10vw]
                             max-md:w-[11vw]  max-sm:h-[2px]  h-md:right-[5vh]
                             h-md:w-[5vh]
                             h-sm:h-[2px]  dark:bg-[#252525]'
                    ></div>
                  </li>
                  <li
                    ref={addIntroSectionCommitRef}
                    className='relative  z-50  size-[5vw]  rounded-full  opacity-0
                             transition-opacity  h-md:size-[5vh]'
                  >
                    <div
                      ref={addIntroSectionCommitCircleRef}
                      className='absolute  inset-0  z-30  rounded-full  bg-blue
                               transition-shadow'
                    >
                      <p
                        className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                                text-xl  leading-normal  text-blue  max-md:text-[3vw]
                                h-md:bottom-[4.5vh]  h-md:left-[0.5vh]  
                                h-md:text-[3vh]  dark:text-[#3D32D1]'
                      >
                        Add&nbsp;the&nbsp;intro&nbsp;section
                      </p>
                    </div>
                    <div
                      className='absolute  right-[5vw]  top-1/2  z-20  h-[4px]  
                              w-[5vw]  -translate-y-1/2  bg-[#CECECE]  
                              max-xl:w-[4vw]  max-2md:h-[3px]  max-2md:w-[10vw]
                              max-md:w-[11vw]  max-sm:h-[2px]  h-md:right-[5vh]
                              h-md:w-[5vh]  h-sm:h-[2px]  dark:bg-[#252525]'
                    ></div>
                  </li>
                </ul>
              </div>
              <div
                className='float-left  ml-[5vw]  max-xl:ml-[4vw]
                           max-2md:ml-[10vw]  max-md:ml-[11vw] 
                           h-md:ml-[5vh]  h-md:h-[5vh]'
              >
                <ul
                  className='relative  z-20  flex  flex-row  gap-[5vw]  max-xl:gap-[4vw]
                           max-2md:gap-[10vw]  max-md:gap-[11vw] 
                           h-md:gap-[5vh]'
                >
                  <li
                    ref={addProductsSectionCommitRef}
                    className='relative  z-40  size-[5vw]  rounded-full  opacity-0
                             transition-opacity  h-md:size-[5vh]'
                  >
                    <div
                      ref={addProductsSectionCommitCircleRef}
                      className='absolute  inset-0  z-30  rounded-full  bg-blue
                               transition-shadow'
                    >
                      <p
                        className='absolute  bottom-[5.2vw]  left-[0.5vw]  
                               origin-top-left  rotate-[-25deg]  text-xl
                               leading-normal  text-blue  max-md:text-[3vw]
                               h-md:bottom-[4.5vh]  h-md:left-[0.5vh]
                               h-md:text-[3vh]  dark:text-[#3D32D1]'
                      >
                        Add&nbsp;the&nbsp;products&nbsp;section
                      </p>
                    </div>
                    <div
                      className='absolute  right-[5vw]  top-1/2  z-20  h-[4px]  
                             w-[5vw]  -translate-y-1/2  bg-[#CECECE]
                             max-xl:w-[4vw]  max-2md:h-[3px]  max-2md:w-[10vw]
                             max-md:w-[11vw]  max-sm:h-[2px]  h-md:right-[5vh]
                             h-md:w-[5vh]  h-sm:h-[2px]  dark:bg-[#252525]'
                    ></div>
                  </li>
                  <li
                    ref={addFooterCommitRef}
                    className='relative  z-30  size-[5vw]  rounded-full  opacity-0
                             transition-opacity  h-md:size-[5vh]'
                  >
                    <div
                      ref={addFooterCommitCircleRef}
                      className='absolute  inset-0  z-30  rounded-full  bg-blue
                               transition-shadow'
                    >
                      <p
                        className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                               text-xl  leading-normal  text-blue  max-md:text-[3vw]
                               h-md:bottom-[4.5vh]  h-md:left-[0.5vh]
                               h-md:text-[3vh]  dark:text-[#3D32D1]'
                      >
                        Add&nbsp;the&nbsp;footer
                      </p>
                    </div>
                    <div
                      className='absolute  right-[5vw]  top-1/2  z-20  h-[4px]  
                               w-[5vw]  -translate-y-1/2  bg-[#CECECE]
                               max-xl:w-[4vw]  max-2md:h-[3px]  max-2md:w-[10vw]
                               max-md:w-[11vw]  max-sm:h-[2px]  h-md:right-[5vh]
                               h-md:w-[5vh]  h-sm:h-[2px]  dark:bg-[#252525]'
                    ></div>
                  </li>
                  <li
                    ref={mergeCommitRef}
                    className='relative  z-20  size-[5vw]  rounded-full  opacity-0
                             transition-opacity  h-md:size-[5vh]'
                  >
                    <div
                      ref={mergeCommitCircleRef}
                      className='absolute  inset-0  z-40  rounded-full  bg-orange
                               transition-shadow'
                    >
                      <p
                        className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                              text-xl  leading-normal  text-blue  max-md:text-[3vw]
                              h-md:bottom-[4.5vh]  h-md:left-[0.5vh]
                              h-md:text-[3vh]  dark:text-[#3D32D1]'
                      >
                        Merge
                      </p>
                    </div>
                    <div
                      className='absolute  right-[5vw]  top-1/2  z-30  h-[4px]  
                               w-[5vw]  -translate-y-1/2  bg-[#CECECE]
                              max-xl:w-[4vw]  max-2md:h-[3px]  max-2md:w-[10vw]
                              max-md:w-[11vw]  max-sm:h-[2px]
                              h-md:right-[5vh]  h-md:w-[5vh]
                              h-sm:h-[2px]  dark:bg-[#252525]'
                    ></div>
                    <div
                      className='absolute  right-[2.5vw]  top-1/2  z-20  h-[4px]  
                             w-[25vw]  origin-top-right  -translate-y-1/2  rotate-[-41.5deg]  
                             bg-[#CECECE]  max-xl:w-[20vw]  max-2md:h-[3px]
                             max-2md:w-[25vw]  max-2md:rotate-[-38.5deg]
                             max-sm:h-[2px]  h-md:right-[2.5vh]  h-md:w-[22vh]
                             h-md:rotate-[-41.5deg]  h-sm:h-[2px]
                             dark:bg-[#252525]'
                    ></div>
                  </li>
                </ul>
              </div>
              <ul
                className='relative  z-30  clear-both  flex  origin-[2.5vw_2.5vw]  translate-x-[20vw]  translate-y-[-5vw]  rotate-[-40deg] 
                         flex-col  gap-[5vw]  max-xl:translate-x-[18vw]  max-xl:gap-[4vw]
                         max-2md:translate-x-[30vw]  max-2md:rotate-[-60deg]  max-2md:gap-[10vw]
                         max-md:translate-x-[32vw]  max-md:gap-[11vw] 
                         h-md:origin-[2.5vh_2.5vh]  h-md:translate-x-[20vh]
                         h-md:translate-y-[-5vh]  h-md:rotate-[-40deg]  h-md:gap-[5vh]'
              >
                <li
                  className='relative  size-[5vw]  rounded-full  bg-blue  opacity-0
                             h-md:size-[5vh]'
                ></li>
                <li
                  ref={animateLettersCommitRef}
                  className='relative  z-40  size-[5vw]  rounded-full  opacity-0
                           transition-opacity  h-md:size-[5vh]'
                >
                  <div
                    ref={animateLettersCommitCircleRef}
                    className='absolute  inset-0  z-30  rounded-full  bg-[#4CBB17]
                             transition-shadow'
                  >
                    <p
                      className='absolute  bottom-[2.7vw]  right-[5.7vw] 
                               origin-top-right  rotate-[15deg]  text-xl
                               leading-normal  text-[#4CBB17]
                               max-2md:bottom-[3.2vw]  max-2md:right-[3.9vw]
                               max-2md:rotate-45  max-md:text-[3vw]
                               h-md:bottom-[1.7vh]  h-md:right-[5vh]  
                               h-md:rotate-[25deg]  h-md:text-[3vh]'
                    >
                      Animate&nbsp;letters
                    </p>
                  </div>
                  <div
                    className='absolute  bottom-[5vw]  left-1/2  z-20  h-[5vw]  
                             w-[4px]  -translate-x-1/2  bg-[#CECECE]  max-xl:h-[4vw]
                             max-2md:h-[10vw]  max-2md:w-[3px]  max-md:h-[11vw]
                             max-sm:w-[2px]  h-md:bottom-[5vh]  h-md:h-[5vh]
                             h-sm:w-[2px]  dark:bg-[#252525]'
                  ></div>
                </li>
                <li
                  ref={animateLogoCommitRef}
                  className='relative  z-30  size-[5vw]  rounded-full  opacity-0
                           transition-opacity  h-md:size-[5vh]'
                >
                  <div
                    ref={animateLogoCommitCircleRef}
                    className='absolute  inset-0  z-30  rounded-full  bg-[#4CBB17]
                             transition-shadow'
                  >
                    <p
                      className='absolute  bottom-[2.7vw] right-[5.7vw] 
                            origin-top-right  rotate-[15deg]  text-xl
                            leading-normal  text-[#4CBB17]
                            max-2md:bottom-[3.2vw]  max-2md:right-[3.9vw]
                            max-2md:rotate-45  max-md:text-[3vw]
                            h-md:bottom-[1.7vh]  h-md:right-[5vh]
                            h-md:rotate-[25deg]  h-md:text-[3vh]'
                    >
                      Animate&nbsp;the&nbsp;spine
                    </p>
                  </div>
                  <div
                    className='absolute  bottom-[5vw]  left-1/2  z-20  h-[5vw]  
                           w-[4px]  -translate-x-1/2  bg-[#CECECE]  max-xl:h-[4vw]
                           max-2md:h-[10vw]  max-2md:w-[3px]  max-md:h-[11vw]
                           max-sm:w-[2px]  h-md:bottom-[5vh]  h-md:h-[5vh]
                           h-sm:w-[2px]  dark:bg-[#252525]'
                  ></div>
                </li>
              </ul>
            </div>
            <div
              className='relative  mt-5  w-[22rem]  translate-y-[0.31rem]
                         max-2md:hidden  h-md:block  h-md:w-[35vh]  h-md:translate-y-[0.7vh]'
            >
              <TextNode
                ref={step1TextNodeRef}
                className='absolute  inset-x-0  bottom-0  z-50  !mb-0  text-sm
                           leading-normal  transition-opacity  h-md:text-[1.5vh]'
              >
                We&apos;ll be&nbsp;working on&nbsp;the&nbsp;studio website.
                First, let&apos;s initialize our&nbsp;project and&nbsp;make
                the&nbsp;corresponding commit
              </TextNode>
              <TextNode
                ref={step2TextNodeRef}
                className='absolute  inset-x-0  bottom-0  !mb-0  text-sm  leading-normal
                           opacity-0
                           transition-opacity  h-md:text-[1.5vh]'
              >
                Then, add the&nbsp;header and&nbsp;make a&nbsp;commit
              </TextNode>
              <TextNode
                ref={step3TextNodeRef}
                className='absolute  inset-x-0  bottom-0  !mb-0  text-sm  leading-normal
                           opacity-0  transition-opacity  h-md:text-[1.5vh]
                           '
              >
                Next, add the&nbsp;intro section and&nbsp;commit changes
              </TextNode>
              <TextNode
                ref={step4TextNodeRef}
                className='absolute  inset-x-0  bottom-0  !mb-0  text-sm  leading-normal
                           opacity-0  transition-opacity  h-md:text-[1.5vh]
                           '
              >
                Now, we got the&nbsp;idea to&nbsp;animate the&nbsp;elements
                in&nbsp;the&nbsp;intro section. But&nbsp;we see this rather
                as&nbsp;an&nbsp;extra feature we&apos;d like to&nbsp;experiment
                with, so&nbsp;instead&nbsp;of&nbsp;working on&nbsp;it
                on&nbsp;the&nbsp;main branch, we&nbsp;create a&nbsp;separate
                branch. After&nbsp;switching to&nbsp;the&nbsp;new branch, we
                start by&nbsp;animating the&nbsp;letters and&nbsp;make
                the&nbsp;first commit on&nbsp;our animation feature branch
              </TextNode>
              <TextNode
                ref={step5TextNodeRef}
                className='absolute  inset-x-0  bottom-0  !mb-0  text-sm  leading-normal
                           opacity-0  transition-opacity  h-md:text-[1.5vh]
                           '
              >
                After&nbsp;spending a&nbsp;day playing
                with&nbsp;the&nbsp;animation, we realized that it would be great
                to&nbsp;finish the&nbsp;main part of&nbsp;the&nbsp;project
                first, as&nbsp;the&nbsp;deadline is&nbsp;tomorrow. So&nbsp;now
                we return to&nbsp;the&nbsp;main branch
              </TextNode>
              <TextNode
                ref={step6TextNodeRef}
                className='absolute  inset-x-0  bottom-0  !mb-0  text-sm  leading-normal
                           opacity-0  transition-opacity  h-md:text-[1.5vh]
                           '
              >
                Then,&nbsp;we add the&nbsp;products section and&nbsp;make
                a&nbsp;commit
              </TextNode>
              <TextNode
                ref={step7TextNodeRef}
                className='absolute  inset-x-0  bottom-0  !mb-0  text-sm  leading-normal
                           opacity-0  transition-opacity  h-md:text-[1.5vh]
                           '
              >
                To&nbsp;finilize the&nbsp;main part of&nbsp;the&nbsp;project,
                we&nbsp;implement the&nbsp;footer and&nbsp;commit changes
              </TextNode>
              <TextNode
                ref={step8TextNodeRef}
                className='absolute  inset-x-0  bottom-0  !mb-0  text-sm  leading-normal
                           opacity-0  transition-opacity  h-md:text-[1.5vh]
                           '
              >
                With&nbsp;a&nbsp;couple of&nbsp;hours left before
                the&nbsp;deadline, we&nbsp;cherish the&nbsp;hope
                to&nbsp;complete the&nbsp;animation feature we&nbsp;started
                earlier. Therefore,&nbsp;we&nbsp;switch
                to&nbsp;the&nbsp;animation feature branch
              </TextNode>
              <TextNode
                ref={step9TextNodeRef}
                className='absolute  inset-x-0  bottom-0  !mb-0  text-sm  leading-normal
                           opacity-0  transition-opacity  h-md:text-[1.5vh]
                           '
              >
                Now, we speed run the&nbsp;animation of&nbsp;the&nbsp;spine
                and&nbsp;commit it. All that&apos;s left is to&nbsp;merge
                the&nbsp;animation feature into the&nbsp;main branch
                to&nbsp;have the&nbsp;final combined version
                of&nbsp;the&nbsp;project
              </TextNode>
              <TextNode
                ref={step10TextNodeRef}
                className='absolute  inset-x-0  bottom-0  !mb-0  text-sm  leading-normal
                           opacity-0  transition-opacity  h-md:text-[1.5vh]
                           '
              >
                So, we switch to&nbsp;the latest commit
                on&nbsp;the&nbsp;main&nbsp;branch
              </TextNode>
              <TextNode
                ref={step11TextNodeRef}
                className='absolute  inset-x-0  bottom-0  !mb-0  text-sm  leading-normal
                           opacity-0  transition-opacity  h-md:text-[1.5vh]
                           '
              >
                And&nbsp;do the&nbsp;merge
              </TextNode>
            </div>
          </div>
          <div
            className='flex  flex-col  justify-between  max-2md:mt-[4vh] 
                        h-md:mt-0'
          >
            <div
              ref={browserWrapperRef}
              className='pointer-events-none  w-[22vw]  select-none  overflow-hidden  
                       rounded-3xl  border  border-blue  text-[1vw]
                       transition-colors  max-2xl:w-[21rem]  max-2xl:text-[14.95px] 
                       max-xl:w-[28vw]  max-xl:text-[1.7vh]  max-2md:w-full  
                       max-2md:text-[1vh]  h-md:w-[40vw]  max-lg:portrait:text-[1vh]'
            >
              <div
                className='flex  h-12  w-full  flex-row  items-center  
                        justify-between  bg-[#F4F4F4]  px-[10%]  
                        pb-[3px] dark:bg-[#0F1114]'
              >
                <div className='flex  flex-row  items-center  gap-5'>
                  <div className='flex  flex-row  gap-3'>
                    <div
                      className='relative  h-[2px]  w-[15px]  bg-[#BABABA]  
                           before:absolute
                           before:top-1/2  before:size-[10px]  
                           before:origin-top-left  before:-translate-x-px
                           before:-rotate-45 
                           before:border-l-2  before:border-t-2
                           before:border-[#BABABA]  before:content-[""] 
                           dark:bg-[#4A4A4A] dark:before:border-[#4A4A4A]
                           '
                    ></div>
                    <div
                      className='relative  h-[2px]  w-[15px]  rotate-180
                           bg-[#BABABA]  before:absolute
                             before:top-1/2  before:size-[10px]  
                             before:origin-top-left  before:-translate-x-px
                             before:-rotate-45 
                             before:border-l-2  before:border-t-2
                             before:border-[#BABABA]  before:content-[""]
                             dark:bg-[#4A4A4A]  dark:before:border-[#4A4A4A]
                             '
                    ></div>
                  </div>
                  <div
                    className='relative  size-[14px]  rounded-full  
                           border-2  border-[#BABABA]  dark:border-[#4A4A4A]'
                  >
                    <div
                      className='absolute  right-[-2px]  top-[-2.2px]  z-20  
                                  size-[6px]  border-b-2  border-r-2
                                border-[#BABABA]  dark:border-[#4A4A4A]'
                    ></div>
                    <div
                      className='absolute  right-[-2px]  top-[4px]  z-10  h-[2px] w-[3px]
                                bg-[#F4F4F4]  dark:bg-[#0F1114]'
                    ></div>
                  </div>
                </div>
                <div
                  className='h-[17px]  w-1/2  rounded-full  border
                              border-[#BABABA]  h-md:w-[45%]
                              dark:border-[#4A4A4A]'
                ></div>
                <div className='flex  h-[14px]  flex-col  justify-between'>
                  <div className='size-[3px]  rounded-full  bg-[#BABABA]  dark:bg-[#4A4A4A]'></div>
                  <div className='size-[3px]  rounded-full  bg-[#BABABA]  dark:bg-[#4A4A4A]'></div>
                  <div className='size-[3px]  rounded-full  bg-[#BABABA]  dark:bg-[#4A4A4A]'></div>
                </div>
              </div>
              <div
                ref={headerSectionRef}
                className='mt-[0.55em]  flex  flex-row  items-center
                         justify-between  px-[10%]  opacity-0  transition-opacity'
              >
                <p className='text-[0.8em]  font-bold  text-blue  dark:text-[#3D32D1]'>
                  Nikmas Studio
                </p>
                <div className='flex  flex-row  items-center  gap-[0.25em]'>
                  <svg
                    className='translate-y-[-0.031em]  fill-blue  dark:fill-[#3D32D1]'
                    version='1.1'
                    id='Capa_1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='0.5em'
                    height='0.5em'
                    viewBox='0 0 612 612'
                  >
                    <g>
                      <g id='_x37__5_'>
                        <g>
                          <path
                            d='M76.5,286.875H19.125C8.568,286.875,0,295.443,0,306c0,10.557,8.568,19.125,19.125,19.125H76.5
				c10.557,0,19.125-8.568,19.125-19.125C95.625,295.443,87.057,286.875,76.5,286.875z M306,95.625
				c10.557,0,19.125-8.568,19.125-19.125V19.125C325.125,8.568,316.557,0,306,0c-10.557,0-19.125,8.568-19.125,19.125V76.5
				C286.875,87.057,295.443,95.625,306,95.625z M490.002,148.792l40.182-40.182c7.401-7.401,7.401-19.393,0-26.794
				s-19.394-7.401-26.795,0l-40.182,40.182c-7.401,7.401-7.401,19.393,0,26.794C470.609,156.194,482.601,156.194,490.002,148.792z
				 M141.716,443.509l-40.182,40.182c-7.401,7.401-7.401,19.393,0,26.794s19.393,7.401,26.794,0l40.182-40.182
				c7.401-7.401,7.401-19.393,0-26.794S149.118,436.107,141.716,443.509z M130.203,157.246c7.478,7.478,19.584,7.478,27.042,0
				c7.459-7.478,7.459-19.584,0-27.042L116.682,89.62c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.043
				L130.203,157.246z M306,516.375c-10.557,0-19.125,8.568-19.125,19.125v57.375c0,10.557,8.568,19.125,19.125,19.125
				c10.557,0,19.125-8.568,19.125-19.125V535.5C325.125,524.943,316.557,516.375,306,516.375z M481.797,454.754
				c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.479-7.478,19.584,0,27.043l40.564,40.564c7.478,7.478,19.584,7.478,27.043,0
				c7.459-7.479,7.478-19.584,0-27.043L481.797,454.754z M592.875,286.875H535.5c-10.557,0-19.125,8.568-19.125,19.125
				c0,10.557,8.568,19.125,19.125,19.125h57.375c10.557,0,19.125-8.568,19.125-19.125C612,295.443,603.432,286.875,592.875,286.875z
				 M306,133.76c-95.128,0-172.24,77.112-172.24,172.24S210.872,478.24,306,478.24S478.24,401.128,478.24,306
				S401.128,133.76,306,133.76z M306,439.837c-73.918,0-133.837-59.919-133.837-133.837S232.082,172.163,306,172.163
				S439.837,232.082,439.837,306S379.918,439.837,306,439.837z'
                          />
                        </g>
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                  <div className='grid  size-[0.625em]  place-content-center  rounded-full  bg-blue'>
                    <div
                      className='h-[0.3125em]  w-px  translate-y-[-0.006em]  rounded-[0.0625em]
                                  bg-white'
                    ></div>
                  </div>
                </div>
              </div>
              <div
                ref={introSectionRef}
                className='mt-[0.9em]  flex  flex-row  justify-between  px-[10%]
                            opacity-0  transition-opacity'
              >
                <p
                  ref={introSectionTextRef}
                  className='text-[1.05em]  leading-[1.1]  text-[#3D32D1]
                           transition-colors'
                >
                  <SpanSplitter text='Next-gen' />
                  <br />
                  <SpanSplitter text='publishing studio' />
                  <br />
                  <SpanSplitter text='that specializes' />
                  <br />
                  <SpanSplitter text='in creating' />
                  <br />
                  <SpanSplitter text='interactive' />
                  <br />
                  <SpanSplitter text='e-books' />
                </p>
                <div
                  ref={introSectionSpineRef}
                  className='h-[6.7em]  w-[0.65em]  rounded-[0.18em]  bg-[#3D32D1]
                           transition-colors'
                ></div>
              </div>
              <div
                ref={productsSectionRef}
                className='mt-[1.5em]  flex  w-full  flex-col  items-center  bg-[#E9E8FA]
                            pb-[1.7em]  pt-[1em]  opacity-0  transition-opacity
                            dark:bg-[#04061E]'
              >
                <p
                  className='mb-[0.5em]  text-[0.8em]  font-bold  text-blue
                            dark:text-[#3D32D1]'
                >
                  Our first book
                </p>
                <div
                  className='h-[7.8em]  w-[5.4em]  rounded-[0.4em]  bg-blue
                              px-[0.5em]  pt-[0.67em]'
                >
                  <p className='text-[0.42em]  text-white'>
                    Master Git & GitHub:
                    <br />
                    From Everyday Tasks
                    <br />
                    To Deep Waters
                  </p>
                  <div className='relative'>
                    <div
                      className='mx-auto  mt-[1em]  aspect-square  w-1/2  
                               rotate-45  rounded-sm  bg-white  dark:bg-[#04061E]'
                    ></div>
                    <div
                      className='absolute  left-1/2  top-[47%]  h-3/4  w-[7%]  
                               -translate-x-1/2  -translate-y-1/2  
                              rounded-[0.08em]  bg-blue  dark:bg-white'
                    ></div>
                  </div>
                </div>
              </div>
              <div
                ref={footerSectionRef}
                className='mb-[0.75em]  mt-[2.1em]  flex  flex-row  
                         justify-between  px-[10%]  opacity-0
                         transition-opacity'
              >
                <div>
                  <p
                    className='mb-[0.6em]  text-[0.42em]  text-blue  
                            dark:text-[#3D32D1]'
                  >
                    © Nikmas Studio, 2024
                  </p>
                  <ul
                    className='flex  flex-col  gap-[0.05em]  text-blue  
                             dark:text-[#3D32D1]'
                  >
                    <li className='text-[0.3em]'>Terms and conditions</li>
                    <li className='text-[0.3em]'>Privacy policy</li>
                    <li className='text-[0.3em]'>Cookies policy</li>
                  </ul>
                </div>
                <div className='flex  flex-row  gap-[0.3em]'>
                  <div
                    className='grid  size-[1.9em]  place-content-center  
                             rounded-full  bg-blue  pt-[0.32em]
                             text-[0.42em]  text-white  '
                  >
                    T
                  </div>
                  <div
                    className='grid  size-[1.9em]  place-content-center 
                              rounded-full  bg-blue  pt-[0.32em]
                                text-[0.42em]  text-white'
                  >
                    I
                  </div>
                  <div
                    className='grid  size-[1.9em]  place-content-center
                              rounded-full  bg-blue  pt-[0.32em]
                                text-[0.42em]  text-white'
                  >
                    F
                  </div>
                  <div
                    className='grid  size-[1.9em]  place-content-center
                              rounded-full  bg-blue  pt-[0.32em]
                                text-[0.42em]  text-white'
                  >
                    L
                  </div>
                </div>
                <div className='text-[0.42em]  text-blue  dark:text-[#3D32D1]'>
                  <p className='leading-tight'>
                    For questions <br /> and suggestions:
                  </p>
                  <p
                    className='pointer-events-none  mt-[0.3em]  select-none  
                              font-semibold  no-underline'
                  >
                    team@nikmas.studio
                  </p>
                </div>
              </div>
            </div>
            <div
              className='mt-10  flex  flex-row  justify-between  max-md:mt-[4vh]
                          h-md:mt-[6vh]'
            >
              <div
                className='relative  hidden  w-[22rem]  max-2md:block
                           max-md:w-1/2  h-md:hidden'
              >
                <TextNode
                  ref={step1TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  z-50  !mb-0  text-sm
                             leading-normal  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  We&apos;ll be&nbsp;working on&nbsp;the&nbsp;studio website.
                  First, let&apos;s initialize our&nbsp;project and&nbsp;make
                  the&nbsp;corresponding commit
                </TextNode>
                <TextNode
                  ref={step2TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  !mb-0  text-sm  leading-normal
                             opacity-0  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  Then, add the&nbsp;header and&nbsp;make a&nbsp;commit
                </TextNode>
                <TextNode
                  ref={step3TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  !mb-0  text-sm  leading-normal
                             opacity-0  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  Next, add the&nbsp;intro section and&nbsp;commit changes
                </TextNode>
                <TextNode
                  ref={step4TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  !mb-0  text-sm  leading-normal
                             opacity-0  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  Now, we got the&nbsp;idea to&nbsp;animate the&nbsp;elements
                  in&nbsp;the&nbsp;intro section. But&nbsp;we see this rather
                  as&nbsp;an&nbsp;extra feature we&apos;d like
                  to&nbsp;experiment with, so&nbsp;instead&nbsp;of&nbsp;working
                  on&nbsp;it on&nbsp;the&nbsp;main branch, we&nbsp;create
                  a&nbsp;separate branch. After&nbsp;switching
                  to&nbsp;the&nbsp;new branch, we start by&nbsp;animating
                  the&nbsp;letters and&nbsp;make the&nbsp;first commit
                  on&nbsp;our animation feature branch
                </TextNode>
                <TextNode
                  ref={step5TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  !mb-0  text-sm  leading-normal
                             opacity-0  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  After&nbsp;spending a&nbsp;day playing
                  with&nbsp;the&nbsp;animation, we realized that it would be
                  great to&nbsp;finish the&nbsp;main part
                  of&nbsp;the&nbsp;project first, as&nbsp;the&nbsp;deadline
                  is&nbsp;tomorrow. So&nbsp;now we return to&nbsp;the&nbsp;main
                  branch
                </TextNode>
                <TextNode
                  ref={step6TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  !mb-0  text-sm  leading-normal
                             opacity-0  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  Then,&nbsp;we add the&nbsp;products section and&nbsp;make
                  a&nbsp;commit
                </TextNode>
                <TextNode
                  ref={step7TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  !mb-0  text-sm  leading-normal
                             opacity-0  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  To&nbsp;finilize the&nbsp;main part of&nbsp;the&nbsp;project,
                  we&nbsp;implement the&nbsp;footer and&nbsp;commit changes
                </TextNode>
                <TextNode
                  ref={step8TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  !mb-0  text-sm  leading-normal
                             opacity-0  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  With&nbsp;a&nbsp;couple of&nbsp;hours left before
                  the&nbsp;deadline, we&nbsp;cherish the&nbsp;hope
                  to&nbsp;complete the&nbsp;animation feature we&nbsp;started
                  earlier. Therefore,&nbsp;we&nbsp;switch
                  to&nbsp;the&nbsp;animation feature branch
                </TextNode>
                <TextNode
                  ref={step9TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  !mb-0  text-sm  leading-normal
                             opacity-0  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  Now, we speed run the&nbsp;animation of&nbsp;the&nbsp;spine
                  and&nbsp;commit it. All that&apos;s left is to&nbsp;merge
                  the&nbsp;animation feature into the&nbsp;main branch
                  to&nbsp;have the&nbsp;final combined version of&nbsp;the
                  project
                </TextNode>
                <TextNode
                  ref={step10TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  !mb-0  text-sm  leading-normal
                             opacity-0  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  So, we switch to&nbsp;the latest commit
                  on&nbsp;the&nbsp;main&nbsp;branch
                </TextNode>
                <TextNode
                  ref={step11TextNodeSmallRef}
                  className='absolute  inset-x-0  top-0  !mb-0  text-sm  leading-normal
                             opacity-0  transition-opacity
                             max-md:text-[1.9vw]'
                >
                  And&nbsp;do the&nbsp;merge
                </TextNode>
              </div>
              <ul className='flex  flex-col  gap-3  max-md:gap-[2vw]  h-md:gap-[2vh]'>
                <li
                  className='flex  flex-row  items-center  gap-2  max-md:gap-[1.4vw]
                             h-md:gap-[1.4vh]'
                >
                  <div
                    className='size-6  rounded-full  bg-blue  max-md:size-[4vw]
                                h-md:size-[4vh]'
                  ></div>
                  <p
                    className='text-xl  leading-tight  text-blue  max-md:text-[3vw]
                              h-md:text-[3vh]  dark:text-[#3D32D1]'
                  >
                    Main branch
                  </p>
                </li>
                <li
                  ref={animationFeatureBranchRef}
                  className='flex  flex-row  items-center  gap-2  opacity-0
                             transition-opacity  max-md:gap-[1.4vw]  h-md:gap-[1.4vh]'
                >
                  <div
                    className='size-6  rounded-full  bg-[#4CBB17]  max-md:size-[4vw]
                                h-md:size-[4vh]'
                  ></div>
                  <p
                    className='text-xl  leading-tight  text-[#4CBB17]  max-md:text-[3vw]
                              h-md:text-[3vh]'
                  >
                    Animation feature branch
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </BookMainContainer>
      </Page>
    </div>
  );
}

export default Page3;
