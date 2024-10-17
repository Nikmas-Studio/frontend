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
      <BookMainContainer
        className='flex  flex-row  justify-between  max-2md:flex-col
                                    h-sm:flex-row'
      >
        <div
          className='flex  flex-col  justify-between  max-2md:translate-x-[-0.7rem]
                        h-sm:h-[70vh]'
        >
          <div
            className='h-[35.4vw]  origin-top-left  translate-x-[1.2rem]  translate-y-6  
                        rotate-[25deg]  max-2md:rotate-[15deg]'
          >
            <ul
              className='relative  flex  flex-row  gap-[5vw]  max-xl:gap-[4vw]
                           max-2md:gap-[10vw]  max-md:gap-[11vw]  h-sm:gap-[4vw]'
            >
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left   rotate-[-25deg]
                              text-xl  leading-normal  text-git-blue  max-md:text-[3vw]
                              h-sm:text-[3vh]'
                >
                  Initialize&nbsp;project
                </p>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                              text-xl  leading-normal  text-git-blue  max-md:text-[3vw]
                              h-sm:text-[3vh]'
                >
                  Add&nbsp;header
                </p>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-[4px]   
                             w-[10vw]  -translate-y-1/2  bg-[#CECECE] 
                             max-xl:w-[9vw]  max-2md:h-[3px]  max-2md:w-[15vw]
                             max-sm:h-[2px]  h-sm:w-[9vw]'
                ></div>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                              text-xl  leading-normal  text-git-blue  max-md:text-[3vw]
                              h-sm:text-[3vh]'
                >
                  Add&nbsp;intro&nbsp;section
                </p>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-[4px]  
                            w-[10vw]  -translate-y-1/2  bg-[#CECECE]  
                            max-xl:w-[9vw]  max-2md:h-[3px]  max-2md:w-[15vw]
                            max-sm:h-[2px]  h-sm:w-[9vw]'
                ></div>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  
                             origin-top-left  rotate-[-25deg]  text-xl
                             leading-normal  text-git-blue  max-md:text-[3vw]
                             h-sm:text-[3vh]'
                >
                  Add&nbsp;products&nbsp;section
                </p>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-[4px]  
                            w-[10vw]  -translate-y-1/2  bg-[#CECECE]
                          max-xl:w-[9vw]  max-2md:h-[3px]  max-2md:w-[15vw]
                          max-sm:h-[2px]  h-sm:w-[9vw]'
                ></div>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                              text-xl  leading-normal  text-git-blue  max-md:text-[3vw]
                              h-sm:text-[3vh]'
                >
                  Add&nbsp;footer
                </p>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-[4px]  
                            w-[10vw]  -translate-y-1/2  bg-[#CECECE]
                            max-xl:w-[9vw]  max-2md:h-[3px]  max-2md:w-[15vw]
                            max-sm:h-[2px]  h-sm:w-[9vw]'
                ></div>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-git-orange'>
                <p
                  className='absolute  bottom-[5.2vw]  left-[0.5vw]  origin-top-left  rotate-[-25deg]
                              text-xl  leading-normal  text-git-blue  max-md:text-[3vw]
                              h-sm:text-[3vh]'
                >
                  Merge
                </p>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-[4px]  
                            w-[10vw]  -translate-y-1/2  bg-[#CECECE]
                          max-xl:w-[9vw]  max-2md:h-[3px]  max-2md:w-[15vw]
                          max-sm:h-[2px]  h-sm:w-[9vw]'
                ></div>
                <div
                  className='absolute  right-[2.5vw]  top-1/2  z-[-1]  h-[4px]  
                             w-[25vw]  origin-top-right  -translate-y-1/2  rotate-[-41deg]  
                             bg-[#CECECE]  max-xl:w-[20vw]  max-2md:h-[3px]
                             max-2md:w-[25vw]  max-2md:rotate-[-38.5deg]
                             max-sm:h-[2px]  h-sm:w-[20vw]  h-sm:rotate-[-41deg]'
                ></div>
              </li>
            </ul>
            <ul
              className='relative  mt-[-5vw]  flex  origin-[2.5vw_2.5vw]  translate-x-[20vw]  rotate-[-40deg] 
                         flex-col  gap-[5vw]  max-xl:translate-x-[18vw]  max-xl:gap-[4vw]
                         max-2md:translate-x-[30vw]  max-2md:rotate-[-60deg]  max-2md:gap-[10vw]
                         max-md:translate-x-[32vw]  max-md:gap-[11vw]  h-sm:translate-x-[18vw]
                         h-sm:rotate-[-40deg]  h-sm:gap-[4vw]'
            >
              <li className='relative  size-[5vw]  rounded-full  bg-git-blue'></li>
              <li className='relative  size-[5vw]  rounded-full  bg-[#4CBB17]'>
                <p
                  className='absolute  bottom-[2.7vw]  right-[5.7vw] 
                             origin-top-right  rotate-[15deg]  text-xl
                             leading-normal  text-[#4CBB17]
                             max-2md:bottom-[3.2vw]  max-2md:right-[3.9vw]
                             max-2md:rotate-45  max-md:text-[3vw]
                             h-sm:bottom-[3.2vw]  h-sm:right-[5.2vw]  
                             h-sm:rotate-[25deg]  h-sm:text-[3vh]'
                >
                  Animate&nbsp;letters
                </p>
                <div
                  className='absolute  bottom-[2.5vw]  left-1/2  z-[-1]  h-[10vw]  
                             w-[4px]  -translate-x-1/2  bg-[#CECECE]  max-xl:h-[9vw]
                             max-2md:h-[15vw]  max-2md:w-[3px]  max-sm:w-[2px]
                             h-sm:h-[9vw]'
                ></div>
              </li>
              <li className='relative  size-[5vw]  rounded-full  bg-[#4CBB17]'>
                <p
                  className='absolute  bottom-[2.7vw] right-[5.7vw] 
                            origin-top-right  rotate-[15deg]  text-xl
                            leading-normal  text-[#4CBB17]
                            max-2md:bottom-[3.2vw]  max-2md:right-[3.9vw]
                            max-2md:rotate-45  max-md:text-[3vw]
                            h-sm:bottom-[3.2vw]  h-sm:right-[5.2vw]
                            h-sm:rotate-[25deg]  h-sm:text-[3vh]'
                >
                  Animate&nbsp;logo
                </p>
                <div
                  className='absolute  bottom-[2.5vw]  left-1/2  z-[-1]  h-[10vw]  
                             w-[4px]  -translate-x-1/2  bg-[#CECECE]  max-xl:h-[9vw]
                             max-2md:h-[15vw]  max-2md:w-[3px]  max-sm:w-[2px]
                             h-sm:h-[9vw]'
                ></div>
              </li>
            </ul>
          </div>
          <TextNode
            className='!mb-0  mt-5  text-sm  max-2md:hidden  h-sm:block
                               h-sm:text-[3vh]'
          >
            Explanation text
          </TextNode>
        </div>
        <div
          className='flex  flex-col  justify-between  max-2md:mt-20  
                        max-md:mt-[7.5vh]  h-sm:mt-0'
        >
          <div
            className='pointer-events-none  w-[22vw]  select-none  overflow-hidden  
                       rounded-3xl  border  border-git-blue
                       text-[1vw]  max-2xl:w-[21rem]  max-2xl:text-[14.95px] 
                       max-xl:w-[28vw]  max-xl:text-[1.7vh]   max-2md:w-full  
                       max-2md:text-[1.22vh]  h-sm:w-[30vw]'
          >
            <div
              className='flex  h-12  w-full  flex-row  items-center  
                            justify-between  bg-[#F4F4F4]  px-[10%] pb-[3px]'
            >
              <div className='flex  flex-row  items-center  gap-5'>
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
                    className='relative  h-[2px]  w-[15px]  rotate-180
                           bg-[#BABABA]  
                             before:absolute  before:top-1/2  
                             before:size-[10px]  before:origin-top-left
                             before:-translate-x-px 
                             before:-rotate-45  before:border-l-2
                             before:border-t-2  before:border-[#BABABA]
                             before:content-[""]
                             '
                  ></div>
                </div>
                <div
                  className='relative  size-[14px]  rounded-full  
                           border-2  border-[#BABABA]'
                >
                  <div className='absolute  right-[-2px]  top-[-2.2px]  z-20  size-[6px]  border-b-2  border-r-2  border-[#BABABA]'></div>
                  <div
                    className='absolute  right-[-2px]  top-[4px]  z-10  h-[2px] w-[3px]
                                bg-[#F4F4F4]'
                  ></div>
                </div>
              </div>
              <div
                className='h-[17px]  w-1/2  rounded-full  border
                              border-[#BABABA]'
              ></div>
              <div className='flex  h-[14px]  flex-col  justify-between'>
                <div className='size-[3px]  rounded-full  bg-[#BABABA]'></div>
                <div className='size-[3px]  rounded-full  bg-[#BABABA]'></div>
                <div className='size-[3px]  rounded-full  bg-[#BABABA]'></div>
              </div>
            </div>
            <div
              className='mt-[0.55em]  flex  flex-row  items-center
                         justify-between  px-[10%]'
            >
              <p className='text-[0.8em]  font-bold  text-git-blue'>
                Nikmas Studio
              </p>
              <div className='flex  flex-row  items-center  gap-[0.25em]'>
                <svg
                  className='translate-y-[-0.031em]  fill-git-blue'
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
                <div className='grid  size-[0.625em]  place-content-center  rounded-full  bg-git-blue'>
                  <div
                    className='h-[0.3125em]  w-px  translate-y-[-0.006em]  rounded-[0.0625em]
                                  bg-white'
                  ></div>
                </div>
              </div>
            </div>
            <div className='mt-[0.9em]  flex  flex-row  justify-between  px-[10%]'>
              <p className='text-[1.05em]  leading-[1.1]  text-[#4CBB17]'>
                Next-gen
                <br />
                publishing studio
                <br />
                that specializes
                <br />
                in creating
                <br />
                interactive
                <br />
                e-books
              </p>
              <div className='h-[6.7em]  w-[0.65em]  rounded-[0.18em]  bg-[#4CBB17]'></div>
            </div>
            <div
              className='mt-[1.5em]  flex  w-full  flex-col  items-center  bg-[#E9E8FA]
                            pb-[1.7em]  pt-[1em]'
            >
              <p className='mb-[0.5em]  text-[0.8em]  font-bold  text-git-blue'>
                Our first book
              </p>
              <div
                className='h-[7.8em]  w-[5.4em]  rounded-[0.4em]  bg-git-blue
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
                               rotate-45  rounded-sm  bg-white'
                  ></div>
                  <div
                    className='absolute  left-1/2  top-[47%]  h-3/4  w-[7%]  
                               -translate-x-1/2  -translate-y-1/2  
                              rounded-[0.08em]  bg-git-blue'
                  ></div>
                </div>
              </div>
            </div>
            <div
              className='mb-[0.75em]  mt-[2.1em]  flex  flex-row  
                            justify-between  px-[10%]'
            >
              <div>
                <p className='mb-[0.6em]  text-[0.42em]  text-git-blue'>
                  © Nikmas Studio, 2024
                </p>
                <ul className='flex  flex-col  gap-[0.05em]  text-git-blue'>
                  <li className='text-[0.3em]'>Terms and conditions</li>
                  <li className='text-[0.3em]'>Privacy policy</li>
                  <li className='text-[0.3em]'>Cookies policy</li>
                </ul>
              </div>
              <div className='flex  flex-row  gap-[0.3em]'>
                <div
                  className='grid  size-[1.9em]  place-content-center  
                              rounded-full  bg-git-blue  pt-[0.15em]
                                text-[0.42em]  text-white'
                >
                  T
                </div>
                <div
                  className='grid  size-[1.9em]  place-content-center 
                              rounded-full  bg-git-blue  pt-[0.15em]
                                text-[0.42em]  text-white'
                >
                  I
                </div>
                <div
                  className='grid  size-[1.9em]  place-content-center
                              rounded-full  bg-git-blue  pt-[0.15em]
                                text-[0.42em]  text-white'
                >
                  F
                </div>
                <div
                  className='grid  size-[1.9em]  place-content-center
                              rounded-full  bg-git-blue  pt-[0.15em]
                                text-[0.42em]  text-white'
                >
                  L
                </div>
              </div>
              <div className='text-[0.42em]  text-git-blue'>
                <p className='leading-tight'>
                  For questions <br /> and suggestions:
                </p>
                <p
                  className='!pointer-events-none  mt-[0.3em]  !select-none  
                              font-semibold  !no-underline'
                >
                  <span>team</span>
                  <span>@</span>
                  <span>nikmas.studio</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className='mt-14  flex  flex-row  justify-between  max-md:mt-[4.9vh]
                          h-sm:mt-[4.9vh]'
          >
            <TextNode
              className='hidden  leading-tight  max-2md:block  max-md:text-[2.5vw]
                                 h-sm:hidden'
            >
              Explanation text
            </TextNode>
            <ul className='flex  flex-col  gap-3  max-md:gap-[2vw]  h-sm:gap-[2vh]'>
              <li
                className='flex  flex-row  items-center  gap-2  max-md:gap-[1.4vw]
                             h-sm:gap-[1.4vh]'
              >
                <div
                  className='size-6  rounded-full  bg-git-blue  max-md:size-[4vw]
                                h-sm:size-[4vh]'
                ></div>
                <p
                  className='text-xl  leading-tight  text-git-blue  max-md:text-[3vw]
                              h-sm:text-[3vh]'
                >
                  Main branch
                </p>
              </li>
              <li
                className='flex  flex-row  items-center  gap-2  max-md:gap-[1.4vw]
                             h-sm:gap-[1.4vh]'
              >
                <div
                  className='size-6  rounded-full  bg-[#4CBB17]  max-md:size-[4vw]
                                h-sm:size-[4vh]'
                ></div>
                <p
                  className='text-xl  leading-tight  text-[#4CBB17]  max-md:text-[3vw]
                              h-sm:text-[3vh]'
                >
                  Animation feature branch
                </p>
              </li>
            </ul>
          </div>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page3;
