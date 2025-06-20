'use client';

import BasicTextNode from '@/components/elements/book-master-english-with-sherlock-holmes/BasicTextNode';
import BookNavigatorIcon from '@/components/elements/book-master-git-and-github/BookNavigatorIcon';
import { libreBaskerville, merriweather } from '@/fonts';
import classNames from 'classnames';
import { ReactElement, RefObject } from 'react';
import Settings from './Settings';

interface ControlsProps {
  pageNumber?: number;
  title?: string;
  themeToggleRef?: RefObject<HTMLDivElement>;
  alwaysWhite?: boolean;
}

function Controls({
  pageNumber,
  title,
  themeToggleRef,
  alwaysWhite = false,
}: ControlsProps): ReactElement {
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
        <div className='flex  gap-0'>
          <BookNavigatorIcon
            alwaysWhite={alwaysWhite}
            className='translate-y-[0.48rem]'
          />
          <Settings alwaysWhite={alwaysWhite} ref={themeToggleRef} />
        </div>
      </div>
      {title && (
        <div
          className='absolute  left-[8.4vw]  top-6  max-w-[70vw]  
                     max-md:left-[4.2vw]  max-md:top-5'
        >
          <BasicTextNode className={`${libreBaskerville.className}  text-base`}>
            {title}
          </BasicTextNode>
        </div>
      )}
    </div>
  );
}

export default Controls;
