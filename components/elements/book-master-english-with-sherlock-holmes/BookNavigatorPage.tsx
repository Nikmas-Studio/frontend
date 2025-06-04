'use client';

import { PAGES_SCREENSHOTS } from '@/constants/book-master-english-with-sherlock-holmes/pages-screenshots';
import { merriweather } from '@/fonts';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import BasicTextNode from './BasicTextNode';
import { useBookNavigatorDispatch } from '@/context/book-navigator/Context';
import { useActivePage } from '@/context/active-page/Context';

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
      'outline  outline-1  outline-orange': hovered || activePage === pageNumber,
    },
  );

  function handleClick() {
    setBookNavigatorIsOpened(false);
    const page = document.getElementById(`page-${pageNumber}`);
    page?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <li className='select-none'>
      <Image
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        className={previewLightClasses}
        src={PAGES_SCREENSHOTS[pageNumber - 1].light}
        width={165}
        height={90}
        alt='Page preview'
      />
      <Image
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        className={previewDarkClasses}
        src={PAGES_SCREENSHOTS[pageNumber - 1].dark}
        width={165}
        height={90}
        alt='Page preview'
      />
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
