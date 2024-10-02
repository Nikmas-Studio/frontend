import { ReactElement } from 'react';
import GuestAccountIconDefault from '../../../elements/header/guest-account-icon/GuestAccountIconDefault';
import ThemeToggleDefault from '../theme-toggle/ThemeToggleDefault';

function HeaderButtonsDefault(): ReactElement {
  return (
    <div className='flex  items-center  gap-x-5'>
      <ThemeToggleDefault className='flex-none' />
      <GuestAccountIconDefault className='flex-none' />
    </div>
  );
}

export default HeaderButtonsDefault;
