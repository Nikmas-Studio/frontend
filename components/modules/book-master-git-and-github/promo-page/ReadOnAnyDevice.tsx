import H2 from '@/components/elements/H2';
import TextNode from '@/components/elements/TextNode';
import { ReactElement } from 'react';

function ReadOnAnyDevice(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <H2 className='mb-9  lg:mb-11'>Read on any device</H2>
      <svg
        className='w-[95%]  max-w-[30rem]'
        viewBox='0 0 417 129'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
      >
        <path
          className='stroke-black  dark:stroke-white'
          d='M10.5 7C10.5 3.96243 12.9624 1.5 16 1.5H192C195.038 1.5 197.5 3.96243 197.5 7V121C197.5 121.828 196.828 122.5 196 122.5H12C11.1716 122.5 10.5 121.828 10.5 121V7Z'
          strokeWidth='3'
        />
        <rect
          className='fill-black  dark:fill-white'
          y='126'
          width='208'
          height='3'
          rx='1.5'
        />
        <rect
          className='fill-none  stroke-black  dark:stroke-white'
          x='229.5'
          y='41.5'
          width='134'
          height='86'
          rx='5.5'
          strokeWidth='3'
        />
        <rect
          className='fill-none  stroke-black  dark:stroke-white'
          x='388.5'
          y='72.5'
          width='27'
          height='55'
          rx='5.5'
          strokeWidth='3'
        />
      </svg>
      <TextNode className='!mb-0  mt-6  lg:mt-7'>
        The book is&nbsp;adapted for&nbsp;computers, tablets, and&nbsp;phones.
      </TextNode>
    </section>
  );
}

export default ReadOnAnyDevice;
