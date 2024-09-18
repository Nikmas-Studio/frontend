import { ReactElement } from 'react';
import GuestAccountIcon from '../elements/GuestAccountIcon';
import LightModeIcon from '../elements/LightModeIcon';

function HeaderButtons(): ReactElement {
  return (
    <div className='flex  items-center  gap-x-5'>
      <LightModeIcon className='flex-none' />
      <GuestAccountIcon className='flex-none' />
    </div>
  );
}

export default HeaderButtons;
