'use client';

import BasicTextNode from '@/components/elements/BasicTextNode';
import { PromoCodeState } from '@/types/promo-code';
import CircularProgress from '@mui/material/CircularProgress';
import classNames from 'classnames';
import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useRef,
  useState,
} from 'react';

interface ProceedToPaymentProps {
  handlePurchaseBookAuthenticated: (promoCode: string | null) => void;
  paymentPageIsGenerating: boolean;
  paymentPageGenerationError: boolean;
  paymentPageIsGeneratingSpinnerWrapperClasses: string;
  promoCodeInputClasses: string;
  promoCodeInputFocusedClasses: string;
  promoCodeIsValidInputClasses: string;
  promoCodeIsInvalidInputClasses: string;
  promoCodeState: PromoCodeState;
  setPromoCodeState: Dispatch<SetStateAction<PromoCodeState>>;
  checkPromoCodeValidity: (promoCode: string) => Promise<{ valid: boolean }>;
  promoCode: string;
  setPromoCode: Dispatch<SetStateAction<string>>;
}

function ProceedToPayment({
  handlePurchaseBookAuthenticated,
  paymentPageGenerationError,
  paymentPageIsGenerating,
  paymentPageIsGeneratingSpinnerWrapperClasses,
  promoCodeInputClasses,
  promoCodeInputFocusedClasses,
  promoCodeIsValidInputClasses,
  promoCodeIsInvalidInputClasses,
  promoCodeState,
  setPromoCodeState,
  checkPromoCodeValidity,
}: ProceedToPaymentProps): ReactElement {
  const [promoCodeInputIsFocused, setPromoCodeInputIsFocused] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  const promoCodeInputClassNames = classNames(
    `h-[2.53125rem]  w-[calc(100%-80px)]  rounded-[5px]  border  
     bg-white  pb-2  px-4  pt-1.5  text-xl 
     font-semibold leading-none  text-black  
     placeholder:text-[#A1A1A1]  focus:outline-none  
     dark:bg-black  dark:text-white`,
    promoCodeInputClasses,
    {
      [promoCodeInputFocusedClasses]:
        promoCodeInputIsFocused &&
        promoCodeState !== PromoCodeState.VALID &&
        promoCodeState !== PromoCodeState.INVALID,
      [promoCodeIsValidInputClasses]: promoCodeState === PromoCodeState.VALID,
      [promoCodeIsInvalidInputClasses]:
        promoCodeState === PromoCodeState.INVALID,
    },
  );

  const promoSpinnerClasses = classNames(
    '!size-[20px]  !-mt-[5px]  !text-black  dark:!text-white',
    {
      invisible: promoCodeState !== PromoCodeState.LOADING,
      visible: promoCodeState === PromoCodeState.LOADING,
    },
  );

  const promoCodeRequestIdRef = useRef(0);

  async function handlePromoCodeChange(
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> {
    if (checkPromoCodeValidity !== undefined) {
      const promoCode = e.target.value;
      setPromoCode(promoCode);

      const requestId = ++promoCodeRequestIdRef.current;

      if (promoCode === '') {
        setPromoCodeState(PromoCodeState.DEFAULT);
        return;
      }

      setPromoCodeState(PromoCodeState.LOADING);

      const { valid } = await checkPromoCodeValidity(promoCode);

      if (requestId !== promoCodeRequestIdRef.current) {
        return;
      }

      setPromoCodeState(valid ? PromoCodeState.VALID : PromoCodeState.INVALID);
    }
  }

  return (
    <>
      <div className='mb-3  flex  items-center  gap-2'>
        <input
          className={promoCodeInputClassNames}
          type='text'
          name='promoCode'
          placeholder='Promo code'
          onChange={handlePromoCodeChange}
          onFocus={() => setPromoCodeInputIsFocused(true)}
          onBlur={() => setPromoCodeInputIsFocused(false)}
        />
        <CircularProgress className={promoSpinnerClasses} />
      </div>
      <div className='flex  w-[14.375rem]  flex-col  items-start'>
        <button
          onClick={() => {
            handlePurchaseBookAuthenticated(promoCode || null);
          }}
          className={classNames(
            `button  w-full  bg-subscription  text-white  
                              hover:bg-subscription-darker`,
            {
              'pointer-events-none':
                paymentPageIsGenerating ||
                promoCodeState === PromoCodeState.LOADING,
            },
          )}
        >
          Proceed to payment
        </button>
        <div className={paymentPageIsGeneratingSpinnerWrapperClasses}>
          <CircularProgress className='!size-[20px]  !text-subscription' />
        </div>
        {paymentPageGenerationError && (
          <BasicTextNode className={`mt-3  text-red-600`}>
            An error occurred. Please try again.
          </BasicTextNode>
        )}
      </div>
    </>
  );
}

export default ProceedToPayment;
