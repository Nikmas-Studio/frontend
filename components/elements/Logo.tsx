import classNames from 'classnames';

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  const logoClasses = classNames(
    'font-bold  text-[2rem]  cursor-default  select-none',
    className,
  );

  return <p className={logoClasses}>Nikmas Studio</p>;
}

export default Logo;
