import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';
import TextNode from './TextNode';

interface TextListItemProps {
  className?: string;
  children?: ReactNode;
}

function TextLi({ className, children }: TextListItemProps): ReactElement {
  const classes = classNames(className);

  return (
    <li className={classes}>
      <TextNode noIndent>{children}</TextNode>
    </li>
  );
}

export default TextLi;
