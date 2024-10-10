'use client';

import gearIconBlack from '@/public/images/gear-icon-git-black.png';
import gearIconWhite from '@/public/images/gear-icon-git-white.png';
import moonIconBlack from '@/public/images/moon-icon-git-black.png';
import moonIconWhite from '@/public/images/moon-icon-git-white.png';
import sunIconBlack from '@/public/images/sun-icon-git-black.png';
import sunIconWhite from '@/public/images/sun-icon-git-white.png';
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
          className='absolute  bottom-7  right-[3vw]  text-git-black  max-md:bottom-[1.1rem]
                 max-md:right-[4.2vw]  dark:text-git-white'
        >
          {pageNumber}
        </p>
      )}
      <div className='absolute  right-[3vw]  top-7  max-md:right-[4.2vw]  max-md:top-4'>
        <ThemeToggleDefault
          reversedColors={reversedColors}
          bgClass='bg-white  dark:bg-git-black'
          activeItemDotClass='after:bg-git-black  after:dark:bg-git-white'
          iconsSources={{
            lightModeBlackIcon: sunIconBlack,
            lightModeWhiteIcon: sunIconWhite,
            darkModeWhiteIcon: moonIconWhite,
            darkModeBlackIcon: moonIconBlack,
            systemModeBlackIcon: gearIconBlack,
            systemModeWhiteIcon: gearIconWhite,
          }}
        />
      </div>
    </div>
  );
}

export default Controls;
