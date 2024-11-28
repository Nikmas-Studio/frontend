import { CircularProgress } from '@mui/material';
import { ReactElement } from 'react';

function Loading(): ReactElement {
  return (
    <div
      className='fixed  left-1/2  top-[44%]  -translate-x-1/2
                 -translate-y-1/2'
    >
      <CircularProgress className='size-[50px]  !text-black  dark:!text-white' />
    </div>
  );
}

export default Loading;
