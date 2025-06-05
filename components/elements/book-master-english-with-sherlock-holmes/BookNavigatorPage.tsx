'use client';

import {
  DARK_PAGE_PLACEHOLDER,
  LIGHT_PAGE_PLACEHOLDER,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { PAGES_SCREENSHOTS } from '@/constants/book-master-english-with-sherlock-holmes/pages-screenshots';
import { useActivePage } from '@/context/active-page/Context';
import { useBookNavigatorDispatch } from '@/context/book-navigator/Context';
import { merriweather } from '@/fonts';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import BasicTextNode from './BasicTextNode';

interface BookNavigatorPageProps {
  pageNumber: number;
}

function BookNavigatorPage({
  pageNumber,
}: BookNavigatorPageProps): ReactElement {
  const [hovered, setHovered] = useState(false);
  const { setBookNavigatorIsOpened } = useBookNavigatorDispatch();
  const { activePage } = useActivePage();

  const pageNumberClasses = classNames(
    'text-[13px]  mt-1  cursor-pointer  inline-block',
    merriweather.className,
  );

  const previewLightClasses = classNames('cursor-pointer  dark:hidden', {
    'outline  outline-1  outline-orange': hovered || activePage === pageNumber,
  });

  const previewDarkClasses = classNames(
    'cursor-pointer  hidden  dark:inline-block',
    {
      'outline  outline-1  outline-orange':
        hovered || activePage === pageNumber,
    },
  );

  function handleClick(): void {
    setBookNavigatorIsOpened(false);
    const page = document.getElementById(`page-${pageNumber}`);
    setTimeout(() => {
      page?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }

  return (
    <li className='select-none'>
      <div className='inline-block  h-[90px]  w-[165px]  dark:hidden'>
        <Image
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleClick}
          className={previewLightClasses}
          src={PAGES_SCREENSHOTS[pageNumber - 1].light}
          width={330}
          height={180}
          quality={100}
          placeholder='blur'
          blurDataURL={LIGHT_PAGE_PLACEHOLDER}
          alt='Page preview'
        />
      </div>
      <div className='hidden  h-[90px]  w-[165px]  dark:inline-block'>
        <Image
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleClick}
          className={previewDarkClasses}
          src={PAGES_SCREENSHOTS[pageNumber - 1].dark}
          width={165}
          height={90}
          quality={100}
          placeholder='blur'
          blurDataURL={DARK_PAGE_PLACEHOLDER}
          alt='Page preview'
        />
      </div>
      <BasicTextNode
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={pageNumberClasses}
      >
        {pageNumber}
      </BasicTextNode>
    </li>
  );
}

export default BookNavigatorPage;
