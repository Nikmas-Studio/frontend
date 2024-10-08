'use client';

import BasicTextNode from '@/components/elements/master-git-and-github-book/BasicTextNode';
import BookLeftPartContainer from '@/components/elements/master-git-and-github-book/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/master-git-and-github-book/BookMainContainer';
import BookRightPartContainer from '@/components/elements/master-git-and-github-book/BookRightPartContainer';
import FolderIcon from '@/components/elements/master-git-and-github-book/FolderIcon';
import H2 from '@/components/elements/master-git-and-github-book/H2';
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
    <Page
      id='page-2'
      ref={sectionRef}
      className='h-[820px]  bg-white  dark:bg-git-black'
    >
      <Controls pageNumber={2} />
      <BookMainContainer>
        <H2 className='mb-32  text-git-black  dark:text-white'>
          Introduction to&nbsp;Version&nbsp;Control
        </H2>
        <div className='flex'>
          <BookLeftPartContainer className='w-[45%]'>
            <ul className='flex  flex-col  gap-5'>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-white' />
                <BasicTextNode className='text-2xl'>project_v1</BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-white' />
                <BasicTextNode className='text-2xl'>project_v2</BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-white' />
                <BasicTextNode className='text-2xl'>
                  project_final
                </BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-white' />
                <BasicTextNode className='text-2xl'>
                  project_final_final
                </BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-white' />
                <BasicTextNode className='text-2xl'>
                  project_final_final_2
                </BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-white' />
                <BasicTextNode className='text-2xl'>
                  project_final_final_last
                </BasicTextNode>
              </div>
              <div className='flex  items-center  gap-3'>
                <FolderIcon className='fill-git-black  dark:fill-white' />
                <BasicTextNode className='text-2xl'>
                  project_final_final_last_of_us
                </BasicTextNode>
              </div>
            </ul>
          </BookLeftPartContainer>
          <BookRightPartContainer className='flex  w-[55%]  flex-col  justify-center'>
            <BasicTextNode className='-mt-36  text-4xl'>
              Y&apos;know what I&apos;m sayin&apos;?
            </BasicTextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page2;
