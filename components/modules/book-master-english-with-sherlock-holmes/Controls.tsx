'use client';

import BasicTextNode from '@/components/elements/book-master-english-with-sherlock-holmes/BasicTextNode';
import BookNavigatorIcon from '@/components/elements/book-master-git-and-github/BookNavigatorIcon';
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
    `absolute  bottom-6  right-[3vw]  z-50 
     max-md:bottom-[1.1rem]  max-md:right-[4.2vw]  text-base  font-light`,
    merriweather.className,
  );

  return (
    <div>
      {pageNumber && (
        <BasicTextNode className={pageNumberClasses}>
          {pageNumber}
        </BasicTextNode>
      )}
      <div className='absolute  right-[3vw]  top-5  z-50  max-md:right-[4.2vw]  max-md:top-4'>
        <div className='flex  gap-1'>
          <BookNavigatorIcon className='translate-y-[0.48rem]' />
          <Settings ref={themeToggleRef} />
        </div>
      </div>
    </div>
  );
}

export default Controls;
