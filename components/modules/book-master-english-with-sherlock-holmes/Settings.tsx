import useOutsideClick from '@/hooks/use-outside-click';
import { Theme } from '@/types/theme';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { forwardRef, ReactElement, useEffect, useRef, useState } from 'react';

import ThemeToggleDropdownItem from '@/components/elements/book-master-english-with-sherlock-holmes/ThemeToggleDropdownItem';
import { useTheme, useThemeDispatch } from '@/context/theme/Context';
import { useTouchDevice } from '@/context/touch-device/Context';
import { libreBaskerville } from '@/fonts';
import gearIconBlack from '@/public/images/gear-icon-git-black.png';
import gearIconWhite from '@/public/images/gear-icon-git-white.png';
import moonIconBlack from '@/public/images/moon-icon-git-black.png';
import moonIconWhite from '@/public/images/moon-icon-git-white.png';
import sunIconBlack from '@/public/images/sun-icon-git-black.png';
import sunIconWhite from '@/public/images/sun-icon-git-white.png';

interface ThemeToggleProps {
  className?: string;
  reversedColors?: boolean;
  textClass?: string;
  bgClass?: string;
  activeItemDotClass?: string;
  iconsSources?: {
    lightModeBlackIcon: StaticImageData;
    lightModeWhiteIcon: StaticImageData;
    darkModeWhiteIcon: StaticImageData;
    darkModeBlackIcon: StaticImageData;
    systemModeBlackIcon: StaticImageData;
    systemModeWhiteIcon: StaticImageData;
  };
}

