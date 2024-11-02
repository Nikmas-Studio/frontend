import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import InteractivityDemoVideo from '@/components/elements/master-git-and-github-book/InteractivityDemoVideo';
import TextNode from '@/components/elements/TextNode';
import { ReactElement } from 'react';

function InteractivityDemo(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2 className='mb-7  lg:mb-9'>
          Interactivity that&apos;s based on&nbsp;scrolling
        </H2>
        <TextNode>
          Illustrations appear, change, and&nbsp;disappear as&nbsp;you scroll:
        </TextNode>
        <InteractivityDemoVideo
          className='w-full  rounded-[14px]  border  border-gray-light  
                     lg:rounded-[20px]  dark:border-gray-dark'
        />
        <TextNode className='mt-3  !text-sm'>
          &quot;Visualizing Git&quot; section from the book
        </TextNode>
      </MainContainer>
    </section>
  );
}

export default InteractivityDemo;
