import { checkAuth } from '@/utils/is-authenticated';
import { ReactElement } from 'react';
import GuestAccountIconMain from '../../../elements/header/guest-account-icon/GuestAccountIconMain';
import ThemeToggleMain from '../theme-toggle/ThemeToggleMain';

function HeaderButtonsMain(): ReactElement {
  const isAuthenticated = checkAuth();

  return (
    <div className='flex  items-center  gap-x-5'>
      <ThemeToggleMain className='flex-none' />
      <GuestAccountIconMain
        isAuthenticated={isAuthenticated}
        className='flex-none'
      />
    </div>
  );
}

export default HeaderButtonsMain;
