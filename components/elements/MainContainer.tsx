import classnames from 'classnames';
import { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
  className?: string;
}

function MainContainer({ children, className }: MainContainerProps) {
  const mainContainerClasses = classnames(
    'max-w-7xl  mx-auto  px-4  md:px-8',
    className,
  );

  return <div className={mainContainerClasses}>{children}</div>;
}

export default MainContainer;
