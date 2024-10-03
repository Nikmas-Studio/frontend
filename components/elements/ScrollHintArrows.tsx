import classNames from 'classnames';
import { ReactElement } from 'react';

interface ScrollHintProps {
  wrapperClassName?: string;
  arrowClassName?: string;
}

function ScrollHintArrows({
  wrapperClassName,
  arrowClassName,
}: ScrollHintProps): ReactElement {
  const arrowClasses = classNames(
    `m-[-10px]  mx-auto  block  size-[20px]  animate-[scroll-hint-arrows_2s_infinite]  
     border-b-2  border-r-2  border-solid  [transform:rotate(45deg)]`,
    arrowClassName,
  );

  const secondArrowClasses = classNames(
    arrowClasses,
    '[animation-delay:-0.2s]',
  );
  const thirdArrowClasses = classNames(arrowClasses, '[animation-delay:-0.4s]');

  return (
    <div className={wrapperClassName}>
      <span className={arrowClasses}></span>
      <span className={secondArrowClasses}></span>
      <span className={thirdArrowClasses}></span>
    </div>
  );
}

export default ScrollHintArrows;
