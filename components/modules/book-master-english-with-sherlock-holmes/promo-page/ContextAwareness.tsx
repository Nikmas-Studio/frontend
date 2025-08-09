import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import contextAwarenessDark from '@/public/images/context-awareness-dark.jpg';
import contextAwarenessLight from '@/public/images/context-awareness.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';

function ContextAwareness(): ReactElement {
  return (
    <section className='mt-14  lg:mt-16'>
      <MainContainer>
        <H2
          className={`mb-7  max-w-[55rem]  lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
        >
          Context awareness delivers the most accurate translations
        </H2>
        <TextNode className='max-w-[45rem]'>
          When you manually translate a word or phrase using an external
          translator, it has no idea of the surrounding context — which often
          results in inaccurate translations.
        </TextNode>
        <TextNode className='max-w-[45rem]  lg:mb-8'>
          In contrast, our built-in translator understands and takes into
          account the context in which the fragment appears. This results in the
          most accurate translations — right inside the book.
        </TextNode>
        <div className='flex  flex-col  items-center  lg:flex-row  lg:justify-center'>
          <svg
            className='relative  z-10  mb-[-17vw]  w-[40vw]  -rotate-90  lg:mb-0
                       lg:mr-[-7%]  lg:w-1/4  lg:-translate-y-5  lg:rotate-180'
            viewBox='0 0 296 360'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className='fill-[#D9EFFF]  dark:fill-[#0e284b]'
              d='M234.141 359.684C273.738 308.465 295.222 245.53 295.26 180.639C295.299 115.748 273.89 52.5272 234.355 0.782715L0.0088501 178.677L234.141 359.684Z'
              fill='#D9EFFF'
            />
          </svg>
          <Image
            className='relative  z-20  rounded-[14px]  border  border-gray-light 
                       lg:w-1/2  lg:rounded-[20px]  dark:hidden'
            src={contextAwarenessLight}
            alt='Context awareness'
          />
          <Image
            className='relative  z-20  hidden  rounded-[14px]  border  border-gray-dark
                       lg:w-1/2  lg:rounded-[20px]  dark:block'
            src={contextAwarenessDark}
            alt='Context awareness'
          />
          <svg
            className='relative  z-10  mt-[-17vw]  w-[40vw]  rotate-90  lg:ml-[-7%]
                       lg:mt-0  lg:w-1/4  lg:-translate-y-5  lg:rotate-0'
            viewBox='0 0 296 360'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className='fill-[#D9EFFF]  dark:fill-[#0e284b]'
              d='M234.141 359.684C273.738 308.465 295.222 245.53 295.26 180.639C295.299 115.748 273.89 52.5272 234.355 0.782715L0.0088501 178.677L234.141 359.684Z'
            />
          </svg>
        </div>
      </MainContainer>
    </section>
  );
}

export default ContextAwareness;
