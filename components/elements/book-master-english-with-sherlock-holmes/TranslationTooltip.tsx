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
import { ReactElement, useEffect, useState } from 'react';

function TranslationTooltip(): ReactElement {
  const {
    isShown,
    isLoading,
    content,
    fragmentPosition,
    ref: tooltipRef,
  } = useTranslationTooltip();
  const { setIsShown } = useTranslationTooltipDispatch();
  const { isTouchDevice } = useTouchDevice();

  const [tooltipPosition, setTooltipPosition] = useState<{
    top?: string | number;
    left?: string | number;
    right?: string | number;
    maxHeight?: string | number;
  }>({
    top: '',
    left: '',
    right: '',
    maxHeight: '',
  });

  const [innerIsShown, setInnerIsShown] = useState(false);
  const [innerContent, setInnerContent] = useState('11nothing11');

  const tooltipClasses = classNames(
    merriweather.className,

    `text-black  fixed 
     rounded-[7px]  z-[9999999]  dark:border-gray-dark  text-lg  
     [-webkit-font-smoothing:subpixel-antialiased]  max-w-[30vw]
     bg-[#FFEAC5]  pt-2  pb-[0.65rem]  px-4  lining-nums  min-h-[2.9rem]
     max-sm:max-w-[70vw]  transition-opacity  duration-500
     `,

    {
      invisible:
        !innerIsShown || (content.translation !== innerContent && !isLoading),
      'text-red-600': content.error,
    },
  );

  console.log(
    'innerContent vs content.translation:',
    innerContent,
    '|||',
    content.translation,
  );

  useOutsideClick([tooltipRef], () => {
    if (isLoading) {
      return;
    }

    setIsShown(false);
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        if (isShown) {
          setIsShown(false);
          const selection = window.getSelection();
          if (selection !== null) {
            selection.removeAllRanges();
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isShown, setIsShown]);

  useEffect(() => {
    setTimeout(() => {
      if (!tooltipRef.current) {
        return;
      }

      const previousMaxHeight = tooltipPosition.maxHeight;
      tooltipRef.current.style.maxHeight = '';
      requestAnimationFrame(() => {
        const tooltipWidth = tooltipRef.current!.offsetWidth;
        const tooltipHeight = tooltipRef.current!.offsetHeight;
        tooltipRef.current!.style.maxHeight = previousMaxHeight
          ? `${previousMaxHeight}px`
          : '';

        const margin = 8;

        let placement = 'top';

        let top = fragmentPosition.firstLineRect.top - tooltipHeight - margin;

        if (isTouchDevice) {
          top -= 70;
        }

        if (top < margin) {
          placement = 'bottom';

          top = fragmentPosition.lastLineRect.bottom + margin;

          if (isTouchDevice) {
            if (fragmentPosition.firstLineRect.top < 70) {
              top += 70;
            }
          }
        }

        let left: number | string =
          fragmentPosition.scrollX + fragmentPosition.firstLineRect.left;

        let right: string | number | undefined;

        const viewportWidth = window.innerWidth;

        if (left + tooltipWidth > viewportWidth - 17.388) {
          left = '';
          right = window.innerWidth < 640 ? '17.388px' : '100px';
        }

        let constrainedHeight: string | number | undefined;

        if (placement === 'bottom') {
          const availableHeightBelow = window.innerHeight - top - margin;
          let availableHeightAbove =
            fragmentPosition.firstLineRect.top - margin;

          if (isTouchDevice) {
            availableHeightAbove -= 70;
          }

          let availableHeight = availableHeightBelow;

          if (availableHeightBelow < availableHeightAbove) {
            top = fragmentPosition.firstLineRect.top - availableHeightAbove;

            if (isTouchDevice) {
              top -= 70;
            }

            availableHeight = availableHeightAbove;
            placement = 'top';
          }

          if (
            (tooltipPosition.maxHeight !== undefined && innerIsShown) ||
            !isShown
          ) {
            constrainedHeight = tooltipPosition.maxHeight;
          } else if (tooltipHeight > availableHeight) {
            constrainedHeight = availableHeight - margin;
          }
        }

        const position = {
          top,
          left,
          right,
          maxHeight: constrainedHeight,
        };

        console.log('Setting tooltip position:', position);
        console.log('Is loading:', isLoading);

        setTooltipPosition(position);

        if (!isShown || isLoading) {
          setInnerContent('11nothing11');
        } else {
          setInnerContent(content.translation);
        }

        setInnerIsShown(isShown);
      });
    }, 10);
  }, [
    fragmentPosition,
    innerIsShown,
    isShown,
    isTouchDevice,
    tooltipPosition.maxHeight,
    content.translation,
    tooltipRef,
    isLoading,
  ]);

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
        maxHeight: tooltipPosition.maxHeight,
        overflowY: tooltipPosition.maxHeight ? 'scroll' : undefined,
      }}
      id='translation-tooltip'
      className={tooltipClasses}
    >
      {isLoading ? (
        <div className='flex  items-center  justify-center'>
          <CircularProgress size={20} className='!mt-[4px]  !text-black' />
        </div>
      ) : (
        content.translation
      )}
    </div>
  );
}

export default TranslationTooltip;
