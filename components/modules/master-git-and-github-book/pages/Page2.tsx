'use client';

import { ReactElement } from 'react';

function Page2(): ReactElement {
  return (
    <section className='relative  z-30  h-[820px]  w-full  bg-white  pt-10  dark:bg-[#00040a]'>
      <div>
        <p className='absolute  bottom-6  right-[3.5vw]'>2</p>
      </div>
      <h1
        className='text-center  text-5xl  text-[#00040a]  
                   dark:text-white'
      >
        Page 2
      </h1>
    </section>
  );
}

export default Page2;
