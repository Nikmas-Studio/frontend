'use client';

import { RESIZE_THRESHOLD } from '@/constants/general';
import { useTouchDevice } from '@/context/touch-device/Context';
import classNames from 'classnames';
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';

function Background({ children }: { children: ReactNode }): ReactElement {
  const backgroundElementRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(window.innerHeight);

  const { isTouchDevice } = useTouchDevice();

  useEffect(() => {
    let initialHeight = window.innerHeight;
    let initialWidth = window.innerWidth;

    function handleResize(): void {
      const currentHeight = window.innerHeight;
      const currentWidth = window.innerWidth;

      const heightChanged =
        Math.abs(currentHeight - initialHeight) > RESIZE_THRESHOLD;
      const widthChanged =
        Math.abs(currentWidth - initialWidth) > RESIZE_THRESHOLD;

      if (heightChanged || widthChanged) {
        initialHeight = currentHeight;
        initialWidth = currentWidth;
        setHeight(window.innerHeight);
      }
    }

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundClasses = classNames(
    `fixed  z-0  bg-center  bg-repeat-y  w-screen
     bg-[length:1000px_auto]  max-lg:bg-[length:100vw_auto]
     bg-book-master-english-with-sherlock-holmes-light
     dark:bg-book-master-english-with-sherlock-holmes-dark
     bg-[#FFEAC5]  dark:bg-[#ffca9a]  max-lg:!hidden`,
  );

  return (
    <div className='bg-[#FFEAC5]  dark:bg-[#ffca9a]'>
      <div
        style={{
          height,
          display: isTouchDevice ? 'none' : 'block',
        }}
        ref={backgroundElementRef}
        className={backgroundClasses}
      ></div>
      <div className='relative  z-10'>{children}</div>
    </div>
  );
}

export default Background;
