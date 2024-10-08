import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface BookLeftPartContainerProps {
  children?: ReactNode;
  className?: string;
}

function BookLeftPartContainer({
  className,
  children,
}: BookLeftPartContainerProps): ReactElement {
  const classes = classNames('pr-[4.2vw]', className);

  return <div className={classes}>{children}</div>;
}

export default BookLeftPartContainer;
