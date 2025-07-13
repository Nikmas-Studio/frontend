import { processChildren } from '@/utils/insert-non-breaking-spaces';
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

  const processedChildren = processChildren(children);

  return (
    <h4 ref={ref} className={classes}>
      {processedChildren}
    </h4>
  );
});

export default H4;
