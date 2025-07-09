'use client';

import BookLeftPartContainer from '@/components/elements/book-master-git-and-github/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-git-and-github/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-git-and-github/BookRightPartContainer';
import GitHubLogo from '@/components/elements/book-master-git-and-github/GitHubLogo';
import GitLogo from '@/components/elements/book-master-git-and-github/GitLogo';
import H3 from '@/components/elements/book-master-git-and-github/H3';
import H4 from '@/components/elements/book-master-git-and-github/H4';
import Page from '@/components/elements/book-master-git-and-github/Page';
import TextNode from '@/components/elements/book-master-git-and-github/TextNode';
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
import Controls from '../Controls';

gsap.registerPlugin(ScrollTrigger);

function Page8(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pageWrapperRef = useRef<HTMLDivElement | null>(null);
  const { gsapShouldUpdate } = useGsapResizeUpdate();
  const { activeBackground } = useActiveBackground();
  const { setActiveBackground } = useActiveBackgroundDispatch();

  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 8,
    basePath,
  });

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: '68.5% top',
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

  const pageClasses = classNames('bg-white  dark:bg-git-black', {
    'border-b  border-[#EBEBEB]  dark:border-[#282828]':
      activeBackground === ActiveBackground.DEFAULT,
  });

  return (
    <div ref={pageWrapperRef} className='my-5'>
      <Page ref={sectionRef} id='page-8' className={pageClasses}>
        <Controls pageNumber={8} />
        <BookMainContainer>
          <H3>Git ≠ GitHub</H3>
          <BookLeftPartContainer className='w-1/2  max-md:w-full  max-md:pr-0'>
            <TextNode className='!mb-0'>
              Beginners often confuse Git with&nbsp;GitHub and&nbsp;use
              the&nbsp;names interchangeably. While&nbsp;Git and&nbsp;GitHub
              are&nbsp;closely related, they&nbsp;are&nbsp;fundamentally
              different:
            </TextNode>
          </BookLeftPartContainer>
          <div className='mt-12  flex  flex-row  items-baseline  max-md:flex-col'>
            <BookLeftPartContainer className='w-1/2  max-md:w-full  max-md:pr-0'>
              <GitLogo className='mb-10  w-2/5' />
              <H4>Git</H4>
              <TextNode className='!mb-0'>
                Git is a&nbsp;version control system that&nbsp;tracks changes
                in&nbsp;files and&nbsp;helps developers collaborate. It’s
                a&nbsp;tool that&nbsp;you install locally
                on&nbsp;your&nbsp;computer to&nbsp;manage and&nbsp;version
                control your&nbsp;projects.
              </TextNode>
            </BookLeftPartContainer>
            <BookRightPartContainer
              className='w-1/2  max-md:mt-16  max-md:w-full  
                         max-md:pl-0'
            >
              <GitHubLogo className='mb-10  w-2/5' />
              <H4>GitHub</H4>
              <TextNode className='!mb-0'>
                GitHub is&nbsp;a&nbsp;cloud-based service built around Git
                that&nbsp;hosts repositories online and&nbsp;provides tools
                for&nbsp;collaboration.
              </TextNode>
            </BookRightPartContainer>
          </div>
          <hr
            className='mt-14  
                     border-gray-light-darker2
                     dark:border-gray-dark-lighter2'
          />
          <BookLeftPartContainer className='mt-6  w-1/2  max-md:w-full  max-md:pr-0'>
            <TextNode className='!mb-0'>
              Usually, you work on&nbsp;a&nbsp;project locally using Git,
              and&nbsp;additionally host your&nbsp;repository on&nbsp;GitHub
              as&nbsp;a&nbsp;backup and&nbsp;for&nbsp;collaboration purposes.
            </TextNode>
          </BookLeftPartContainer>
        </BookMainContainer>
      </Page>
    </div>
  );
}

export default Page8;
