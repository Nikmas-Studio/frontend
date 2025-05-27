import classNames from 'classnames';
import { ReactElement, useRef } from 'react';

function Background(): ReactElement {
  const backgroundElementRef = useRef<HTMLDivElement | null>(null);

  const backgroundClasses = classNames(
    `fixed  [z-index:-1]  inset-0  bg-center  bg-repeat-y  h-screen  w-screen
     bg-[length:1000px_auto]  max-lg:bg-[length:100vw_auto]
     bg-gray-light  dark:bg-gray-dark`,
  );

  return <div ref={backgroundElementRef} className={backgroundClasses}></div>;
}

export default Background;
