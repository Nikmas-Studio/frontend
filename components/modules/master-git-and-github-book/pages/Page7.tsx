'use client';

import BookLeftPartContainer from '@/components/elements/master-git-and-github-book/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/master-git-and-github-book/BookMainContainer';
import BookRightPartContainer from '@/components/elements/master-git-and-github-book/BookRightPartContainer';
import GitLogo from '@/components/elements/master-git-and-github-book/GitLogo';
import H3 from '@/components/elements/master-git-and-github-book/H3';
import Page from '@/components/elements/master-git-and-github-book/Page';
import RepositoryImage from '@/components/elements/master-git-and-github-book/RepositoryImage';
import TextNode from '@/components/elements/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
  REPOSITORY_VIDEO_DARK_SRC,
  REPOSITORY_VIDEO_LIGHT_SRC,
} from '@/constants/master-git-and-github-book';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import classNames from 'classnames';
import { ReactElement, useRef } from 'react';
import Controls from './Controls';

function Page7(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 7,
    basePath,
  });

  const pageClasses = classNames('bg-white  dark:bg-git-black  my-5');

  return (
    <Page id='page-7' ref={sectionRef} className={pageClasses}>
      <Controls pageNumber={7} />
      <BookMainContainer className='flex  flex-row  max-md:flex-col-reverse  max-md:gap-12'>
        <BookLeftPartContainer className='w-1/2  max-md:w-full  max-md:pr-0'>
          <H3>Repository</H3>
          <TextNode>
            <span className='text-[#f03c2e]'>
              A&nbsp;Git &ldquo;repo&rdquo;
            </span>{' '}
            is a&nbsp;hidden <strong>.git</strong> directory located inside
            a&nbsp;project folder. The&nbsp;repository stores all
            the&nbsp;information necessary for&nbsp;version control
            and&nbsp;acts as&nbsp;the&nbsp;core of&nbsp;Git’s versioning system.
            evolution.
          </TextNode>
          <TextNode className='!mb-0'>
            Whenever&nbsp;you want to&nbsp;use Git for&nbsp;a&nbsp;project, you
            need to&nbsp;create a&nbsp;new Git repository. You can&nbsp;have
            as&nbsp;many repositories on&nbsp;your&nbsp;machine as&nbsp;needed,
            each with&nbsp;its&nbsp;own separate history
            and&nbsp;configurations. This makes Git highly flexible
            for&nbsp;managing multiple projects independently.
          </TextNode>
        </BookLeftPartContainer>
        <BookRightPartContainer className='w-1/2  max-md:w-full  max-md:pl-0'>
          <div className='sticky  top-[20px]'>
            <div className='relative  w-4/5  max-md:w-full'>
              <RepositoryImage className='w-full' color='#f03c2e' />
              <div>
                <video
                  className='absolute  left-1/2  top-[52%]  w-[90%]  -translate-x-1/2  
                           -translate-y-1/2  dark:hidden'
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload='none'
                >
                  <source src={REPOSITORY_VIDEO_LIGHT_SRC} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
                <video
                  className='absolute  left-1/2  top-[52%]  hidden  w-[90%]  
                           -translate-x-1/2  -translate-y-1/2  dark:block'
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload='none'
                >
                  <source src={REPOSITORY_VIDEO_DARK_SRC} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div
              className='mt-[2.5vw]  grid  w-4/5  grid-cols-4  gap-[1.2vw]
                         max-md:mt-[7vw]  max-md:w-[99.9%]  max-md:gap-[2.8vw]'
            >
              <div className='relative'>
                <RepositoryImage color='#f03c2e' />
                <GitLogo
                  className='absolute  left-1/2  top-[54%]  size-[2.1vw]  
                             -translate-x-1/2  -translate-y-1/2
                             max-md:size-[7vw]'
                />
              </div>
              <div className='relative'>
                <RepositoryImage color='#0090FF' />
              </div>
              <div className='relative'>
                <RepositoryImage color='#f03c2e' />
                <GitLogo
                  className='absolute  left-1/2  top-[54%]  size-[2.1vw]  
                             -translate-x-1/2  -translate-y-1/2
                             max-md:size-[7vw]'
                />
              </div>
              <div className='relative'>
                <RepositoryImage color='#0090FF' />
              </div>
              <div className='relative'>
                <RepositoryImage color='#0090FF' />
              </div>
              <div className='relative'>
                <RepositoryImage color='#f03c2e' />
                <GitLogo
                  className='absolute  left-1/2  top-[54%]  size-[2.1vw]  
                             -translate-x-1/2  -translate-y-1/2
                             max-md:size-[7vw]'
                />
              </div>
              <div className='relative'>
                <RepositoryImage color='#0090FF' />
              </div>
              <div className='relative'>
                <RepositoryImage color='#0090FF' />
              </div>
              <div className='relative'>
                <RepositoryImage color='#0090FF' />
              </div>
              <div className='relative'>
                <RepositoryImage color='#0090FF' />
              </div>
              <div className='relative'>
                <RepositoryImage color='#0090FF' />
              </div>
              <div className='relative'>
                <RepositoryImage color='#f03c2e' />
                <GitLogo
                  className='absolute  left-1/2  top-[54%]  size-[2.1vw]  
                             -translate-x-1/2  -translate-y-1/2
                             max-md:size-[7vw]'
                />
              </div>
            </div>
          </div>
        </BookRightPartContainer>
      </BookMainContainer>
    </Page>
  );
}

export default Page7;
