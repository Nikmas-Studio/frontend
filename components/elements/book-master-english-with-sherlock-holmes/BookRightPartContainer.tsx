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
  const classes = classNames(
    'pl-[4.2vw]  w-1/2  max-2md:w-full  max-2md:pl-0',
    className,
  );

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
});

export default BookRightPartContainer;
