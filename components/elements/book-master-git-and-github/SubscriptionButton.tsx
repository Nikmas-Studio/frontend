'use client';

import { useSubscriptionModalDispatch } from '@/context/subscription-modal/Context';
import classNames from 'classnames';
import { ReactElement } from 'react';

interface SubscriptionButtonProps {
  className?: string;
}

function SubscriptionButton({
  className,
}: SubscriptionButtonProps): ReactElement {
  const { setSubscriptionModalIsOpened } = useSubscriptionModalDispatch();

  const classes = classNames(
    `button  bg-subscription  text-white
     hover:bg-subscription-darker`,
    className,
  );

  return (
    <button
      onClick={() => setSubscriptionModalIsOpened(true)}
      className={classes}
    >
      Subscription
    </button>
  );
}

export default SubscriptionButton;
