'use client';

import BookLeftPartContainer from '@/components/elements/master-git-and-github-book/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/master-git-and-github-book/BookMainContainer';
import H3 from '@/components/elements/master-git-and-github-book/H3';
import TextLi from '@/components/elements/master-git-and-github-book/TextLi';
import TextNode from '@/components/elements/master-git-and-github-book/TextNode';
import TextUl from '@/components/elements/master-git-and-github-book/TextUl';
import { BASE_PATH_READ } from '@/constants/master-git-and-github-book';
import {
  useActiveBackground,
  useActiveBackgroundDispatch,
} from '@/context/background-master-git-and-github-book/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import { useUrlUpdate } from '@/hooks/use-url-update';
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

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'bottom 280px',
        end: '+=0',
        onEnter: () => {
          setActiveBackground(ActiveBackground.DEFAULT);
          gsap.to(sectionRef.current, {
            duration: 0.15,
            marginBottom: 0,
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
          });
        },
        onEnterBack: () => {
          setActiveBackground(ActiveBackground.PART1);
          gsap.to(sectionRef.current, {
            duration: 0.15,
            marginBottom: '1.25rem',
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
          });
        },
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 3,
    basePath: BASE_PATH_READ,
  });

  const pageClasses = classNames('bg-white  dark:bg-git-black  my-5', {
    'border-b  border-[#EBEBEB]  dark:border-[#414141]':
      activeBackground === ActiveBackground.DEFAULT,
  });

  return (
    <Page id='page-3' ref={sectionRef} className={pageClasses}>
      <Controls pageNumber={3} />
      <BookMainContainer className='pointer-events-none  absolute  left-0  top-0  z-10  opacity-0'>
        <H3>Visualizing Git</H3>
        <BookLeftPartContainer className='w-1/2  max-2md:w-full'>
          <TextNode>
            In&nbsp;Git, you work with&nbsp;checkpoints called{' '}
            <strong>commits.</strong> Each commit is&nbsp;a&nbsp;snapshot
            of&nbsp;an entire project at&nbsp;the&nbsp;moment the&nbsp;commit
            is&nbsp;created. The&nbsp;typical workflow looks like this: you make
            some changes to&nbsp;a&nbsp;project, commit those&nbsp;changes, do
            more work, and&nbsp;commit again. Then, with&nbsp;the&nbsp;help
            of&nbsp;Git, you can do the&nbsp;following:
          </TextNode>
          <TextUl>
            <TextLi>travel back to&nbsp;previous commits,</TextLi>
            <TextLi>compare different versions of&nbsp;a&nbsp;project,</TextLi>
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
      <BookMainContainer>
        <div className='origin-top-left  rotate-[30deg]'>
          <ul className='relative  flex  flex-row  gap-[7vw]'>
            <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
              <p
                className='absolute  origin-top-left  -translate-y-6  rotate-[-30deg]
                            text-nowrap  text-xl  text-git-blue'
              >
                Initialize project
              </p>
            </li>
            <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
              <p
                className='absolute  origin-top-left  -translate-y-6  rotate-[-30deg]
                            text-nowrap  text-xl  text-git-blue'
              >
                Add header
              </p>
            </li>
            <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
              <p
                className='absolute  origin-top-left  -translate-y-6  rotate-[-30deg]
                            text-nowrap  text-xl  text-git-blue'
              >
                Add intro section
              </p>
            </li>
            <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
              <p
                className='absolute  origin-top-left  -translate-y-6  rotate-[-30deg]
                            text-nowrap  text-xl  text-git-blue'
              >
                Add products section
              </p>
            </li>
            <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
              <p
                className='absolute  origin-top-left  -translate-y-6  rotate-[-30deg]
                            text-nowrap  text-xl  text-git-blue'
              >
                Add footer
              </p>
            </li>
            <li className='relative  size-[5vw]  rounded-full  bg-git-orange'>
              <p
                className='absolute  origin-top-left  -translate-y-6  rotate-[-30deg]
                            text-nowrap  text-xl  text-git-blue'
              >
                Merge
              </p>
            </li>
            <div
              className='absolute  left-[2.5vw]  top-1/2  z-[-1]  h-1  
                       w-[60vw]  -translate-y-1/2  bg-[#CECECE]'
            ></div>
          </ul>
          <ul
            className='relative  ml-[24vw]  mt-[-5vw]  flex  origin-[2.5vw_2.5vw]  -rotate-45
                         flex-col  gap-[7vw]'
          >
            <li className='relative  size-[5vw]  rounded-full  bg-git-blue'></li>
            <li className='relative  size-[5vw]  rounded-full  bg-[#4CBB17]'>
              <p
                className='absolute  origin-top-left  translate-x-[-7.2rem]  translate-y-[-1.3rem]
                            rotate-[15deg]  text-nowrap  text-xl
                            text-[#4CBB17]'
              >
                Add header
              </p>
            </li>
            <li className='relative  size-[5vw]  rounded-full  bg-[#4CBB17]'>
              <p
                className='absolute  origin-top-left  -translate-x-40  -translate-y-8
                            rotate-[15deg]  text-nowrap  text-xl
                            text-[#4CBB17]'
              >
                Add intro section
              </p>
            </li>
            <div
              className='absolute  left-[2.5vw]  top-[2.5vw]  z-[-1]  h-[24vw]  
                         w-1  -translate-x-1/2  bg-[#CECECE]'
            ></div>
          </ul>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page3;
