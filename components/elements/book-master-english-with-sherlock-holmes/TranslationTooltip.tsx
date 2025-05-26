'use client';

import {
  useTranslationTooltip,
  useTranslationTooltipDispatch,
} from '@/context/translation-tooltip/Context';
import { merriweather } from '@/fonts';
import useOutsideClick from '@/hooks/use-outside-click';
import { CircularProgress } from '@mui/material';
import classNames from 'classnames';
import { ReactElement, useRef } from 'react';

function TranslationTooltip(): ReactElement {
  const { isShown, isLoading, content, position } = useTranslationTooltip();
  const { setIsShown } = useTranslationTooltipDispatch();
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const tooltipClasses = classNames(
    merriweather.className,

    `text-black  absolute  
     rounded-[7px]  z-[9999]  dark:border-gray-dark  text-lg  
     [-webkit-font-smoothing:subpixel-antialiased]  max-w-[40vw]
     bg-[#FFE5B9]  pt-2  pb-[0.65rem]  px-4  lining-nums  min-h-[2.9rem]
     `,

    {
      invisible: !isShown,
    },
  );

  useOutsideClick([tooltipRef], () => {
    if (isLoading) {
      return;
    }

    setIsShown(false);
  });

  return (
    <div
      ref={tooltipRef}
      style={{
        top: position.top,
        left: position.left,
      }}
      id='translation-tooltip'
      className={tooltipClasses}
    >
      {isLoading ? (
        <div className='flex  w-24  items-center  justify-center'>
          <CircularProgress size={20} className='!mt-[4px]  !text-black' />
        </div>
      ) : (
        content
      )}
    </div>
  );
}

export default TranslationTooltip;
