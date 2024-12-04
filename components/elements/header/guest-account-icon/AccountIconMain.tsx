'use client';

import EmailForm from '@/components/modules/EmailForm';
import { LOGIN_ROUTE, LOGOUT_ROUTE } from '@/constants/general';
import { useBookSectionState } from '@/context/book-section/Context';
import { useSession } from '@/context/session/Context';
import { useTheme } from '@/context/theme/Context';
import useOutsideClick from '@/hooks/use-outside-click';
import { ReaderStatus, Session } from '@/types/session';
import { darkThemeIsSelected } from '@/utils/check-selected-theme';
import { useGSAP } from '@gsap/react';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import classNames from 'classnames';
import gsap from 'gsap';
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import BasicTextNode from '../../BasicTextNode';

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
  const { session, loading } = useSession();

  const [emailWidth, setEmailWidth] = useState<number | null>(null);

  const [logoutLoading, setLogoutLoading] = useState(false);

  const readerEmailElementRef = useCallback((node: HTMLSpanElement | null) => {
    if (node !== null) {
      const widthInRem = node.getBoundingClientRect().width / 16;
      setEmailWidth(widthInRem);
    }
  }, []);

  function calcDropdownWidth(emailWidth: number, status: ReaderStatus): string {
    switch (status) {
      case ReaderStatus.REGULAR: {
        let width = Math.min(emailWidth + 8, 25);

        if (width === 25) {
          width = 28.375;
        }

        return `${width}rem`;
      }
      case ReaderStatus.INVESTOR: {
        const width = Math.min(emailWidth + 13, 28.375);

        return `${width}rem`;
      }
      case ReaderStatus.FULL_ACCESS: {
        const width = Math.min(emailWidth + 14.5, 28.375);

        return `${width}rem`;
      }
    }
  }

  function defineReaderStatus(session: Session): ReaderStatus {
    if (session.hasFullAccess) {
      return ReaderStatus.FULL_ACCESS;
    } else if (session.isInvestor) {
      return ReaderStatus.INVESTOR;
    }

    return ReaderStatus.REGULAR;
  }

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
     border-gray-light  bg-white  pb-16  pt-7  dark:border-gray-dark
     dark:bg-black`,
    {
      'opacity-0  pointer-events-none': !dropdownIsOpened,
      'opacity-100  pointer-events-auto': dropdownIsOpened,
    },
  );

  const spineClasses = classNames(
    `h-[1.05rem]  w-[0.234rem]  translate-y-[-0.03rem]
    rounded-[0.06rem]  bg-white  transition-transform
    group-hover:transition-colors  md:h-[1.1rem]
    md:w-[0.2447rem]  dark:bg-black  dark:group-hover:bg-white`,
    {
      'scale-0': session !== null || loading,
    },
  );

  const badgeClasses = classNames(
    `
    rounded-md  bg-blue  text-white
    !font-normal  px-2.5  pt-1  pb-[0.35rem]  !text-lg
    inline-block  !leading-none  translate-y-[-0.09rem]
  `,
    {
      hidden:
        session === null ||
        defineReaderStatus(session) === ReaderStatus.REGULAR,
    },
  );

  const logoutSpinnerClasses = classNames(
    `mr-6  mt-[3px]  !size-[20px]  
                !text-black  transition-colors
                group-hover:!text-white  dark:!text-white`,
    {
      invisible: !logoutLoading,
      visible: logoutLoading,
    },
  );

  async function handleLogout(): Promise<void> {
    setLogoutLoading(true);
    await axios.post(LOGOUT_ROUTE).catch(() => {});
    setLogoutLoading(false);
    window.location.reload();
  }

  return (
    <div className='relative'>
      <div
        onClick={() => setDropdownIsOpened((prev) => !prev)}
        ref={accountIconElementRef}
        className={guestAccountIconClasses}
      >
        <div ref={spineElementRef} className={spineClasses}></div>
      </div>
      <div
        ref={dropdownRef}
        className={dropdownClasses}
        style={{
          width:
            session !== null && emailWidth !== null
              ? calcDropdownWidth(emailWidth, defineReaderStatus(session))
              : undefined,
        }}
      >
        {loading && (
          <div className='mt-5  flex  flex-row  justify-center'>
            <CircularProgress className='!text-black  dark:!text-white' />
          </div>
        )}
        {!loading && session === null && (
          <div className='px-6'>
            <EmailForm
              requestCallback={async (email: string, token: string) => {
                await axios.post(LOGIN_ROUTE, {
                  email,
                  captchaToken: token,
                  readerName: process.env.NEXT_PUBLIC_HONEYPOT_KEY,
                });
              }}
              label='Enter your library'
              caption='We’ll send you an&nbsp;email with&nbsp;a&nbsp;link to&nbsp;access your&nbsp;library'
              inputId='login-email'
              inputName='email'
              inputClasses='border-[#CFCFCF]  dark:border-gray-dark-lighter2'
              buttonClasses='border-[#CFCFCF]  dark:border-gray-dark-lighter2'
              inputFocusedClasses='!border-[#000000]  dark:!border-[#FFFFFF]'
              buttonInputFocusedClasses='!border-[#000000]  dark:!border-[#FFFFFF]'
              buttonInputFilledClasses='bg-black  dark:bg-white'
              buttonInputEmptyClasses='bg-[#CFCFCF]  dark:bg-gray-dark-lighter2'
              changeArrowColorInDarkMode
              spinnerIconsClasses='dark:!text-black'
            />
          </div>
        )}
        {!loading && session !== null && (
          <>
            <div className='px-6'>
              <BasicTextNode className='break-all  text-xl  font-bold'>
                <span className='mr-2' ref={readerEmailElementRef}>
                  {session.readerEmail}
                </span>
                <span className={badgeClasses}>
                  {defineReaderStatus(session) === ReaderStatus.FULL_ACCESS
                    ? 'Full access'
                    : 'Investor'}
                </span>
              </BasicTextNode>
            </div>
            <ul className='mt-5'>
              <li
                className='group  cursor-pointer  pb-[0.35rem]  pt-1  
                           transition-colors  hover:bg-blue'
              >
                <BasicTextNode
                  className='px-6  text-xl  transition-colors
                           group-hover:text-white'
                >
                  Profile
                </BasicTextNode>
              </li>
              <li
                onClick={handleLogout}
                className='group  flex  cursor-pointer  justify-between  pb-[0.35rem]  
                           pt-1  transition-colors  hover:bg-blue'
              >
                <BasicTextNode
                  className='px-6  text-xl  transition-colors
                           group-hover:text-white'
                >
                  Log out
                </BasicTextNode>
                <CircularProgress className={logoutSpinnerClasses} />
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default AccountIconMain;
