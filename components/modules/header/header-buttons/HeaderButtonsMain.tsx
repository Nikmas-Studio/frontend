import { checkAuth } from '@/utils/is-authenticated';
import { ReactElement } from 'react';
import GuestAccountIconMain from '../../../elements/header/guest-account-icon/GuestAccountIconMain';
import ThemeToggleMain from '../theme-toggle/ThemeToggleMain';

async function HeaderButtonsMain(): Promise<ReactElement> {
  const isAuthenticated = await checkAuth();

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
