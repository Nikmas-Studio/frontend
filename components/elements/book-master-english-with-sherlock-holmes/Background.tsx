'use client';

import { useTouchDevice } from '@/context/touch-device/Context';
import classNames from 'classnames';
import { ReactElement, ReactNode, useRef, useState } from 'react';

function Background({ children }: { children: ReactNode }): ReactElement {
  const backgroundElementRef = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [height, setHeight] = useState(window.innerHeight);

  const { isTouchDevice } = useTouchDevice();

  // useEffect(() => {
  //   let initialHeight = window.innerHeight;
  //   let initialWidth = window.innerWidth;
  //   let initialOuterWidth = window.outerWidth;

  //   function handleResize(): void {
  //     const currentHeight = window.innerHeight;
  //     const currentWidth = window.innerWidth;
  //     const currentOuterWidth = window.outerWidth;

  //     const initialZoomRatio = initialOuterWidth / initialWidth;
  //     const currentZoomRatio = currentOuterWidth / currentWidth;
  //     const zoomChanged = Math.abs(initialZoomRatio - currentZoomRatio) > 0.05;

  //     if (zoomChanged) {
  //       return;
  //     }

  //     const heightChanged =
  //       Math.abs(currentHeight - initialHeight) > RESIZE_THRESHOLD;
  //     const widthChanged =
  //       Math.abs(currentWidth - initialWidth) > RESIZE_THRESHOLD;

  //     if (heightChanged || widthChanged) {
  //       initialHeight = currentHeight;
  //       initialWidth = currentWidth;
  //       initialOuterWidth = currentOuterWidth;
  //       setHeight(window.innerHeight);
  //     }
  //   }

  //   window.addEventListener('resize', handleResize);

  //   return (): void => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

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
