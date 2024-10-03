import classNames from 'classnames';
import { ReactElement } from 'react';

interface ScrollHintMouseProps {
  wrapperClassName?: string;
  wheelClassName?: string;
}

function ScrollHintMouse({
  wrapperClassName,
  wheelClassName,
}: ScrollHintMouseProps): ReactElement {
  const wrapperClasses = classNames(
    `mx-auto  h-[50px]  w-[30px]  rounded-full  border-2`,
    wrapperClassName,
  );

  const wheelClasses =
    classNames(`mx-auto  my-[6px]  block  h-[8px]  w-[4px]  rounded-full  
                   animate-[scroll-hint-mouse_1.5s_infinite_both]
                   [animation-fill-mode:both]`, wheelClassName);

  return (
    <div className={wrapperClasses}>
      <span className={wheelClasses}></span>
    </div>
  );
}

export default ScrollHintMouse;
