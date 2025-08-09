import TranslationDemoVideo from '@/components/elements/book-master-english-with-sherlock-holmes/promo/TranslationDemoVideo';
import H2 from '@/components/elements/H2';
import H3 from '@/components/elements/H3';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import translatePhrasesDark from '@/public/images/translate-phrases-dark.jpg';
import translatePhrasesLight from '@/public/images/translate-phrases.jpg';
import translateSentencesDark from '@/public/images/translate-sentences-dark.jpg';
import translateSentencesLight from '@/public/images/translate-sentences.jpg';
import translateWordsDark from '@/public/images/translate-words-dark.jpg';
import translateWordsLight from '@/public/images/translate-words.jpg';
import Image from 'next/image';
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
          We eliminated the frustration that comes from constantly switching
          between a book and an external translator. Now, translation is built
          right into the book — and it’s context-aware.
        </TextNode>
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
        <div className='mt-14  flex  flex-col  gap-12  lg:mt-16  lg:flex-row  lg:justify-between  lg:gap-10  xl:gap-12'>
          <div>
            <H3 className={`mb-5  font-bold  ${libreBaskerville.className}`}>
              Translate&nbsp;words
            </H3>
            <Image
              className='rounded-[14px]  border  border-gray-light lg:rounded-[20px]  dark:hidden'
              src={translateWordsLight}
              alt='Translate words'
            />
            <Image
              className='hidden  rounded-[14px]  border  border-gray-dark  lg:rounded-[20px]  dark:block'
              src={translateWordsDark}
              alt='Translate words'
            />
          </div>
          <div>
            <H3 className={`mb-5  font-bold  ${libreBaskerville.className}`}>
              Translate&nbsp;phrases
            </H3>
            <Image
              className='rounded-[14px]  border  border-gray-light lg:rounded-[20px]  dark:hidden'
              src={translatePhrasesLight}
              alt='Translate phrases'
            />
            <Image
              className='hidden  rounded-[14px]  border  border-gray-dark  lg:rounded-[20px]  dark:block'
              src={translatePhrasesDark}
              alt='Translate phrases'
            />
          </div>
          <div>
            <H3 className={`mb-5  font-bold  ${libreBaskerville.className}`}>
              Translate&nbsp;sentences
            </H3>
            <Image
              className='rounded-[14px]  border  border-gray-light lg:rounded-[20px]  dark:hidden'
              src={translateSentencesLight}
              alt='Translate sentences'
            />
            <Image
              className='hidden  rounded-[14px]  border  border-gray-dark  lg:rounded-[20px]  dark:block'
              src={translateSentencesDark}
              alt='Translate sentences'
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default TranslationDemo;
