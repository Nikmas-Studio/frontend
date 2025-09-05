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
import { PromoCodeState } from '@/types/promo-code';
import { cancelSubscription } from '@/utils/cancel-subscription';
import { checkPromoCodeValidityApi } from '@/utils/check-promo-code-validity-route';
import { formatDate } from '@/utils/format-date';
import { getBookPriceWithPromoCode } from '@/utils/get-book-price-with-promo-code';
import { getDemoLink } from '@/utils/get-demo-link-route';
import { purchaseBookAuthenticated } from '@/utils/purchase-book-authenticated-route';
import { purchaseBookGuest } from '@/utils/purchase-book-guest-route';
import { resumeSubscription } from '@/utils/resume-subscription';
import CircularProgress from '@mui/material/CircularProgress';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { setTimeout } from 'timers';
import EmailForm from '../../EmailForm';
import ProceedToPayment from './ProceedToPayment';

function PromoDrawer(): ReactElement {
  const { drawerIsOpened } = usePromoDrawer();
  const lastOpenedDrawer = useRef<'demo' | 'subscription' | null>(null);
  const { setDrawerIsOpened } = usePromoDrawerDispatch();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const nestedOverlayRef = useRef<HTMLDivElement | null>(null);
  const nestedModalContainerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [nestedModalIsOpened, setNestedModalIsOpened] = useState(false);
  const [promoCodeState, setPromoCodeState] = useState(PromoCodeState.DEFAULT);
  const [promoCode, setPromoCode] = useState('');

  const { session, loading: sessionStateIsLoading } = useSession();

  const { bookState } = useBookState();

  const [paymentPageIsGenerating, setPaymentPageIsGenerating] = useState(false);
  const [paymentPageGenerationError, setPaymentPageGenerationError] =
    useState(false);

  const [cancelSubscriptionIsProcessing, setCancelSubscriptionIsProcessing] =
    useState(false);

  const [cancelSubscriptionError, setCanncelSubscriptionError] =
    useState(false);

  const [showSubscriptionIsCanceled, setShowSubscriptionIsCanceled] =
    useState(false);

  const subscriptionIsCanceledHeadingRef = useRef<HTMLHeadingElement | null>(
    null,
  );

  const [subscribeAgainIsProcessing, setSubscribeAgainIsProcessing] =
    useState(false);

  const [subscribeAgainError, setSubscribeAgainError] = useState(false);

  const youAreSubscribedHeadingRef = useRef<HTMLHeadingElement | null>(null);

  const [showYouAreSubscribed, setShowYouAreSubscribed] = useState(false);

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
    if (nestedModalIsOpened) {
      if (nestedModalContainerRef.current !== null) {
        nestedModalContainerRef.current.style.visibility = 'visible';
      }

      if (nestedOverlayRef.current) {
        if (window.innerWidth < 1024) {
          nestedOverlayRef.current.style.visibility = '';
          nestedOverlayRef.current.style.opacity = '1';
        } else {
          nestedOverlayRef.current.style.visibility = '';
          nestedOverlayRef.current.style.opacity = '';
        }
      }
    } else {
      setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (nestedOverlayRef.current) {
              if (window.innerWidth < 1024) {
                nestedOverlayRef.current.style.opacity = '0';
              } else {
                nestedOverlayRef.current.style.opacity = '';
              }
            }
          });
        });
      }, 200);

      setTimeout(() => {
        if (nestedModalContainerRef.current !== null) {
          nestedModalContainerRef.current.style.visibility = 'hidden';
        }
      }, 500);
    }
  }, [nestedModalIsOpened]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        if (drawerIsOpened !== null) {
          if (nestedModalIsOpened) {
            return;
          }
          setDrawerIsOpened(null);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerIsOpened, setDrawerIsOpened, nestedModalIsOpened]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        if (nestedModalIsOpened) {
          setNestedModalIsOpened(false);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nestedModalIsOpened, setNestedModalIsOpened]);

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

      if (nestedModalIsOpened) {
        if (window.innerWidth >= 1024) {
          if (nestedOverlayRef.current) {
            nestedOverlayRef.current.style.opacity = '';
          }
        }
      } else {
        if (window.innerWidth < 1024) {
          if (nestedOverlayRef.current) {
            nestedOverlayRef.current.style.opacity = '0';
          }
        }
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [drawerIsOpened, nestedModalIsOpened]);

  useOutsideClick([containerRef], () => {
    if (drawerIsOpened !== null) {
      if (nestedModalIsOpened) {
        return;
      }

      setDrawerIsOpened(null);
    }
  });

  useOutsideClick([nestedModalContainerRef], () => {
    if (nestedModalIsOpened) {
      setNestedModalIsOpened(false);
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

  const nestedOverlayClasses = classNames(
    `fixed  inset-0  z-[999999]  bg-white  dark:bg-black  lg:bg-black  
     dark:lg:bg-black  transition-opacity  duration-[400ms]`,
    {
      'lg:opacity-60': nestedModalIsOpened,
      'lg:opacity-0  pointer-events-none': !nestedModalIsOpened,
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

  const nestedModalContainerClasses = classNames(
    `fixed  h-dvh  inset-0  z-[9999999]  w-screen  overflow-y-scroll  overflow-x-hidden
     transition-all  duration-[400ms]  bg-white  lg:h-auto  lg:inset-auto
     lg:left-1/2  lg:-translate-x-1/2  lg:top-1/2  lg:-translate-y-1/2
     lg:max-w-[40rem]  lg:rounded-[20px]
     dark:lg:border  dark:lg:border-gray-dark  dark:bg-black`,
    {
      'translate-y-0  opacity-1': nestedModalIsOpened,
      'translate-y-[110dvh]  opacity-0  pointer-events-none':
        !nestedModalIsOpened,
      'lg:!h-[25.125rem]': showSubscriptionIsCanceled,
      'lg:!h-[19.875rem]': showYouAreSubscribed,
    },
  );

  const imageClasses = classNames(
    `mx-auto  w-1/2  max-w-64  rounded-t-lg  lg:rounded-b-lg`,
    {
      'lg:w-44': isDemoDrawer(),
      'lg:w-[15.3rem]': isSubscriptionDrawer() && session === null,
      'lg:w-[10.5rem]':
        isSubscriptionDrawer() && session !== null && bookIsBought(bookState),
      'lg:w-[12.2rem]':
        isSubscriptionDrawer() && session !== null && !bookIsBought(bookState),
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

  async function handlePurchaseBookAuthenticated(
    promoCode: string | null,
  ): Promise<void> {
    setPaymentPageIsGenerating(true);

    try {
      const { paymentLink } = await purchaseBookAuthenticated(
        BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI,
        promoCode,
      );

      setPaymentPageGenerationError(false);

      window.location.href = paymentLink;
    } catch (error) {
      setPaymentPageGenerationError(true);
    }

    setPaymentPageIsGenerating(false);
  }

  async function handleCancelSubscription(): Promise<void> {
    setCancelSubscriptionIsProcessing(true);

    let errorOccurred = false;
    try {
      await cancelSubscription(BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI);

      setCanncelSubscriptionError(false);
    } catch (error) {
      errorOccurred = true;
      setCanncelSubscriptionError(true);
    }

    if (!errorOccurred) {
      if (nestedModalContainerRef.current !== null) {
        nestedModalContainerRef.current.style.opacity = '0';
      }

      setTimeout(() => {
        setShowSubscriptionIsCanceled(true);

        setTimeout(() => {
          if (nestedModalContainerRef.current !== null) {
            nestedModalContainerRef.current.style.opacity = '1';
          }

          if (subscriptionIsCanceledHeadingRef.current !== null) {
            subscriptionIsCanceledHeadingRef.current.style.opacity = '1';
          }

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }, 100);
      }, 400);
    } else {
      setCancelSubscriptionIsProcessing(false);
    }
  }

  async function handleSubscribeAgain(): Promise<void> {
    setSubscribeAgainIsProcessing(true);

    let errorOccurred = false;
    try {
      await resumeSubscription(BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI);

      setSubscribeAgainError(false);
    } catch (error) {
      errorOccurred = true;
      setSubscribeAgainError(true);
    }

    if (!errorOccurred) {
      if (nestedModalContainerRef.current !== null) {
        nestedModalContainerRef.current.style.opacity = '0';
      }

      setTimeout(() => {
        setShowYouAreSubscribed(true);

        setTimeout(() => {
          if (nestedModalContainerRef.current !== null) {
            nestedModalContainerRef.current.style.opacity = '1';
          }
          if (youAreSubscribedHeadingRef.current !== null) {
            youAreSubscribedHeadingRef.current.style.opacity = '1';
          }

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }, 100);
      }, 400);
    } else {
      setSubscribeAgainIsProcessing(false);
    }
  }

  const paymentPageIsGeneratingSpinnerWrapperClasses = classNames(
    'mt-3  self-center',
    {
      hidden: !paymentPageIsGenerating,
    },
  );

  const cancelSubscriptionIsProcessingSpinnerWrapperClasses = classNames(
    'mt-3  self-center',
    {
      hidden: !cancelSubscriptionIsProcessing,
    },
  );

  const subscribeAgainIsProcessingSpinnerWrapperClasses = classNames(
    'mt-3  self-center',
    {
      hidden: !subscribeAgainIsProcessing,
    },
  );

  return (
    <div>
      {bookIsBought(bookState) && (
        <div>
          <div
            ref={nestedOverlayRef}
            style={{
              visibility: 'hidden',
              opacity: '0',
            }}
            className={nestedOverlayClasses}
          ></div>
          <div
            ref={nestedModalContainerRef}
            className={nestedModalContainerClasses}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                setNestedModalIsOpened(false);
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
              className={classNames(
                'max-w-[35rem]  pb-24  pt-16  lg:pb-14  lg:pt-7',
                {
                  'h-full  flex  flex-col  justify-center':
                    showSubscriptionIsCanceled || showYouAreSubscribed,
                },
              )}
            >
              {showSubscriptionIsCanceled && (
                <H2
                  ref={subscriptionIsCanceledHeadingRef}
                  className={`${libreBaskerville.className}  -translate-y-12  opacity-0  
                              transition-opacity  duration-1000  lg:-translate-y-4`}
                >
                  Your subscription to&nbsp;
                  <span className='font-normal  italic'>
                    “Master English with Sherlock Holmes”
                  </span>{' '}
                  is canceled
                </H2>
              )}
              {showYouAreSubscribed && (
                <H2
                  ref={youAreSubscribedHeadingRef}
                  className={`${libreBaskerville.className}  -translate-y-12  opacity-0  
                              transition-opacity  duration-1000  lg:-translate-y-4`}
                >
                  You successfully subscribed to&nbsp;
                  <span className='font-normal  italic'>
                    “Master English with Sherlock Holmes”
                  </span>{' '}
                </H2>
              )}
              {bookState.subscriptionIsActive &&
                !showSubscriptionIsCanceled && (
                  <>
                    <H2
                      ref={subscriptionIsCanceledHeadingRef}
                      className={`mb-5  ${libreBaskerville.className}`}
                    >
                      Are you sure you want to cancel subscription to&nbsp;
                      <span className='font-normal  italic'>
                        “Master English with Sherlock Holmes”?
                      </span>
                    </H2>
                    <TextNode className='mb-7'>
                      You’ll have access to the book until&nbsp;
                      <span className='italic'>
                        {formatDate(new Date(bookState.paidUntil!))}
                      </span>
                      . Whenever you wish, you’ll be able to start your
                      subscription again.
                    </TextNode>
                    <div className='flex  items-start  gap-6'>
                      <div className='flex  w-[9.1rem]  flex-col'>
                        <button
                          onClick={handleCancelSubscription}
                          className={classNames(
                            `button  ${merriweather.className}  border  border-red-600  bg-transparent
                                 text-red-600  hover:bg-red-600  hover:text-white`,
                            {
                              'pointer-events-none':
                                cancelSubscriptionIsProcessing,
                            },
                          )}
                        >
                          Yes, cancel
                        </button>
                        <div
                          className={
                            cancelSubscriptionIsProcessingSpinnerWrapperClasses
                          }
                        >
                          <CircularProgress className='!size-[20px]  !text-red-600' />
                        </div>
                        {cancelSubscriptionError && (
                          <BasicTextNode className='mt-3  text-red-600'>
                            An error occurred. Please try again.
                          </BasicTextNode>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          setNestedModalIsOpened(false);
                        }}
                        className={`button  ${merriweather.className}   
                               bg-black  text-white
                               hover:bg-blue  dark:bg-white
                               dark:text-black dark:hover:text-white`}
                      >
                        No, keep it
                      </button>
                    </div>
                  </>
                )}
              {!bookState.subscriptionIsActive && !showYouAreSubscribed && (
                <>
                  <H2
                    ref={youAreSubscribedHeadingRef}
                    className={`mb-5  ${libreBaskerville.className}`}
                  >
                    Subscribe again to&nbsp;
                    <span className='font-normal  italic'>
                      “Master English with Sherlock Holmes”
                    </span>
                  </H2>
                  <TextNode className='mb-7'>
                    You have a paid period until&nbsp;
                    <span className='italic'>
                      {formatDate(new Date(bookState.paidUntil!))}
                    </span>
                    . Once it ends, the next payment will be charged
                    automatically.
                  </TextNode>
                  <div className='flex  flex-wrap  items-start  gap-x-6  gap-y-5'>
                    <div className='flex  w-[14.12rem]  flex-col'>
                      <button
                        onClick={handleSubscribeAgain}
                        className={classNames(
                          `button  bg-subscription  text-white  
                                  hover:bg-subscription-darker
                                  ${merriweather.className}`,
                          {
                            'pointer-events-none': subscribeAgainIsProcessing,
                          },
                        )}
                      >
                        Yes, subscribe again
                      </button>
                      <div
                        className={
                          subscribeAgainIsProcessingSpinnerWrapperClasses
                        }
                      >
                        <CircularProgress className='!size-[20px]  !text-subscription' />
                      </div>
                      {subscribeAgainError && (
                        <BasicTextNode className='mt-3  text-red-600'>
                          An error occurred. Please try again.
                        </BasicTextNode>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        setNestedModalIsOpened(false);
                      }}
                      className={`button  ${merriweather.className}   
                                  border  border-gray-light
                                  bg-transparent  font-normal  text-black
                                  hover:bg-gray-light dark:border-gray-dark
                                  dark:text-white  dark:hover:bg-gray-dark
                               `}
                    >
                      No, stay unsubscribed
                    </button>
                  </div>
                </>
              )}
            </MainContainer>
          </div>
        </div>
      )}
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
          className={`absolute  right-5  top-4  size-[21px]  cursor-pointer
                     lg:hidden`}
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
          <div
            className={`${classNames({
              'self-end': !bookIsBought(bookState),
            })}`}
          >
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
                  Try the book demo
                  <br /> for free
                </H2>
                <div className='max-w-[400px]'>
                  <EmailForm
                    requestCallback={async (email: string, token: string) => {
                      await getDemoLink({
                        bookURI: BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI,
                        email,
                        captchaToken: token,
                      });
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
                              <span className='text-[3.43rem]'>
                                ${bookState.bookPrice}
                              </span>
                              /year
                            </BasicTextNode>
                            <TextNode className='!mb-0  mt-[-0.3rem]  !text-base'>
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
                              {bookState.paidUntil === undefined
                                ? '∞'
                                : formatDate(new Date(bookState.paidUntil))}
                            </BasicTextNode>
                          </div>
                        </div>
                        {bookState.subscriptionIsActive && (
                          <button
                            onClick={() => {
                              if (bookState.paidUntil === undefined) {
                                return;
                              }

                              setNestedModalIsOpened(true);
                            }}
                            className={classNames(
                              `button  mt-5  border  border-gray-light
                                       bg-transparent  text-black  ${merriweather.className}
                                       !font-normal  !outline-none  !ring-0
                                       hover:bg-gray-light  dark:border-gray-dark
                                       dark:text-white 
                                       dark:hover:bg-gray-dark`,
                              {
                                '!pointer-events-none  !text-gray-400  dark:!text-gray-500':
                                  bookState.paidUntil === undefined,
                              },
                            )}
                          >
                            Cancel subscription
                          </button>
                        )}
                        {!bookState.subscriptionIsActive && (
                          <button
                            onClick={() => {
                              setNestedModalIsOpened(true);
                            }}
                            className={`button  mt-5  ${merriweather.className}  bg-subscription 
                                        text-white  !outline-none
                                       !ring-0  hover:bg-subscription-darker`}
                          >
                            Subscribe again
                          </button>
                        )}
                      </>
                    )}

                    {!bookIsBought(bookState) && (
                      <>
                        <div className='mb-7'>
                          <H2
                            className={`mb-10  mt-5  ${libreBaskerville.className}  !leading-snug
                          lg:-mt-1`}
                          >
                            Get the payment link by email
                          </H2>
                          <div className='flex  gap-4'>
                            <div>
                              <BasicTextNode
                                className={`${libreBaskerville.className}  text-xl`}
                              >
                                <span className='text-[3.43rem]'>
                                  $
                                  {promoCodeState === PromoCodeState.VALID
                                    ? getBookPriceWithPromoCode(promoCode)
                                    : 27}
                                </span>
                                /year
                              </BasicTextNode>
                              <TextNode className='!mb-0  mt-2  !text-base'>
                                With auto-renewal.
                              </TextNode>
                              <TextNode className='!mb-0  mt-[2px]  !text-base'>
                                Cancel any time
                              </TextNode>
                            </div>
                            <div
                              className={`${classNames({
                                hidden: promoCodeState !== PromoCodeState.VALID,
                                block: promoCodeState === PromoCodeState.VALID,
                              })}`}
                            >
                              <BasicTextNode
                                className={`relative  ${libreBaskerville.className}  mt-[0.26rem]  text-3xl  text-[#9C9C9C]  dark:text-[#7B7B7B]`}
                              >
                                $23
                                <span className='absolute  left-[-19%]  top-1/2  h-px  w-[140%]  rotate-[-30deg]   bg-black  dark:bg-white'></span>
                              </BasicTextNode>
                            </div>
                          </div>
                        </div>

                        <div className='max-w-[400px]'>
                          {session === null && (
                            <EmailForm
                              promoCode={promoCode}
                              setPromoCode={setPromoCode}
                              withPromoCode
                              requestCallback={async (
                                email,
                                token,
                                promoCode,
                              ) => {
                                await purchaseBookGuest({
                                  email,
                                  captchaToken: token,
                                  bookURI:
                                    BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI,
                                  promoCode,
                                });
                              }}
                              checkPromoCodeValidity={async (promoCode) => {
                                const { isValid } =
                                  await checkPromoCodeValidityApi(promoCode);

                                return {
                                  valid: isValid,
                                };
                              }}
                              caption='This&nbsp;email will&nbsp;be&nbsp;used as&nbsp;a&nbsp;key to&nbsp;your&nbsp;library'
                              inputId='sherlock-payment-email'
                              inputName='email'
                              inputClasses={`border-subscription  ${merriweather.className}  !font-bold`}
                              promoCodeInputClasses={`${merriweather.className}  border-[#CFCFCF]  dark:border-gray-dark-lighter2  !font-normal`}
                              promoCodeIsInvalidInputClasses='!border-red-600'
                              promoCodeIsValidInputClasses='!border-subscription'
                              promoCodeState={promoCodeState}
                              setPromoCodeState={setPromoCodeState}
                              buttonClasses='border-subscription'
                              labelClasses={`${merriweather.className}  !font-normal`}
                              inputFocusedClasses='[box-shadow:0_0_0_2px_#29AD04]'
                              promoCodeInputFocusedClasses='!border-[#000000]  dark:!border-[#FFFFFF]'
                              buttonInputFocusedClasses='[box-shadow:0_0_0_2px_#29AD04]'
                              buttonInputFilledClasses='bg-subscription'
                              buttonInputEmptyClasses='bg-[#CFCFCF]  dark:bg-gray-dark-lighter2'
                              tickIconClasses='!fill-white'
                              reloadIconClasses='!fill-white'
                              spinnerIconsClasses='dark:!text-white'
                            />
                          )}
                          {session !== null && (
                            <ProceedToPayment
                              promoCode={promoCode}
                              setPromoCode={setPromoCode}
                              handlePurchaseBookAuthenticated={
                                handlePurchaseBookAuthenticated
                              }
                              paymentPageIsGenerating={paymentPageIsGenerating}
                              paymentPageGenerationError={
                                paymentPageGenerationError
                              }
                              paymentPageIsGeneratingSpinnerWrapperClasses={
                                paymentPageIsGeneratingSpinnerWrapperClasses
                              }
                              promoCodeInputClasses={`${merriweather.className}  border-[#CFCFCF]  dark:border-gray-dark-lighter2  !font-normal`}
                              promoCodeInputFocusedClasses='!border-[#000000]  dark:!border-[#FFFFFF]'
                              promoCodeIsInvalidInputClasses='!border-red-600'
                              promoCodeIsValidInputClasses='!border-subscription'
                              promoCodeState={promoCodeState}
                              setPromoCodeState={setPromoCodeState}
                              checkPromoCodeValidity={async (promoCode) => {
                                const { isValid } =
                                  await checkPromoCodeValidityApi(promoCode);

                                return {
                                  valid: isValid,
                                };
                              }}
                            />
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
