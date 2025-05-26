import { merriweather } from '@/fonts';
import classNames from 'classnames';
import { ReactElement } from 'react';

function TranslationTooltip(): ReactElement {
  const tooltipClasses = classNames(
    merriweather.className,
    `text-black  absolute  hidden 
     rounded-[7px]  z-[9999]  dark:border-gray-dark  text-lg  
     [-webkit-font-smoothing:subpixel-antialiased]  max-w-[40vw]
     bg-[#FFE5B9]  pt-2  pb-[0.65rem]  px-4  lining-nums`,
  );

  return <div id='translation-tooltip' className={tooltipClasses}></div>;
}

export default TranslationTooltip;
