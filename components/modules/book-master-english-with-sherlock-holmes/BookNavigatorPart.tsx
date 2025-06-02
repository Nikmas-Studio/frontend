import BasicTextNode from '@/components/elements/book-master-english-with-sherlock-holmes/BasicTextNode';
import { libreBaskerville } from '@/fonts';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface BookNavigatorPartProps {
  title: string;
  onClick?: () => void;
  children: ReactNode;
}

function BookNavigatorPart({
  title,
  onClick,
  children,
}: BookNavigatorPartProps): ReactElement {
  const classes = classNames('text-lg  px-8  py-1', libreBaskerville.className);

  return (
    <li className='cursor-pointer'>
      <BasicTextNode onClick={onClick} className={classes}>
        {title}
      </BasicTextNode>
      <ul>{children}</ul>
    </li>
  );
}

export default BookNavigatorPart;
