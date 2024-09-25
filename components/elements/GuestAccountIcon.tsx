'use client';

import { useBookSectionState } from '@/context/book-section/Context';
import { useTheme } from '@/context/theme/Context';
import { Theme } from '@/types/theme';
import { darkThemeIsSelected } from '@/utils/check-selected-theme';
import getSystemTheme from '@/utils/get-system-theme';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ReactElement, useEffect, useRef } from 'react';

interface GuestAccountIconProps {
  className?: string;
}

function GuestAccountIcon({ className }: GuestAccountIconProps): ReactElement {
  const { bookSectionInViewport } = useBookSectionState();
  const accountIconElementRef = useRef<HTMLDivElement | null>(null);
  const spineElementRef = useRef<HTMLDivElement | null>(null);
  const bookSectionInViewportStateRef = useRef(bookSectionInViewport);
  const { selectedTheme } = useTheme();
  const selectedThemeRef = useRef(selectedTheme);
  const previousThemeRef = useRef(selectedTheme);

  useEffect(() => {
    selectedThemeRef.current = selectedTheme;
  }, [selectedTheme]);

  useEffect(() => {
    bookSectionInViewportStateRef.current = bookSectionInViewport;
  }, [bookSectionInViewport]);

  useGSAP(() => {
    const themeChanged = previousThemeRef.current !== selectedTheme;

    const timeline = gsap.timeline();

    function getAccountIconBackgroundColor(): string {
      if (
        selectedTheme === Theme.DARK ||
        (selectedTheme === Theme.SYSTEM && getSystemTheme() === Theme.DARK)
      ) {
        return 'white';
      }

      return bookSectionInViewport ? 'white' : 'black';
    }

    function getSpineBackgroundColor(): string {
      if (
        selectedTheme === Theme.DARK ||
        (selectedTheme === Theme.SYSTEM && getSystemTheme() === Theme.DARK)
      ) {
        return 'black';
      }

      return bookSectionInViewport ? 'black' : 'white';
    }

    timeline.to(
      accountIconElementRef.current,
      {
        backgroundColor: getAccountIconBackgroundColor(),
        duration: themeChanged ? 0 : 0.3,
        ease: 'linear',
      },
      0,
    );

    timeline.to(
      spineElementRef.current,
      {
        backgroundColor: getSpineBackgroundColor(),
        duration: themeChanged ? 0 : 0.3,
        ease: 'linear',
      },
      0,
    );

    previousThemeRef.current = selectedTheme;
  }, [bookSectionInViewport, selectedTheme]);

  useGSAP((_, contextSafe) => {
    const accountIconElement = accountIconElementRef.current;

    function getAccountIconBackgroundColorOnLeave(): string {
      if (darkThemeIsSelected(selectedThemeRef.current)) {
        return 'white';
      }

      return bookSectionInViewportStateRef.current ? 'white' : 'black';
    }

    function getSpineBackgroundColorOnLeave(): string {
      if (
        bookSectionInViewportStateRef.current ||
        darkThemeIsSelected(selectedThemeRef.current)
      ) {
        return 'black';
      }

      return 'white';
    }

    const onMouseEnter = contextSafe!(() => {
      gsap.to(accountIconElement, {
        backgroundColor: bookSectionInViewportStateRef.current
          ? '#ff5013'
          : '#281AD2',
        duration: 0.15,
        ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      });

      if (
        bookSectionInViewportStateRef.current ||
        darkThemeIsSelected(selectedThemeRef.current)
      ) {
        gsap.to(spineElementRef.current, {
          backgroundColor: 'white',
          duration: 0.15,
          ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
        });
      }
    });

    const onMouseLeave = contextSafe!(() => {
      gsap.to(accountIconElement, {
        backgroundColor: getAccountIconBackgroundColorOnLeave(),
        duration: 0.15,
        ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      });

      gsap.to(spineElementRef.current, {
        backgroundColor: getSpineBackgroundColorOnLeave(),
        duration: 0.15,
        ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      });
    });

    accountIconElement?.addEventListener('mouseenter', onMouseEnter);
    accountIconElement?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      accountIconElement?.removeEventListener('mouseenter', onMouseEnter);
      accountIconElement?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const guestAccountIconClasses = classNames(
    `w-[1.9rem]  h-[1.9rem]  md:w-[2.1rem]  md:h-[2.1rem]  bg-black  rounded-full
     flex  items-center  justify-center  hover:cursor-pointer  dark:bg-white`,
    className,
  );

  return (
    <div ref={accountIconElementRef} className={guestAccountIconClasses}>
      <div
        ref={spineElementRef}
        className='h-[1.1rem]  w-[0.234em]  translate-y-[-0.03rem]
                   rounded-[0.05rem]  bg-white  dark:bg-black'
      ></div>
    </div>
  );
}

export default GuestAccountIcon;
