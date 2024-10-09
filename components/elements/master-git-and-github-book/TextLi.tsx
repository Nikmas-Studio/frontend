import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';
import TextNode from './TextNode';

interface TextListItemProps {
  className?: string;
  children?: ReactNode;
}

function TextLi({ className, children }: TextListItemProps): ReactElement {
  const classes = classNames(
    '[-webkit-font-smoothing:subpixel-antialiased]',
    className,
  );

  return (
    <li className={classes}>
      <TextNode className='!mb-3'>{children}</TextNode>
    </li>
  );
}

export default TextLi;
