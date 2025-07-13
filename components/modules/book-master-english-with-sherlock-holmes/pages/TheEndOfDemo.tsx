import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H2 from '@/components/elements/book-master-english-with-sherlock-holmes/H2';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import SubscriptionButton from '@/components/elements/book-master-english-with-sherlock-holmes/SubscriptionButton';
import { ReactElement } from 'react';
import Controls from '../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function TheEndOfDemoPage({ pageNumber }: PageProps): ReactElement {
  return (
    <PageWrapper lastPage pageNumber={pageNumber} viewportHeight={true}>
      <Controls />
      <BookMainContainer
        className='flex  h-full  items-center  
                   justify-center  max-sm:justify-start'
      >
        <div className='mb-20  flex  flex-col  items-center'>
          <H2 className='mb-5  text-center'>The End of Demo</H2>
          <SubscriptionButton />
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default TheEndOfDemoPage;
