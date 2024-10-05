import { useAciveBackground } from '@/context/background-git-and-github-book/Context';
import { ActiveBackground } from '@/types/git-and-github-book/active-background';
import classNames from 'classnames';
import { ReactElement } from 'react';

function Background(): ReactElement {
  const { activeBackground } = useAciveBackground();

  const backgroundClasses = classNames(
    `fixed  inset-0  [z-index:-1]
    bg-white  dark:bg-black`,
    {
      'bg-git-part-1': activeBackground === ActiveBackground.PART1,
      'bg-git-part-2': activeBackground === ActiveBackground.PART2,
    },
  );

  return <div className={backgroundClasses}></div>;
}

export default Background;
