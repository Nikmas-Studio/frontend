import { processChildren } from '@/utils/insert-non-breaking-spaces';
import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  pureWhite?: boolean;
}

const BasicTextNode = forwardRef<HTMLParagraphElement, TextNodeProps>(
  function BasicTextNode(
    {
      className,
      children,
      onClick,
      onMouseEnter,
      onMouseLeave,
      pureWhite = false,
    }: TextNodeProps,
    ref,
  ): ReactElement {
    const classes = classNames('text-black', className, {
      'dark:text-white': pureWhite,
      'dark:text-smooth-white': !pureWhite,
    });

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
