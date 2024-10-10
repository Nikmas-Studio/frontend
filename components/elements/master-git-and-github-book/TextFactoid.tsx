import classNames from 'classnames';
import { forwardRef, ReactElement } from 'react';
import TextNode from './TextNode';

interface TextFactoidProps {
  className?: string;
  children?: string;
}

const TextFactoid = forwardRef<HTMLParagraphElement, TextFactoidProps>(
  function TextFactoid(
    { className, children }: TextFactoidProps,
    ref,
  ): ReactElement {
    const classes = classNames('text-sm', className);

    return (
      <TextNode ref={ref} className={classes}>
        {children}
      </TextNode>
    );
  },
);

export default TextFactoid;
