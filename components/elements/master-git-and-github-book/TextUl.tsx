import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface TextListProps {
  className?: string;
  children?: ReactNode;
}

function TextUl({ className, children }: TextListProps): ReactElement {
  const classes = classNames('-mt-5  mb-2  list-disc  pl-7', className);

  return <ul className={classes}>{children}</ul>;
}

export default TextUl;
