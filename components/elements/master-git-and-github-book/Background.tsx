import { useActiveBackground } from '@/context/background-master-git-and-github-book/Context';
import { useTheme } from '@/context/theme/Context';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import { Theme } from '@/types/theme';
import { darkThemeIsSelected } from '@/utils/check-selected-theme';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ReactElement, useRef } from 'react';

function Background(): ReactElement {
  const { activeBackground } = useActiveBackground();
  const backgroundElementRef = useRef<HTMLDivElement | null>(null);
  const { selectedTheme } = useTheme();

  useGSAP(
    () => {
      const theme = darkThemeIsSelected(selectedTheme)
        ? Theme.DARK
        : Theme.LIGHT;

      switch (activeBackground) {
        case ActiveBackground.DEFAULT:
          gsap.to(backgroundElementRef.current, {
            duration: 0.15,
            backgroundColor: theme === Theme.LIGHT ? '#fff' : '#00040A',
            backgroundImage: 'none',
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
          });
          break;
        case ActiveBackground.PART1:
          gsap.to(backgroundElementRef.current, {
            duration: 0.15,
            backgroundColor: '#FF5013',
            backgroundImage:
              theme === Theme.LIGHT
                ? 'url("/images/git-and-github-book-part-1-bg-pattern-light.jpg")'
                : 'url("/images/git-and-github-book-part-1-bg-pattern-dark.jpg")',
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
          });
          break;
        case ActiveBackground.PART2:
          gsap.to(backgroundElementRef.current, {
            duration: 0.15,
            backgroundColor: '#271AD3',
            backgroundImage:
              theme === Theme.LIGHT
                ? 'url("/images/git-and-github-book-part-2-bg-pattern-light.jpg")'
                : 'url("/images/git-and-github-book-part-2-bg-pattern-dark.jpg")',
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
          });
          break;
      }
    },
    { dependencies: [activeBackground, selectedTheme] },
  );

  const backgroundClasses = classNames(
    `fixed  [z-index:-1]  bg-center  bg-repeat-y  h-screen  w-screen
     bg-[length:1000px_auto]  max-lg:bg-[length:100vw_auto]
     `,
    {
      'bg-white  dark:bg-black': activeBackground === ActiveBackground.DEFAULT,
      'bg-git-part-1-light  dark:bg-git-part-1-dark  bg-git-orange':
        activeBackground === ActiveBackground.PART1,
      'bg-git-part-2-light  dark:bg-git-part-2-dark':
        activeBackground === ActiveBackground.PART2,
    },
  );

  return <div ref={backgroundElementRef} className={backgroundClasses}></div>;
}

export default Background;
