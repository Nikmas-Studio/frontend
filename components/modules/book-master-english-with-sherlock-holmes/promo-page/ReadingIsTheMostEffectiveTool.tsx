import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import { ReactElement } from 'react';

function ReadingIsTheMostEffectiveTool(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2
          className={`mb-7  max-w-[45rem]  text-[2.5rem]  lg:mx-auto  lg:mb-9  lg:text-center  ${libreBaskerville.className}  !leading-snug`}
        >
          Reading is the most effective way for mastering a language
        </H2>
        <TextNode className='max-w-[30rem]  lg:mx-auto'>
          When you read, you encounter more words per minute than with any other
          method. And if what you're reading is also a fascinating, gripping
          story, words are remembered far more effectively — because they become
          tied to vivid moments that stay in your active memory for a long time.
        </TextNode>
      </MainContainer>
    </section>
  );
}

export default ReadingIsTheMostEffectiveTool;
