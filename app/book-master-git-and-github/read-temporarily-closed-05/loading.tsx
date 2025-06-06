import { CircularProgress } from '@mui/material';
import { ReactElement } from 'react';

function Loading(): ReactElement {
  return (
    <div
      className='flex  h-screen  w-screen  justify-center
                 [background:linear-gradient(135deg,#ff5013,#271ad3)]'
    >
      <div className='mt-[40vh]'>
        <CircularProgress className='!size-[50px]  !text-white' />
      </div>
    </div>
  );
}

export default Loading;
