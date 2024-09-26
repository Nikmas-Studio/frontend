import { ReactElement } from 'react';
import GuestAccountIcon from '../elements/GuestAccountIcon';
import ThemeToggle from './ThemeToggle';

function HeaderButtons(): ReactElement {
  return (
    <div className='flex  items-center  gap-x-5'>
      <ThemeToggle className='flex-none' />
      <GuestAccountIcon className='flex-none' />
    </div>
  );
}

export default HeaderButtons;
