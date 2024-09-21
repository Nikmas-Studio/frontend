'use client';

import { useHeaderButtons } from '@/context/header-buttons/Context';
import { ReactElement } from 'react';
import GuestAccountIcon from '../elements/GuestAccountIcon';
import LightModeIcon from '../elements/LightModeIcon';

function HeaderButtons(): ReactElement {
  const {
    lightModeIconRef: lightModeIconElement,
    accountIconRef: accountIconElement,
  } = useHeaderButtons();

  return (
    <div className='flex  items-center  gap-x-5'>
      <LightModeIcon className='flex-none' ref={lightModeIconElement} />
      <GuestAccountIcon className='flex-none' ref={accountIconElement} />
    </div>
  );
}

export default HeaderButtons;
