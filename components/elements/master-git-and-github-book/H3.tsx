import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface H3Props {
  className?: string;
  children: ReactNode;
}

function H3({ className, children }: H3Props): ReactElement {
  const classes = classNames(
    `text-3xl  font-semibold  max-lg:text-2xl  leading-tight
     text-git-black  dark:text-git-white`,
    className,
  );

  return <h2 className={classes}>{children}</h2>;
}

export default H3;
