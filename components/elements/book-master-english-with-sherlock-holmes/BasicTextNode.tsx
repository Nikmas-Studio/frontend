import { processChildren } from '@/utils/insert-non-breaking-spaces';
import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const BasicTextNode = forwardRef<HTMLParagraphElement, TextNodeProps>(
  function BasicTextNode(
    { className, children, onClick, onMouseEnter, onMouseLeave }: TextNodeProps,
    ref,
  ): ReactElement {
    const classes = classNames('text-black  dark:text-smooth-white', className);

    const processedChildren = processChildren(children);

    return (
      <p
        ref={ref}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classes}
      >
        {processedChildren}
      </p>
    );
  },
);

export default BasicTextNode;
