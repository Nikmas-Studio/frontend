import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import {
  INTERACTIVITY_DEMO_VIDEO_DARK_SRC,
  INTERACTIVITY_DEMO_VIDEO_LIGHT_SRC,
} from '@/constants/master-git-and-github-book';
import { ReactElement } from 'react';

function InteractivityDemo(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2 className='mb-7  lg:mb-9'>
          Interactivity that’s based on&nbsp;scrolling
        </H2>
        <TextNode className='lg:mb-6'>
          Illustrations appear, pin, transform, and&nbsp;disappear in&nbsp;sync
          with&nbsp;the&nbsp;scrolling:
        </TextNode>
        <video
          className='pointer-events-none  w-full  rounded-[14px]  border  
                     border-gray-light  lg:rounded-[20px]  dark:hidden'
          autoPlay
          muted
          playsInline
          loop
          width={2992}
          height={1624}
          preload='none'
        >
          <source src={INTERACTIVITY_DEMO_VIDEO_LIGHT_SRC} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <video
          className='pointer-events-none  hidden  w-full  rounded-[14px]  border  
                     border-gray-dark  lg:rounded-[20px]  dark:block'
          autoPlay
          muted
          playsInline
          loop
          width={2992}
          height={1624}
          preload='none'
        >
          <source src={INTERACTIVITY_DEMO_VIDEO_DARK_SRC} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <TextNode className='!mb-0  mt-4  !text-sm'>
          &quot;Visualizing Git&quot; section from the book
        </TextNode>
      </MainContainer>
    </section>
  );
}

export default InteractivityDemo;
