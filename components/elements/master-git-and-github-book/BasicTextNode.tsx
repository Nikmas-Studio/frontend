import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
}

const BasicTextNode = forwardRef<HTMLParagraphElement, TextNodeProps>(
  function BasicTextNode(
    { className, children }: TextNodeProps,
    ref,
  ): ReactElement {
    const classes = classNames(
      'text-git-black  dark:text-git-white',
      className,
    );

    return (
      <p ref={ref} className={classes}>
        {children}
      </p>
    );
  },
);

export default BasicTextNode;
