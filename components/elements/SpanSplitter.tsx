import { ReactElement } from 'react';

interface SpanSplitterProps {
  text: string;
  classNameForSpan?: string;
}

function SpanSplitter({
  text,
  classNameForSpan,
}: SpanSplitterProps): ReactElement {
  return (
    <>
      {text.split('').map((char, index) => (
        <span key={index} className={classNameForSpan}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
}

export default SpanSplitter;
