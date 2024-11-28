'use client';

import EmailForm from '@/components/modules/EmailForm';
import { LOGIN_ROUTE } from '@/constants/general';
import { useBookSectionState } from '@/context/book-section/Context';
import { useTheme } from '@/context/theme/Context';
import useOutsideClick from '@/hooks/use-outside-click';
import { darkThemeIsSelected } from '@/utils/check-selected-theme';
import { useGSAP } from '@gsap/react';
import axios from 'axios';
import classNames from 'classnames';
import gsap from 'gsap';
import { ReactElement, useEffect, useRef, useState } from 'react';

interface GuestAccountIconProps {
  className?: string;
}

function AccountIconMain({ className }: GuestAccountIconProps): ReactElement {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const { bookSectionInViewport } = useBookSectionState();
  const accountIconElementRef = useRef<HTMLDivElement | null>(null);
  const spineElementRef = useRef<HTMLDivElement | null>(null);
  const bookSectionInViewportStateRef = useRef(bookSectionInViewport);
  const { selectedTheme, isManualThemeChange } = useTheme();
  const selectedThemeRef = useRef(selectedTheme);
  const bookSectionWasInViewport = useRef(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick([accountIconElementRef, dropdownRef], () => {
    setDropdownIsOpened(false);
  });

  useEffect(() => {
    selectedThemeRef.current = selectedTheme;
  }, [selectedTheme]);

  useEffect(() => {
    bookSectionInViewportStateRef.current = bookSectionInViewport;
  }, [bookSectionInViewport]);

  function getAccountIconBackgroundColor(): string {
    if (darkThemeIsSelected(selectedTheme)) {
      return 'white';
    }

    return bookSectionInViewport ? 'white' : 'black';
  }

  function getSpineBackgroundColor(): string {
    if (darkThemeIsSelected(selectedTheme)) {
      return 'black';
    }

    return bookSectionInViewport ? 'black' : 'white';
  }

  useGSAP(() => {
    if (isManualThemeChange) {
      gsap.set(accountIconElementRef.current, {
        backgroundColor: getAccountIconBackgroundColor(),
      });

      gsap.set(spineElementRef.current, {
        backgroundColor: getSpineBackgroundColor(),
      });
    }
  }, [selectedTheme]);

  useGSAP(
    () => {
      if (bookSectionInViewport) {
        bookSectionWasInViewport.current = true;
      }

      if (bookSectionWasInViewport.current) {
        const timeline = gsap.timeline();

        timeline.to(
          accountIconElementRef.current,
          {
            backgroundColor: getAccountIconBackgroundColor(),
            duration: 0.3,
            ease: 'linear',
          },
          0,
        );

        timeline.to(
          spineElementRef.current,
          {
            backgroundColor: getSpineBackgroundColor(),
            duration: 0.3,
            ease: 'linear',
          },
          0,
        );
      }
    },
    {
      dependencies: [bookSectionInViewport],
    },
  );

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
    `w-[1.9rem]  h-[1.9rem]  md:w-[2.1rem]  md:h-[2.1rem]  bg-black
     rounded-full  flex  items-center  justify-center  hover:cursor-pointer
     dark:bg-white`,
    className,
  );

  const dropdownClasses = classNames(
    `absolute  right-0  top-[42px]  md:top-[44px]  w-[28.375rem]  max-w-[91vw]  rounded-[14px]  border
     border-gray-light  bg-white  px-6  pb-16  pt-7  dark:border-gray-dark
     dark:bg-black`,
    {
      'opacity-0  pointer-events-none': !dropdownIsOpened,
      'opacity-100  pointer-events-auto': dropdownIsOpened,
    },
  );

  return (
    <div className='relative'>
      <div
        onClick={() => setDropdownIsOpened((prev) => !prev)}
        ref={accountIconElementRef}
        className={guestAccountIconClasses}
      >
        <div
          ref={spineElementRef}
          className='h-[1.05rem]  w-[0.234rem]  translate-y-[-0.03rem]
                   rounded-[0.06rem]  bg-white  md:h-[1.1rem]  
                   md:w-[0.2447rem]  dark:bg-black'
        ></div>
      </div>
      <div ref={dropdownRef} className={dropdownClasses}>
        <EmailForm
          requestCallback={async (email: string, token: string) => {
            await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}${LOGIN_ROUTE}`,
              {
                email,
                captchaToken: token,
                readerName: process.env.NEXT_PUBLIC_HONEYPOT_KEY,
              },
            );
          }}
          label='Enter your library'
          caption='We’ll send you an&nbsp;email with&nbsp;a&nbsp;link to&nbsp;access your&nbsp;library'
          inputId='login-email'
          inputName='email'
          inputClasses='border-[#CFCFCF]  dark:border-gray-dark-lighter2  
                        focus:border-[#000000]  dark:focus:border-[#FFFFFF]'
          buttonClasses='border-[#CFCFCF]  dark:border-gray-dark-lighter2'
          buttonInputFocusedClasses='!border-[#000000]  dark:!border-[#FFFFFF]'
          buttonInputFilledClasses='bg-black  dark:bg-white'
          buttonInputEmptyClasses='bg-[#CFCFCF]  dark:bg-gray-dark-lighter2'
          changeArrowColorInDarkMode
          spinnerIconsClasses='dark:!text-black'
        />
      </div>
    </div>
  );
}

export default AccountIconMain;
