'use client';

import { ReactElement, useEffect, useRef, useState } from 'react';
import SubscriptionButton from '../SubscriptionButton';
import DemoOrReadButton from './DemoOrReadButton';

function TryDemoAndSubscriptionButtonsPromo(): ReactElement {
  const buttonContainerRef = useRef<HTMLDivElement | null>(null);
  const [buttonContainerHeight, setButtonContainerHeight] = useState(3000);

  useEffect(() => {
    function updateButtonContainerHeight(): void {
      if (buttonContainerRef.current) {
        const sumupElement = document.getElementById('sherlock-promo-sumup');
        if (sumupElement !== null) {
          const buttonContainerTop =
            buttonContainerRef.current.getBoundingClientRect().top +
            window.scrollY;
          const sumupElementBottom =
            sumupElement.getBoundingClientRect().bottom + window.scrollY;

          const margin = window.innerWidth < 1280 ? 90 : 80;

          setButtonContainerHeight(
            sumupElementBottom - buttonContainerTop + margin,
          );
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
    <div className=''>
      <div className='relative  z-40'>
        <div
          style={{
            height: `${buttonContainerHeight}px`,
          }}
          ref={buttonContainerRef}
          className='pointer-events-none  absolute  right-0  top-0  flex  translate-y-[-0.7rem]
                     flex-col  items-end  justify-end  lg:translate-y-0'
        >
          <div className='pointer-events-auto  sticky  bottom-[25px]  right-0  flex  gap-2.5'>
            <DemoOrReadButton />
            <SubscriptionButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TryDemoAndSubscriptionButtonsPromo;
