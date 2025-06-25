'use client';

import ThemeToggleDropdownItem from '@/components/elements/book-master-english-with-sherlock-holmes/ThemeToggleDropdownItem';
import TranslationLanguageSelectDropdownItem from '@/components/elements/book-master-english-with-sherlock-holmes/TranslationLanguageSelectDropdownItem';
import {
  useSettings,
  useSettingsDispatch,
} from '@/context/book-master-english-with-sherlock-holmes/settings/Context';
import { useTheme, useThemeDispatch } from '@/context/theme/Context';
import { Theme } from '@/types/theme';
import { TranslationLanguage } from '@/types/translation-laguage';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement } from 'react';

import {
  useTranslationLanguage,
  useTranslationLanguageDispatch,
} from '@/context/book-master-english-with-sherlock-holmes/translation-language/Context';
import { libreBaskerville, merriweather } from '@/fonts';
import useOutsideClick from '@/hooks/use-outside-click';
import gearIconBlack from '@/public/images/gear-icon-git-black.png';
import gearIconWhite from '@/public/images/gear-icon-git-white.png';
import moonIconBlack from '@/public/images/moon-icon-git-black.png';
import moonIconWhite from '@/public/images/moon-icon-git-white.png';
import sunIconBlack from '@/public/images/sun-icon-git-black.png';
import sunIconWhite from '@/public/images/sun-icon-git-white.png';

