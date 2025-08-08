import { merriweather } from '@/fonts';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface TextListProps {
  className?: string;
  children?: ReactNode;
  pureWhite?: boolean;
}

function TextOl({
  className,
  children,
  pureWhite = false,
}: TextListProps): ReactElement {
  const classes = classNames(
    `list-decimal  lining-nums  text-lg  pl-14  [-webkit-font-smoothing:subpixel-antialiased]
     marker:font-inherit  marker:text-inherit  marker:text-black`,
    merriweather.className,
    className,
    {
      'dark:marker:text-smooth-white': !pureWhite,
      'dark:marker:text-white': pureWhite,
    },
  );

  return <ol className={classes}>{children}</ol>;
}

export default TextOl;
