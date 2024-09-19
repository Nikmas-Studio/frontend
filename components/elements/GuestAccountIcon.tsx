import classNames from 'classnames';
import { ReactElement } from 'react';

interface GuestAccountIconProps {
  className?: string;
}

function GuestAccountIcon({ className }: GuestAccountIconProps): ReactElement {
  const guestAccountIconClasses = classNames(
    `  w-[1.9rem]  h-[1.9rem]  md:w-[2.1rem]  md:h-[2.1rem]  bg-black  rounded-full  flex  items-center  
    justify-center  hover:cursor-pointer  hover:bg-[#281AD2]  transition-colors`,
    className,
  );

  return (
    <div className={guestAccountIconClasses}>
      <div className='h-[1.1rem]  w-[0.234em]  translate-y-[-0.03rem]  rounded-[0.05rem]  bg-white'></div>
    </div>
  );
}

export default GuestAccountIcon;
