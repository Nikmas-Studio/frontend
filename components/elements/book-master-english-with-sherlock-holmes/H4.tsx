import { libreBaskerville } from '@/fonts';
import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface H4Props {
  className?: string;
  children?: ReactNode;
}

const H4 = forwardRef<HTMLHeadingElement, H4Props>(function H2(
  { className, children }: H4Props,
  ref,
): ReactElement {
  const classes = classNames(
    `text-5xl  font-bold  max-lg:text-4xl  max-sm:text-3xl  !leading-snug
     text-git-black  dark:text-git-white`,
    libreBaskerville.className,
    className,
  );

  return (
    <h4 ref={ref} className={classes}>
      {children}
    </h4>
  );
});

export default H4;
