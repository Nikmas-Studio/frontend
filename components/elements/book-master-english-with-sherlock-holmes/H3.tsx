import { libreBaskerville } from '@/fonts';
import { processChildren } from '@/utils/insert-non-breaking-spaces';
import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface H3Props {
  className?: string;
  children?: ReactNode;
}

const H3 = forwardRef<HTMLHeadingElement, H3Props>(function H2(
  { className, children }: H3Props,
  ref,
): ReactElement {
  const classes = classNames(
    `text-6xl  font-bold  max-lg:text-5xl  max-sm:text-4xl  !leading-snug
     text-black  dark:text-smooth-white`,
    libreBaskerville.className,
    className,
  );

  const processedChildren = processChildren(children);

  return (
    <h3 ref={ref} className={classes}>
      {processedChildren}
    </h3>
  );
});

export default H3;
