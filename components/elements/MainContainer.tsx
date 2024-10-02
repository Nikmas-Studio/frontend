import classnames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
  className?: string;
}

const MainContainer = forwardRef<HTMLDivElement, MainContainerProps>(
  function MainContainer(
    { children, className }: MainContainerProps,
    ref,
  ): ReactElement {
    const mainContainerClasses = classnames(
      'mx-auto  max-w-7xl  px-4  sm:px-9  lg:px-14  xl:px-9',
      className,
    );

    return (
      <div ref={ref} className={mainContainerClasses}>
        {children}
      </div>
    );
  },
);

export default MainContainer;
