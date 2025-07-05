'use client';

import BasicTextNode from '@/components/elements/BasicTextNode';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import {
  useSubscriptionDrawer,
  useSubscriptionDrawerDispatch,
} from '@/context/book-master-english-with-sherlock-holmes/subscription-drawer/Context';
import { libreBaskerville, merriweather } from '@/fonts';
import useOutsideClick from '@/hooks/use-outside-click';
import bookCover from '@/public/images/book-cover-master-english-with-sherlock-holmes.jpg';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useEffect, useRef } from 'react';
import { setTimeout } from 'timers';
import EmailForm from '../../EmailForm';

function SubscriptionDrawer(): ReactElement {
  const { drawerIsOpened } = useSubscriptionDrawer();
  const { setDrawerIsOpened } = useSubscriptionDrawerDispatch();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (drawerIsOpened) {
      if (containerRef.current !== null) {
        containerRef.current.style.visibility = 'visible';
      }

      if (window.innerWidth < 1024) {
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
      }

      if (overlayRef.current) {
        if (window.innerWidth < 1024) {
          overlayRef.current.style.visibility = '';
          overlayRef.current.style.opacity = '1';
        } else {
          overlayRef.current.style.visibility = '';
          overlayRef.current.style.opacity = '';
        }
      }
    } else {
      let scrollY = '';
      if (window.innerWidth < 1024) {
        scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
      }

      setTimeout(() => {
        if (window.innerWidth < 1024) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (overlayRef.current) {
              if (window.innerWidth < 1024) {
                overlayRef.current.style.opacity = '0';
              } else {
                overlayRef.current.style.opacity = '';
              }
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

  useEffect(() => {
    function handleResize(): void {
      if (drawerIsOpened) {
        if (window.innerWidth >= 1024) {
          if (overlayRef.current) {
            overlayRef.current.style.opacity = '';
          }

          if (document.body.style.position === 'fixed') {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
          }
        } else {
          if (document.body.style.position !== 'fixed') {
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.position = 'fixed';
          }
        }
      } else {
        if (window.innerWidth < 1024) {
          if (overlayRef.current) {
            overlayRef.current.style.opacity = '0';
          }
        }
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [drawerIsOpened]);

  useOutsideClick([containerRef], () => {
    if (drawerIsOpened) {
      setDrawerIsOpened(false);
    }
  });

  const overlayClasses = classNames(
    `fixed  inset-0  z-[99]  bg-white  dark:bg-black  lg:bg-black  
     dark:lg:bg-black  transition-opacity  duration-[400ms]`,
    {
      'lg:opacity-20': drawerIsOpened,
      'lg:opacity-0  pointer-events-none': !drawerIsOpened,
    },
  );

  const containerClasses = classNames(
    `fixed  h-dvh  inset-0  z-[999]  w-screen  overflow-y-scroll  overflow-x-hidden
     transition-all  duration-[400ms]  bg-white  lg:h-auto  lg:inset-auto
     lg:bottom-0  lg:left-0  lg:right-0  dark:lg:border-t  dark:lg:border-gray-dark  dark:bg-black`,
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
                     lg:hidden'
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
        <MainContainer
          className='pb-24  pt-16  lg:flex  lg:flex-row-reverse  
                     lg:justify-between  lg:pb-14  lg:pt-7'
        >
          <div>
            <Image
              className='mx-auto  w-1/2  max-w-64  rounded-t-lg  
                         lg:w-48  lg:rounded-b-lg'
              alt='Master English with Sherlock Holmes cover'
              src={bookCover}
            />
            <hr
              className='w-full  border-t  border-gray-light  lg:hidden
                     dark:border-gray-dark'
            />
          </div>

          <div>
            {/* <H2
              className={`mb-6  mt-7  ${libreBaskerville.className}  !leading-snug
                          lg:mt-0`}
            >
              Subscription
            </H2> */}

            <div className='mb-6  mt-10  lg:mt-5'>
              <BasicTextNode
                className={`${libreBaskerville.className}  text-xl`}
              >
                <span className='text-[3.43rem]'>$23</span>
                /year
              </BasicTextNode>
              <TextNode
                id='sherlock-promo-subs-price'
                className='!mb-0  mt-2  !text-base'
              >
                With auto-renewal
              </TextNode>
            </div>

            <div className='max-w-[400px]'>
              {/* <EmailForm
                requestCallback={async (email: string, token: string) => {
                  // await axios.post(LOGIN_ROUTE, {
                  //   email,
                  //   captchaToken: token,
                  //   readerName: process.env.NEXT_PUBLIC_HONEYPOT_KEY,
                  // });
                  console.log(email, token);
                }}
                label='Get the demo link by email:'
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
              /> */}
              <EmailForm
                requestCallback={async (email, token) => {
                  // await axios.post(PAYMENT_ROUTE_GUEST, {
                  //   email,
                  //   bookURI: BOOK_MASTER_GIT_AND_GITHUB_URI,
                  //   captchaToken: token,
                  //   readerName: process.env.NEXT_PUBLIC_HONEYPOT_KEY,
                  // });
                  console.log(email, token);
                }}
                label='Get payment link by&nbsp;email:'
                caption='This&nbsp;email will&nbsp;be&nbsp;used as&nbsp;a&nbsp;key to&nbsp;your&nbsp;library'
                inputId='sherlock-payment-email'
                inputName='email'
                inputClasses={`border-subscription  ${merriweather.className}  !font-bold`}
                buttonClasses='border-subscription'
                labelClasses={`${merriweather.className}  !font-normal`}
                inputFocusedClasses='[box-shadow:0_0_0_2px_#29AD04]'
                buttonInputFocusedClasses='[box-shadow:0_0_0_2px_#29AD04]'
                buttonInputFilledClasses='bg-subscription'
                buttonInputEmptyClasses='bg-[#CFCFCF]  dark:bg-gray-dark-lighter2'
                tickIconClasses='!fill-white'
                reloadIconClasses='!fill-white'
                spinnerIconsClasses='dark:!text-white'
              />
            </div>
          </div>
        </MainContainer>
      </div>
    </div>
  );
}

export default SubscriptionDrawer;
