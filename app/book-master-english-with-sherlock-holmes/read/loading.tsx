import { CircularProgress } from '@mui/material';
import { ReactElement } from 'react';

function Loading(): ReactElement {
  return (
    <div className='flex  h-screen  w-screen  justify-center  bg-white  dark:bg-black'>
      <div className='mt-[40vh]'>
        <CircularProgress className='!size-[50px]  !text-black  dark:!text-white' />
      </div>
    </div>
  );
}

export default Loading;
