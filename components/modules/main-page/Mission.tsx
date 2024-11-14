'use client';

import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { ReactElement } from 'react';

function Mission(): ReactElement {
  return (
    <section className='mb-[7.5rem]  lg:mb-48'>
      <MainContainer>
        <TextNode
          className='!mb-0  max-w-[25rem]  text-[4.5vw]  !leading-normal
                     [transition:opacity_1s_ease-out]  first-letter:float-left  
                     first-letter:mr-1  first-letter:mt-1  
                     first-letter:text-[23.2vw]  first-letter:font-bold  first-letter:![line-height:0.8]
                     2sm:text-xl  2sm:first-letter:text-[6.5rem]
                     sm:mx-auto  sm:w-[22.9rem]  sm:max-w-none  lg:w-[27.4rem]  lg:text-2xl 
                     lg:first-letter:mt-[0.32rem]  lg:first-letter:text-[7.74rem]'
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
