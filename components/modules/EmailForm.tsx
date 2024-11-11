'use client';

import {
  LOGIN_URL,
  MASTER_GIT_AND_GITHUB_BOOK_URI,
  PAYMENT_URL_AUTHENTICATED,
  PAYMENT_URL_GUEST,
} from '@/constants/general';
import { EmailFormType, FormState } from '@/types/email-form';
import { validateSession } from '@/utils/validate-session';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import classNames from 'classnames';
import { FormEvent, ReactElement, useRef, useState } from 'react';
import BasicTextNode from '../elements/BasicTextNode';
import TextNode from '../elements/TextNode';

interface EmailFormProps {
  inputId: string;
  inputName: string;
  label?: ReactElement | string;
  caption?: ReactElement | string;
  inputClasses?: string;
  buttonClasses?: string;
  buttonInputFocusedClasses?: string;
  buttonInputFilledClasses?: string;
  buttonInputEmptyClasses?: string;
  changeArrowColorInDarkMode?: boolean;
  type: EmailFormType;
}

function EmailForm({
  label,
  caption,
  inputId,
  inputName,
  inputClasses,
  buttonClasses,
  buttonInputFocusedClasses = '',
  buttonInputFilledClasses = '',
  buttonInputEmptyClasses = '',
  changeArrowColorInDarkMode = false,
  type,
}: EmailFormProps): ReactElement {
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState(FormState.IDLE);

  const tickRef = useRef<SVGSVGElement>(null);
  const reloadRef = useRef<SVGSVGElement>(null);
  const spinnerRef = useRef<HTMLElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (formState === FormState.SUBMITTING) {
      return;
    }

    if (email === '') {
      return;
    }

    if (e.currentTarget.reportValidity()) {
      const isAuthenticated = await validateSession();

      switch (type) {
        case EmailFormType.LOGIN: {
          setFormState(FormState.SUBMITTING);
          try {
            await axios.post(LOGIN_URL, { email });
          } catch (error) {
            alert(error);
          }
          spinnerRef.current!.classList.add('!opacity-0');
          tickRef.current!.classList.add('!opacity-100');
          setTimeout(() => {
            spinnerRef.current!.classList.remove('!opacity-0');
            tickRef.current!.classList.remove('!opacity-100');
            setFormState(FormState.SUBMITTED);
          }, 2000);
          break;
        }
        case EmailFormType.PAYMENT: {
          setFormState(FormState.SUBMITTING);
          await axios.post(
            isAuthenticated ? PAYMENT_URL_AUTHENTICATED : PAYMENT_URL_GUEST,
            isAuthenticated
              ? { bookURI: MASTER_GIT_AND_GITHUB_BOOK_URI }
              : {
                  email,
                  bookURI: MASTER_GIT_AND_GITHUB_BOOK_URI,
                },
          );
          spinnerRef.current!.classList.add('!opacity-0');
          tickRef.current!.classList.add('!opacity-100');
          setTimeout(() => {
            spinnerRef.current!.classList.remove('!opacity-0');
            tickRef.current!.classList.remove('!opacity-100');
            setFormState(FormState.SUBMITTED);
          }, 2000);
          break;
        }
      }
    }
  }

  const buttonClassNames = classNames(
    `absolute  right-0  h-[2.53125rem]  w-[80px]  rounded-r-[5px]  border`,
    {
      [buttonInputFocusedClasses]: inputIsFocused,
      [buttonInputFilledClasses]: email !== '',
      [buttonInputEmptyClasses]: email === '',
    },
    buttonClasses,
  );

  const inputClassNames = classNames(
    `h-[2.53125rem]  w-full  rounded-[5px]  border  
     bg-white  pb-2  pl-4  pt-1.5  text-xl  
     font-semibold leading-none  text-black  
     placeholder:text-[#A1A1A1]  focus:outline-none  
     dark:bg-black  dark:text-white`,
    inputClasses,
  );

  const arrowStrokeClasses = classNames(`stroke-white`, {
    'dark:stroke-black': changeArrowColorInDarkMode && email !== '',
  });

  const arrowFillClasses = classNames(`fill-white`, {
    'dark:fill-black': changeArrowColorInDarkMode && email !== '',
  });

  const tickClasses = classNames(
    `absolute  size-[20px]  fill-white  opacity-0  transition-opacity  
    dark:fill-black  left-1/2  -translate-x-1/2  top-[46%]  -translate-y-1/2
    duration-500`,
    {
      '!fill-white': type === EmailFormType.PAYMENT,
    },
  );

  const reloadClasses = classNames(
    'mx-auto  mt-[-3px]  inline-block  size-[20px]  fill-white  transition-opacity  duration-500  dark:fill-black',
    {
      'opacity-0': formState !== FormState.SUBMITTED,
      '!fill-white': type === EmailFormType.PAYMENT,
    },
  );

  const spinnerClasses = classNames(
    'mx-auto  !mt-[5px]  !size-[20px]  !text-white  transition-opacity  duration-500',
    {
      'dark:!text-white': type === EmailFormType.PAYMENT,
      'dark:!text-black': type === EmailFormType.LOGIN,
    },
  );

  return (
    <form onSubmit={handleSubmit} autoComplete='on'>
      {label && (
        <label htmlFor={inputId}>
          <BasicTextNode className='!inline-block  text-[1.375rem]  font-bold'>
            {label}
          </BasicTextNode>
        </label>
      )}
      <div className='relative  mt-3'>
        <input
          className={inputClassNames}
          id={inputId}
          type='email'
          name={inputName}
          placeholder='Email'
          autoComplete='email'
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setInputIsFocused(true)}
          onBlur={() => setInputIsFocused(false)}
        />
        <button type='submit' className={buttonClassNames}>
          <svg
            ref={tickRef}
            className={tickClasses}
            id='Layer_1'
            version='1.1'
            viewBox='0 0 512 512'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M448,71.9c-17.3-13.4-41.5-9.3-54.1,9.1L214,344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8  c-15.6,15.5-16.4,41.6-1.7,58.1c0,0,120.4,133.6,137.7,147c17.3,13.4,41.5,9.3,54.1-9.1l206.3-301.7  C469.2,110.9,465.3,85.2,448,71.9z' />
          </svg>
          {formState === FormState.SUBMITTING && (
            <CircularProgress ref={spinnerRef} className={spinnerClasses} />
          )}
          {formState === FormState.SUBMITTED && (
            <svg
              ref={reloadRef}
              className={reloadClasses}
              id='Layer_1'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 119.4 122.88'
            >
              <path d='M83.91,26.34a43.78,43.78,0,0,0-22.68-7,42,42,0,0,0-24.42,7,49.94,49.94,0,0,0-7.46,6.09,42.07,42.07,0,0,0-5.47,54.1A49,49,0,0,0,30,94a41.83,41.83,0,0,0,18.6,10.9,42.77,42.77,0,0,0,21.77.13,47.18,47.18,0,0,0,19.2-9.62,38,38,0,0,0,11.14-16,36.8,36.8,0,0,0,1.64-6.18,38.36,38.36,0,0,0,.61-6.69,8.24,8.24,0,1,1,16.47,0,55.24,55.24,0,0,1-.8,9.53A54.77,54.77,0,0,1,100.26,108a63.62,63.62,0,0,1-25.92,13.1,59.09,59.09,0,0,1-30.1-.25,58.45,58.45,0,0,1-26-15.17,65.94,65.94,0,0,1-8.1-9.86,58.56,58.56,0,0,1,7.54-75,65.68,65.68,0,0,1,9.92-8.09A58.38,58.38,0,0,1,61.55,2.88,60.51,60.51,0,0,1,94.05,13.3l-.47-4.11A8.25,8.25,0,1,1,110,7.32l2.64,22.77h0a8.24,8.24,0,0,1-6.73,9L82.53,43.31a8.23,8.23,0,1,1-2.9-16.21l4.28-.76Z' />
            </svg>
          )}
          {formState === FormState.IDLE && (
            <svg
              className='absolute  left-1/2  top-[48%]  -translate-x-1/2  -translate-y-1/2  transition-opacity'
              width='31'
              height='31'
              viewBox='0 0 31 31'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_472_44)'>
                <path
                  className={arrowFillClasses}
                  d='M31 0H0V31H31V0Z'
                  fillOpacity='0.01'
                />
                <path
                  className={arrowStrokeClasses}
                  d='M27.2549 15.5H4.00489'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  className={arrowStrokeClasses}
                  d='M19.505 23.25L27.2549 15.5L19.505 7.75'
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
                    className={arrowFillClasses}
                    transform='matrix(-1 0 0 1 31 0)'
                  />
                </clipPath>
              </defs>
            </svg>
          )}
        </button>
      </div>
      {caption && (
        <TextNode className='!mb-0  mt-2  !text-sm'>{caption}</TextNode>
      )}
    </form>
  );
}

export default EmailForm;
