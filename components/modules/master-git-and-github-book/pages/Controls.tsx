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
          className='absolute  bottom-7  right-[3vw]  text-git-black
                 dark:text-white'
        >
          {pageNumber}
        </p>
      )}
      <div className='absolute  right-[3vw]  top-6'>
        <ThemeToggleDefault reversedColors={reversedColors} />
      </div>
    </div>
  );
}

export default Controls;
