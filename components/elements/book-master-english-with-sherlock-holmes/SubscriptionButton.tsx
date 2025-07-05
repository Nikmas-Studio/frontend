'use client';

import { usePromoDrawerDispatch } from '@/context/book-master-english-with-sherlock-holmes/promo-drawer/Context';
import classNames from 'classnames';
import { ReactElement } from 'react';

interface SubscriptionButtonProps {
  className?: string;
}

function SubscriptionButton({
  className,
}: SubscriptionButtonProps): ReactElement {
  const { setDrawerIsOpened } = usePromoDrawerDispatch();

  const classes = classNames(
    `button  bg-subscription  text-white
     hover:bg-subscription-darker`,
    className,
  );

  return (
    <button
      onClick={() => setDrawerIsOpened('subscription')}
      className={classes}
    >
      Subscription
    </button>
  );
}

export default SubscriptionButton;
