'use client';

import BasicTextNode from '@/components/elements/master-git-and-github-book/BasicTextNode';
import BookLeftPartContainer from '@/components/elements/master-git-and-github-book/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/master-git-and-github-book/BookMainContainer';
import BookRightPartContainer from '@/components/elements/master-git-and-github-book/BookRightPartContainer';
import FolderIcon from '@/components/elements/master-git-and-github-book/FolderIcon';
import H2 from '@/components/elements/master-git-and-github-book/H2';
import H3 from '@/components/elements/master-git-and-github-book/H3';
import TextLi from '@/components/elements/master-git-and-github-book/TextLi';
import TextNode from '@/components/elements/master-git-and-github-book/TextNode';
import TextUl from '@/components/elements/master-git-and-github-book/TextUl';
import { BASE_PATH_READ } from '@/constants/master-git-and-github-book';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { ReactElement, useRef } from 'react';
import Page from '../Page';
import Controls from './Controls';

function Page2(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 2,
    basePath: BASE_PATH_READ,
  });

  return (
    <Page id='page-2' ref={sectionRef} className='bg-white  dark:bg-git-black'>
      <Controls pageNumber={2} />
      <BookMainContainer>
        <H2 className='mb-32'>Introduction to&nbsp;Version&nbsp;Control</H2>
        <div className='flex'>
          <BookLeftPartContainer className='w-[45%]'>
            <ul className='flex  flex-col  gap-5'>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-git-white' />
                <BasicTextNode className='text-2xl'>project_v1</BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-git-white' />
                <BasicTextNode className='text-2xl'>project_v2</BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-git-white' />
                <BasicTextNode className='text-2xl'>
                  project_final
                </BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-git-white' />
                <BasicTextNode className='text-2xl'>
                  project_final_final
                </BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-git-white' />
                <BasicTextNode className='text-2xl'>
                  project_final_final_2
                </BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-git-white' />
                <BasicTextNode className='text-2xl'>
                  project_final_final_last
                </BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-git-white' />
                <BasicTextNode className='text-2xl'>
                  project_final_final_last_of_us
                </BasicTextNode>
              </div>
            </ul>
          </BookLeftPartContainer>
          <BookRightPartContainer className='flex  w-1/2  flex-col  justify-start'>
            <H3 className='mb-4'>You know what I&apos;m sayin&apos;?</H3>
            <TextNode>
              Copying files and&nbsp;directories and&nbsp;renaming them is
              a&nbsp;go-to version control method for&nbsp;many people.
              It&apos;s so&nbsp;simple, and&nbsp;that makes it
              so&nbsp;appealing. But this&nbsp;simplicity comes with&nbsp;its
              drawbacks:
            </TextNode>
            <TextUl>
              <TextLi>
                It&apos;s easy to&nbsp;forget which&nbsp;directory
                you&apos;re&nbsp;in and&nbsp;accidentally write
                to&nbsp;the&nbsp;wrong file.
              </TextLi>
              <TextLi>
                Tracking changes between&nbsp;versions becomes difficult
                and&nbsp;time-consuming.
              </TextLi>
              <TextLi>
                Multiple copies can quickly eat&nbsp;up disk space, especially
                with&nbsp;large files or&nbsp;complex projects.
              </TextLi>
              <TextLi>
                Collaborating becomes a&nbsp;hassle. If&nbsp;team members work
                on&nbsp;their&nbsp;own copies, manually merging changes often
                results in&nbsp;conflicting versions and&nbsp;confusion.
              </TextLi>
            </TextUl>
            <TextNode>
              To&nbsp;tackle these&nbsp;issues, programmers created full-fledged
              version control systems (VCSs). And&nbsp;the&nbsp;most popular VCS
              is&nbsp;Git.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page2;
