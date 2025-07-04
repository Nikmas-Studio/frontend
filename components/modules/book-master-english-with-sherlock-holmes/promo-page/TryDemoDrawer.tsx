'use client';

import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import {
  useTryDemoDrawer,
  useTryDemoDrawerDispatch,
} from '@/context/book-master-english-with-sherlock-holmes/try-demo-drawer/Context';
import { libreBaskerville, merriweather } from '@/fonts';
import bookCover from '@/public/images/book-cover-master-english-with-sherlock-holmes.jpg';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useEffect, useRef } from 'react';
import { setTimeout } from 'timers';
import EmailForm from '../../EmailForm';

function TryDemoDrawer(): ReactElement {
  const { drawerIsOpened } = useTryDemoDrawer();
  const { setDrawerIsOpened } = useTryDemoDrawerDispatch();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (drawerIsOpened) {
      if (containerRef.current !== null) {
        containerRef.current.style.visibility = 'visible';
      }
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';

      if (overlayRef.current) {
        overlayRef.current.style.visibility = '';
        overlayRef.current.style.opacity = '1';
      }
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';

      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (overlayRef.current) {
              overlayRef.current.style.opacity = '0';
            }
          });
        });
      }, 200);

      setTimeout(() => {
        if (containerRef.current !== null) {
          containerRef.current.style.visibility = 'hidden';
        }
      }, 500);
    }
  }, [drawerIsOpened]);

  const overlayClasses = classNames(
    'fixed  inset-0  z-[9999]  bg-white  dark:bg-black  transition-opacity  duration-[400ms]',
    {
      'pointer-events-none': !drawerIsOpened,
    },
  );

  const containerClasses = classNames(
    `fixed  h-dvh  inset-0  z-[99999]  w-screen  
     transition-all  duration-[400ms]  bg-white  dark:bg-black`,
    {
      'translate-y-0': drawerIsOpened,
      'translate-y-[110dvh]': !drawerIsOpened,
    },
  );

  return (
    <div>
      <div
        style={{
          visibility: 'hidden',
          opacity: '0',
        }}
        ref={overlayRef}
        className={overlayClasses}
      ></div>
      <div ref={containerRef} className={containerClasses}>
        <div
          onClick={() => {
            setDrawerIsOpened(false);
          }}
          className='absolute  right-5  top-4  size-[21px]  cursor-pointer
                     sm:hidden'
        >
          <div
            className='absolute  left-1/2  top-1/2  h-[2px]  w-[27px]  -translate-x-1/2
                       -translate-y-1/2  rotate-45  bg-black  dark:bg-white'
          ></div>
          <div
            className='absolute  left-1/2  top-1/2  h-[2px]  w-[27px]  -translate-x-1/2
                       -translate-y-1/2  -rotate-45  bg-black  dark:bg-white'
          ></div>
        </div>
        <MainContainer className='pt-16'>
          <Image
            className='mx-auto  w-1/2  rounded-t-lg'
            alt='Master English with Sherlock Holmes cover'
            src={bookCover}
          />
          <hr
            className='w-full  border-t  border-gray-light
                     dark:border-gray-dark'
          />
          <H2
            className={`mb-6  mt-7  ${libreBaskerville.className}  !leading-snug`}
          >
            Try demo of the book
            <br /> for free
          </H2>

          <EmailForm
            requestCallback={async (email: string, token: string) => {
              // await axios.post(LOGIN_ROUTE, {
              //   email,
              //   captchaToken: token,
              //   readerName: process.env.NEXT_PUBLIC_HONEYPOT_KEY,
              // });
              console.log(email, token);
            }}
            label='Get link to demo by email:'
            inputId='demo-email'
            inputName='email'
            labelClasses={`${merriweather.className}  !font-normal`}
            inputClasses={`border-[#CFCFCF]  dark:border-gray-dark-lighter2  ${merriweather.className}`}
            buttonClasses='border-[#CFCFCF]  dark:border-gray-dark-lighter2'
            inputFocusedClasses='!border-[#000000]  dark:!border-[#FFFFFF]'
            buttonInputFocusedClasses='!border-[#000000]  dark:!border-[#FFFFFF]'
            buttonInputFilledClasses='bg-black  dark:bg-white'
            buttonInputEmptyClasses='bg-[#CFCFCF]  dark:bg-gray-dark-lighter2'
            changeArrowColorInDarkMode
            spinnerIconsClasses='dark:!text-black'
          />
        </MainContainer>
      </div>
    </div>
  );
}

export default TryDemoDrawer;
