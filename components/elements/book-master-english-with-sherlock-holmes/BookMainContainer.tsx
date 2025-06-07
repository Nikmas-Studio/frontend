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
      `px-[8.4vw]  pb-28  pt-[5.5rem]  max-md:px-[4.2vw]  max-md:pt-[4.5rem]  max-md:pb-[5.5rem]`,
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
