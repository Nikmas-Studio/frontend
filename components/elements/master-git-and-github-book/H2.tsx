import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface H2Props {
  className?: string;
  children: ReactNode;
}

function H2({ className, children }: H2Props): ReactElement {
  const classes = classNames(
    `text-5xl  font-bold  max-lg:text-4xl  max-sm:text-3xl  leading-tight
     text-git-black  dark:text-git-white  [font-family:var(--font-gilroy)]`,

    className,
  );

  return <h2 className={classes}>{children}</h2>;
}

export default H2;
