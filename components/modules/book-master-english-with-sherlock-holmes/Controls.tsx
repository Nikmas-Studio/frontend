'use client';

import { merriweather } from '@/fonts';
import classNames from 'classnames';
import { ReactElement, RefObject } from 'react';
import Settings from './Settings';

interface ControlsProps {
  pageNumber?: number;
  themeToggleRef?: RefObject<HTMLDivElement>;
}

function Controls({ pageNumber, themeToggleRef }: ControlsProps): ReactElement {
  const pageNumberClasses = classNames(
    'absolute bottom-6 right-[3vw] z-50 text-black',
    'max-md:bottom-[1.1rem] max-md:right-[4.2vw]  text-base',
    'dark:text-smooth-white',
    merriweather.className,
  );

  return (
    <div>
      {pageNumber && <p className={pageNumberClasses}>{pageNumber}</p>}
      <div className='absolute  right-[3vw]  top-5  z-50  max-md:right-[4.2vw]  max-md:top-4'>
        <Settings ref={themeToggleRef} />
      </div>
    </div>
  );
}

export default Controls;
