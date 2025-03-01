'use client';

import BookLeftPartContainer from '@/components/elements/master-git-and-github-book/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/master-git-and-github-book/BookMainContainer';
import BookRightPartContainer from '@/components/elements/master-git-and-github-book/BookRightPartContainer';
import GitLogo from '@/components/elements/master-git-and-github-book/GitLogo';
import H3 from '@/components/elements/master-git-and-github-book/H3';
import H4 from '@/components/elements/master-git-and-github-book/H4';
import Page from '@/components/elements/master-git-and-github-book/Page';
import TextLi from '@/components/elements/master-git-and-github-book/TextLi';
import TextUl from '@/components/elements/master-git-and-github-book/TextUl';
import TextNode from '@/components/elements/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/master-git-and-github-book';
import { useBookVersion } from '@/context/book-version/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import { useUrlUpdate } from '@/hooks/use-url-update';
import gitLogo from '@/public/images/git-logo.svg';
import { BookVersion } from '@/types/book-version';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { ReactElement, useRef } from 'react';
import Controls from './Controls';

gsap.registerPlugin(ScrollTrigger);

function Page5(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gitLogoWrapperRef = useRef<HTMLDivElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;
  const { gsapShouldUpdate } = useGsapResizeUpdate();

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 5,
    basePath,
  });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gitLogoWrapperRef.current?.classList.remove('border-b');

      mm.add('(max-width: 768px)', () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: gitLogoWrapperRef.current,
          pinSpacing: false,
          anticipatePin: 1,
          onEnter: () => {
            gitLogoWrapperRef.current?.classList.add('border-b');
          },
          onLeaveBack: () => {
            gitLogoWrapperRef.current?.classList.remove('border-b');
          },
        });
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  const pageClasses = classNames('bg-white  dark:bg-git-black  my-5');

  return (
    <Page id='page-5' ref={sectionRef} className={pageClasses}>
      <Controls pageNumber={5} />
      <BookMainContainer className='flex  flex-row  max-md:flex-col-reverse  max-md:!pt-0'>
        <BookLeftPartContainer className='w-1/2  max-lg:w-3/5  max-md:w-full  max-md:pr-0'>
          <H3>The History of Git</H3>
          <TextNode>
            Git was developed in&nbsp;2005 by&nbsp;Linus Torvalds,
            the&nbsp;creator of&nbsp;Linux, to&nbsp;solve the&nbsp;version
            control challenges faced by&nbsp;the&nbsp;Linux kernel project.
          </TextNode>
          <TextNode>
            Previously, the&nbsp;team had relied on&nbsp;a&nbsp;proprietary
            version control tool called BitKeeper,
            but&nbsp;the&nbsp;relationship between the&nbsp;Linux community
            and&nbsp;BitKeeper&apos;s creators eventually broke down.
            As&nbsp;a&nbsp;result of&nbsp;this&nbsp;“divorce”, BitKeeper revoked
            its&nbsp;free licensing, leaving the&nbsp;Linux team without
            a&nbsp;version control system. This&nbsp;prompted Torvalds
            to&nbsp;develop a&nbsp;new VCS tailored to&nbsp;the&nbsp;needs
            of&nbsp;large, distributed teams like&nbsp;those working
            on&nbsp;Linux.
          </TextNode>
          <TextNode className='!mb-10'>
            Git&apos;s development was&nbsp;remarkably rapid: the&nbsp;first
            version with&nbsp;core functionality was&nbsp;released
            within&nbsp;weeks, and&nbsp;the&nbsp;first official launch followed
            just a&nbsp;few&nbsp;months afterward. Two decades later,
            Git&nbsp;is&nbsp;indispensable in&nbsp;software development,
            with&nbsp;over&nbsp;90% of&nbsp;developers worldwide
            using&nbsp;it&nbsp;daily!
          </TextNode>
          <H4>Behind the Name</H4>
          <TextNode>
            Linus Torvalds described the name “git” as&nbsp;a&nbsp;reflection
            of&nbsp;himself: &ldquo;I&apos;m an&nbsp;egotistical bastard, so I
            name all my&nbsp;projects after&nbsp;myself. First
            &lsquo;Linux&rsquo;, now &lsquo;Git&rsquo; (in British slang,
            &lsquo;git&rsquo; refers to an unpleasant or contemptible
            person)&rdquo;.
          </TextNode>
          <TextNode>
            The&nbsp;man page describes Git as&nbsp;&ldquo;the stupid content
            tracker&rdquo;.
          </TextNode>
          <TextNode>
            The&nbsp;README file of&nbsp;the&nbsp;source code elaborates
            further:
          </TextNode>
          <TextNode>
            &ldquo;git&rdquo; can mean anything, depending
            on&nbsp;your&nbsp;mood:
          </TextNode>
          <TextUl>
            <TextLi>
              Random three-letter combination that&nbsp;is&nbsp;pronounceable,
              and&nbsp;not&nbsp;actually used by&nbsp;any&nbsp;common UNIX
              command. The&nbsp;fact
              that&nbsp;it&nbsp;is&nbsp;a&nbsp;mispronunciation
              of&nbsp;&ldquo;get&rdquo; may or&nbsp;may&nbsp;not
              be&nbsp;relevant.
            </TextLi>
            <TextLi>
              Stupid. Contemptible and&nbsp;despicable. Simple.
              Take&nbsp;your&nbsp;pick from&nbsp;the&nbsp;dictionary
              of&nbsp;slang.
            </TextLi>
            <TextLi>
              &ldquo;Global information tracker&rdquo;: you&apos;re
              in&nbsp;a&nbsp;good mood, and&nbsp;it actually works for&nbsp;you.
              Angels sing, and&nbsp;a&nbsp;light suddenly fills the&nbsp;room.
            </TextLi>
            <TextLi>
              &ldquo;
              <span className='inline-flex  flex-row  items-center'>
                Godd
                <GitLogo className='inline  size-[12px]' />
                mn
              </span>{' '}
              <span className='inline-flex  flex-row  items-center'>
                idi
                <GitLogo className='inline  size-[12px]' />
                tic
              </span>{' '}
              truckload{' '}
              <span className='inline-flex  flex-row  items-center'>
                of&nbsp;sh
                <GitLogo className='inline  size-[12px]' />
                t&rdquo;:
              </span>{' '}
              when it breaks.
            </TextLi>
          </TextUl>
          <TextNode>
            The&nbsp;source code for&nbsp;Git refers to&nbsp;the&nbsp;program
            as&nbsp;&ldquo;the&nbsp;information manager from&nbsp;hell&rdquo;.
          </TextNode>
        </BookLeftPartContainer>
        <BookRightPartContainer
          ref={gitLogoWrapperRef}
          className='w-1/2  border-b-gray-light-darker2  bg-white
                     transition-[border]  max-lg:w-2/5
                     max-md:w-full  max-md:pb-12  max-md:pl-0  max-md:pt-14
                     dark:border-b-gray-dark-lighter2  dark:bg-git-black'
        >
          <Image
            className='sticky  top-[20px]  w-[90%]  max-lg:w-full  max-md:w-1/2'
            src={gitLogo}
            alt='Git logo'
          />
        </BookRightPartContainer>
      </BookMainContainer>
    </Page>
  );
}

export default Page5;
