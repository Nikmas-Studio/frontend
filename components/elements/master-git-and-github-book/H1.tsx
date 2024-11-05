import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface H1Props {
  className?: string;
  children?: ReactNode;
}

const H1 = forwardRef<HTMLHeadingElement, H1Props>(function H1(
  { className, children }: H1Props,
  ref,
): ReactElement {
  const classes = classNames(
    `text-7xl  font-bold  text-white  max-lg:text-6xl  
                     max-sm:text-4xl  dark:text-git-black`,
    className,
  );

  return (
    <h1 ref={ref} className={classes}>
      {children}
    </h1>
  );
});

export default H1;
