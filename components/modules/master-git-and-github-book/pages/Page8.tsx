'use client';

import BookMainContainer from '@/components/elements/master-git-and-github-book/BookMainContainer';
import H3 from '@/components/elements/master-git-and-github-book/H3';
import Page from '@/components/elements/master-git-and-github-book/Page';
import TextNode from '@/components/elements/master-git-and-github-book/TextNode';
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
import Controls from './Controls';

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
          <TextNode>
            Beginners often confuse Git with&nbsp;GitHub and&nbsp;use
            the&nbsp;names interchangeably. While&nbsp;Git and&nbsp;GitHub
            are&nbsp;closely related, they&nbsp;are&nbsp;fundamentally
            different:
          </TextNode>
        </BookMainContainer>
      </Page>
    </div>
  );
}

export default Page8;
