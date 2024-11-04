'use client';

import { useButtonRef } from '@/context/button-ref/Context';
import { ReactElement } from 'react';
import MainContainer from '../../MainContainer';

function FixedSubscriptionButton(): ReactElement {
  const buttonRef = useButtonRef();

  return (
    <MainContainer
      className='pointer-events-none  sticky  bottom-6  right-0  flex  flex-row
                              justify-end'
    >
      <button
        ref={buttonRef}
        className='button  pointer-events-auto  mr-5  translate-x-[200%]  
                   bg-subscription  text-white  transition-transform  !duration-700
                   hover:bg-subscription-darker'
      >
        Subscription
      </button>
    </MainContainer>
  );
}

export default FixedSubscriptionButton;
