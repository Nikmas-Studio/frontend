import TranslationDemoVideo from '@/components/elements/book-master-english-with-sherlock-holmes/promo/TranslationDemoVideo';
import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import { ReactElement } from 'react';

function TranslationDemo(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2
          className={`mb-7  max-w-[55rem]  lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
        >
          Highlight-based, context-aware AI translation is built right into the
          book
        </H2>
        <TextNode className='max-w-[45rem]'>
          For translation, we use ChatGPT under the hood — one of the most
          advanced AIs in the world. When translating any fragment, we also
          provide the AI with the surrounding text context in which that
          fragment appears and ask AI to translate the fragment as accurately as
          possible within that specific context. As a result, by combining
          ChatGPT with context awareness, we achieve one of the highest-quality
          translations — right inside the book.
        </TextNode>
        <TextNode className='max-w-[45rem]  lg:mb-6'>
          Choose your translation language in settings, then highlight any
          text&nbsp;fragment&nbsp;— and see the instant pop&#8209;up with the
          meaning:
        </TextNode>
        <TranslationDemoVideo />
      </MainContainer>
    </section>
  );
}

export default TranslationDemo;