function SettingsDropdown(): ReactElement {
  const {
    settingsDropdownIsOpened,
    settingsDropdownPosition,
    dropdownElementRef,
    outsideClickIsActive,
  } = useSettings();

  const { setSettingsDropdownIsOpened } = useSettingsDispatch();

  const { selectedTheme } = useTheme();
  const { setSelectedTheme } = useThemeDispatch();

  function handleThemeChange(newTheme: Theme): void {
    setSelectedTheme(newTheme);
  }

  const { selectedLanguage } = useTranslationLanguage();
  const { setSelectedTranslationLanguage } = useTranslationLanguageDispatch();

  const dropdownClasses = classNames(
    `fixed  z-[9999]  flex  flex-col  rounded-[14px]
     border  border-gray-light  dark:border-gray-dark
     pb-10  pt-7  bg-white  dark:bg-black
     `,
    {
      'hidden  pointer-events-none': !settingsDropdownIsOpened,
      'block  pointer-events-auto': settingsDropdownIsOpened,
    },
  );

  const modeTitleClasses = classNames(
    `pl-6  text-[1.1875rem]  font-bold  text-black  dark:text-smooth-white  
      mb-2  select-none`,
    libreBaskerville.className,
  );

  const activeItemDotClass = 'after:bg-black  after:dark:bg-smooth-white';
  const textClass = 'text-black  dark:text-smooth-white';

  const textClasses = classNames(
    'select-none  text-lg',
    textClass,
    merriweather.className,
  );

  const translateToTitleClasses = classNames(
    `pl-6  text-[1.1875rem]  font-bold  text-black  dark:text-smooth-white  
      mb-[1.15rem]  select-none`,
    libreBaskerville.className,
  );

  const iconsSources = {
    lightModeBlackIcon: sunIconBlack,
    lightModeWhiteIcon: sunIconWhite,
    darkModeWhiteIcon: moonIconWhite,
    darkModeBlackIcon: moonIconBlack,
    systemModeBlackIcon: gearIconBlack,
    systemModeWhiteIcon: gearIconWhite,
  };

  useOutsideClick([dropdownElementRef], () => {
    if (settingsDropdownIsOpened) {
      outsideClickIsActive.current = true;

      setSettingsDropdownIsOpened(false);

      requestAnimationFrame(() => {
        outsideClickIsActive.current = false;
      });
    }
  });

  return (
    <div
      ref={dropdownElementRef}
      style={{
        top: settingsDropdownPosition?.top,
        left: settingsDropdownPosition?.left,
        width: '204px',
      }}
      className={dropdownClasses}
    >
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
            priority
          />
          <Image
            src={iconsSources.lightModeWhiteIcon}
            width={27}
            height={27}
            alt='Sun icon'
            className='hidden  size-6  translate-y-[-0.031rem]
                       select-none  dark:inline-block'
            quality={100}
            priority
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
            priority
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
            priority
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
            priority
          />
          <Image
            src={iconsSources.systemModeWhiteIcon}
            width={27}
            height={27}
            alt='Gear icon'
            className='hidden  size-[1.3rem]  translate-x-[0.13rem]  translate-y-[-0.031rem]
                       select-none  dark:inline-block'
            quality={100}
            priority
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
          className='mx-6  mt-[0.35rem]  max-h-[12.6rem]  overflow-y-scroll  rounded-[8px]  border 
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
            itemLanguage={TranslationLanguage.PORTUGUESE_BRAZILIAN}
            selectedLanguage={selectedLanguage}
            activeItemDotClass={activeItemDotClass}
            onClick={() =>
              setSelectedTranslationLanguage(
                TranslationLanguage.PORTUGUESE_BRAZILIAN,
              )
            }
          >
            <p className={textClasses}>
              {TranslationLanguage.PORTUGUESE_BRAZILIAN}
            </p>
          </TranslationLanguageSelectDropdownItem>
          <TranslationLanguageSelectDropdownItem
            itemLanguage={TranslationLanguage.PORTUGUESE_EUROPEAN}
            selectedLanguage={selectedLanguage}
            activeItemDotClass={activeItemDotClass}
            onClick={() =>
              setSelectedTranslationLanguage(
                TranslationLanguage.PORTUGUESE_EUROPEAN,
              )
            }
          >
            <p className={textClasses}>
              {TranslationLanguage.PORTUGUESE_EUROPEAN}
            </p>
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
            itemLanguage={TranslationLanguage.DANISH}
            selectedLanguage={selectedLanguage}
            activeItemDotClass={activeItemDotClass}
            onClick={() =>
              setSelectedTranslationLanguage(TranslationLanguage.DANISH)
            }
          >
            <p className={textClasses}>{TranslationLanguage.DANISH}</p>
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
            itemLanguage={TranslationLanguage.ESTOIAN}
            selectedLanguage={selectedLanguage}
            activeItemDotClass={activeItemDotClass}
            onClick={() =>
              setSelectedTranslationLanguage(TranslationLanguage.ESTOIAN)
            }
          >
            <p className={textClasses}>{TranslationLanguage.ESTOIAN}</p>
          </TranslationLanguageSelectDropdownItem>
          <TranslationLanguageSelectDropdownItem
            itemLanguage={TranslationLanguage.LATVIAN}
            selectedLanguage={selectedLanguage}
            activeItemDotClass={activeItemDotClass}
            onClick={() =>
              setSelectedTranslationLanguage(TranslationLanguage.LATVIAN)
            }
          >
            <p className={textClasses}>{TranslationLanguage.LATVIAN}</p>
          </TranslationLanguageSelectDropdownItem>
          <TranslationLanguageSelectDropdownItem
            itemLanguage={TranslationLanguage.LITHUANIAN}
            selectedLanguage={selectedLanguage}
            activeItemDotClass={activeItemDotClass}
            onClick={() =>
              setSelectedTranslationLanguage(TranslationLanguage.LITHUANIAN)
            }
          >
            <p className={textClasses}>{TranslationLanguage.LITHUANIAN}</p>
          </TranslationLanguageSelectDropdownItem>
          <TranslationLanguageSelectDropdownItem
            itemLanguage={TranslationLanguage.SLOVENIAN}
            selectedLanguage={selectedLanguage}
            activeItemDotClass={activeItemDotClass}
            onClick={() =>
              setSelectedTranslationLanguage(TranslationLanguage.SLOVENIAN)
            }
          >
            <p className={textClasses}>{TranslationLanguage.SLOVENIAN}</p>
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
            itemLanguage={TranslationLanguage.CHINESE_SIMPLIFIED}
            selectedLanguage={selectedLanguage}
            activeItemDotClass={activeItemDotClass}
            onClick={() =>
              setSelectedTranslationLanguage(
                TranslationLanguage.CHINESE_SIMPLIFIED,
              )
            }
          >
            <p className={textClasses}>
              {TranslationLanguage.CHINESE_SIMPLIFIED}
            </p>
          </TranslationLanguageSelectDropdownItem>
          <TranslationLanguageSelectDropdownItem
            itemLanguage={TranslationLanguage.CHINESE_TRADITIONAL}
            selectedLanguage={selectedLanguage}
            activeItemDotClass={activeItemDotClass}
            onClick={() =>
              setSelectedTranslationLanguage(
                TranslationLanguage.CHINESE_TRADITIONAL,
              )
            }
          >
            <p className={textClasses}>
              {TranslationLanguage.CHINESE_TRADITIONAL}
            </p>
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
            itemLanguage={TranslationLanguage.VIETNAMESE}
            selectedLanguage={selectedLanguage}
            activeItemDotClass={activeItemDotClass}
            onClick={() =>
              setSelectedTranslationLanguage(TranslationLanguage.VIETNAMESE)
            }
          >
            <p className={textClasses}>{TranslationLanguage.VIETNAMESE}</p>
          </TranslationLanguageSelectDropdownItem>
        </ul>
      </div>
    </div>
  );
}

export default SettingsDropdown;
