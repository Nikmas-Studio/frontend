import BasicTextNode from '@/components/elements/BasicTextNode';
import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import { ReactElement } from 'react';

function DemoOrSubscription(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer className='lg:flex  lg:border-y  lg:border-gray-light  dark:lg:border-gray-dark'>
        <div
          className='border-b  border-gray-light  pb-11  lg:flex-1
                     lg:border-none  lg:pb-20  lg:pt-8 dark:border-gray-dark'
        >
          <H2 className={`mb-6  ${libreBaskerville.className}  !leading-snug`}>
            Try demo of the book
            <br /> for free
          </H2>
          <button
            className='button  bg-black  text-white
                     hover:bg-blue  dark:bg-white
                     dark:text-black dark:hover:text-white'
          >
            Try demo
          </button>
        </div>
        <div
          className='mt-5  lg:mt-0  lg:flex  lg:flex-1  lg:flex-col  
                     lg:justify-between  lg:border-l  lg:border-gray-light  
                     lg:pb-20  lg:pl-7  lg:pt-8  lg:dark:border-gray-dark'
        >
          <H2
            className={`mb-9  lg:mb-0  ${libreBaskerville.className}  !leading-snug`}
          >
            Subscription
          </H2>
          <div className='lg:translate-y-[0.373rem]'>
            <BasicTextNode className={`${libreBaskerville.className}  text-xl`}>
              <span className='text-[3.43rem]'>$23</span>
              /year
            </BasicTextNode>
            <TextNode
              id='sherlock-promo-subs-price'
              className='!mb-0  mt-2  !text-base'
            >
              With auto-renewal
            </TextNode>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default DemoOrSubscription;
