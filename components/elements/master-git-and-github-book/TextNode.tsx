import { merriweather } from '@/fonts';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';
import BasicTextNode from './BasicTextNode';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
}

function TextNode({ className, children }: TextNodeProps): ReactElement {
  const classes = classNames(
    `text-lg  mb-5  [-webkit-font-smoothing:subpixel-antialiased]`,
    merriweather.className,
    className,
  );

  return <BasicTextNode className={classes}>{children}</BasicTextNode>;
}

export default TextNode;
