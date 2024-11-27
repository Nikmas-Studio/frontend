import { CircularProgress } from '@mui/material';
import { ReactElement } from 'react';

function Loading(): ReactElement {
  return (
    <CircularProgress
      className='absolute  left-1/2  top-[44%]
                 !size-[50px]  -translate-x-1/2
                 -translate-y-1/2  !text-black  dark:!text-white'
    />
  );
}

export default Loading;
