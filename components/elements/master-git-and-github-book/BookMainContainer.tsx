import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface BookMainContainerProps {
  className?: string;
  children?: ReactNode;
}

const BookMainContainer = forwardRef<HTMLDivElement, BookMainContainerProps>(
  function BookMainContainer(
    { className, children }: BookMainContainerProps,
    ref,
  ): ReactElement {
    const classes = classNames(
      `px-[8.4vw]  pb-40  pt-20  max-md:px-[4.2vw]  max-md:pb-24  max-md:pt-14
       h-2md:pt-9  h-2md:pb-16`,
      className,
    );

    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  },
);

export default BookMainContainer;
