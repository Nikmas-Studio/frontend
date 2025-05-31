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
import { ReactElement, useRef, useState } from 'react';

function TranslationTooltip(): ReactElement {
  const { isShown, isLoading, content, fragmentPosition } =
    useTranslationTooltip();
  const { setIsShown } = useTranslationTooltipDispatch();
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const { isTouchDevice } = useTouchDevice();

  const [tooltipPosition, setTooltipPosition] = useState<{
    top?: string | number;
    left?: string | number;
    right?: string | number;
  }>({
    top: '',
    left: '',
    right: '',
  });

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

  setTimeout(() => {
    if (!tooltipRef.current) {
      return;
    }

    const tooltipWidth = tooltipRef.current.offsetWidth;
    const tooltipHeight = tooltipRef.current.offsetHeight;

    let top =
      fragmentPosition.scrollY + fragmentPosition.rect.top - tooltipHeight - 8;

    let left: number | string =
      fragmentPosition.scrollX + fragmentPosition.rect.left;

    let right: string | number | undefined;

    const viewportWidth = window.innerWidth;

    if (left + tooltipWidth > viewportWidth - 17.388) {
      left = '';
      right = window.innerWidth < 640 ? '17.388px' : '100px';
    }

    if (isTouchDevice) {
      top -= 70;
    }

    setTooltipPosition({
      top,
      left,
      right,
    });
  }, 10);

  let width: string | undefined;
  if (isLoading) {
    width = '7rem';
  } else {
    width = '';
  }

  return (
    <div
      ref={tooltipRef}
      style={{
        top: tooltipPosition.top,
        left: tooltipPosition.left,
        right: tooltipPosition.right,
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
