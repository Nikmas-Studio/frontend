'use client';

import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H2 from '@/components/elements/book-master-english-with-sherlock-holmes/H2';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ReactElement, useRef } from 'react';
import Controls from '../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
}

function InstructionsPage({
  pageNumber,
  hidePageNumber = false,
}: PageProps): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: pageNumber,
    basePath,
  });

  return (
    <Page id={`page-${pageNumber}`} className='mb-5' ref={sectionRef}>
      <Controls pageNumber={hidePageNumber ? undefined : pageNumber} />
      <BookMainContainer>
        <H2 className='mb-10'>Book Usage Instructions</H2>
      </BookMainContainer>
    </Page>
  );
}

export default InstructionsPage;
