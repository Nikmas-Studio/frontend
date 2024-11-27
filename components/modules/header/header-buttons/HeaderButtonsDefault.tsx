import { ReactElement } from 'react';
import AccountIconDefault from '../../../elements/header/guest-account-icon/AccountIconDefault';
import ThemeToggleDefault from '../theme-toggle/ThemeToggleDefault';

function HeaderButtonsDefault(): ReactElement {
  return (
    <div className='flex  items-center  gap-x-5'>
      <ThemeToggleDefault className='flex-none' />
      <AccountIconDefault className='flex-none' />
    </div>
  );
}

export default HeaderButtonsDefault;
