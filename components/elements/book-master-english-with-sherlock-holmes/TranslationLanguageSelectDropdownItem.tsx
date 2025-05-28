import { merriweather } from '@/fonts';
import { TranslationLanguage } from '@/types/master-english-with-sherlock-holmes/translation-laguage';
import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface TranslationLanguageSelectDropdownItemProps {
  itemLanguage: TranslationLanguage;
  selectedLanguage: TranslationLanguage;
  activeItemDotClass?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

function LanguageSelectDropdownItem({
  itemLanguage,
  selectedLanguage,
  activeItemDotClass = 'after:bg-black  after:dark:bg-white',
  className,
  children,
  onClick,
}: TranslationLanguageSelectDropdownItemProps): ReactElement {
  const classes = classNames(
    `cursor-pointer  text-lg  select-none  px-[0.85rem]  py-[0.35rem]
     hover:bg-[#F8F8F8]  dark:hover:bg-[#171717]  relative
     after:content-[""]  after:absolute  after:w-[0.45rem]  after:h-[0.45rem]
     after:right-[1rem]  after:top-1/2
     after:translate-y-[-70%]  after:rounded-full`,
    merriweather.className,
    activeItemDotClass,
    className,
    {
      'after:opacity-100': itemLanguage === selectedLanguage,
      'after:opacity-0': itemLanguage !== selectedLanguage,
    },
  );

  return (
    <li key={itemLanguage} className={classes} onClick={onClick}>
      {children}
    </li>
  );
}

export default LanguageSelectDropdownItem;
