import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import smoothestFlow from '@/public/images/smoothest-flow.jpeg';
import Image from 'next/image';
import { ReactElement } from 'react';

function EnjoyTheSmoothestReadingAndLearningFlow(): ReactElement {
  return (
    <section className='mt-16  lg:mt-24'>
      <MainContainer className='xl:flex  xl:flex-row-reverse  xl:gap-10'>
        <div className='mb-9  xl:mb-0  xl:w-1/2'>
          <Image
            className='rounded-[14px]  lg:rounded-[20px]'
            src={smoothestFlow}
            alt='Enjoy the Smoothest Reading and Learning Flow'
          />
        </div>
        <div className='xl:w-1/2  1.5xl:mt-5'>
          <H2
            className={`mb-7  max-w-[55rem]  lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
          >
            Enjoy the smoothest reading and learning flow
          </H2>
          <TextNode className='max-w-[45rem]'>
            When you can read foreign literature without switching to an
            external translator, it feels as if you’re already a native speaker
            who understands everything. And at the same time, you’re still
            effectively learning new words and phrases — just without any
            friction. Everything is integrated and harmonized — and you read,
            you learn, you enjoy the process.
          </TextNode>
        </div>
      </MainContainer>
    </section>
  );
}

export default EnjoyTheSmoothestReadingAndLearningFlow;
