import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H3 from '@/components/elements/book-master-english-with-sherlock-holmes/H3';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page98({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURES OF&nbsp;SHERLOCK&nbsp;HOLMES'
      />
      <BookMainContainer
        className='flex  h-full  items-center  
                   justify-center  max-sm:justify-start'
      >
        <H3 className='mb-20  text-center  max-sm:text-start'>
          The Adventure of the Speckled Band
        </H3>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page98;
