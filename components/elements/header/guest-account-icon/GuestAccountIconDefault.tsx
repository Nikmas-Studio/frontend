'use client';

import classNames from 'classnames';
import { ReactElement, useRef } from 'react';

interface GuestAccountIconProps {
  className?: string;
}

function GuestAccountIconDefault({
  className,
}: GuestAccountIconProps): ReactElement {
  const accountIconElementRef = useRef<HTMLDivElement | null>(null);
  const spineElementRef = useRef<HTMLDivElement | null>(null);

  const guestAccountIconClasses = classNames(
    `w-[1.9rem]  h-[1.9rem]  md:w-[2.1rem]  md:h-[2.1rem]  bg-black
     hover:transition-colors  hover:bg-blue
     rounded-full  flex  items-center  justify-center  hover:cursor-pointer
     dark:bg-white  group`,
    className,
  );

  return (
    <div
      id='header-account-icon'
      ref={accountIconElementRef}
      className={guestAccountIconClasses}
    >
      <div
        id='header-account-icon-spine'
        ref={spineElementRef}
        className='h-[1.05rem]  w-[0.234rem]  translate-y-[-0.03rem]
                   rounded-[0.06rem]  bg-white 
                   group-hover:transition-colors  md:h-[1.1rem]
                   md:w-[0.2447rem]  dark:bg-black  dark:group-hover:bg-white'
      ></div>
    </div>
  );
}

export default GuestAccountIconDefault;
