import classNames from 'classnames';
import { ReactElement } from 'react';
import SpanSplitter from './SpanSplitter';

interface IntroDescrLineProps {
  text: string;
  dataElement: string;
  isAnimated?: boolean;
}

function IntroDescrLine({
  text,
  dataElement,
  isAnimated: animated = false,
}: IntroDescrLineProps): ReactElement {
  const animatedClasses = `before:pointer-events-none  before:absolute  
                           before:inset-0  before:z-10  overflow-hidden
                           before:shadow-[inset_0_0_5px_rgba(255,255,255,1)]
                           dark:before:shadow-[inset_0_0_5px_rgba(0,0,0,1)]
                           before:content-['']  `;

  const wrapperClasses = classNames('relative  inline-block  align-top', {
    [animatedClasses]: animated,
  });

  return (
    <span className={wrapperClasses}>
      <span data-element={dataElement} className='inline-block  align-top'>
        <SpanSplitter
          text={text}
          classNameForSpan='inline-block  align-top  invisible'
        />
      </span>
      {animated && (
        <span
          data-element={dataElement}
          className='absolute  bottom-auto  left-0  right-auto  top-0  hidden  align-top'
        >
          <SpanSplitter
            text={text}
            classNameForSpan='inline-block  align-top  will-change-transform'
          />
        </span>
      )}
    </span>
  );
}

export default IntroDescrLine;
