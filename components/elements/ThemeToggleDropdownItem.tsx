import { Theme } from '@/types/theme';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface ThemeToggleDropdownItemProps {
  itemTheme: Theme;
  selectedTheme: Theme;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

function ThemeToggleDropdownItem({
  itemTheme,
  selectedTheme,
  className,
  children,
  onClick,
}: ThemeToggleDropdownItemProps): ReactElement {
  const classes = classNames(
    `flex  cursor-pointer  items-center  py-2  pl-6  pr-[3.2rem]  text-lg  transition-all  hover:bg-gray-100
     relative after:content-[""]  after:absolute  after:w-[0.45rem]  after:h-[0.45rem]  after:bg-black
     after:right-[1.6rem]  after:top-1/2  after:translate-y-[-60%]  after:rounded-full`,
    className,
    {
      'after:opacity-100': itemTheme === selectedTheme,
      'after:opacity-0': itemTheme !== selectedTheme,
    },
  );

  return (
    <li key={itemTheme} className={classes} onClick={onClick}>
      {children}
    </li>
  );
}

export default ThemeToggleDropdownItem;
