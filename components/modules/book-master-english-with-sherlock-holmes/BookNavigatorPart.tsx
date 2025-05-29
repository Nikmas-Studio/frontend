import BasicTextNode from '@/components/elements/book-master-english-with-sherlock-holmes/BasicTextNode';
import { libreBaskerville } from '@/fonts';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface BookNavigatorPartProps {
  title: string;
  children: ReactNode;
}

function BookNavigatorPart({
  title,
  children,
}: BookNavigatorPartProps): ReactElement {
  const classes = classNames('text-lg', libreBaskerville.className);

  return (
    <li>
      <BasicTextNode className={classes}>{title}</BasicTextNode>
      <ul>{children}</ul>
    </li>
  );
}

export default BookNavigatorPart;
