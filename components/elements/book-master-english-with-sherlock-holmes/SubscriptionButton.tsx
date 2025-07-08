'use client';

import { usePromoDrawerDispatch } from '@/context/book-master-english-with-sherlock-holmes/promo-drawer/Context';
import { useBookState } from '@/context/book-state/Context';
import { merriweather } from '@/fonts';
import { bookIsBought } from '@/types/book-state';
import classNames from 'classnames';
import { ReactElement } from 'react';

interface SubscriptionButtonProps {
  className?: string;
}

function SubscriptionButton({
  className,
}: SubscriptionButtonProps): ReactElement {
  const { setDrawerIsOpened } = usePromoDrawerDispatch();
  const { bookState } = useBookState();

  const classes = classNames(
    `button  ${merriweather.className}  bg-subscription  text-white
     !border-0  !outline-none  !ring-0
     hover:bg-subscription-darker`,
    className,
  );

  return (
    <button
      onClick={() => setDrawerIsOpened('subscription')}
      className={classes}
    >
      {bookIsBought(bookState) && <span className='mr-1  font-bold'>✓</span>}
      Subscription
    </button>
  );
}

export default SubscriptionButton;
