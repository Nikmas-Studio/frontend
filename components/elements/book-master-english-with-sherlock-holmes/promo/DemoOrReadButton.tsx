'use client';

import { BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI } from '@/constants/general';
import { usePromoDrawerDispatch } from '@/context/book-master-english-with-sherlock-holmes/promo-drawer/Context';
import { useBookState } from '@/context/book-state/Context';
import { merriweather } from '@/fonts';
import { bookIsBought, BookState } from '@/types/book-state';
import { CircularProgress } from '@mui/material';
import classNames from 'classnames';
import { ReactElement } from 'react';

function DemoOrReadButton(): ReactElement {
  const { bookState } = useBookState();
  const { setDrawerIsOpened } = usePromoDrawerDispatch();

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

  let lastVisitedPage = localStorage.getItem(
    `book-master-english-with-sherlock-holmes/read/last-visited-page`,
  );

  if (!lastVisitedPage) {
    lastVisitedPage = '';
  }

  const href = `/${BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI}/read/${lastVisitedPage}`;

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
