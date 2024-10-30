import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface H2Props {
  className?: string;
  children?: ReactNode;
}

const H2 = forwardRef<HTMLHeadingElement, H2Props>(function H2(
  { className, children }: H2Props,
  ref,
): ReactElement {
  const classes = classNames(
    `text-[2rem]  font-bold  leading-tight
     text-black  dark:text-white`,

    className,
  );

  return (
    <h2 ref={ref} className={classes}>
      {children}
    </h2>
  );
});

export default H2;
