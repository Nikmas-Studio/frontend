import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H3 from '@/components/elements/book-master-english-with-sherlock-holmes/H3';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page286({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='HIS&nbsp;LAST&nbsp;BOW'
      />
      <BookMainContainer
        className='flex  h-full  items-center  
                   justify-center  max-sm:justify-start'
      >
        <H3 className='mb-20  text-center  max-sm:text-start'>
          The Adventure of the Bruce
          <span className='max-md:hidden'>&#8209;</span>
          <span className='hidden  max-md:inline'>-</span>Partington
          <span className='max-2md:hidden'>&nbsp;</span>
          <span className='hidden  max-2md:inline'> </span>Plans
        </H3>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page286;
