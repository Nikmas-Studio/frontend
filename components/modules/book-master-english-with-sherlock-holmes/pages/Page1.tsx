'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H2 from '@/components/elements/book-master-english-with-sherlock-holmes/H2';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ReactElement, useRef } from 'react';
import Page from '../../../elements/book-master-git-and-github/Page';
import Controls from './Controls';

function Page1(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 1,
    basePath,
  });

  return (
    <Page id='page-1' ref={sectionRef} className='flex  h-[calc(100vh+10px)]'>
      <Controls />
      <BookMainContainer>
        <H2 className='mb-10'>
          Master&nbsp;English
          <br />
          with&nbsp;Sherlock Holmes
        </H2>
        <BookLeftPartContainer className='w-1/2'>
          <TextNode>
            In the year 1878 I took my degree of Doctor of Medicine of the
            University of London, and proceeded to Netley to go through the
            course prescribed for surgeons in the army. Having completed my
            studies there, I was duly attached to the Fifth Northumberland
            Fusiliers as Assistant Surgeon. The regiment was stationed in India
            at the time, and before I could join it, the second Afghan war had
            broken out. On landing at Bombay, I learned that my corps had
            advanced through the passes, and was already deep in the enemy’s
            country. I followed, however, with many other officers who were in
            the same situation as myself, and succeeded in reaching Candahar in
            safety, where I found my regiment, and at once entered upon my new
            duties.
          </TextNode>
        </BookLeftPartContainer>
      </BookMainContainer>
    </Page>
  );
}

export default Page1;
