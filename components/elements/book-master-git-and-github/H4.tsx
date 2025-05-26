import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface H3Props {
  className?: string;
  children?: ReactNode;
}

const H4 = forwardRef<HTMLHeadingElement, H3Props>(function H3(
  { className, children }: H3Props,
  ref,
): ReactElement {
  const classes = classNames(
    `text-2xl  font-semibold  max-lg:text-[1.375rem]  leading-tight
     text-git-black  dark:text-git-white  mb-4`,
    className,
  );

  return (
    <h4 ref={ref} className={classes}>
      {children}
    </h4>
  );
});

export default H4;
