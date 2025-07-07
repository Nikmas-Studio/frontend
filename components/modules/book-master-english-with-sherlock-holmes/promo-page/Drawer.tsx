'use client';

import BasicTextNode from '@/components/elements/BasicTextNode';
import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI } from '@/constants/general';
import {
  usePromoDrawer,
  usePromoDrawerDispatch,
} from '@/context/book-master-english-with-sherlock-holmes/promo-drawer/Context';
import { useBookState } from '@/context/book-state/Context';
import { useSession } from '@/context/session/Context';
import { libreBaskerville, merriweather } from '@/fonts';
import useOutsideClick from '@/hooks/use-outside-click';
import bookCover from '@/public/images/book-cover-master-english-with-sherlock-holmes.jpg';
import { bookIsBought, BookState } from '@/types/book-state';
import { purchaseBook } from '@/utils/purchase-book-route';
import CircularProgress from '@mui/material/CircularProgress';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { setTimeout } from 'timers';
import EmailForm from '../../EmailForm';

function PromoDrawer(): ReactElement {
  const { drawerIsOpened } = usePromoDrawer();
  const lastOpenedDrawer = useRef<'demo' | 'subscription' | null>(null);
  const { setDrawerIsOpened } = usePromoDrawerDispatch();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { session, loading: sessionStateIsLoading } = useSession();
  // const session = 'loaded';
  // const sessionStateIsLoading = false;

  const { bookState } = useBookState();
  // const bookState: BoughtState = {
  //   paidUntil: '07.07.2026',
  //   subscriptionIsActive: true,
  // };

  const [paymentPageIsGenerating, setPaymentPageIsGenerating] = useState(false);
  const [paymentPageGenerationError, setPaymentPageGenerationError] =
    useState(false);

  useEffect(() => {
    if (drawerIsOpened !== null) {
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
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        if (drawerIsOpened !== null) {
          setDrawerIsOpened(null);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerIsOpened, setDrawerIsOpened]);

  useEffect(() => {
    if (drawerIsOpened !== null) {
      lastOpenedDrawer.current = drawerIsOpened;
    }
  }, [drawerIsOpened]);

  useEffect(() => {
    function handleResize(): void {
      if (drawerIsOpened !== null) {
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
    if (drawerIsOpened !== null) {
      setDrawerIsOpened(null);
    }
  });

  const overlayClasses = classNames(
    `fixed  inset-0  z-[9999]  bg-white  dark:bg-black  lg:bg-black  
     dark:lg:bg-black  transition-opacity  duration-[400ms]`,
    {
      'lg:opacity-20': drawerIsOpened !== null,
      'lg:opacity-0  pointer-events-none': drawerIsOpened === null,
    },
  );

  const containerClasses = classNames(
    `fixed  h-dvh  inset-0  z-[99999]  w-screen  overflow-y-scroll  overflow-x-hidden
     transition-all  duration-[400ms]  bg-white  lg:h-auto  lg:inset-auto
     lg:bottom-0  lg:left-0  lg:right-0  dark:lg:border-t  dark:lg:border-gray-dark  dark:bg-black`,
    {
      'translate-y-0': drawerIsOpened !== null,
      'translate-y-[110dvh]': drawerIsOpened === null,
    },
  );

  const imageClasses = classNames(
    `mx-auto  w-1/2  max-w-64  rounded-t-lg  lg:rounded-b-lg`,
    {
      'lg:w-44': isDemoDrawer(),
      'lg:w-48': isSubscriptionDrawer() && session === null,
      'lg:w-40': isSubscriptionDrawer() && session !== null,
    },
  );

  function isDemoDrawer(): boolean {
    return (
      drawerIsOpened === 'demo' ||
      (drawerIsOpened === null && lastOpenedDrawer.current === 'demo')
    );
  }

  function isSubscriptionDrawer(): boolean {
    return (
      drawerIsOpened === 'subscription' ||
      (drawerIsOpened === null && lastOpenedDrawer.current === 'subscription')
    );
  }

  function stateIsLoading(): boolean {
    return bookState === BookState.LOADING || sessionStateIsLoading;
  }

  async function handlePurchaseBookAuthenticated(): Promise<void> {
    setPaymentPageIsGenerating(true);

    try {
      const { paymentLink } = await purchaseBook(
        BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI,
      );

      setPaymentPageGenerationError(false);

      window.location.href = paymentLink;
    } catch (error) {
      setPaymentPageGenerationError(true);
    }

    setPaymentPageIsGenerating(false);
  }

  const paymentPageIsGeneratingSpinnerWrapperClasses = classNames(
    'mt-3  self-center',
    {
      hidden: !paymentPageIsGenerating,
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
            setDrawerIsOpened(null);
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
              className={imageClasses}
              alt='Master English with Sherlock Holmes cover'
              src={bookCover}
            />
            <hr
              className='w-full  border-t  border-gray-light  lg:hidden
                     dark:border-gray-dark'
            />
          </div>

          <div>
            {isDemoDrawer() && (
              <>
                <H2
                  className={`my-5  ${libreBaskerville.className}  !leading-snug
                          lg:-mt-1`}
                >
                  Try demo of the book
                  <br /> for free
                </H2>
                <div className='max-w-[400px]'>
                  <EmailForm
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
                    inputClasses={`border-[#CFCFCF]  !font-bold  dark:border-gray-dark-lighter2  ${merriweather.className}`}
                    buttonClasses='border-[#CFCFCF]  dark:border-gray-dark-lighter2'
                    inputFocusedClasses='!border-[#000000]  dark:!border-[#FFFFFF]'
                    buttonInputFocusedClasses='!border-[#000000]  dark:!border-[#FFFFFF]'
                    buttonInputFilledClasses='bg-black  dark:bg-white'
                    buttonInputEmptyClasses='bg-[#CFCFCF]  dark:bg-gray-dark-lighter2'
                    changeArrowColorInDarkMode
                    spinnerIconsClasses='dark:!text-black'
                  />
                </div>
              </>
            )}

            {isSubscriptionDrawer() && (
              <>
                {stateIsLoading() && (
                  <div className='mt-20  flex  justify-center  lg:w-[25rem]'>
                    <CircularProgress className='!text-subscription' />
                  </div>
                )}

                {!stateIsLoading() && (
                  <>
                    {bookIsBought(bookState) && (
                      <>
                        <H2
                          className={`my-5  ${libreBaskerville.className}  !leading-snug
                          lg:-mt-1`}
                        >
                          {bookState.subscriptionIsActive ? (
                            <>Subscription is&nbsp;active</>
                          ) : (
                            <>Subscription is&nbsp;canceled</>
                          )}
                        </H2>

                        <div className='flex  items-center  justify-start  overflow-x-scroll'>
                          <div
                            className='border-r  border-gray-light  pb-6  
                                       pr-8  pt-4  dark:border-gray-dark'
                          >
                            <BasicTextNode
                              className={`leading-[3.43rem]  ${libreBaskerville.className}  text-xl`}
                            >
                              <span className='text-[3.43rem]'>$23</span>
                              /year
                            </BasicTextNode>
                            <TextNode
                              id='sherlock-promo-subs-price'
                              className='!mb-0  mt-[-0.3rem]  !text-base'
                            >
                              With auto-renewal
                            </TextNode>
                          </div>
                          <div className='pl-4'>
                            <BasicTextNode
                              className={`-translate-y-2.5  text-[1.375rem]  
                                          leading-normal  ${libreBaskerville.className}`}
                            >
                              <span className='font-bold'>Paid until:</span>
                              <br />
                              {bookState.paidUntil}
                            </BasicTextNode>
                          </div>
                        </div>
                      </>
                    )}

                    {!bookIsBought(bookState) && (
                      <>
                        <div className='mb-6  mt-10  lg:mt-4'>
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
                          {session === null && (
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
                              label='Get the payment link by&nbsp;email:'
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
                          )}
                          {session !== null && (
                            <div className='flex  w-[220px]  flex-col  items-start'>
                              <button
                                onClick={handlePurchaseBookAuthenticated}
                                className='button  w-full  bg-subscription  text-white  
                              hover:bg-subscription-darker'
                              >
                                Proceed to payment
                              </button>
                              <div
                                className={
                                  paymentPageIsGeneratingSpinnerWrapperClasses
                                }
                              >
                                <CircularProgress className='!size-[20px]  !text-subscription' />
                              </div>
                              {paymentPageGenerationError && (
                                <BasicTextNode className='mt-3  text-red-600'>
                                  An error occurred. Please try again.
                                </BasicTextNode>
                              )}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </MainContainer>
      </div>
    </div>
  );
}

export default PromoDrawer;
