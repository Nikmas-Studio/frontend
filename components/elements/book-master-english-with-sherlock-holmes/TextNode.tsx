import { merriweather } from '@/fonts';
import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';
import BasicTextNode from './BasicTextNode';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
  noIndent?: boolean;
  pureWhite?: boolean;
}

const TextNode = forwardRef<HTMLParagraphElement, TextNodeProps>(
  function TextNode(
    { className, noIndent, children, pureWhite = false }: TextNodeProps,
    ref,
  ): ReactElement {
    const classes = classNames(
      `lining-nums  text-lg  [-webkit-font-smoothing:subpixel-antialiased]`,
      { 'indent-7': !noIndent },
      merriweather.className,
      className,
    );

    return (
      <BasicTextNode pureWhite={pureWhite} ref={ref} className={classes}>
        {children}
      </BasicTextNode>
    );
  },
);

export default TextNode;
