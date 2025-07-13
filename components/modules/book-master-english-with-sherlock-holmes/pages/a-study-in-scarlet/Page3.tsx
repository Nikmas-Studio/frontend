import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H3 from '@/components/elements/book-master-english-with-sherlock-holmes/H3';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page3({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer
        className='flex  h-full  items-center  
                   justify-center  max-sm:justify-start'
      >
        <div className='mb-20  flex  max-w-72  flex-col  items-center  max-sm:items-start'>
          <H3 className='mb-5'>Part&nbsp;I</H3>
          <TextNode className='text-center  italic  max-sm:text-left' noIndent>
            (Being a reprint from the reminiscences of John H. Watson, M.D.,
            late of the Army Medical Department.)
          </TextNode>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page3;
