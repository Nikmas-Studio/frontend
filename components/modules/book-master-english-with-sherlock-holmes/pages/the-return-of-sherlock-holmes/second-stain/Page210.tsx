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

function Page210({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;RETURN OF&nbsp;SHERLOCK&nbsp;HOLMES'
      />
      <BookMainContainer
        className='flex  h-full  items-center  
                   justify-center  max-sm:justify-start'
      >
        <H3 className='mb-20  text-center  max-sm:text-start'>
          The Adventure of the Second
          <span className='max-md:hidden'>&nbsp;</span>
          <span className='hidden  max-md:inline'> </span>Stain
        </H3>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page210;
