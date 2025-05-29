import { merriweather } from '@/fonts';
import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';
import BasicTextNode from './BasicTextNode';
import { CONNECTING_WORDS } from '@/constants/connecting-words';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
  noIndent?: boolean;
}

function wrapTextWithNbsp(text: string): string {
  return text.replace(
    new RegExp(`\\b(${CONNECTING_WORDS.join('|')}) `, 'gi'),
    (_, word) => `${word}\u00A0`,
  );
}

function processChildren(children: ReactNode): ReactNode {
  if (typeof children === 'string') {
    return wrapTextWithNbsp(children);
  }

  if (Array.isArray(children)) {
    return children.map((child, i) => processChildren(child));
  }

  if (
    typeof children === 'object' &&
    children !== null &&
    'type' in children &&
    'props' in children
  ) {
    return {
      ...children,
      props: {
        ...children.props,
        children: processChildren(children.props.children),
      },
    };
  }

  return children;
}

const TextNode = forwardRef<HTMLParagraphElement, TextNodeProps>(
  function TextNode(
    { className, noIndent, children }: TextNodeProps,
    ref,
  ): ReactElement {
    const classes = classNames(
      `lining-nums  text-lg  [-webkit-font-smoothing:subpixel-antialiased]`,
      { 'indent-7': !noIndent },
      merriweather.className,
      className,
    );
    
    const processedChildren = processChildren(children);

    return (
      <BasicTextNode ref={ref} className={classes}>
        {processedChildren}
      </BasicTextNode>
    );
  },
);

export default TextNode;
