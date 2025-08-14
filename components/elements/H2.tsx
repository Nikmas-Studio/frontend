import { processChildren } from '@/utils/insert-non-breaking-spaces';
import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface H2Props {
  className?: string;
  children?: ReactNode;
  id?: string;
}

const H2 = forwardRef<HTMLHeadingElement, H2Props>(function H2(
  { className, children, id }: H2Props,
  ref,
): ReactElement {
  const classes = classNames(
    `text-[2.1rem]  font-bold  leading-tight
     text-black  dark:text-white`,

    className,
  );

  const processedChildren = processChildren(children);

  return (
    <h2 id={id} ref={ref} className={classes}>
      {processedChildren}
    </h2>
  );
});

export default H2;
