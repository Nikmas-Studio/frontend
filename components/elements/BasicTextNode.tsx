import { processChildren } from '@/utils/insert-non-breaking-spaces';
import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

const BasicTextNode = forwardRef<HTMLParagraphElement, TextNodeProps>(
  function BasicTextNode(
    { className, children, id }: TextNodeProps,
    ref,
  ): ReactElement {
    const classes = classNames('text-black  dark:text-white', className);

    const processedChildren = processChildren(children);

    return (
      <p id={id} ref={ref} className={classes}>
        {processedChildren}
      </p>
    );
  },
);

export default BasicTextNode;
