import H2 from '@/components/elements/H2';
import TextNode from '@/components/elements/TextNode';
import { PAGE_NUMBERS_UPDATE_VIDEO_SRC } from '@/constants/master-git-and-github-book';
import { ReactElement } from 'react';

function PageNumbersUpdate(): ReactElement {
  return (
    <section
      className='mt-[4.5rem]  max-w-[35rem]  lg:mt-24  
                        lg:flex  lg:flex-col  lg:justify-between'
    >
      <H2 className='mb-9  lg:mb-0'>Page numbers update as&nbsp;you scroll</H2>
      <video
        className='w-full  rounded-full  lg:mb-4'
        width={960}
        height={88}
        autoPlay
        muted
        playsInline
        loop
        preload='none'
      >
        <source src={PAGE_NUMBERS_UPDATE_VIDEO_SRC} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <TextNode className='!mb-0  mt-12  lg:mt-0'>
        You can save and&nbsp;share links to&nbsp;specific book pages,
        and&nbsp;the&nbsp;book will&nbsp;open directly
        to&nbsp;the&nbsp;designated page.
      </TextNode>
    </section>
  );
}

export default PageNumbersUpdate;
