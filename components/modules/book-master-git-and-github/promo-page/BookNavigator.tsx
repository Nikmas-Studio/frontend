import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import bookNavigatorPreviewDark from '@/public/images/book-navigator-preview-dark.jpg';
import bookNavigatorPreviewLight from '@/public/images/book-navigator-preview-light.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';

function BookNavigator(): ReactElement {
  return (
    <section className='mt-20  lg:mt-24'>
      <MainContainer>
        <H2 className='mb-9  lg:mb-11  2lg:mb-9'>
          Book navigator with&nbsp;search and&nbsp;bookmarks is at&nbsp;your{' '}
          disposal
          {/* <br className='2lg:hidden' />
          <span
            className='mt-[1.2rem] inline-block  translate-y-[-0.26rem]  rounded-[10px]
                       border  border-blue  px-4
                       py-2  text-2xl  font-normal  leading-none
                       text-blue  2lg:ml-4  2lg:mt-0'
          >
            Soon
          </span> */}
        </H2>
        <TextNode className='max-w-[45rem]  lg:mb-6'>
          Explore the&nbsp;book’s structure, and&nbsp;use search, illustrated
          contents, or&nbsp;bookmarks to&nbsp;find the&nbsp;pages you need:
        </TextNode>
        <Image
          className='rounded-[14px]  lg:rounded-[20px]  dark:hidden'
          src={bookNavigatorPreviewLight}
          alt='Book navigator preview'
        />
        <Image
          className='hidden  rounded-[14px]  border  border-gray-dark
                     lg:rounded-[20px]  dark:inline-block'
          src={bookNavigatorPreviewDark}
          alt='Book navigator preview'
        />
      </MainContainer>
    </section>
  );
}

export default BookNavigator;
