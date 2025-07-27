import { merriweather } from '@/fonts';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface TextListProps {
  className?: string;
  children?: ReactNode;
}

function TextOl({ className, children }: TextListProps): ReactElement {
  const classes = classNames(
    `list-decimal  lining-nums  text-lg  pl-14  [-webkit-font-smoothing:subpixel-antialiased]
     marker:font-inherit  marker:text-inherit  marker:text-black  dark:marker:text-white`,
    merriweather.className,
    className,
  );

  return <ol className={classes}>{children}</ol>;
}

export default TextOl;
