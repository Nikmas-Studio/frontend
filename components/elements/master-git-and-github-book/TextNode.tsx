import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';
import BasicTextNode from './BasicTextNode';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
}

function TextNode({ className, children }: TextNodeProps): ReactElement {
  const classes = classNames('text-xl', className);

  return <BasicTextNode className={classes}>{children}</BasicTextNode>;
}

export default TextNode;
