'use client';

import EmailForm from '@/components/modules/EmailForm';
import { LOGIN_ROUTE, LOGOUT_ROUTE } from '@/constants/general';
import { useSession } from '@/context/session/Context';
import useOutsideClick from '@/hooks/use-outside-click';
import { ReaderStatus, Session } from '@/types/session';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import classNames from 'classnames';
import Link from 'next/link';
import { ReactElement, useCallback, useRef, useState } from 'react';
import BasicTextNode from '../../BasicTextNode';

interface GuestAccountIconProps {
  className?: string;
}

function AccountIconDefault({
  className,
}: GuestAccountIconProps): ReactElement {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const [readerData1Width, setReaderData1Width] = useState<number | null>(null);
  const [readerData2Width, setReaderData2Width] = useState<number | null>(null);

  const accountIconElementRef = useRef<HTMLDivElement | null>(null);
  const spineElementRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { session, loading } = useSession();

  const readerDataElement1Ref = useCallback(
    (node: HTMLSpanElement | null) => {
      if (node !== null) {
        const widthInRem = node.getBoundingClientRect().width / 16;
        setReaderData1Width(widthInRem);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [session],
  );
  const readerDataElement2Ref = useCallback(
    (node: HTMLSpanElement | null) => {
      if (node !== null) {
        const widthInRem = node.getBoundingClientRect().width / 16;
        setReaderData2Width(widthInRem);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [session],
  );
  const [logoutLoading, setLogoutLoading] = useState(false);

  function calcDropdownWidth(
    data1Width: number,
    data2Width: number | null,
    status: ReaderStatus,
  ): string {
    switch (status) {
      case ReaderStatus.REGULAR: {
        const width1 = Math.min(data1Width + 8, 25);
        let width2;

        if (data2Width !== null) {
          width2 = Math.min(data2Width + 8, 25);
        }

        let width = Math.max(width1, width2 ?? 0);

        if (width === 25) {
          width = 28.375;
        }

        return `${width}rem`;
      }
      case ReaderStatus.INVESTOR: {
        const width1 = Math.min(data1Width + 13, 28.375);
        let width2;

        if (data2Width !== null) {
          width2 = Math.min(data2Width + 8, 25);
          if (width2 === 25) {
            width2 = 28.375;
          }
        }

        const width = Math.max(width1, width2 ?? 0);

        return `${width}rem`;
      }
      case ReaderStatus.FULL_ACCESS: {
        const width1 = Math.min(data1Width + 14.5, 28.375);
        let width2;

        if (data2Width !== null) {
          width2 = Math.min(data2Width + 8, 25);
          if (width2 === 25) {
            width2 = 28.375;
          }
        }

        const width = Math.max(width1, width2 ?? 0);

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

  useOutsideClick([accountIconElementRef, dropdownRef], () => {
    setDropdownIsOpened(false);
  });

  const guestAccountIconClasses = classNames(
    `w-[1.9rem]  h-[1.9rem]  md:w-[2.1rem]  md:h-[2.1rem]  bg-black
     hover:transition-colors  hover:bg-blue
     rounded-full  flex  items-center  justify-center  hover:cursor-pointer
     dark:bg-white  group`,
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
      '!translate-y-[-0.15rem]':
        session !== null && session.readerFullName !== null,
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
            session !== null && readerData1Width !== null
              ? calcDropdownWidth(
                  readerData1Width,
                  readerData2Width,
                  defineReaderStatus(session),
                )
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
                <span className='mr-2' ref={readerDataElement1Ref}>
                  {session.readerFullName !== null && session.readerFullName}
                  {session.readerFullName === null && session.readerEmail}
                </span>
                <span className={badgeClasses}>
                  {defineReaderStatus(session) === ReaderStatus.FULL_ACCESS
                    ? 'Full access'
                    : 'Investor'}
                </span>
              </BasicTextNode>
              {session.readerFullName !== null && (
                <BasicTextNode className='break-all  text-xl  font-semibold'>
                  <span ref={readerDataElement2Ref}>{session.readerEmail}</span>
                </BasicTextNode>
              )}
            </div>
            <ul className='mt-5'>
              <li>
                <Link href='/profile'>
                  <div
                    className='group  cursor-pointer  pb-[0.35rem]  pt-1  
                           transition-colors  hover:bg-blue'
                  >
                    <BasicTextNode
                      className='px-6  text-xl  transition-colors
                           group-hover:text-white'
                    >
                      Profile
                    </BasicTextNode>
                  </div>
                </Link>
              </li>
              <li>
                <div
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
                </div>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default AccountIconDefault;
