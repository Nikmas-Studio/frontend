import { libreBaskerville } from '@/fonts';
import { processChildren } from '@/utils/insert-non-breaking-spaces';
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
     text-black  dark:text-smooth-white  mb-10`,
    libreBaskerville.className,
    className,
  );

  const processedChildren = processChildren(children);

  return (
    <h4 ref={ref} className={classes}>
      {processedChildren}
    </h4>
  );
});

export default H4;
