import BasicTextNode from '@/components/elements/book-master-english-with-sherlock-holmes/BasicTextNode';
import { libreBaskerville } from '@/fonts';
import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';
import { storyToTitleId } from '@/utils/book-master-english-with-sherlock-holmes/story-to-title-id';
import classNames from 'classnames';
import { ReactElement } from 'react';

interface BookNavigatorStoryProps {
  title: Story;
  selectedStory: Story;
  udpateSelectedStory: (newStory: Story) => void;
  demo?: boolean;
  className?: string;
}

function BookNavigatorStory({
  selectedStory,
  udpateSelectedStory: setSelectedStory,
  title,
  className,
  demo = false,
}: BookNavigatorStoryProps): ReactElement {
  const classes = classNames(
    'text-lg  px-8  py-1  last:mb-7  cursor-pointer  max-1.5lg:px-[4.2vw]',
    libreBaskerville.className,
    className,
    {
      'bg-[#FFEAC5]  dark:bg-[#0E2640]': selectedStory === title,
      'pointer-events-none': demo,
    },
  );

  return (
    <li
      id={storyToTitleId(title)}
      onClick={() => setSelectedStory(title)}
      className={classes}
    >
      <BasicTextNode
        className={classNames({
          '!text-gray-400  dark:!text-gray-500': demo,
        })}
      >
        {title}
      </BasicTextNode>
    </li>
  );
}

export default BookNavigatorStory;
