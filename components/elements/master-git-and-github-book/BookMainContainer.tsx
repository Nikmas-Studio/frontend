import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface BookMainContainerProps {
  className?: string;
  children?: ReactNode;
}

function BookMainContainer({
  className,
  children,
}: BookMainContainerProps): ReactElement {
  const classes = classNames(
    'px-[8.4vw]  pb-40  pt-20  max-md:px-[4.2vw]  max-md:pb-24  max-md:pt-14',
    className,
  );

  return <div className={classes}>{children}</div>;
}

export default BookMainContainer;
