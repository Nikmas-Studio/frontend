import classNames from 'classnames';
import { ReactElement } from 'react';

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps): ReactElement {
  const logoClasses = classNames(
    'font-bold  text-[2rem]  cursor-default  select-none',
    className,
  );

  return <p className={logoClasses}>Nikmas Studio</p>;
}

export default Logo;
