'use client';

import { ReactElement } from 'react';
import ThemeToggleDefault from '../../header/theme-toggle/ThemeToggleDefault';

interface ControlsProps {
  pageNumber?: number;
  reversedColors?: boolean;
}

function Controls({ pageNumber, reversedColors }: ControlsProps): ReactElement {
  return (
    <div>
      {pageNumber && (
        <p
          className='absolute  bottom-7  right-[3vw]  text-git-black  max-sm:right-[6vw]
                 dark:text-white'
        >
          {pageNumber}
        </p>
      )}
      <div className='absolute  right-[2.5vw]  top-7  max-sm:right-[5vw]'>
        <ThemeToggleDefault reversedColors={reversedColors} />
      </div>
    </div>
  );
}

export default Controls;
