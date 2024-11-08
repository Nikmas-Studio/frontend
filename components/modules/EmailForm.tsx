'use client';

import classNames from 'classnames';
import { FormEvent, ReactElement, useState } from 'react';
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
}: EmailFormProps): ReactElement {
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [email, setEmail] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (email === '') {
      return;
    }

    if (e.currentTarget.reportValidity()) {
      alert(`Email submitted: ${email}`);
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
            className='absolute  left-1/2  top-[48%]  -translate-x-1/2  -translate-y-1/2'
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
    </form>
  );
}

export default EmailForm;
