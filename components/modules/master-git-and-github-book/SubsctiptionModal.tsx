'use client';

import BasicTextNode from '@/components/elements/BasicTextNode';
import H2 from '@/components/elements/H2';
import TextLi from '@/components/elements/TextLi';
import TextNode from '@/components/elements/TextNode';
import TextUl from '@/components/elements/TextUl';
import {
  useSubscriptionModal,
  useSubscriptionModalDispatch,
} from '@/context/subscription-modal/Context';
import useOutsideClick from '@/hooks/use-outside-click';
import classNames from 'classnames';
import { ReactElement, useEffect, useRef } from 'react';

interface SubscriptionModalProps {
  formInputId: string;
  fixBody?: boolean;
  isAuthenticated: boolean;
}

function SubscriptionModal({
  // formInputId,
  fixBody = true,
  // isAuthenticated,
}: SubscriptionModalProps): ReactElement {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalCoverRef = useRef<HTMLDivElement>(null);
  const { subscriptionModalIsOpened } = useSubscriptionModal();
  const { setSubscriptionModalIsOpened } = useSubscriptionModalDispatch();

  useOutsideClick([modalRef], () => {
    setSubscriptionModalIsOpened(false);
  });

  useEffect(() => {
    const modalCover = modalCoverRef.current!;
    const modal = modalRef.current!;

    if (!subscriptionModalIsOpened) {
      if (window.innerWidth < 640) {
        const scrollY = document.body.style.top;

        if (fixBody) {
          document.body.style.position = '';
          document.body.style.top = '';
        }

        setTimeout(() => {
          if (fixBody) {
            if (parseInt(scrollY || '0') !== 0) {
              window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
          }
          modalCover.classList.remove('!opacity-100');
          modalCover.classList.remove('!opacity-20');
          modalCover.classList.add('pointer-events-none');
        }, 200);
      } else {
        modalCover.classList.remove('!opacity-20');
        modalCover.classList.remove('!opacity-100');
        modalCover.classList.add('pointer-events-none');
      }

      setTimeout(() => {
        modal.scrollTo(0, 0);
      }, 500);
    } else {
      if (window.innerWidth < 640) {
        if (fixBody) {
          document.body.style.top = `-${window.scrollY}px`;
          document.body.style.position = 'fixed';
        }

        modalCover.classList.add('!opacity-100');
      } else {
        modalCover.classList.add('!opacity-20');
        modalCover.classList.remove('pointer-events-none');
      }
    }

    function handleResize(): void {
      if (window.innerWidth >= 640 && subscriptionModalIsOpened) {
        modalCover.classList.remove('transition-opacity');
        modalCover.classList.remove('!opacity-100');
        modalCover.classList.add('!opacity-20');
        modalCover.classList.add('transition-opacity');

        if (fixBody) {
          const scrollY = document.body.style.top;
          document.body.style.position = '';
          document.body.style.top = '';
          if (parseInt(scrollY || '0') !== 0) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
          }
        }
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [subscriptionModalIsOpened, fixBody]);

  const modalClasses = classNames(
    `transition-transform  !duration-500  fixed  inset-0  z-[2000]  !overflow-y-auto
     bg-white  px-5  pt-12  dark:bg-black  sm:left-auto  scrollbar-hidden
     sm:px-9  sm:pt-10  sm:dark:border-l  sm:dark:border-gray-dark
     `,
    {
      'translate-x-0': subscriptionModalIsOpened,
      'translate-x-full': !subscriptionModalIsOpened,
    },
  );

  return (
    <div>
      <div
        ref={modalCoverRef}
        className='pointer-events-none  fixed  inset-0  z-[1000]  h-screen 
                   w-screen
                 bg-white  opacity-0  transition-opacity  !duration-300  
                 sm:bg-black  dark:bg-black'
      ></div>
      <div ref={modalRef} className={modalClasses}>
        <div
          onClick={() => {
            setSubscriptionModalIsOpened(false);
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
        <H2 className='mb-8  !text-subscription'>Early access</H2>
        <ul>
          <li>
            <TextNode className='max-w-72'>
              <strong className='font-black'>
                Read “Master Git & Github: From&nbsp;Everyday Tasks to&nbsp;Deep
                Waters”
              </strong>{' '}
              as&nbsp;we gradually publish new sections of&nbsp;the&nbsp;book
            </TextNode>
          </li>
          <li>
            <TextNode className='!text-2xl  font-light'>+</TextNode>
          </li>
          <li>
            <TextNode className='max-w-80'>
              <strong className='font-black'>
                Lifetime subscription to&nbsp;the&nbsp;book
              </strong>{' '}
              with&nbsp;a&nbsp;one-time payment
            </TextNode>
          </li>
          <li>
            <TextNode className='!text-2xl  font-light'>+</TextNode>
          </li>
          <li>
            <TextNode className='font-black'>Investor status:</TextNode>
            <TextUl>
              <TextLi className='max-w-72'>
                20% lifetime discount on&nbsp;all studio books
                that&nbsp;will&nbsp;ever be&nbsp;published
              </TextLi>
              <TextLi>investor badge</TextLi>
            </TextUl>
          </li>
          <li>
            <TextNode className='!text-2xl  font-light'>+</TextNode>
          </li>
          <li>
            <TextNode className='max-w-[25.4rem]'>
              Automatic enrolment{' '}
              {/* <a href='https://intagram.com' className='default-link'> */}
              to&nbsp;the&nbsp;contest (details very soon) {/* </a> */}
              in&nbsp;honour of&nbsp;the&nbsp;company launch
              with&nbsp;the&nbsp;chance to&nbsp;
              <strong>
                win&nbsp;one of&nbsp;ten free lifetime accesses to&nbsp;all
                studio books
              </strong>{' '}
              that&nbsp;will&nbsp;ever be published
            </TextNode>
          </li>
          <li>
            <TextNode className='!text-2xl  font-light'>+</TextNode>
          </li>
          <li>
            <TextNode className='!mb-0  max-w-[25.4rem]'>
              By&nbsp;purchasing the&nbsp;early access, you directly help
              speed&nbsp;up the&nbsp;release of&nbsp;new sections
              of&nbsp;the&nbsp;book, useful and&nbsp;convenient features
              for&nbsp;reading and&nbsp;better assimilation
              of&nbsp;the&nbsp;material, and&nbsp;also support
              the&nbsp;development of&nbsp;other&nbsp;books
            </TextNode>
          </li>
        </ul>
        <BasicTextNode
          className='mt-11  text-center  text-4xl 
                     font-medium  !text-subscription'
        >
          $23
        </BasicTextNode>
        <div className='mb-20  mt-[2.85rem]'>
          {/* <EmailForm
            isAuthenticated={isAuthenticated}
            type={EmailFormType.PAYMENT}
            label='Get payment link by&nbsp;email'
            caption='This&nbsp;email will&nbsp;be&nbsp;used as&nbsp;a&nbsp;key to&nbsp;your&nbsp;library'
            inputId={formInputId}
            inputName='email'
            inputClasses='border-subscription  focus:[box-shadow:0_0_0_2px_#29AD04]'
            buttonClasses='border-subscription'
            buttonInputFocusedClasses='[box-shadow:0_0_0_2px_#29AD04]'
            buttonInputFilledClasses='bg-subscription'
            buttonInputEmptyClasses='bg-[#CFCFCF]  dark:bg-gray-dark-lighter2'
          /> */}
          <BasicTextNode className='!inline-block  text-[1.375rem]  font-bold'>
            Get payment link by&nbsp;email
          </BasicTextNode>
          <TextNode className='mt-3'>Very soon...</TextNode>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionModal;
