import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface H3Props {
  className?: string;
  children: ReactNode;
}

const H3 = forwardRef<HTMLHeadingElement, H3Props>(function H3(
  { className, children }: H3Props,
  ref,
): ReactElement {
  const classes = classNames(
    `text-3xl  font-semibold  max-lg:text-2xl  leading-tight
     text-git-black  dark:text-git-white  mb-5`,
    className,
  );

  return (
    <h2 ref={ref} className={classes}>
      {children}
    </h2>
  );
});

export default H3;
