import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H2 from '@/components/elements/book-master-english-with-sherlock-holmes/H2';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page270({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls pageNumber={hidePageNumber ? undefined : pageNumber} />
      <BookMainContainer
        className='grid  h-full  place-content-center
                   max-sm:flex  max-sm:items-center  max-sm:justify-start'
      >
        <H2 className='mb-20'>His Last Bow</H2>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page270;
