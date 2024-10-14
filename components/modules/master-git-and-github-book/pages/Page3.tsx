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
      <BookMainContainer className='flex  flex-row  justify-between'>
        <div className='flex  flex-col  justify-between'>
          <div
            className='h-[35.4vw]  origin-top-left  translate-x-[1.2rem]  translate-y-6  
                        rotate-[25deg]'
          >
            <ul className='relative  flex  flex-row  gap-[5vw]'>
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left   rotate-[-25deg]
                              text-xl  text-git-blue'
                >
                  Initialize&nbsp;project
                </p>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                              text-xl  text-git-blue'
                >
                  Add&nbsp;header
                </p>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-1  
                            w-[10vw]  -translate-y-1/2  bg-[#CECECE]'
                ></div>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                              text-xl  text-git-blue'
                >
                  Add&nbsp;intro&nbsp;section
                </p>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-1  
                            w-[10vw]  -translate-y-1/2  bg-[#CECECE]'
                ></div>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                              text-xl  text-git-blue'
                >
                  Add&nbsp;products&nbsp;section
                </p>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-1  
                            w-[10vw]  -translate-y-1/2  bg-[#CECECE]'
                ></div>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                              text-xl  text-git-blue'
                >
                  Add&nbsp;footer
                </p>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-1  
                            w-[10vw]  -translate-y-1/2  bg-[#CECECE]'
                ></div>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-git-orange'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                              text-xl  text-git-blue'
                >
                  Merge
                </p>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-1  
                            w-[10vw]  -translate-y-1/2  bg-[#CECECE]'
                ></div>
              </li>
            </ul>
            <ul
              className='relative  ml-[20vw]  mt-[-5vw]  flex  origin-[2.5vw_2.5vw] 
                         rotate-[-40deg]  flex-col  gap-[5vw]'
            >
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'></li>
              <li className='relative  size-[5vw]  rounded-full  bg-[#4CBB17]'>
                <p
                  className='absolute bottom-[2.7vw] right-[5.7vw] 
                           origin-top-right  rotate-[15deg]  text-xl
                         text-[#4CBB17]'
                >
                  Animate&nbsp;letters
                </p>
                <div
                  className='absolute  bottom-[2.5vw]  left-1/2  z-[-1]  h-[10vw]  
                           w-1  -translate-x-1/2  bg-[#CECECE]'
                ></div>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-[#4CBB17]'>
                <p
                  className='absolute  bottom-[2.7vw] right-[5.7vw] 
                            origin-top-right  rotate-[15deg]  text-xl
                            text-[#4CBB17]'
                >
                  Animate&nbsp;logo
                </p>
                <div
                  className='absolute  bottom-[2.5vw]  left-1/2  z-[-1]  h-[10vw]  
                           w-1  -translate-x-1/2  bg-[#CECECE]'
                ></div>
              </li>
            </ul>
          </div>
          <TextNode className='!mb-0  mt-5  text-sm'>Explanation text</TextNode>
        </div>
        <div className='flex  flex-col  justify-between'>
          <div
            className='h-[28rem]  w-[21rem]  overflow-hidden  rounded-3xl  
                        border  border-[#CECECE]'
          >
            <div
              className='flex  h-14  w-full  flex-row  items-center  
                            bg-[#F4F4F4]  px-[10%]'
            >
              <div className='flex  flex-row  gap-3'>
                <div
                  className='relative  h-[2px]  w-[15px]  bg-[#BABABA]  
                           before:absolute  before:top-1/2  
                          before:size-[10px]  before:origin-top-left
                           before:-translate-x-px 
                           before:-rotate-45  before:border-l-2
                           before:border-t-2  before:border-[#BABABA]
                           before:content-[""]
                           '
                ></div>
                <div
                  className='relative  h-[2px]  w-[15px]  rotate-180  bg-[#BABABA]  
                           before:absolute  before:top-1/2  
                          before:size-[10px]  before:origin-top-left
                           before:-translate-x-px 
                           before:-rotate-45  before:border-l-2
                           before:border-t-2  before:border-[#BABABA]
                           before:content-[""]
                           '
                ></div>
              </div>
            </div>
          </div>
          <ul className='flex  flex-col  gap-3'>
            <li className='flex  flex-row  items-center  gap-2'>
              <div className='size-6  rounded-full  bg-git-blue'></div>
              <p className='text-xl  text-git-blue'>Main branch</p>
            </li>
            <li className='flex  flex-row  items-center  gap-2'>
              <div className='size-6  rounded-full  bg-[#4CBB17]'></div>
              <p className='text-xl  text-[#4CBB17]'>
                Animation feature branch
              </p>
            </li>
          </ul>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page3;
