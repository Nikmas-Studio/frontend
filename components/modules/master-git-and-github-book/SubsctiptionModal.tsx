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
import classNames from 'classnames';
import { FormEvent, ReactElement, useEffect, useRef, useState } from 'react';

function SubscriptionModal(): ReactElement {
  const modalCoverRef = useRef<HTMLDivElement>(null);
  const { subscriptionModalIsOpened } = useSubscriptionModal();
  const { setSubscriptionModalIsOpened } = useSubscriptionModalDispatch();

  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!subscriptionModalIsOpened) {
      // const modalCover = modalCoverRef.current!;
      // modalCover.classList.add('hidden');
      // modalCover.classList.remove('!opacity-100');
      // setTimeout(() => {
      // modalCover.classList.add('hidden');
      // }, 500);
    } else {
      // const modalCover = modalCoverRef.current!;
      // modalCover.classList.remove('hidden');
      // modalCover.classList.add('!opacity-100');
    }

    return () => {
      document.body.style.position = '';
    };
  }, [subscriptionModalIsOpened]);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (e.currentTarget.reportValidity()) {
      alert(`Email submitted: ${email}`);
    }
  }

  const buttonClasses = classNames(
    `absolute  right-0  h-[2.53125rem]  w-[80px]  rounded-r-[5px]  border
                border-subscription`,
    {
      '[box-shadow:0_0_0_2px_#29AD04]': inputIsFocused,
      'bg-subscription': email !== '',
      'bg-[#CFCFCF]': email === '',
    },
  );

  const modalClasses = classNames(
    `transition-transform  !duration-500  fixed  inset-0  z-[2000]  !overflow-y-auto
     bg-white  px-5  pt-12  dark:bg-black`,
    {
      'translate-x-0': subscriptionModalIsOpened,
      'translate-x-full': !subscriptionModalIsOpened,
    },
  );

  return (
    <div>
      <div
        ref={modalCoverRef}
        className='inset-0  z-[1000]  hidden  bg-white  opacity-100  transition-opacity  duration-500'
      ></div>
      <div className={modalClasses}>
        <div
          onClick={() => {
            setSubscriptionModalIsOpened(false);
          }}
          className='absolute  right-5  top-4  size-[21px]'
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
              <a href='https://intagram.com' className='default-link'>
                to&nbsp;the&nbsp;contest
              </a>{' '}
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
          <form onSubmit={handleSubmit}>
            <label htmlFor='email'>
              <BasicTextNode className='text-[1.375rem]  font-bold'>
                Get payment link by email
              </BasicTextNode>
            </label>
            <div className='relative  mt-3'>
              <input
                className='h-[2.53125rem]  w-full  rounded-[5px]  border  border-subscription
                         pb-2  pl-4  pt-1.5  text-xl  font-semibold  
                         leading-none focus:outline-none
                         focus:[box-shadow:0_0_0_2px_#29AD04]'
                id='email'
                type='email'
                name='email'
                placeholder='Email'
                autoComplete='email'
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setInputIsFocused(true)}
                onBlur={() => setInputIsFocused(false)}
              />
              <button type='submit' className={buttonClasses}>
                <svg
                  className='absolute  left-1/2  top-[48%]  -translate-x-1/2  -translate-y-1/2'
                  width='31'
                  height='31'
                  viewBox='0 0 31 31'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_472_44)'>
                    <path
                      d='M31 0H0V31H31V0Z'
                      fill='white'
                      fillOpacity='0.01'
                    />
                    <path
                      d='M27.2549 15.5H4.00489'
                      stroke='white'
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M19.505 23.25L27.2549 15.5L19.505 7.75'
                      stroke='white'
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_472_44'>
                      <rect
                        width='31'
                        height='31'
                        fill='white'
                        transform='matrix(-1 0 0 1 31 0)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <TextNode className='mt-2  !text-sm'>
              This&nbsp;email will&nbsp;be&nbsp;used as&nbsp;a&nbsp;key
              to&nbsp;you&nbsp;library
            </TextNode>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionModal;
