'use client';

import { LOG_ERROR_ROUTE } from '@/constants/general';
import { FormState } from '@/types/email-form';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import classNames from 'classnames';
import { ChangeEvent, FormEvent, ReactElement, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import BasicTextNode from '../elements/BasicTextNode';
import ExternalLink from '../elements/ExternalLink';
import TextNode from '../elements/TextNode';

interface EmailFormProps {
  inputId: string;
  inputName: string;
  requestCallback: (email: string, captchaToken: string) => Promise<void>;
  label?: ReactElement | string;
  caption?: ReactElement | string;
  labelClasses?: string;
  inputClasses?: string;
  buttonClasses?: string;
  inputFocusedClasses?: string;
  buttonInputFocusedClasses?: string;
  buttonInputFilledClasses?: string;
  buttonInputEmptyClasses?: string;
  changeArrowColorInDarkMode?: boolean;
  tickIconClasses?: string;
  reloadIconClasses?: string;
  spinnerIconsClasses?: string;
}

function EmailForm({
  label,
  caption,
  inputId,
  inputName,
  requestCallback,
  labelClasses,
  inputClasses,
  buttonClasses,
  inputFocusedClasses = '',
  buttonInputFocusedClasses = '',
  buttonInputFilledClasses = '',
  buttonInputEmptyClasses = '',
  changeArrowColorInDarkMode = false,
  tickIconClasses = '',
  reloadIconClasses = '',
  spinnerIconsClasses = '',
}: EmailFormProps): ReactElement {
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [formState, setFormState] = useState(FormState.IDLE);
  const changeFormStateToIdle = useRef(false);

  const tickRef = useRef<SVGSVGElement>(null);
  const reloadRef = useRef<SVGSVGElement>(null);
  const spinnerRef = useRef<HTMLElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (honeypot !== '') {
      return;
    }

    if ([FormState.SUBMITTING, FormState.SUBMITTED].includes(formState)) {
      return;
    }

    if (email === '') {
      return;
    }

    if (e.currentTarget.reportValidity()) {
      setFormState(FormState.SUBMITTING);

      let token: string | null;

      try {
        initCaptchaIframeObserver();
        token = await recaptchaRef.current!.executeAsync();
      } catch (e) {
        axios
          .post(LOG_ERROR_ROUTE, {
            message: `recaptcha executeAsync error: ${JSON.stringify(e)},`,
          })
          .catch(() => {});

        setFormState(FormState.ERROR);
        return;
      }

      if (token === null) {
        axios
          .post(LOG_ERROR_ROUTE, {
            message: 'recaptcha token is null',
          })
          .catch(() => {});

        setFormState(FormState.ERROR);
        return;
      }

      try {
        await requestCallback(email, token);
      } catch (error) {
        axios
          .post(LOG_ERROR_ROUTE, {
            message: `email form request callback error: ${JSON.stringify(error)}`,
          })
          .catch(() => {});

        setFormState(FormState.ERROR);
        return;
      }

      setFormState(FormState.SUBMITTED);
      recaptchaRef.current!.reset();

      setTimeout(() => {
        if (changeFormStateToIdle.current) {
          setFormState(FormState.IDLE);
          changeFormStateToIdle.current = false;
        } else {
          setFormState(FormState.RELEASED);
        }
      }, 2000);
    }
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
    if (formState !== FormState.IDLE) {
      if (formState === FormState.RELEASED) {
        setFormState(FormState.IDLE);
      } else {
        changeFormStateToIdle.current = true;
      }
    }
  }

  function handleHoneypotChange(e: ChangeEvent<HTMLInputElement>): void {
    setHoneypot(e.target.value);
  }

  const buttonClassNames = classNames(
    `group  relative  shrink-0  h-[2.53125rem]  w-[80px]  rounded-r-[5px]  border`,
    buttonClasses,
    {
      [buttonInputFocusedClasses]: inputIsFocused,
      [buttonInputFilledClasses]: email !== '',
      [`${buttonInputEmptyClasses} cursor-default`]: email === '',
      '!border-red-600  !border-2': formState === FormState.ERROR,
    },
  );

  const inputClassNames = classNames(
    `h-[2.53125rem]  w-full  rounded-l-[5px]  border-y  border-l  
     bg-white  pb-2  px-4  pt-1.5  text-xl  rounded-r-none
     font-semibold leading-none  text-black  
     placeholder:text-[#A1A1A1]  focus:outline-none  
     dark:bg-black  dark:text-white`,
    inputClasses,
    {
      [inputFocusedClasses]: inputIsFocused,
      '!border-red-600  !shadow-none  !border-y-2  !border-l-2':
        formState === FormState.ERROR,
    },
  );

  const arrowStrokeClasses = classNames(`stroke-white`, {
    'dark:stroke-black': changeArrowColorInDarkMode && email !== '',
  });

  const arrowFillClasses = classNames(`fill-white`, {
    'dark:fill-black': changeArrowColorInDarkMode && email !== '',
  });

  const tickClasses = classNames(
    `absolute  size-[20px]  fill-white  transition-transform  
    dark:fill-black  left-1/2  -translate-x-1/2  top-[46%]  -translate-y-1/2
    duration-500`,
    tickIconClasses,
    {
      'scale-0': formState !== FormState.SUBMITTED,
    },
  );

  const reloadClasses = classNames(
    `absolute  left-1/2  -translate-x-1/2  top-[47%]  -translate-y-1/2  
     inline-block  size-[20px]  fill-white  transition-transform  duration-500
     dark:fill-black`,
    reloadIconClasses,
    {
      'scale-0': formState !== FormState.RELEASED,
    },
  );

  const spinnerWrapperClasses = classNames(
    'transition-transform  duration-500',
    {
      'scale-0': formState !== FormState.SUBMITTING,
    },
  );

  const spinnerClasses = classNames(
    'mx-auto  !mt-[5px]  !size-[20px]  !text-white',
    spinnerIconsClasses,
  );

  const arrowClasses = classNames(
    `absolute  left-1/2  top-[48%]  -translate-x-1/2  -translate-y-1/2  
     [transition:opacity_500ms_cubic-bezier(0.4,0,0.2,1),transform_150ms_cubic-bezier(0.4,0,0.2,1)]`,
    {
      'opacity-0':
        formState !== FormState.IDLE && formState !== FormState.ERROR,
      'group-hover:scale-[1.25]':
        email !== '' &&
        (formState === FormState.IDLE ||
          formState === FormState.ERROR ||
          formState === FormState.RELEASED),
    },
  );

  const labelClassNames = classNames(
    '!inline-block  text-[1.375rem]  font-bold',
    labelClasses,
  );

  return (
    <form onSubmit={handleSubmit} autoComplete='on'>
      <ReCAPTCHA
        ref={recaptchaRef}
        size='invisible'
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
      />
      <input
        type='text'
        name='readerName'
        className='absolute  left-[-9999px]  top-[-9999px]'
        autoComplete='off'
        onChange={handleHoneypotChange}
      />
      {label && (
        <label htmlFor={inputId}>
          <BasicTextNode className={labelClassNames}>{label}</BasicTextNode>
        </label>
      )}
      <div className='mt-3  flex  flex-row'>
        <input
          className={inputClassNames}
          id={inputId}
          type='email'
          name={inputName}
          placeholder='Email'
          autoComplete='email'
          value={email}
          onChange={handleEmailChange}
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
          <div className={spinnerWrapperClasses}>
            <CircularProgress ref={spinnerRef} className={spinnerClasses} />
          </div>
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
          <svg
            className={arrowClasses}
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
        </button>
      </div>
      {caption && (
        <TextNode className='!mb-0  mt-2  !text-sm'>{caption}</TextNode>
      )}
      <TextNode className='!mb-0  mt-5  max-w-80  !text-xs  !text-[#B8B8B8]  dark:!text-gray-dark-lighter2'>
        This&nbsp;site is&nbsp;protected by&nbsp;reCAPTCHA
        and&nbsp;the&nbsp;Google{' '}
        <ExternalLink
          className='!text-[#B8B8B8]  dark:!text-gray-dark-lighter2'
          defaultTextLink
          href='https://policies.google.com/privacy'
        >
          Privacy Policy
        </ExternalLink>{' '}
        and&nbsp;
        <ExternalLink
          className='!text-[#B8B8B8]  dark:!text-gray-dark-lighter2'
          defaultTextLink
          href='https://policies.google.com/terms'
        >
          Terms of Service
        </ExternalLink>{' '}
        apply.
      </TextNode>
    </form>
  );
}

function initCaptchaIframeObserver(): void {
  const recaptchaWindows = [...document.getElementsByTagName('iframe')]
    ?.filter(
      (x) =>
        x.src.includes('google.com/recaptcha/enterprise/bframe') ||
        x.src.includes('google.com/recaptcha/api2/bframe'),
    )
    .map((iframe) => iframe?.parentNode?.parentNode as HTMLDivElement);

  for (const recaptchaWindow of recaptchaWindows) {
    if (recaptchaWindow) {
      if (!recaptchaWindow.dataset.observerAttached) {
        new MutationObserver(() => {
          if (
            recaptchaWindow.style.visibility !== 'visible' ||
            recaptchaWindow.style.opacity !== '1' ||
            recaptchaWindow.style.top !== '10px'
          ) {
            recaptchaWindow.style.opacity = '1';
            recaptchaWindow.style.visibility = 'visible';
            recaptchaWindow.style.top = '10px';
          }
        }).observe(recaptchaWindow, {
          attributeFilter: ['style'],
        });

        recaptchaWindow.dataset.observerAttached = 'true';
      }
    }
  }
}

export default EmailForm;
