import { libreBaskerville } from '@/fonts';
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
    `text-5xl  font-bold  max-lg:text-4xl  max-sm:text-3xl  leading-tight
     text-git-black  dark:text-git-white`,
    libreBaskerville.className,
    className,
  );

  return (
    <h2 ref={ref} className={classes}>
      {children}
    </h2>
  );
});

export default H2;
