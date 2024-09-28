import useOutsideClick from '@/hooks/use-outside-click';
import { Theme } from '@/types/theme';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useEffect, useRef, useState } from 'react';
import ThemeToggleDropdownItem from '../elements/ThemeToggleDropdownItem';

import { useBookSectionState } from '@/context/book-section/Context';
import { useTheme, useThemeDispatch } from '@/context/theme/Context';
import { useTouchDevice } from '@/context/touch-device/Context';
import gearIconBlack from '@/public/images/gear-icon-black.png';
import gearIconWhite from '@/public/images/gear-icon-white.png';
import moonIconBlack from '@/public/images/moon-icon-black.png';
import moonIconWhite from '@/public/images/moon-icon-white.png';
import sunIconBlack from '@/public/images/sun-icon-black.png';
import sunIconWhite from '@/public/images/sun-icon-white.png';
import {
  darkThemeIsSelected,
  lightThemeIsSelected,
} from '@/utils/check-selected-theme';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className }: ThemeToggleProps): ReactElement {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const { selectedTheme, isManualThemeChange } = useTheme();
  const { setSelectedTheme } = useThemeDispatch();
  const { bookSectionInViewport } = useBookSectionState();
  const lightModeBlackToggleIconRef = useRef<HTMLImageElement | null>(null);
  const lightModeWhiteToggleIconRef = useRef<HTMLImageElement | null>(null);
  const darkModeWhiteToggleIconRef = useRef<HTMLImageElement | null>(null);
  const bookSectionWasInViewport = useRef(false);
  const { isTouchDevice } = useTouchDevice();
  const isTouchDeviceRef = useRef(isTouchDevice);

  useEffect(() => {
    isTouchDeviceRef.current = isTouchDevice;
  }, [isTouchDevice]);

  function showLightModeBlackToggleIcon(): boolean {
    return lightThemeIsSelected(selectedTheme) && !bookSectionInViewport;
  }

  function showLightModeWhiteToggleIcon(): boolean {
    return lightThemeIsSelected(selectedTheme) && bookSectionInViewport;
  }

  useGSAP(
    () => {
      if (bookSectionInViewport) {
        bookSectionWasInViewport.current = true;
      }

      if (bookSectionWasInViewport.current) {
        if (showLightModeBlackToggleIcon()) {
          gsap.to(lightModeBlackToggleIconRef.current, {
            opacity: 1,
            pointerEvents: 'auto',
            zIndex: 50,
            duration: 0.3,
            ease: 'linear',
          });
        } else {
          gsap.to(lightModeBlackToggleIconRef.current, {
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 'auto',
            duration: 0.3,
            ease: 'linear',
          });
        }

        if (showLightModeWhiteToggleIcon()) {
          gsap.to(lightModeWhiteToggleIconRef.current, {
            opacity: 1,
            pointerEvents: 'auto',
            zIndex: 50,
            duration: 0.3,
            ease: 'linear',
          });
        } else {
          gsap.to(lightModeWhiteToggleIconRef.current, {
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 'auto',
            duration: 0.3,
            ease: 'linear',
          });
        }

        if (darkThemeIsSelected(selectedTheme)) {
          if (bookSectionInViewport) {
            gsap.to(dropdownElementRef.current, {
              borderColor: '#EBEBEB',
              duration: 0.15,
              ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
            });
          } else {
            gsap.to(dropdownElementRef.current, {
              borderColor: '#414141',
              duration: 0.15,
              ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
            });
          }
        } else {
          if (
            dropdownElementRef.current?.style.borderBottomColor !== '#EBEBEB'
          ) {
            gsap.to(dropdownElementRef.current, {
              borderColor: '#EBEBEB',
              duration: 0.15,
              ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
            });
          }
        }
      }
    },
    {
      dependencies: [bookSectionInViewport],
    },
  );

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

  useGSAP(() => {
    if (isManualThemeChange) {
      if (showLightModeBlackToggleIcon()) {
        gsap.set(lightModeBlackToggleIconRef.current, {
          opacity: 1,
          pointerEvents: 'auto',
          zIndex: 50,
        });
      } else {
        gsap.set(lightModeBlackToggleIconRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 'auto',
        });
      }

      if (showLightModeWhiteToggleIcon()) {
        gsap.set(lightModeWhiteToggleIconRef.current, {
          opacity: 1,
          pointerEvents: 'auto',
          zIndex: 50,
        });
      } else {
        gsap.set(lightModeWhiteToggleIconRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 'auto',
        });
      }
    }
  }, [selectedTheme]);

  function handleThemeChange(newTheme: Theme): void {
    setSelectedTheme(newTheme);
    setDropdownIsOpened(false);
  }

  const dropdownElementRef = useRef<HTMLUListElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  useOutsideClick([toggleButtonRef, dropdownElementRef], () => {
    setDropdownIsOpened(false);
  });

  useGSAP((_, contextSafe) => {
    const handleMouseEnter = contextSafe!(() => {
      if (isTouchDeviceRef.current) {
        return;
      }

      gsap.to(darkModeWhiteToggleIconRef.current, {
        rotate: -45,
        duration: 0.15,
        ease: 'cubic-bezier(0.4,0,0.2,1)',
      });
    });

    const handleMouseLeave = contextSafe!(() => {
      if (isTouchDeviceRef.current) {
        return;
      }

      gsap.to(darkModeWhiteToggleIconRef.current, {
        rotate: 0,
        duration: 0.15,
        ease: 'cubic-bezier(0.4,0,0.2,1)',
      });
    });

    darkModeWhiteToggleIconRef.current?.addEventListener(
      'mouseenter',
      handleMouseEnter,
    );

    darkModeWhiteToggleIconRef.current?.addEventListener(
      'mouseleave',
      handleMouseLeave,
    );

    return () => {
      darkModeWhiteToggleIconRef.current?.removeEventListener(
        'mouseenter',
        handleMouseEnter,
      );

      darkModeWhiteToggleIconRef.current?.removeEventListener(
        'mouseleave',
        handleMouseLeave,
      );
    };
  });

  const dropdownClasses = classNames(
    `absolute  right-0  top-10  flex  flex-col  rounded-lg  bg-white
     border  border-[#EBEBEB]  dark:border-[#414141]
     dark:bg-black  pb-9  pt-7  
     `,
    {
      'opacity-0  pointer-events-none': !dropdownIsOpened,
      'opacity-100  pointer-events-auto': dropdownIsOpened,
    },
  );

  const lightModeBlackToggleIconClasses = classNames(
    `absolute  size-6  translate-y-[-0.5px]  select-none  md:size-[1.7rem]  
    top-0  hover:[transform:rotate(45deg)]  [transition:transform_0.15s_cubic-bezier(0.4,0,0.2,1)]
    opacity-100  pointer-events-auto`,
  );

  const lightModeWhiteToggleIconClasses = classNames(
    `absolute  size-6  translate-y-[-0.5px]  select-none md:size-[1.7rem]  top-0
     hover:[transform:rotate(45deg)]  [transition:transform_0.15s_cubic-bezier(0.4,0,0.2,1)]
     opacity-0  pointer-events-none`,
  );

  const darkModeWhiteToggleIconClasses = classNames(
    `absolute  size-[1.3rem]  translate-x-[0.1rem]  translate-y-[0.12rem]
   select-none  md:size-[1.45rem]  top-0  opacity-0
   dark:opacity-100 dark:pointer-events-auto  dark:z-50`,
  );

  const themeToggleWrapperClasses = classNames(
    'relative  flex  flex-col  justify-center',
    className,
  );

  return (
    <div className={themeToggleWrapperClasses}>
      <button
        ref={toggleButtonRef}
        className='relative  size-6  cursor-pointer  md:size-[1.7rem]'
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
          itemTheme={Theme.LIGHT}
          selectedTheme={selectedTheme}
          onClick={() => handleThemeChange(Theme.LIGHT)}
        >
          <Image
            src={sunIconBlack}
            width={27}
            height={27}
            alt='Sun icon'
            className='size-6  translate-y-[-0.031rem]  md:size-[1.7rem]  
                       dark:hidden'
          />
          <Image
            src={sunIconWhite}
            width={27}
            height={27}
            alt='Sun icon'
            className='hidden  size-6  translate-y-[-0.031rem]  md:size-[1.7rem]
                       dark:inline-block'
          />
          <p className='select-none  dark:text-white'>Light</p>
        </ThemeToggleDropdownItem>
        <ThemeToggleDropdownItem
          className='gap-[0.95rem]'
          itemTheme={Theme.DARK}
          selectedTheme={selectedTheme}
          onClick={() => handleThemeChange(Theme.DARK)}
        >
          <Image
            src={moonIconBlack}
            width={27}
            height={27}
            alt='Moon icon'
            className='size-[1.3rem]  translate-x-[0.15rem]
                       translate-y-[-0.031rem]  md:size-[1.45rem]
                       dark:hidden'
          />
          <Image
            src={moonIconWhite}
            width={27}
            height={27}
            alt='Moon icon'
            className='hidden  size-[1.3rem]  translate-x-[0.15rem]
                       translate-y-[-0.031rem]  md:size-[1.45rem]
                       dark:inline-block'
          />
          <p className='select-none  dark:text-white'>Dark</p>
        </ThemeToggleDropdownItem>
        <ThemeToggleDropdownItem
          className='gap-[0.95rem]'
          itemTheme={Theme.SYSTEM}
          selectedTheme={selectedTheme}
          onClick={() => handleThemeChange(Theme.SYSTEM)}
        >
          <Image
            src={gearIconBlack}
            width={27}
            height={27}
            alt='Gear icon'
            className='size-[1.3rem]  translate-x-[0.13rem]
                       translate-y-[-0.031rem]  md:size-6  dark:hidden'
          />
          <Image
            src={gearIconWhite}
            width={27}
            height={27}
            alt='Gear icon'
            className='hidden  size-[1.3rem]  translate-x-[0.13rem]
                       translate-y-[-0.031rem]  md:size-6  dark:inline-block'
          />
          <p className='select-none  dark:text-white'>System</p>
        </ThemeToggleDropdownItem>
      </ul>
    </div>
  );
}

export default ThemeToggle;
