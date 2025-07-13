import { merriweather } from '@/fonts';
import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';
import BasicTextNode from './BasicTextNode';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

const TextNode = forwardRef<HTMLParagraphElement, TextNodeProps>(
  function TextNode(
    { className, children, id }: TextNodeProps,
    ref,
  ): ReactElement {
    const classes = classNames(
      `lining-nums  text-lg  mb-5  [-webkit-font-smoothing:subpixel-antialiased]`,
      merriweather.className,
      className,
    );

    return (
      <BasicTextNode id={id} ref={ref} className={classes}>
        {children}
      </BasicTextNode>
    );
  },
);

export default TextNode;
