import { ReactElement } from 'react';
import GuestAccountIconMain from '../../../elements/header/guest-account-icon/GuestAccountIconMain';
import ThemeToggleMain from '../theme-toggle/ThemeToggleMain';

function HeaderButtonsMain(): ReactElement {
  // const isAuthenticated = await validateSession();

  return (
    <div className='flex  items-center  gap-x-5'>
      <ThemeToggleMain className='flex-none' />
      <GuestAccountIconMain isAuthenticated={false} className='flex-none' />
    </div>
  );
}

export default HeaderButtonsMain;
