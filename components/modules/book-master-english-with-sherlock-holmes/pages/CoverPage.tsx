'use client';

import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H1 from '@/components/elements/book-master-english-with-sherlock-holmes/H1';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import { ReactElement, useRef } from 'react';
import Controls from '../Controls';

function Page1(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <Page id='cover-page' className='mb-5' ref={sectionRef}>
      <Controls />
      <BookMainContainer>
        <H1>Master English with&nbsp;Sherlock Holmes</H1>
      </BookMainContainer>
    </Page>
  );
}

export default Page1;
