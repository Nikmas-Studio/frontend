import { ReactElement } from 'react';
import AccountIconMain from '../../../elements/header/guest-account-icon/AccountIconMain';
import ThemeToggleMain from '../theme-toggle/ThemeToggleMain';

function HeaderButtonsMain(): ReactElement {
  return (
    <div className='flex  items-center  gap-x-5'>
      <ThemeToggleMain className='flex-none' />
      <AccountIconMain className='flex-none' />
    </div>
  );
}

export default HeaderButtonsMain;
