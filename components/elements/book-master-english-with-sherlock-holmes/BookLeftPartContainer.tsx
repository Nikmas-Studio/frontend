import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface BookLeftPartContainerProps {
  children?: ReactNode;
  className?: string;
}

const BookLeftPartContainer = forwardRef<
  HTMLDivElement,
  BookLeftPartContainerProps
>(function BookLeftPartContainer(
  { className, children }: BookLeftPartContainerProps,
  ref,
): ReactElement {
  const classes = classNames('pr-[4.2vw]', className);

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
});

export default BookLeftPartContainer;