const ThemeToggleDefault = forwardRef<HTMLDivElement, ThemeToggleProps>(
  function ThemeToggleDefault(
    { className }: ThemeToggleProps,
    ref,
  ): ReactElement {
    const bgClass = 'bg-white  dark:bg-black';
    const activeItemDotClass = 'after:bg-black  after:dark:bg-smooth-white';
    const textClass = 'text-black  dark:text-smooth-white';

    const iconsSources = {
      lightModeBlackIcon: sunIconBlack,
      lightModeWhiteIcon: sunIconWhite,
      darkModeWhiteIcon: moonIconWhite,
      darkModeBlackIcon: moonIconBlack,
      systemModeBlackIcon: gearIconBlack,
      systemModeWhiteIcon: gearIconWhite,
    };

    const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
    const { selectedTheme } = useTheme();
    const { setSelectedTheme } = useThemeDispatch();

    const dropdownElementRef = useRef<HTMLUListElement | null>(null);
    const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

    const { isTouchDevice } = useTouchDevice();
    const isTouchDeviceRef = useRef(isTouchDevice);

    useEffect(() => {
      isTouchDeviceRef.current = isTouchDevice;
    }, [isTouchDevice]);

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
      setSelectedTheme(newTheme);
      // setDropdownIsOpened(false);
    }

    useOutsideClick([toggleButtonRef, dropdownElementRef], () => {
      setDropdownIsOpened(false);
    });

    const dropdownClasses = classNames(
      `absolute  right-0  top-[34px]  flex  flex-col  rounded-[14px]
     border  border-gray-light  dark:border-gray-dark
     pb-9  pt-7  
     `,
      bgClass,
      {
        'opacity-0  pointer-events-none': !dropdownIsOpened,
        'opacity-100  pointer-events-auto': dropdownIsOpened,
      },
    );

    const themeToggleWrapperClasses = classNames(
      'relative  flex  flex-col  justify-center  transition-opacity',
      className,
    );

    const textClasses = classNames(`select-none`, textClass);

    const titleClasses = classNames(
      'pl-6  text-lg  font-bold  text-black  dark:text-smooth-white  mb-2',
      libreBaskerville.className,
    );

    return (
      <div ref={ref} className={themeToggleWrapperClasses}>
        <button
          ref={toggleButtonRef}
          className='group  relative  size-[35px]  translate-x-[7px]  cursor-pointer'
          onClick={() => setDropdownIsOpened((prev) => !prev)}
        >
          <svg
            width={35}
            height={35}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g data-name='Layer 2' id='Layer_2'>
              <g id='Workspace'>
                <rect className='fill-none' height='24' width='24' />
                <line
                  className='fill-none  stroke-black  [stroke-linecap:round]  [stroke-linejoin:round]  group-hover:stroke-orange  dark:stroke-smooth-white'
                  x1='7'
                  x2='7'
                  y1='6'
                  y2='13'
                />
                <circle
                  className='fill-none  stroke-black  [stroke-linecap:round]  [stroke-linejoin:round]  group-hover:stroke-orange  dark:stroke-smooth-white'
                  cx='7'
                  cy='14.5'
                  r='1.5'
                />
                <line
                  className='fill-none  stroke-black  [stroke-linecap:round]  [stroke-linejoin:round]  group-hover:stroke-orange  dark:stroke-smooth-white'
                  x1='7'
                  x2='7'
                  y1='16'
                  y2='18'
                />
                <line
                  className='fill-none  stroke-black  [stroke-linecap:round]  [stroke-linejoin:round]  group-hover:stroke-orange  dark:stroke-smooth-white'
                  x1='12'
                  x2='12'
                  y1='6'
                  y2='8'
                />
                <circle
                  className='fill-none  stroke-black  [stroke-linecap:round]  [stroke-linejoin:round]  group-hover:stroke-orange  dark:stroke-smooth-white'
                  cx='12'
                  cy='9.5'
                  r='1.5'
                />
                <line
                  className='fill-none  stroke-black  [stroke-linecap:round]  [stroke-linejoin:round]  group-hover:stroke-orange  dark:stroke-smooth-white'
                  x1='12'
                  x2='12'
                  y1='11'
                  y2='18'
                />
                <line
                  className='fill-none  stroke-black  [stroke-linecap:round]  [stroke-linejoin:round]  group-hover:stroke-orange  dark:stroke-smooth-white'
                  x1='17'
                  x2='17'
                  y1='6'
                  y2='11'
                />
                <circle
                  className='fill-none  stroke-black  [stroke-linecap:round]  [stroke-linejoin:round]  group-hover:stroke-orange  dark:stroke-smooth-white'
                  cx='17'
                  cy='12.5'
                  r='1.5'
                />
                <line
                  className='fill-none  stroke-black  [stroke-linecap:round]  [stroke-linejoin:round]  group-hover:stroke-orange  dark:stroke-smooth-white'
                  x1='17'
                  x2='17'
                  y1='14'
                  y2='18'
                />
              </g>
            </g>
          </svg>
        </button>
        <ul ref={dropdownElementRef} className={dropdownClasses}>
          <div className='border-b  border-gray-light  pb-8  dark:border-gray-dark'>
            <p className={titleClasses}>Mode</p>
            <ThemeToggleDropdownItem
              className='gap-[0.7rem]'
              itemTheme={Theme.LIGHT}
              selectedTheme={selectedTheme}
              activeItemDotClass={activeItemDotClass}
              onClick={() => handleThemeChange(Theme.LIGHT)}
            >
              <Image
                src={iconsSources.lightModeBlackIcon}
                width={27}
                height={27}
                alt='Sun icon'
                className='size-6  translate-y-[-0.031rem]
                       dark:hidden'
                quality={100}
              />
              <Image
                src={iconsSources.lightModeWhiteIcon}
                width={27}
                height={27}
                alt='Sun icon'
                className='hidden  size-6  translate-y-[-0.031rem]
                       dark:inline-block'
                quality={100}
              />
              <p className={textClasses}>Light</p>
            </ThemeToggleDropdownItem>
            <ThemeToggleDropdownItem
              className='gap-[0.95rem]'
              itemTheme={Theme.DARK}
              selectedTheme={selectedTheme}
              activeItemDotClass={activeItemDotClass}
              onClick={() => handleThemeChange(Theme.DARK)}
            >
              <Image
                src={iconsSources.darkModeBlackIcon}
                width={27}
                height={27}
                alt='Moon icon'
                className='size-[1.3rem]  translate-x-[0.15rem]
                       translate-y-[-0.031rem]
                       dark:hidden'
                quality={100}
              />
              <Image
                src={iconsSources.darkModeWhiteIcon}
                width={27}
                height={27}
                alt='Moon icon'
                className='hidden  size-[1.3rem]  translate-x-[0.15rem]
                       translate-y-[-0.031rem]
                       dark:inline-block'
                quality={100}
              />
              <p className={textClasses}>Dark</p>
            </ThemeToggleDropdownItem>
            <ThemeToggleDropdownItem
              className='gap-[0.95rem]'
              itemTheme={Theme.SYSTEM}
              selectedTheme={selectedTheme}
              activeItemDotClass={activeItemDotClass}
              onClick={() => handleThemeChange(Theme.SYSTEM)}
            >
              <Image
                src={iconsSources.systemModeBlackIcon}
                width={27}
                height={27}
                alt='Gear icon'
                className='size-[1.3rem]  translate-x-[0.13rem]
                       translate-y-[-0.031rem]  dark:hidden'
                quality={100}
              />
              <Image
                src={iconsSources.systemModeWhiteIcon}
                width={27}
                height={27}
                alt='Gear icon'
                className='hidden  size-[1.3rem]  translate-x-[0.13rem]
                       translate-y-[-0.031rem]  dark:inline-block'
                quality={100}
              />
              <p className={textClasses}>System</p>
            </ThemeToggleDropdownItem>
          </div>
          <div className='pt-7'>
            <p className={titleClasses}>Translate to</p>
          </div>
        </ul>
      </div>
    );
  },
);

export default ThemeToggleDefault;
