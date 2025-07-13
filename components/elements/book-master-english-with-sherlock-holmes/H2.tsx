import { libreBaskerville } from '@/fonts';
import { processChildren } from '@/utils/insert-non-breaking-spaces';
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
    `text-[4.1rem]  font-bold  max-lg:text-[3.4rem]  max-sm:text-[2.6rem]  !leading-snug
     text-black  dark:text-smooth-white`,
    libreBaskerville.className,
    className,
  );

  const processedChildren = processChildren(children);

  return (
    <h2 ref={ref} className={classes}>
      {processedChildren}
    </h2>
  );
});

export default H2;
