'use client';

import { BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI } from '@/constants/general';
import { useBookState } from '@/context/book-state/Context';
import { BookState } from '@/types/book-state';
import { CircularProgress } from '@mui/material';
import classNames from 'classnames';
import { ReactElement } from 'react';

function DemoOrReadButton(): ReactElement {
  const { bookState } = useBookState();

  const classes = classNames(
    `
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

  const href = `/${BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI}/read`;

  return (
    <a {...(bookState === BookState.BOUGHT && { href })} className={classes}>
      {bookState === BookState.LOADING && (
        <span className='inline-block  size-[20px]  translate-y-[3px]'>
          <CircularProgress className='!size-[20px]  !text-white  dark:!text-black' />
        </span>
      )}
      {bookState === BookState.UNBOUGHT && 'Try demo'}
      {bookState === BookState.BOUGHT && 'Read'}
    </a>
  );
}

export default DemoOrReadButton;
