'use client';

import EmailForm from '@/components/modules/EmailForm';
import useOutsideClick from '@/hooks/use-outside-click';
import classNames from 'classnames';
import { ReactElement, useRef, useState } from 'react';

interface GuestAccountIconProps {
  className?: string;
}

function GuestAccountIconDefault({
  className,
}: GuestAccountIconProps): ReactElement {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);

  const accountIconElementRef = useRef<HTMLDivElement | null>(null);
  const spineElementRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick([accountIconElementRef, dropdownRef], () => {
    setDropdownIsOpened(false);
  });

  const guestAccountIconClasses = classNames(
    `w-[1.9rem]  h-[1.9rem]  md:w-[2.1rem]  md:h-[2.1rem]  bg-black
     hover:transition-colors  hover:bg-blue
     rounded-full  flex  items-center  justify-center  hover:cursor-pointer
     dark:bg-white  group`,
    className,
  );

  const dropdownClasses = classNames(
    `absolute  right-0  top-[42px]  md:top-[44px]  w-[28.375rem]  max-w-[91vw]  rounded-[14px]  border
     border-gray-light  bg-white  px-6  pb-16  pt-7  dark:border-gray-dark
     dark:bg-black`,
    {
      'opacity-0  pointer-events-none': !dropdownIsOpened,
      'opacity-100  pointer-events-auto': dropdownIsOpened,
    },
  );

  return (
    <div className='relative'>
      <div
        onClick={() => setDropdownIsOpened((prev) => !prev)}
        ref={accountIconElementRef}
        className={guestAccountIconClasses}
      >
        <div
          ref={spineElementRef}
          className='h-[1.05rem]  w-[0.234rem]  translate-y-[-0.03rem]
                   rounded-[0.06rem]  bg-white 
                   group-hover:transition-colors  md:h-[1.1rem]
                   md:w-[0.2447rem]  dark:bg-black  dark:group-hover:bg-white'
        ></div>
      </div>
      <div ref={dropdownRef} className={dropdownClasses}>
        <EmailForm
          label='Enter your library'
          caption='We’ll email you the&nbsp;link to&nbsp;access your&nbsp;library'
          inputId='login-email'
          inputName='email'
          inputClasses='border-[#CFCFCF]  dark:border-gray-dark-lighter2  
                        focus:border-[#000000]  dark:focus:border-[#FFFFFF]'
          buttonClasses='border-[#CFCFCF]  dark:border-gray-dark-lighter2'
          buttonInputFocusedClasses='!border-[#000000]  dark:!border-[#FFFFFF]'
          buttonInputFilledClasses='bg-black  dark:bg-white'
          buttonInputEmptyClasses='bg-[#CFCFCF]  dark:bg-gray-dark-lighter2'
          changeArrowColorInDarkMode
        />
      </div>
    </div>
  );
}

export default GuestAccountIconDefault;
