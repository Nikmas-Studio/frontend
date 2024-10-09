import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
}

function BasicTextNode({ className, children }: TextNodeProps): ReactElement {
  const classes = classNames('text-git-black  dark:text-git-white', className);

  return <p className={classes}>{children}</p>;
}

export default BasicTextNode;
