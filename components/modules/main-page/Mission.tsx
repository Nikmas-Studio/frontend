'use client';

import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { ReactElement } from 'react';

function Mission(): ReactElement {
  return (
    <section className='mb-[7.5rem]  lg:mb-48'>
      <MainContainer>
        <TextNode
          className='!mb-0  w-[23rem]  text-xl  [transition:opacity_1s_ease-out]
                     first-letter:float-left  first-letter:mr-1  
                     first-letter:mt-[0.3rem]  first-letter:text-8xl  
                     first-letter:font-bold  first-letter:[line-height:0.8]
                     sm:mx-auto  lg:w-[27.6rem]  lg:text-2xl  lg:leading-snug
                     lg:first-letter:mt-[0.28rem]  lg:first-letter:text-[7.2rem]'
        >
          The&nbsp;Studio empowers authors from&nbsp;various fields
          to&nbsp;share their&nbsp;knowledge and&nbsp;insights
          with&nbsp;the&nbsp;world. Through&nbsp;our&nbsp;format
          of&nbsp;interactive e-books, we make the&nbsp;reading&nbsp;process
          more&nbsp;engaging and&nbsp;books&nbsp;more&nbsp;memorable.
        </TextNode>
      </MainContainer>
    </section>
  );
}

export default Mission;
