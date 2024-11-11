import { ReactElement } from 'react';
import GuestAccountIconDefault from '../../../elements/header/guest-account-icon/GuestAccountIconDefault';
import ThemeToggleDefault from '../theme-toggle/ThemeToggleDefault';

function HeaderButtonsDefault(): ReactElement {
  // const isAuthenticated = await validateSession();

  return (
    <div className='flex  items-center  gap-x-5'>
      <ThemeToggleDefault className='flex-none' />
      <GuestAccountIconDefault isAuthenticated={false} className='flex-none' />
    </div>
  );
}

export default HeaderButtonsDefault;
