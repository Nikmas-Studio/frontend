import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

const InteractivityDemoVideoDynamic = dynamic(
  () =>
    import(
      '@/components/elements/master-git-and-github-book/InteractivityDemoVideo'
    ),
  { ssr: false },
);

function InteractivityDemo(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2 className='mb-7  lg:mb-9'>
          Interactivity that&apos;s based on&nbsp;scrolling
        </H2>
        <TextNode className='lg:mb-6'>
          Illustrations appear, change, and&nbsp;disappear as&nbsp;you scroll:
        </TextNode>
        <InteractivityDemoVideoDynamic
          className='w-full  rounded-[14px]  border  border-gray-light  
                     lg:rounded-[20px]  dark:border-gray-dark'
        />
        <TextNode className='!mb-0  mt-4  !text-sm'>
          &quot;Visualizing Git&quot; section from the book
        </TextNode>
      </MainContainer>
    </section>
  );
}

export default InteractivityDemo;
