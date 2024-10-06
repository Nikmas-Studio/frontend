import { ReactElement } from 'react';
import Controls from './Controls';

function Page3(): ReactElement {
  return (
    <section
      className='relative  z-30  my-5  h-[820px]  w-full 
                            bg-white  pt-36
                          dark:bg-[#00040a]'
    >
      <Controls pageNumber={3} />
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
