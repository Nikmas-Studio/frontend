import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface BookRightPartContainerProps {
  children?: ReactNode;
  className?: string;
}

function BookRightPartContainer({
  className,
  children,
}: BookRightPartContainerProps): ReactElement {
  const classes = classNames('pl-[4.2vw]', className);

  return <div className={classes}>{children}</div>;
}

export default BookRightPartContainer;
