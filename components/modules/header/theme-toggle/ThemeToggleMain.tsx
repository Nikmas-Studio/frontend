import useOutsideClick from '@/hooks/use-outside-click';
import { Theme } from '@/types/theme';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useEffect, useRef, useState } from 'react';

import ThemeToggleDropdownItem from '@/components/elements/ThemeToggleDropdownItem';
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

function ThemeToggleMain({ className }: ThemeToggleProps): ReactElement {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const { selectedTheme, isManualThemeChange } = useTheme();
  const { setSelectedTheme } = useThemeDispatch();
  const { bookSectionInViewport } = useBookSectionState();

  const lightModeBlackToggleIconRef = useRef<HTMLImageElement | null>(null);
  const lightModeWhiteToggleIconRef = useRef<HTMLImageElement | null>(null);
  const darkModeWhiteToggleIconRef = useRef<HTMLImageElement | null>(null);
  const dropdownElementRef = useRef<HTMLUListElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  const { isTouchDevice } = useTouchDevice();
  const isTouchDeviceRef = useRef(isTouchDevice);
  const isAnimating = useRef(false);
  const mouseLeavedToggle = useRef(false);
  const animateLeave = useRef(false);
  const bookSectionWasInViewport = useRef(false);

  function showLightModeBlackToggleIcon(): boolean {
    return lightThemeIsSelected(selectedTheme) && !bookSectionInViewport;
  }

  function showLightModeWhiteToggleIcon(): boolean {
    return lightThemeIsSelected(selectedTheme) && bookSectionInViewport;
  }

  useGSAP(
    () => {
      const lightModeBlackToggleIcon = lightModeBlackToggleIconRef.current;
      const lightModeWhiteToggleIcon = lightModeWhiteToggleIconRef.current;

      if (bookSectionInViewport) {
        bookSectionWasInViewport.current = true;
      }

      if (bookSectionWasInViewport.current) {
        if (showLightModeBlackToggleIcon()) {
          gsap.to(lightModeBlackToggleIcon, {
            opacity: 1,
            pointerEvents: 'auto',
            zIndex: 50,
            duration: 0.3,
            ease: 'linear',
          });
        } else {
          gsap.to(lightModeBlackToggleIcon, {
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 'auto',
            duration: 0.3,
            ease: 'linear',
          });
        }

        if (showLightModeWhiteToggleIcon()) {
          gsap.to(lightModeWhiteToggleIcon, {
            opacity: 1,
            pointerEvents: 'auto',
            zIndex: 50,
            duration: 0.3,
            ease: 'linear',
          });
        } else {
          gsap.to(lightModeWhiteToggleIcon, {
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 'auto',
            duration: 0.3,
            ease: 'linear',
          });
        }
      }
    },
    {
      dependencies: [bookSectionInViewport],
    },
  );

  useGSAP(() => {
    const dropdownElement = dropdownElementRef.current;

    if (bookSectionInViewport) {
      bookSectionWasInViewport.current = true;
    }

    if (bookSectionWasInViewport.current) {
      if (darkThemeIsSelected(selectedTheme)) {
        if (bookSectionInViewport) {
          gsap.set(dropdownElement, {
            borderColor: '#EBEBEB',
          });
        } else {
          gsap.set(dropdownElement, {
            borderColor: '#282828',
          });
        }
      } else {
        if (dropdownElement!.style.borderBottomColor !== '#EBEBEB') {
          gsap.set(dropdownElement, {
            borderColor: '#EBEBEB',
          });
        }
      }
    }
  }, [bookSectionInViewport, selectedTheme]);

  useGSAP(() => {
    const lightModeBlackToggleIcon = lightModeBlackToggleIconRef.current;
    const lightModeWhiteToggleIcon = lightModeWhiteToggleIconRef.current;

    if (isManualThemeChange) {
      if (showLightModeBlackToggleIcon()) {
        gsap.set(lightModeBlackToggleIcon, {
          opacity: 1,
          pointerEvents: 'auto',
          zIndex: 50,
        });
      } else {
        gsap.set(lightModeBlackToggleIcon, {
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 'auto',
        });
      }

      if (showLightModeWhiteToggleIcon()) {
        gsap.set(lightModeWhiteToggleIcon, {
          opacity: 1,
          pointerEvents: 'auto',
          zIndex: 50,
        });
      } else {
        gsap.set(lightModeWhiteToggleIcon, {
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 'auto',
        });
      }
    } else {
      if (showLightModeBlackToggleIcon()) {
        gsap.set(lightModeBlackToggleIcon, {
          pointerEvents: 'auto',
          zIndex: 50,
        });
      } else {
        gsap.set(lightModeBlackToggleIcon, {
          pointerEvents: 'none',
          zIndex: 'auto',
        });
      }

      if (showLightModeWhiteToggleIcon()) {
        gsap.set(lightModeWhiteToggleIcon, {
          pointerEvents: 'auto',
          zIndex: 50,
        });
      } else {
        gsap.set(lightModeWhiteToggleIcon, {
          pointerEvents: 'none',
          zIndex: 'auto',
        });
      }
    }
  }, [selectedTheme]);

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
    setDropdownIsOpened(false);
  }

  useOutsideClick([toggleButtonRef, dropdownElementRef], () => {
    setDropdownIsOpened(false);
  });

  useGSAP((_, contextSafe) => {
    const handleDarkModeIconMouseEnter = contextSafe!(() => {
      if (isTouchDeviceRef.current) {
        return;
      }

      if (!isAnimating.current) {
        isAnimating.current = true;
        mouseLeavedToggle.current = false;

        gsap.to(darkModeWhiteToggleIconRef.current, {
          rotate: -45,
          duration: 0.15,
          ease: 'cubic-bezier(0.4,0,0.2,1)',
        });

        setTimeout(() => {
          if (mouseLeavedToggle.current) {
            gsap.to(darkModeWhiteToggleIconRef.current, {
              rotate: 0,
              duration: 0.15,
              ease: 'cubic-bezier(0.4,0,0.2,1)',
            });

            setTimeout(() => {
              isAnimating.current = false;
            }, 150);
          } else {
            isAnimating.current = false;
            animateLeave.current = true;
          }
        }, 150);
      }
    });

    const handleDarkModeIconMouseLeave = contextSafe!(() => {
      if (isTouchDeviceRef.current) {
        return;
      }

      if (!mouseLeavedToggle.current) {
        mouseLeavedToggle.current = true;

        if (animateLeave.current) {
          animateLeave.current = false;
          isAnimating.current = true;

          gsap.to(darkModeWhiteToggleIconRef.current, {
            rotate: 0,
            duration: 0.15,
            ease: 'cubic-bezier(0.4,0,0.2,1)',
          });

          setTimeout(() => {
            isAnimating.current = false;
          }, 150);
        }
      }
    });

    const handleLightModeBlackIconMouseEnter = contextSafe!(() => {
      if (isTouchDeviceRef.current) {
        return;
      }

      if (!isAnimating.current) {
        isAnimating.current = true;
        mouseLeavedToggle.current = false;

        gsap.to(lightModeBlackToggleIconRef.current, {
          rotate: 45,
          duration: 0.15,
          ease: 'cubic-bezier(0.4,0,0.2,1)',
        });

        setTimeout(() => {
          if (mouseLeavedToggle.current) {
            gsap.to(lightModeBlackToggleIconRef.current, {
              rotate: 0,
              duration: 0.15,
              ease: 'cubic-bezier(0.4,0,0.2,1)',
            });

            setTimeout(() => {
              isAnimating.current = false;
            }, 150);
          } else {
            isAnimating.current = false;
            animateLeave.current = true;
          }
        }, 150);
      }
    });

    const handleLightModeBlackIconMouseLeave = contextSafe!(() => {
      if (isTouchDeviceRef.current) {
        return;
      }

      if (!mouseLeavedToggle.current) {
        mouseLeavedToggle.current = true;

        if (animateLeave.current) {
          animateLeave.current = false;
          isAnimating.current = true;

          gsap.to(lightModeBlackToggleIconRef.current, {
            rotate: 0,
            duration: 0.15,
            ease: 'cubic-bezier(0.4,0,0.2,1)',
          });

          setTimeout(() => {
            isAnimating.current = false;
          }, 150);
        }
      }
    });

    const handleLightModeWhiteIconMouseEnter = contextSafe!(() => {
      if (isTouchDeviceRef.current) {
        return;
      }

      if (!isAnimating.current) {
        isAnimating.current = true;
        mouseLeavedToggle.current = false;

        gsap.to(lightModeWhiteToggleIconRef.current, {
          rotate: 45,
          duration: 0.15,
          ease: 'cubic-bezier(0.4,0,0.2,1)',
        });

        setTimeout(() => {
          if (mouseLeavedToggle.current) {
            gsap.to(lightModeWhiteToggleIconRef.current, {
              rotate: 0,
              duration: 0.15,
              ease: 'cubic-bezier(0.4,0,0.2,1)',
            });

            setTimeout(() => {
              isAnimating.current = false;
            }, 150);
          } else {
            isAnimating.current = false;
            animateLeave.current = true;
          }
        }, 150);
      }
    });

    const handleLightModeWhiteIconMouseLeave = contextSafe!(() => {
      if (isTouchDeviceRef.current) {
        return;
      }

      if (!mouseLeavedToggle.current) {
        mouseLeavedToggle.current = true;

        if (animateLeave.current) {
          animateLeave.current = false;
          isAnimating.current = true;

          gsap.to(lightModeWhiteToggleIconRef.current, {
            rotate: 0,
            duration: 0.15,
            ease: 'cubic-bezier(0.4,0,0.2,1)',
          });

          setTimeout(() => {
            isAnimating.current = false;
          }, 150);
        }
      }
    });

    darkModeWhiteToggleIconRef.current?.addEventListener(
      'mouseenter',
      handleDarkModeIconMouseEnter,
    );

    darkModeWhiteToggleIconRef.current?.addEventListener(
      'mouseleave',
      handleDarkModeIconMouseLeave,
    );

    lightModeBlackToggleIconRef.current?.addEventListener(
      'mouseenter',
      handleLightModeBlackIconMouseEnter,
    );

    lightModeBlackToggleIconRef.current?.addEventListener(
      'mouseleave',
      handleLightModeBlackIconMouseLeave,
    );

    lightModeWhiteToggleIconRef.current?.addEventListener(
      'mouseenter',
      handleLightModeWhiteIconMouseEnter,
    );

    lightModeWhiteToggleIconRef.current?.addEventListener(
      'mouseleave',
      handleLightModeWhiteIconMouseLeave,
    );

    return () => {
      darkModeWhiteToggleIconRef.current?.removeEventListener(
        'mouseenter',
        handleDarkModeIconMouseEnter,
      );

      darkModeWhiteToggleIconRef.current?.removeEventListener(
        'mouseleave',
        handleDarkModeIconMouseLeave,
      );

      lightModeBlackToggleIconRef.current?.removeEventListener(
        'mouseenter',
        handleLightModeBlackIconMouseEnter,
      );

      lightModeBlackToggleIconRef.current?.removeEventListener(
        'mouseleave',
        handleLightModeBlackIconMouseLeave,
      );

      lightModeWhiteToggleIconRef.current?.removeEventListener(
        'mouseenter',
        handleLightModeWhiteIconMouseEnter,
      );

      lightModeWhiteToggleIconRef.current?.removeEventListener(
        'mouseleave',
        handleLightModeWhiteIconMouseLeave,
      );
    };
  }, []);

  const dropdownClasses = classNames(
    `absolute  right-0  top-[34px]  flex  flex-col  rounded-[14px]  bg-white
     border  border-gray-light  dark:border-gray-dark 
     dark:bg-black  pb-9  pt-7  
     `,
    {
      'opacity-0  pointer-events-none': !dropdownIsOpened,
      'opacity-100  pointer-events-auto': dropdownIsOpened,
    },
  );

  const lightModeBlackToggleIconClasses = classNames(
    `absolute  size-6  translate-y-[-0.5px]  select-none
     top-0  opacity-100  dark:opacity-0  z-50  dark:z-auto  dark:pointer-events-none`,
  );

  const lightModeWhiteToggleIconClasses = classNames(
    `absolute  size-6  translate-y-[-0.5px]  select-none   top-0
     opacity-0  dark:opacity-0  pointer-events-none  dark:pointer-events-none`,
  );

  const darkModeWhiteToggleIconClasses = classNames(
    `absolute  size-[1.3rem]  translate-x-[0.1rem]  translate-y-[0.12rem]
     select-none    top-0  opacity-0  pointer-events-none
     dark:opacity-100  dark:pointer-events-auto  dark:z-50`,
  );

  const themeToggleWrapperClasses = classNames(
    'relative  flex  flex-col  justify-center',
    className,
  );

  return (
    <div className={themeToggleWrapperClasses}>
      <button
        ref={toggleButtonRef}
        className='relative  size-6  cursor-pointer'
        onClick={() => setDropdownIsOpened((prev) => !prev)}
      >
        <Image
          priority
          ref={lightModeBlackToggleIconRef}
          src={sunIconBlack}
          width={27}
          height={27}
          alt='Sun icon'
          className={lightModeBlackToggleIconClasses}
          quality={100}
        />
        <Image
          priority
          ref={lightModeWhiteToggleIconRef}
          src={sunIconWhite}
          width={27}
          height={27}
          alt='Sun icon'
          className={lightModeWhiteToggleIconClasses}
          quality={100}
        />
        <Image
          priority
          ref={darkModeWhiteToggleIconRef}
          src={moonIconWhite}
          width={27}
          height={27}
          alt='Moon icon'
          className={darkModeWhiteToggleIconClasses}
          quality={100}
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
            className='size-6  translate-y-[-0.031rem] 
                       dark:hidden'
            quality={100}
          />
          <Image
            src={sunIconWhite}
            width={27}
            height={27}
            alt='Sun icon'
            className='hidden  size-6  translate-y-[-0.031rem] 
                       dark:inline-block'
            quality={100}
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
                       translate-y-[-0.031rem] 
                       dark:hidden'
            quality={100}
          />
          <Image
            src={moonIconWhite}
            width={27}
            height={27}
            alt='Moon icon'
            className='hidden  size-[1.3rem]  translate-x-[0.15rem]
                       translate-y-[-0.031rem] 
                       dark:inline-block'
            quality={100}
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
                       translate-y-[-0.031rem]   dark:hidden'
            quality={100}
          />
          <Image
            src={gearIconWhite}
            width={27}
            height={27}
            alt='Gear icon'
            className='hidden  size-[1.3rem]  translate-x-[0.13rem]
                       translate-y-[-0.031rem]  dark:inline-block'
            quality={100}
          />
          <p className='select-none  dark:text-white'>System</p>
        </ThemeToggleDropdownItem>
      </ul>
    </div>
  );
}

export default ThemeToggleMain;
