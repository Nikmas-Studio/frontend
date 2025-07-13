import { libreBaskerville } from '@/fonts';
import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface H1Props {
  className?: string;
  children?: ReactNode;
}

const H1 = forwardRef<HTMLHeadingElement, H1Props>(function H2(
  { className, children }: H1Props,
  ref,
): ReactElement {
  const classes = classNames(
    `text-[4.8rem]  font-bold  max-lg:text-[4rem]  max-sm:text-5xl  !leading-snug
     text-git-black  dark:text-git-white  max-2sm:text-[11vw]`,
    libreBaskerville.className,
    className,
  );

  return (
    <h1 ref={ref} className={classes}>
      {children}
    </h1>
  );
});

export default H1;
