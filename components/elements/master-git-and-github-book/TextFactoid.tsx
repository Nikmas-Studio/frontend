import classNames from 'classnames';
import { ReactElement } from 'react';
import TextNode from './TextNode';

interface TextFactoidProps {
  className?: string;
  children?: string;
}

function TextFactoid({ className, children }: TextFactoidProps): ReactElement {
  const classes = classNames('text-sm', className);

  return <TextNode className={classes}>{children}</TextNode>;
}

export default TextFactoid;
