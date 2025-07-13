'use client';

import { ReactElement, useEffect, useRef, useState } from 'react';
import SubscriptionButton from '../SubscriptionButton';

function SubscriptionButtonPromo(): ReactElement {
  const buttonContainerRef = useRef<HTMLDivElement | null>(null);
  const [buttonContainerHeight, setButtonContainerHeight] = useState(3000);

  useEffect(() => {
    function updateButtonContainerHeight(): void {
      if (buttonContainerRef.current) {
        const priceElement = document.getElementById(
          'sherlock-promo-subs-price',
        );
        if (priceElement !== null) {
          const buttonContainerTop =
            buttonContainerRef.current.getBoundingClientRect().top +
            window.scrollY;
          const priceElementBottom =
            priceElement.getBoundingClientRect().bottom + window.scrollY;

          setButtonContainerHeight(priceElementBottom - buttonContainerTop - 6);
        }
      }
    }

    setTimeout(() => {
      updateButtonContainerHeight();
    }, 100);

    window.addEventListener('resize', updateButtonContainerHeight);

    return () => {
      window.removeEventListener('resize', updateButtonContainerHeight);
    };
  }, []);

  return (
    <div className='self-start  lg:mt-5  lg:self-end'>
      <div className='relative  z-40'>
        <div
          style={{
            height: `${buttonContainerHeight}px`,
          }}
          ref={buttonContainerRef}
          className='absolute  right-0  top-0  flex  translate-y-[-0.7rem]
                     flex-col  items-end  justify-end  lg:translate-y-0'
        >
          <SubscriptionButton className='sticky  bottom-[25px]  right-0' />
        </div>
      </div>
    </div>
  );
}

export default SubscriptionButtonPromo;
