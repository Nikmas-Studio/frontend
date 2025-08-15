import BookNavigatorDemoVideo from '@/components/elements/book-master-english-with-sherlock-holmes/promo/BookNavigatorDemoVideo';
import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import { ReactElement } from 'react';

function BookNavigator(): ReactElement {
  return (
    <section className='mt-[27vw]  2sm:mt-[30vw]  md:mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2
          className={`mb-9  lg:mb-11  2lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
        >
          Book navigator is&nbsp;at&nbsp;your disposal
        </H2>
        <TextNode className='lg:mb-6'>
          Explore the book’s structure and find the pages you need:
        </TextNode>
        <BookNavigatorDemoVideo />
      </MainContainer>
    </section>
  );
}

export default BookNavigator;
