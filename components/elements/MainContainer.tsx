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
      'mx-5  sm:mx-9  lg:mx-14  xl:mx-[6%]  2xl:mx-auto  max-w-[1320px]',
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
