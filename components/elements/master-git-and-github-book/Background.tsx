import { useAciveBackground } from '@/context/background-master-git-and-github-book/Context';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import classNames from 'classnames';
import { ReactElement } from 'react';

function Background(): ReactElement {
  const { activeBackground } = useAciveBackground();

  const backgroundClasses = classNames(
    `fixed  [z-index:-1]  bg-center  bg-repeat-y  h-screen  w-screen
     bg-[length:1000px_auto]  max-lg:bg-[length:100vw_auto]`,
    {
      'bg-white  dark:bg-black': activeBackground === ActiveBackground.DEFAULT,
      'bg-git-part-1-light  dark:bg-git-part-1-dark  bg-git-orange':
        activeBackground === ActiveBackground.PART1,
      'bg-git-part-2-light  dark:bg-git-part-2-dark':
        activeBackground === ActiveBackground.PART2,
    },
  );

  return <div className={backgroundClasses}></div>;
}

export default Background;
