import { CircularProgress } from '@mui/material';
import { ReactElement } from 'react';

function LoadingFullPageSpinner(): ReactElement {
  return (
    <div className='fixed  inset-0  z-[999998]  size-full  bg-white dark:bg-black'>
      <div
        className='absolute  left-1/2  top-[44%]  -translate-x-1/2
                   -translate-y-1/2'
      >
        <CircularProgress className='size-[50px]  !text-black  dark:!text-white' />
      </div>
    </div>
  );
}

export default LoadingFullPageSpinner;
