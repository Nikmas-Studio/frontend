import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface H2Props {
  className?: string;
  children?: ReactNode;
}

const H4 = forwardRef<HTMLHeadingElement, H2Props>(function H2(
  { className, children }: H2Props,
  ref,
): ReactElement {
  const classes = classNames(
    `text-[1.4375rem]  font-medium  text-black
     dark:text-white  leading-tight`,
    className,
  );

  return (
    <h3 ref={ref} className={classes}>
      {children}
    </h3>
  );
});

export default H4;
