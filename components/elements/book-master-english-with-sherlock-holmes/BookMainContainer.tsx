import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface BookMainContainerProps {
  className?: string;
  children?: ReactNode;
  biggerTopPadding?: boolean;
  biggestTopPadding?: boolean;
}

const BookMainContainer = forwardRef<HTMLDivElement, BookMainContainerProps>(
  function BookMainContainer(
    {
      className,
      children,
      biggerTopPadding = false,
      biggestTopPadding = false,
    }: BookMainContainerProps,
    ref,
  ): ReactElement {
    const classes = classNames(
      `px-[8.4vw]  pb-28  pt-[5.5rem]  max-md:px-[4.2vw]  max-md:pt-[4.5rem]  max-md:pb-[5.5rem]`,
      {
        'max-sm:pt-[6rem]': biggerTopPadding,
        'max-sm:pt-[7.5rem]': biggestTopPadding,
      },
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
