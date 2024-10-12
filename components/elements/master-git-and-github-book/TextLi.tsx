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
    `[-webkit-font-smoothing:subpixel-antialiased]
    relative pl-4
    before:content-['']  before:absolute  before:left-0  before:size-[0.38rem]
    before:rounded-full  before:bg-git-black  before:dark:bg-git-white
    before:translate-y-[0.65rem]
    `,

    className,
  );

  return (
    <li ref={ref} className={classes}>
      <TextNode className='!mb-3'>{children}</TextNode>
    </li>
  );
});

export default TextLi;
