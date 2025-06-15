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
  const classes = classNames(
    'pr-[4.2vw]  w-1/2  max-2md:w-full  max-2md:pr-0',
    className,
  );

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
});

export default BookLeftPartContainer;
