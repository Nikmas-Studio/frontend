import useOutsideClick from '@/hooks/use-outside-click';
import { Theme } from '@/types/theme';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useEffect, useRef, useState } from 'react';
import ThemeToggleDropdownItem from './ThemeToggleDropdownItem';

import { useBookSectionState } from '@/context/book-section/Context';
import { useTheme, useThemeDispatch } from '@/context/theme/Context';
import gearIconBlack from '@/public/images/gear-icon-black.png';
import moonIconBlack from '@/public/images/moon-icon-black.png';
import moonIconWhite from '@/public/images/moon-icon-white.png';
import sunIconBlack from '@/public/images/sun-icon-black.png';
import sunIconWhite from '@/public/images/sun-icon-white.png';
import getSystemTheme from '@/utils/getSystemTheme';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className }: ThemeToggleProps): ReactElement {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const { selectedTheme } = useTheme();
  const { setSelectedTheme } = useThemeDispatch();
  const { bookSectionInViewport } = useBookSectionState();
  const previousTheme = useRef(selectedTheme);

  const lightModeBlackToggleIconRef = useRef<HTMLImageElement | null>(null);
  const lightModeWhiteToggleIconRef = useRef<HTMLImageElement | null>(null);
  const darkModeBlackToggleIconRef = useRef<HTMLImageElement | null>(null);
  const darkModeWhiteToggleIconRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    const themeChanged = previousTheme.current !== selectedTheme;

    gsap.to(lightModeBlackToggleIconRef.current, {
      opacity: showLightModeBlackToggleIcon() ? 1 : 0,
      pointerEvents: showLightModeBlackToggleIcon() ? 'auto' : 'none',
      zIndex: showLightModeBlackToggleIcon() ? 50 : 'auto',
      duration: themeChanged ? 0 : 0.3,
      ease: 'linear',
    });
    gsap.to(lightModeWhiteToggleIconRef.current, {
      opacity: showLightModeWhiteToggleIcon() ? 1 : 0,
      pointerEvents: showLightModeWhiteToggleIcon() ? 'auto' : 'none',
      zIndex: showLightModeWhiteToggleIcon() ? 50 : 'auto',
      duration: themeChanged ? 0 : 0.3,
      ease: 'linear',
    });

    gsap.to(darkModeBlackToggleIconRef.current, {
      opacity: showDarkModeBlackToggleIcon() ? 1 : 0,
      pointerEvents: showDarkModeBlackToggleIcon() ? 'auto' : 'none',
      zIndex: showDarkModeBlackToggleIcon() ? 50 : 'auto',
      duration: themeChanged ? 0 : 0.3,
      ease: 'linear',
    });
    gsap.to(darkModeWhiteToggleIconRef.current, {
      opacity: showDarkModeWhiteToggleIcon() ? 1 : 0,
      pointerEvents: showDarkModeWhiteToggleIcon() ? 'auto' : 'none',
      zIndex: showDarkModeWhiteToggleIcon() ? 50 : 'auto',
      duration: themeChanged ? 0 : 0.3,
      ease: 'linear',
    });

    previousTheme.current = selectedTheme;
  }, [bookSectionInViewport, selectedTheme]);

  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [selectedTheme]);

  function handleThemeChange(newTheme: Theme): void {
    if (newTheme === Theme.System) {
      localStorage.removeItem('theme');
      setSystemTheme(getSystemTheme);
    } else {
      localStorage.setItem('theme', newTheme);
    }

    setSelectedTheme(newTheme);
    setDropdownIsOpened(false);
  }

  const dropdownElementRef = useRef<HTMLUListElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  useOutsideClick([toggleButtonRef, dropdownElementRef], () => {
    setDropdownIsOpened(false);
  });

  const dropdownClasses = classNames(
    'absolute  right-0  top-10  flex  flex-col  rounded-lg  bg-white  pb-9  pt-7  shadow-[0px_10px_30px_rgba(0,0,0,0.03)]  transition-all',
    {
      'opacity-0  pointer-events-none': !dropdownIsOpened,
      'opacity-100  pointer-events-auto': dropdownIsOpened,
    },
  );

  function showLightModeBlackToggleIcon(): boolean {
    const res =
      (selectedTheme === Theme.Light ||
        (selectedTheme === Theme.System && systemTheme === Theme.Light)) &&
      !bookSectionInViewport;

    return res;
  }

  const lightModeBlackToggleIconClasses = classNames(
    `absolute  size-6  translate-y-[-0.5px]  select-none  md:size-[1.7rem]  top-0  hover:rotate-45  transition-transform`,
    {
      'opacity-0  pointer-events-none': !showLightModeBlackToggleIcon(),
      'opacity-100  pointer-events-auto z-50': showLightModeBlackToggleIcon(),
    },
  );

  function showLightModeWhiteToggleIcon(): boolean {
    const res =
      (selectedTheme === Theme.Light ||
        (selectedTheme === Theme.System && systemTheme === Theme.Light)) &&
      bookSectionInViewport;

    return res;
  }

  const lightModeWhiteToggleIconClasses = classNames(
    `absolute  size-6  translate-y-[-0.5px]  select-none md:size-[1.7rem]  top-0  hover:rotate-45  transition-transform`,
    {
      'opacity-0  pointer-events-none': !showLightModeWhiteToggleIcon(),
      'opacity-100  pointer-events-auto z-50': showLightModeWhiteToggleIcon(),
    },
  );

  function showDarkModeBlackToggleIcon(): boolean {
    const res =
      (selectedTheme === Theme.Dark ||
        (selectedTheme === Theme.System && systemTheme === Theme.Dark)) &&
      !bookSectionInViewport;

    return res;
  }

  const darkModeBlackToggleIconClasses = classNames(
    `absolute  size-[1.3rem]  translate-x-[0.1rem]  translate-y-[0.12rem]
   select-none  md:size-[1.45rem]  top-0  hover:-rotate-90  transition-transform`,
    {
      'opacity-0  pointer-events-none': !showDarkModeBlackToggleIcon(),
      'opacity-100  pointer-events-auto  z-50': showDarkModeBlackToggleIcon(),
    },
  );

  function showDarkModeWhiteToggleIcon(): boolean {
    const res =
      (selectedTheme === Theme.Dark ||
        (selectedTheme === Theme.System && systemTheme === Theme.Dark)) &&
      bookSectionInViewport;

    return res;
  }

  const darkModeWhiteToggleIconClasses = classNames(
    `absolute  size-[1.3rem]  translate-x-[0.1rem]  translate-y-[0.12rem]
   select-none  md:size-[1.45rem]  top-0  hover:-rotate-90  transition-transform`,
    {
      'opacity-0  pointer-events-none': !showDarkModeWhiteToggleIcon(),
      'opacity-100  pointer-events-auto  z-50': showDarkModeWhiteToggleIcon(),
    },
  );

  const themeToggleWrapperClasses = classNames(
    'relative  flex  flex-col  justify-center',
    className,
  );

  return (
    <div className={themeToggleWrapperClasses}>
      <button
        ref={toggleButtonRef}
        className='relative  size-6  md:size-[1.7rem]'
        onClick={() => setDropdownIsOpened((prev) => !prev)}
      >
        <Image
          ref={lightModeBlackToggleIconRef}
          src={sunIconBlack}
          width={27}
          height={27}
          alt='Sun icon'
          className={lightModeBlackToggleIconClasses}
        />
        <Image
          ref={lightModeWhiteToggleIconRef}
          src={sunIconWhite}
          width={27}
          height={27}
          alt='Sun icon'
          className={lightModeWhiteToggleIconClasses}
        />
        <Image
          ref={darkModeBlackToggleIconRef}
          src={moonIconBlack}
          width={27}
          height={27}
          alt='Moon icon'
          className={darkModeBlackToggleIconClasses}
        />
        <Image
          ref={darkModeWhiteToggleIconRef}
          src={moonIconWhite}
          width={27}
          height={27}
          alt='Moon icon'
          className={darkModeWhiteToggleIconClasses}
        />
      </button>
      <ul ref={dropdownElementRef} className={dropdownClasses}>
        <ThemeToggleDropdownItem
          className='gap-[0.7rem]'
          itemTheme={Theme.Light}
          selectedTheme={selectedTheme}
          onClick={() => handleThemeChange(Theme.Light)}
        >
          <Image
            src={sunIconBlack}
            width={27}
            height={27}
            alt='Sun icon'
            className='size-6  translate-y-[-0.031rem]  md:size-[1.7rem]'
          />
          <p className='select-none'>Light</p>
        </ThemeToggleDropdownItem>
        <ThemeToggleDropdownItem
          className='gap-[0.95rem]'
          itemTheme={Theme.Dark}
          selectedTheme={selectedTheme}
          onClick={() => handleThemeChange(Theme.Dark)}
        >
          <Image
            src={moonIconBlack}
            width={27}
            height={27}
            alt='Moon icon'
            className='size-[1.3rem]  translate-x-[0.15rem]  translate-y-[-0.031rem]  md:size-[1.45rem]'
          />
          <p className='select-none'>Dark</p>
        </ThemeToggleDropdownItem>
        <ThemeToggleDropdownItem
          className='gap-[0.95rem]'
          itemTheme={Theme.System}
          selectedTheme={selectedTheme}
          onClick={() => handleThemeChange(Theme.System)}
        >
          <Image
            src={gearIconBlack}
            width={27}
            height={27}
            alt='Gear icon'
            className='size-[1.3rem]  translate-x-[0.13rem]  translate-y-[-0.031rem]  md:size-6'
          />
          <p className='select-none'>System</p>
        </ThemeToggleDropdownItem>
      </ul>
    </div>
  );
}

export default ThemeToggle;
