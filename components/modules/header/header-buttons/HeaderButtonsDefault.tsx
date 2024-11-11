import { checkAuth } from '@/utils/is-authenticated';
import { ReactElement } from 'react';
import GuestAccountIconDefault from '../../../elements/header/guest-account-icon/GuestAccountIconDefault';
import ThemeToggleDefault from '../theme-toggle/ThemeToggleDefault';

async function HeaderButtonsDefault(): Promise<ReactElement> {
  const isAuthenticated = await checkAuth();

  return (
    <div className='flex  items-center  gap-x-5'>
      <ThemeToggleDefault className='flex-none' />
      <GuestAccountIconDefault
        isAuthenticated={isAuthenticated}
        className='flex-none'
      />
    </div>
  );
}

export default HeaderButtonsDefault;
