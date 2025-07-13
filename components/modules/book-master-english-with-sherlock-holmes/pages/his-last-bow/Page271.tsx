import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page271({
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
      <BookMainContainer>
        <H4>Preface</H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The friends of Mr. Sherlock Holmes will be glad to learn that he
              is still alive and well, though somewhat crippled by occasional
              attacks of rheumatism. He has, for many years, lived in a small
              farm upon the downs five miles from Eastbourne, where his time is
              divided between philosophy and agriculture. During this period of
              rest he has refused the most princely offers to take up various
              cases, having determined that his retirement was a permanent one.
              The approach of the German war caused him, however, to lay his
              remarkable combination of intellectual and practical activity at
              the disposal of the government, with historical results which are
              recounted in His Last Bow. Several previous experiences which have
              lain long in my portfolio have been added to His Last Bow so as to
              complete the volume.
            </TextNode>
            <TextNode className='italic' noIndent>
              John H. Watson, M. D.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer></BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page271;
