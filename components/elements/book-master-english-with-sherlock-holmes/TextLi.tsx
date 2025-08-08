import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';
import TextNode from './TextNode';

interface TextListItemProps {
  className?: string;
  children?: ReactNode;
  pureWhite?: boolean;
}

function TextLi({
  className,
  children,
  pureWhite = false,
}: TextListItemProps): ReactElement {
  const classes = classNames(className);

  return (
    <li className={classes}>
      <TextNode pureWhite={pureWhite} noIndent>
        {children}
      </TextNode>
    </li>
  );
}

export default TextLi;
