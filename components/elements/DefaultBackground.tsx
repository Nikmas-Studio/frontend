import { ReactElement } from 'react';

function DefaultBackground(): ReactElement {
  return <div className='fixed  inset-0  [z-index:-1]  dark:bg-black'></div>;
}

export default DefaultBackground;
