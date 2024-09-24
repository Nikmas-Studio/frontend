import classNames from 'classnames';
import { forwardRef, ReactElement } from 'react';

interface LogoProps {
  className?: string;
}

const Logo = forwardRef<HTMLParagraphElement, LogoProps>(function Logo({
  className,
}: LogoProps, ref): ReactElement {
  const logoClasses = classNames(
    'font-bold  text-[1.7rem]  md:text-[2rem]  cursor-default  select-none  dark:text-white',
    className,
  );

  return (
    <p ref={ref} className={logoClasses}>
      Nikmas Studio
    </p>
  );
});

export default Logo;
