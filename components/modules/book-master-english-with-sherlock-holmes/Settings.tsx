import useOutsideClick from '@/hooks/use-outside-click';
import { Theme } from '@/types/theme';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { forwardRef, ReactElement, useEffect, useRef, useState } from 'react';

import ThemeToggleDropdownItem from '@/components/elements/book-master-english-with-sherlock-holmes/ThemeToggleDropdownItem';
import TranslationLanguageSelectDropdownItem from '@/components/elements/book-master-english-with-sherlock-holmes/TranslationLanguageSelectDropdownItem';
import {
  useTranslationLanguage,
  useTranslationLanguageDispatch,
} from '@/context/book-master-english-with-sherlock-holmes/translation-language/Context';
import { useTheme, useThemeDispatch } from '@/context/theme/Context';
import { useTouchDevice } from '@/context/touch-device/Context';
import { libreBaskerville, merriweather } from '@/fonts';
import gearIconBlack from '@/public/images/gear-icon-git-black.png';
import gearIconWhite from '@/public/images/gear-icon-git-white.png';
import moonIconBlack from '@/public/images/moon-icon-git-black.png';
import moonIconWhite from '@/public/images/moon-icon-git-white.png';
import sunIconBlack from '@/public/images/sun-icon-git-black.png';
import sunIconWhite from '@/public/images/sun-icon-git-white.png';
import { TranslationLanguage } from '@/types/master-english-with-sherlock-holmes/translation-laguage';

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

    const { selectedLanguage } = useTranslationLanguage();
    const { setSelectedTranslationLanguage } = useTranslationLanguageDispatch();

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
     pb-10  pt-7  
     `,
      bgClass,
      {
        'opacity-0  pointer-events-none': !dropdownIsOpened,
        'opacity-100  pointer-events-auto': dropdownIsOpened,
      },
    );

    const settingsWrapperClasses = classNames(
      'relative  flex  flex-col  justify-center  transition-opacity',
      className,
    );

    const textClasses = classNames(
      'select-none  text-lg',
      textClass,
      merriweather.className,
    );

    const modeTitleClasses = classNames(
      `pl-6  text-[1.1875rem]  font-bold  text-black  dark:text-smooth-white  
      mb-2  select-none`,
      libreBaskerville.className,
    );

    const translateToTitleClasses = classNames(
      `pl-6  text-[1.1875rem]  font-bold  text-black  dark:text-smooth-white  
      mb-[1.15rem]  select-none`,
      libreBaskerville.className,
    );

    return (
      <div ref={ref} className={settingsWrapperClasses}>
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
          <div className='border-b  border-gray-light  pb-7  dark:border-gray-dark'>
            <p className={modeTitleClasses}>Mode</p>
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
                       select-none  dark:hidden'
                quality={100}
              />
              <Image
                src={iconsSources.lightModeWhiteIcon}
                width={27}
                height={27}
                alt='Sun icon'
                className='hidden  size-6  translate-y-[-0.031rem]
                       select-none  dark:inline-block'
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
                       translate-y-[-0.031rem]  select-none
                       dark:hidden'
                quality={100}
              />
              <Image
                src={iconsSources.darkModeWhiteIcon}
                width={27}
                height={27}
                alt='Moon icon'
                className='hidden  size-[1.3rem]  translate-x-[0.15rem]
                       translate-y-[-0.031rem]  select-none
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
                className='size-[1.3rem]  translate-x-[0.13rem]  translate-y-[-0.031rem]
                       select-none  dark:hidden'
                quality={100}
              />
              <Image
                src={iconsSources.systemModeWhiteIcon}
                width={27}
                height={27}
                alt='Gear icon'
                className='hidden  size-[1.3rem]  translate-x-[0.13rem]  translate-y-[-0.031rem]
                       select-none  dark:inline-block'
                quality={100}
              />
              <p className={textClasses}>System</p>
            </ThemeToggleDropdownItem>
          </div>
          <div className='pt-7'>
            <p className={translateToTitleClasses}>Translate to</p>
            <div
              className='mx-6  rounded-[8px]  border  
                         border-black  px-[0.85rem]  pb-[0.4rem]  pt-1  dark:border-smooth-white'
            >
              <p className={textClasses}>{selectedLanguage}</p>
            </div>
            <ul
              className='mx-6  mt-[0.35rem]  h-[11.5rem]  overflow-y-scroll  rounded-[8px]  border 
                         border-gray-light    pb-[0.4rem]  pt-1  dark:border-gray-dark'
            >
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.FRENCH}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.FRENCH)
                }
              >
                <p className={textClasses}>{TranslationLanguage.FRENCH}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.SPANISH}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.SPANISH)
                }
              >
                <p className={textClasses}>{TranslationLanguage.SPANISH}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.PORTUGUESE}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.PORTUGUESE)
                }
              >
                <p className={textClasses}>{TranslationLanguage.PORTUGUESE}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.ITALIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.ITALIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.ITALIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.GERMAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.GERMAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.GERMAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.DUTCH}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.DUTCH)
                }
              >
                <p className={textClasses}>{TranslationLanguage.DUTCH}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.CATALAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.CATALAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.CATALAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.NORWEGIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.NORWEGIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.NORWEGIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.SWEDISH}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.SWEDISH)
                }
              >
                <p className={textClasses}>{TranslationLanguage.SWEDISH}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.FINNISH}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.FINNISH)
                }
              >
                <p className={textClasses}>{TranslationLanguage.FINNISH}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.UKRAINIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.UKRAINIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.UKRAINIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.RUSSIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.RUSSIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.RUSSIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.SERBIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.SERBIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.SERBIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.CROATIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.CROATIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.CROATIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.BELARUSIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.BELARUSIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.BELARUSIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.POLISH}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.POLISH)
                }
              >
                <p className={textClasses}>{TranslationLanguage.POLISH}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.CZECH}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.CZECH)
                }
              >
                <p className={textClasses}>{TranslationLanguage.CZECH}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.SLOVAK}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.SLOVAK)
                }
              >
                <p className={textClasses}>{TranslationLanguage.SLOVAK}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.SLOVAK}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.SLOVAK)
                }
              >
                <p className={textClasses}>{TranslationLanguage.SLOVAK}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.HUNGARIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.HUNGARIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.HUNGARIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.ROMANIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.ROMANIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.ROMANIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.BULGARIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.BULGARIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.BULGARIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.GREEK}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.GREEK)
                }
              >
                <p className={textClasses}>{TranslationLanguage.GREEK}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.TURKISH}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.TURKISH)
                }
              >
                <p className={textClasses}>{TranslationLanguage.TURKISH}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.ARABIC}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.ARABIC)
                }
              >
                <p className={textClasses}>{TranslationLanguage.ARABIC}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.PERSIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.PERSIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.PERSIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.HEBREW}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.HEBREW)
                }
              >
                <p className={textClasses}>{TranslationLanguage.HEBREW}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.JAPANESE}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.JAPANESE)
                }
              >
                <p className={textClasses}>{TranslationLanguage.JAPANESE}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.KOREAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.KOREAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.KOREAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.CHINESE}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.CHINESE)
                }
              >
                <p className={textClasses}>{TranslationLanguage.CHINESE}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.HINDI}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.HINDI)
                }
              >
                <p className={textClasses}>{TranslationLanguage.HINDI}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.THAI}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.THAI)
                }
              >
                <p className={textClasses}>{TranslationLanguage.THAI}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.INDONESIAN}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.INDONESIAN)
                }
              >
                <p className={textClasses}>{TranslationLanguage.INDONESIAN}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.MALAY}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.MALAY)
                }
              >
                <p className={textClasses}>{TranslationLanguage.MALAY}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.VIETNAMESE}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.VIETNAMESE)
                }
              >
                <p className={textClasses}>{TranslationLanguage.VIETNAMESE}</p>
              </TranslationLanguageSelectDropdownItem>
              <TranslationLanguageSelectDropdownItem
                itemLanguage={TranslationLanguage.SWAHILI}
                selectedLanguage={selectedLanguage}
                activeItemDotClass={activeItemDotClass}
                onClick={() =>
                  setSelectedTranslationLanguage(TranslationLanguage.SWAHILI)
                }
              >
                <p className={textClasses}>{TranslationLanguage.SWAHILI}</p>
              </TranslationLanguageSelectDropdownItem>
            </ul>
          </div>
        </ul>
      </div>
    );
  },
);

export default ThemeToggleDefault;
