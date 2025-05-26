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
      'text-smooth-black  dark:text-smooth-white',
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
