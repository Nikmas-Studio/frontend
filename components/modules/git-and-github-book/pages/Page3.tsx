import { ReactElement } from 'react';

function Page3(): ReactElement {
  return (
    <section className='relative  z-30  mt-5  h-[820px]  w-full  bg-white  pt-10  dark:bg-[#00040a]'>
      <div>
        <p className='absolute  bottom-6  right-[3.5vw]'>2</p>
      </div>
      <h1
        className='text-center  text-5xl  text-[#00040a]  
                   dark:text-white'
      >
        Page 3
      </h1>
    </section>
  );
}

export default Page3;
