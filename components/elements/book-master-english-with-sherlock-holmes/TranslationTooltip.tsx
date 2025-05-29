'use client';

import { useTouchDevice } from '@/context/touch-device/Context';
import {
  useTranslationTooltip,
  useTranslationTooltipDispatch,
} from '@/context/translation-tooltip/Context';
import { merriweather } from '@/fonts';
import useOutsideClick from '@/hooks/use-outside-click';
import { CircularProgress } from '@mui/material';
import classNames from 'classnames';
import { ReactElement, useEffect, useRef, useState } from 'react';

function TranslationTooltip(): ReactElement {
  const { isShown, isLoading, content, position } = useTranslationTooltip();
  const { setIsShown } = useTranslationTooltipDispatch();
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [adjustedLeft, setAdjustedLeft] = useState(position.left);
  const { isTouchDevice } = useTouchDevice();

  const tooltipClasses = classNames(
    merriweather.className,

    `text-black  absolute  
     rounded-[7px]  z-[9999999]  dark:border-gray-dark  text-lg  
     [-webkit-font-smoothing:subpixel-antialiased]  max-w-[30vw]
     bg-[#FFEAC5]  pt-2  pb-[0.65rem]  px-4  lining-nums  min-h-[2.9rem]
     max-sm:max-w-[70vw] 
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

  useEffect(() => {
    if (!tooltipRef.current || !isShown) return;

    const tooltipWidth = tooltipRef.current.offsetWidth;
    console.log('Tooltip width:', tooltipWidth);
    const viewportWidth = window.innerWidth;

    let newLeft = position.left;

    if (position.left + tooltipWidth > viewportWidth - 17.388) {
      newLeft = Math.max(viewportWidth - tooltipWidth - 17.388, 17.388);
    }

    setAdjustedLeft(newLeft);
  }, [position.left, isShown, content]);

  let width: string | undefined;
  if (isLoading) {
    width = '7rem';
  } else {
    width = undefined;
  }

  let left: string | number | undefined;
  if (isLoading) {
    left = adjustedLeft;
  } else if (position.left !== adjustedLeft) {
    left = `calc(${adjustedLeft}px - 20vw)`;
  } else {
    left = position.left;
  }

  return (
    <div
      ref={tooltipRef}
      style={{
        top: isTouchDevice ? position.top - 70 : position.top,
        left,
        width,
      }}
      id='translation-tooltip'
      className={tooltipClasses}
    >
      {isLoading ? (
        <div className='flex  items-center  justify-center'>
          <CircularProgress size={20} className='!mt-[4px]  !text-black' />
        </div>
      ) : (
        content
      )}
    </div>
  );
}

export default TranslationTooltip;
