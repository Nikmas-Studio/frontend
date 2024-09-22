'use client';

import { useHeaderButtons } from '@/context/header-buttons/Context';
import { ReactElement } from 'react';
import GuestAccountIcon from '../elements/GuestAccountIcon';
import ThemeToggle from '../elements/ThemeToggle';

function HeaderButtons(): ReactElement {
  const {
    lightModeIconRef: lightModeIconElement,
    accountIconRef: accountIconElement,
  } = useHeaderButtons();

  return (
    <div className='flex  items-center  gap-x-5'>
      <ThemeToggle className='flex-none' ref={lightModeIconElement} />
      <GuestAccountIcon className='flex-none' ref={accountIconElement} />
    </div>
  );
}

export default HeaderButtons;
