import BasicTextNode from '@/components/elements/book-master-english-with-sherlock-holmes/BasicTextNode';
import { libreBaskerville } from '@/fonts';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface BookNavigatorPartProps {
  title: string;
  onClick?: () => void;
  children: ReactNode;
  demo?: boolean;
}

function BookNavigatorPart({
  title,
  onClick,
  children,
  demo = false,
}: BookNavigatorPartProps): ReactElement {
  const classes = classNames(
    'text-lg  px-8  py-1  max-1.5lg:px-[4.2vw]',
    libreBaskerville.className,
    {
      '!text-gray-400  dark:!text-gray-500': demo,
    },
  );

  return (
    <li
      className={classNames('cursor-pointer', {
        'pointer-events-none': demo,
      })}
    >
      <BasicTextNode onClick={onClick} className={classes}>
        {title}
      </BasicTextNode>
      <ul>{children}</ul>
    </li>
  );
}

export default BookNavigatorPart;
