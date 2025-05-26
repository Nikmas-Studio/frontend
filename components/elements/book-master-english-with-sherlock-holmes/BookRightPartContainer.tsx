import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface BookRightPartContainerProps {
  children?: ReactNode;
  className?: string;
}

const BookRightPartContainer = forwardRef<
  HTMLDivElement,
  BookRightPartContainerProps
>(function BookRightPartContainer(
  { className, children }: BookRightPartContainerProps,
  ref,
): ReactElement {
  const classes = classNames('pl-[4.2vw]', className);

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
});

export default BookRightPartContainer;
