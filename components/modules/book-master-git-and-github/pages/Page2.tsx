'use client';

import BasicTextNode from '@/components/elements/book-master-git-and-github/BasicTextNode';
import BookLeftPartContainer from '@/components/elements/book-master-git-and-github/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-git-and-github/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-git-and-github/BookRightPartContainer';
import FolderIcon from '@/components/elements/book-master-git-and-github/FolderIcon';
import H2 from '@/components/elements/book-master-git-and-github/H2';
import H3 from '@/components/elements/book-master-git-and-github/H3';
import TextLi from '@/components/elements/book-master-git-and-github/TextLi';
import TextNode from '@/components/elements/book-master-git-and-github/TextNode';
import TextUl from '@/components/elements/book-master-git-and-github/TextUl';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/master-git-and-github-book';
import { useBookVersion } from '@/context/book-version/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';
import Page from '../../../elements/book-master-git-and-github/Page';
import Controls from './Controls';

gsap.registerPlugin(ScrollTrigger);

function Page2(): ReactElement {
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  const sectionRef = useRef<HTMLElement | null>(null);

  const dir1Ref = useRef<HTMLDivElement | null>(null);
  const dir2Ref = useRef<HTMLDivElement | null>(null);
  const dir3Ref = useRef<HTMLDivElement | null>(null);
  const dir4Ref = useRef<HTMLDivElement | null>(null);
  const dir5Ref = useRef<HTMLDivElement | null>(null);
  const dir6Ref = useRef<HTMLDivElement | null>(null);
  const dir7Ref = useRef<HTMLDivElement | null>(null);

  const factoidRef = useRef<HTMLParagraphElement | null>(null);

  const bookRightPartContainerRef = useRef<HTMLDivElement | null>(null);

  const { gsapShouldUpdate } = useGsapResizeUpdate();

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 2,
    basePath,
  });

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=800',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline.set(dir1Ref.current, { opacity: 1 }, '1');
      timeline.set(dir2Ref.current, { opacity: 1 }, '2');
      timeline.set(dir3Ref.current, { opacity: 1 }, '3');
      timeline.set(dir4Ref.current, { opacity: 1 }, '4');
      timeline.set(dir5Ref.current, { opacity: 1 }, '5');
      timeline.set(dir6Ref.current, { opacity: 1 }, '6');
      timeline.set(dir7Ref.current, { opacity: 1 }, '7');

      timeline.set(factoidRef.current, { opacity: 1 }, '8');
      timeline.set(bookRightPartContainerRef.current, { opacity: 1 }, '8');
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  return (
    <Page id='page-2' ref={sectionRef} className='bg-white  dark:bg-git-black'>
      <Controls pageNumber={2} />
      <BookMainContainer>
        <H2 className='mb-16  max-2md:mb-12  max-sm:mb-10  h-sm:mb-7'>
          Introduction to&nbsp;Version&nbsp;Control
        </H2>
        <div className='flex  flex-row  max-2md:flex-col'>
          <BookLeftPartContainer
            className='flex  w-1/2  flex-col  justify-between  gap-10
                       max-2md:w-full'
          >
            <ul
              className='mt-[3.6rem]  flex  flex-col  gap-5  max-2md:mb-12  
                           max-2md:mt-0  max-sm:mb-10  max-sm:gap-4
                           h-sm:gap-[2vh]'
            >
              <div
                ref={dir1Ref}
                className='flex  items-center  gap-3  opacity-0  
                           transition-opacity  h-sm:gap-[2.5vh]'
              >
                <FolderIcon
                  className='fill-git-black  max-3sm:size-[6.8vw]  h-sm:size-[6vh]
                                        dark:fill-git-white'
                />
                <BasicTextNode
                  className='text-2xl  max-3sm:text-[5.6vw]  h-sm:text-[5vh]
                                          h-sm:leading-none'
                >
                  project_v1
                </BasicTextNode>
              </div>
              <div
                ref={dir2Ref}
                className='flex  items-center  gap-3  opacity-0  transition-opacity
                           h-sm:gap-[2.5vh]'
              >
                <FolderIcon
                  className='fill-git-black  max-3sm:size-[6.8vw]  h-sm:size-[6vh]
                                         dark:fill-git-white'
                />
                <BasicTextNode
                  className='text-2xl  max-3sm:text-[5.6vw]  h-sm:text-[5vh]
                                          h-sm:leading-none'
                >
                  project_v2
                </BasicTextNode>
              </div>
              <div
                ref={dir3Ref}
                className='flex  items-center  gap-3  opacity-0  transition-opacity
                           h-sm:gap-[2.5vh]'
              >
                <FolderIcon
                  className='fill-git-black  max-3sm:size-[6.8vw]  h-sm:size-[6vh]
                                          dark:fill-git-white'
                />
                <BasicTextNode
                  className='text-2xl  max-3sm:text-[5.6vw]  h-sm:text-[5vh]
                                          h-sm:leading-none'
                >
                  project_final
                </BasicTextNode>
              </div>
              <div
                ref={dir4Ref}
                className='flex  items-center  gap-3  opacity-0  transition-opacity
                           h-sm:gap-[2.5vh]'
              >
                <FolderIcon
                  className='fill-git-black  max-3sm:size-[6.8vw]  h-sm:size-[6vh]
                                        dark:fill-git-white'
                />
                <BasicTextNode
                  className='text-2xl  max-3sm:text-[5.6vw]  h-sm:text-[5vh]
                                          h-sm:leading-none'
                >
                  project_final_final
                </BasicTextNode>
              </div>
              <div
                ref={dir5Ref}
                className='flex  items-center  gap-3  opacity-0  transition-opacity
                          h-sm:gap-[2.5vh]'
              >
                <FolderIcon
                  className='fill-git-black  max-3sm:size-[6.8vw]  h-sm:size-[6vh]
                                        dark:fill-git-white'
                />
                <BasicTextNode
                  className='text-2xl  max-3sm:text-[5.6vw]  h-sm:text-[5vh]
                                          h-sm:leading-none'
                >
                  project_final_final_2
                </BasicTextNode>
              </div>
              <div
                ref={dir6Ref}
                className='flex  items-center  gap-3  opacity-0  transition-opacity
                          h-sm:gap-[2.5vh]'
              >
                <FolderIcon
                  className='fill-git-black  max-3sm:size-[6.8vw]  h-sm:size-[6vh]
                                      dark:fill-git-white'
                />
                <BasicTextNode
                  className='text-2xl  max-3sm:text-[5.6vw]  h-sm:text-[5vh]
                                       h-sm:leading-none'
                >
                  project_final_final_last
                </BasicTextNode>
              </div>
              <div
                ref={dir7Ref}
                className='flex  items-center  gap-3  opacity-0  transition-opacity
                           h-sm:gap-[2.5vh]'
              >
                <FolderIcon
                  className='fill-git-black  max-3sm:size-[6.8vw]  h-sm:size-[6vh]
                                       dark:fill-git-white'
                />
                <BasicTextNode
                  className='text-2xl  max-3sm:text-[5.6vw]  h-sm:text-[5vh]
                                          h-sm:leading-none'
                >
                  project_final_final_last_of_us
                </BasicTextNode>
              </div>
            </ul>
            <TextNode
              ref={factoidRef}
              className='!mb-0  max-w-[27.5rem]  !text-sm  opacity-0  transition-opacity  max-2md:hidden'
            >
              The&nbsp;Stack Overflow Survey abandoned asking
              about&nbsp;preferred VCS after&nbsp;2018, as&nbsp;Git&apos;s
              dominance had&nbsp;become indisputable.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer
            ref={bookRightPartContainerRef}
            className='flex  w-1/2  flex-col  justify-start opacity-0
                       transition-opacity  max-2md:w-full  max-2md:pl-0'
          >
            <H3>You know what I&apos;m sayin&apos;?</H3>
            <TextNode>
              Copying directories and&nbsp;renaming them is a&nbsp;go-to version
              control method for&nbsp;many people. It&apos;s so&nbsp;simple,
              and&nbsp;that makes it so&nbsp;appealing. But,
              this&nbsp;simplicity comes with&nbsp;its drawbacks:
            </TextNode>
            <TextUl>
              <TextLi>
                It&apos;s easy to&nbsp;forget which&nbsp;directory
                you&apos;re&nbsp;in and&nbsp;accidentally write
                to&nbsp;the&nbsp;wrong file.
              </TextLi>
              <TextLi>
                Multiple copies can quickly eat&nbsp;up disk space, especially
                with&nbsp;large files or&nbsp;complex projects.
              </TextLi>
              <TextLi>
                Collaborating becomes a&nbsp;hassle. If&nbsp;team members work
                on&nbsp;their&nbsp;own copies, manually merging changes can be
                both cumbersome and&nbsp;error prone.
              </TextLi>
            </TextUl>
            <TextNode className='!mb-0'>
              To&nbsp;tackle these&nbsp;issues, programmers created full-fledged
              version control systems (VCSs). And&nbsp;the&nbsp;most popular VCS
              is&nbsp;Git.
            </TextNode>
            <TextNode
              className='!mb-0  mt-12  hidden  max-w-[27.5rem]  !text-sm
                                    max-2md:block  max-sm:mt-10'
            >
              The&nbsp;Stack Overflow Survey abandoned asking
              about&nbsp;preferred VCS after&nbsp;2018, as&nbsp;Git&apos;s
              dominance had&nbsp;become indisputable.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page2;
