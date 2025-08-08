import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import unlockCuttingEdgeKnowledge from '@/public/images/unlock-cutting-edge-knowledge.jpeg';
import Image from 'next/image';
import { ReactElement } from 'react';

function UnlockCuttingEdgeKnowledge(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer className='xl:flex  xl:gap-10'>
        <div className='mb-9  xl:mb-0  xl:w-1/2'>
          <Image
            className='rounded-[14px]  lg:rounded-[20px]'
            src={unlockCuttingEdgeKnowledge}
            alt='Unlock Cutting-Edge Knowledge'
          />
        </div>
        <div className='xl:w-1/2  1.5xl:mt-5'>
          <H2
            className={`mb-7  max-w-[]  lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
          >
            Unlock cutting-edge knowledge and become more&nbsp;and&nbsp;more
            valuable
          </H2>
          <TextNode className='max-w-[45rem]'>
            Proficiency in English opens the door for you to cutting-edge
            knowledge — most of which is first published in English. The more of
            this modern knowledge you have, the more valuable you become — and
            the more you earn.
          </TextNode>
          <TextNode className='max-w-[45rem]'>
            And we’re here to help you unlock that knowledge by mastering
            English — with the most effective and engaging tool out there,
            verified and recommended by the world’s best English teachers.
          </TextNode>
        </div>
      </MainContainer>
    </section>
  );
}

export default UnlockCuttingEdgeKnowledge;
