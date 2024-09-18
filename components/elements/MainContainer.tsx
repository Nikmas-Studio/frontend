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
      'mx-auto  max-w-7xl  px-4  md:px-8',
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
