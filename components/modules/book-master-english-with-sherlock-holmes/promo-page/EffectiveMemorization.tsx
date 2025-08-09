import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import effectiveMemorization from '@/public/images/effective-memorization.jpeg';
import Image from 'next/image';
import { ReactElement } from 'react';

function EffectiveMemorization(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer className='xl:flex  xl:gap-10'>
        <div className='mb-9  xl:mb-0  xl:w-1/2'>
          <Image
            className='rounded-[14px]  lg:rounded-[20px]'
            src={effectiveMemorization}
            alt='Effective Memorization'
          />
        </div>
        <div className='xl:w-1/2  1.5xl:mt-5'>
          <H2
            className={`mb-7  max-w-[55rem]  lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
          >
            Experience effective and natural memorization of words and phrases
          </H2>
          <TextNode className='max-w-[45rem]'>
            Vivid moments stay in our active memory for a long time. And when
            you read an exciting story like Sherlock Holmes, filled with such
            striking scenes, linking the learning of new words and phrases to
            those vivid moments helps retain the vocabulary in long-term memory
            — naturally and effortlessly.
          </TextNode>
        </div>
      </MainContainer>
    </section>
  );
}

export default EffectiveMemorization;
