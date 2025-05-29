import BasicTextNode from '@/components/elements/book-master-english-with-sherlock-holmes/BasicTextNode';
import { libreBaskerville } from '@/fonts';
import classNames from 'classnames';
import { ReactElement } from 'react';

interface BookNavigatorStoryProps {
  title: string;
}

function BookNavigatorStory({ title }: BookNavigatorStoryProps): ReactElement {
  const classes = classNames('text-lg', libreBaskerville.className);

  return (
    <li>
      <BasicTextNode className={classes}>{title}</BasicTextNode>
    </li>
  );
}

export default BookNavigatorStory;
