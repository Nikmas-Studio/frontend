import BasicTextNode from '@/components/elements/book-master-english-with-sherlock-holmes/BasicTextNode';
import { libreBaskerville } from '@/fonts';
import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';
import classNames from 'classnames';
import { Dispatch, ReactElement, SetStateAction } from 'react';

interface BookNavigatorStoryProps {
  title: Story;
  selectedStory: Story;
  setSelectedStory: Dispatch<SetStateAction<Story>>;
  className?: string;
}

function BookNavigatorStory({
  selectedStory,
  setSelectedStory,
  title,
  className,
}: BookNavigatorStoryProps): ReactElement {
  const classes = classNames(
    'text-lg  px-8  py-1  last:mb-7  cursor-pointer',
    libreBaskerville.className,
    className,
    {
      'bg-[#FFEAC5]': selectedStory === title,
    },
  );

  return (
    <li onClick={() => setSelectedStory(title)} className={classes}>
      <BasicTextNode>{title}</BasicTextNode>
    </li>
  );
}

export default BookNavigatorStory;
