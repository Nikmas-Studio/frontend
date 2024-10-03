import { ReactElement } from 'react';

function Page1(): ReactElement {
  return (
    <div className='h-[1000px]  w-full  bg-white  dark:bg-[#00040a]'>
      <h1
        className='text-center  mt-5  text-5xl  text-[#00040a]  
                   dark:text-white'
      >
        Introduction to Version Control
      </h1>
    </div>
  );
}

export default Page1;
