'use client';

import { BASE_PATH_READ } from '@/constants/master-git-and-github-book';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { ReactElement, useRef } from 'react';
import Controls from './Controls';

function Page2(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 2,
    basePath: BASE_PATH_READ,
  });

  return (
    <section
      id='page-2'
      ref={sectionRef}
      className='relative  z-30  h-[820px]  w-full  bg-white  pt-36  dark:bg-[#00040a]'
    >
      <Controls pageNumber={2} />
      <h1
        className='text-center  text-5xl  
                   text-[#00040a]  dark:text-white'
      >
        Page 2
      </h1>
    </section>
  );
}

export default Page2;
