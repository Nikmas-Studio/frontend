'use client';

import BookMainContainer from '@/components/elements/book-master-git-and-github/BookMainContainer';
import H2 from '@/components/elements/book-master-git-and-github/H2';
import Page from '@/components/elements/book-master-git-and-github/Page';
import TextNode from '@/components/elements/book-master-git-and-github/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/master-git-and-github-book';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import classNames from 'classnames';
import { ReactElement, useRef } from 'react';
import Controls from './Controls';

function Page6(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 6,
    basePath,
  });

  const pageClasses = classNames('bg-white  dark:bg-git-black  my-5');

  return (
    <Page id='page-6' ref={sectionRef} className={pageClasses}>
      <Controls pageNumber={6} />
      <BookMainContainer>
        <H2>Fundamental Concepts Overview</H2>
        <TextNode className='mt-32  max-w-[30rem]'>
          In&nbsp;this section of&nbsp;the&nbsp;book, we&apos;ll get familiar
          with&nbsp;the&nbsp;main concepts around&nbsp;Git to&nbsp;start
          building a&nbsp;solid foundation for&nbsp;understanding how Git works
          and&nbsp;how its&nbsp;components connect.
        </TextNode>
      </BookMainContainer>
    </Page>
  );
}

export default Page6;
