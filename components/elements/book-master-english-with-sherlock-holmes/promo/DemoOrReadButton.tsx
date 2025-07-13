'use client';

import { BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI } from '@/constants/general';
import { usePromoDrawerDispatch } from '@/context/book-master-english-with-sherlock-holmes/promo-drawer/Context';
import { useBookState } from '@/context/book-state/Context';
import { merriweather } from '@/fonts';
import { bookIsBought, BookState } from '@/types/book-state';
import { CircularProgress } from '@mui/material';
import classNames from 'classnames';
import { ReactElement, useEffect, useState } from 'react';

function DemoOrReadButton(): ReactElement {
  const { bookState } = useBookState();
  const { setDrawerIsOpened } = usePromoDrawerDispatch();
  const [href, setHref] = useState(
    `/${BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI}/read/`,
  );

  const classes = classNames(
    `
    ${merriweather.className}
    button  mb-1.5  self-center 
    bg-black  text-white
    hover:bg-blue  dark:bg-white
    dark:text-black dark:hover:text-white
  `,
    {
      'pointer-events-none': bookState === BookState.LOADING,
      'cursor-pointer': bookState !== BookState.LOADING,
    },
  );

  useEffect(() => {
    const updateFromStorage = (): void => {
      const page =
        localStorage.getItem(
          'book-master-english-with-sherlock-holmes/read/last-visited-page',
        ) || '';

      const href = `/${BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI}/read/${page}`;
      setHref(href);
    };

    updateFromStorage();

    window.addEventListener('pageshow', updateFromStorage);

    return () => window.removeEventListener('pageshow', updateFromStorage);
  }, []);

  function handleClick(): void {
    if (bookState === BookState.UNBOUGHT) {
      setDrawerIsOpened('demo');
    }
  }

  return (
    <a
      onClick={handleClick}
      {...(bookIsBought(bookState) && { href })}
      className={classes}
    >
      {bookState === BookState.LOADING && (
        <span className='inline-block  size-[20px]  translate-y-[3px]'>
          <CircularProgress className='!size-[20px]  !text-white  dark:!text-black' />
        </span>
      )}
      {bookState === BookState.UNBOUGHT && 'Try demo'}
      {bookIsBought(bookState) && 'Read'}
    </a>
  );
}

export default DemoOrReadButton;
