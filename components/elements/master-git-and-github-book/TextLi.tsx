import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';
import TextNode from './TextNode';

interface TextListItemProps {
  className?: string;
  children?: ReactNode;
}

const TextLi = forwardRef<HTMLLIElement, TextListItemProps>(function TextLi(
  { className, children }: TextListItemProps,
  ref,
): ReactElement {
  const classes = classNames(
    '[-webkit-font-smoothing:subpixel-antialiased]',
    className,
  );

  return (
    <li ref={ref} className={classes}>
      <TextNode className='!mb-3'>{children}</TextNode>
    </li>
  );
});

export default TextLi;
