import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const BasicTextNode = forwardRef<HTMLParagraphElement, TextNodeProps>(
  function BasicTextNode(
    { className, children, onClick }: TextNodeProps,
    ref,
  ): ReactElement {
    const classes = classNames('text-black  dark:text-smooth-white', className);

    return (
      <p ref={ref} onClick={onClick} className={classes}>
        {children}
      </p>
    );
  },
);

export default BasicTextNode;
