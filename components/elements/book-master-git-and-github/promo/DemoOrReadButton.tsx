'use client';

import { useBookState } from '@/context/book-state/Context';
import { BookState } from '@/types/book-state';
import { CircularProgress } from '@mui/material';
import classNames from 'classnames';
import { ReactElement } from 'react';

function DemoOrReadButton(): ReactElement {
  const { bookState } = useBookState();

  const classes = classNames(
    `
    button  mb-1  self-center 
    bg-black  text-white
    hover:bg-blue  dark:bg-white
    dark:text-black dark:hover:text-white
  `,
    {
      'pointer-events-none': bookState === BookState.LOADING,
    },
  );

  let href: string;

  switch (bookState) {
    case BookState.LOADING:
    case BookState.UNBOUGHT:
      href = '/book-master-git-and-github/demo';
      break;
    case BookState.BOUGHT:
      href = '/book-master-git-and-github/read';
      break;
  }

  return (
    <a {...(bookState !== BookState.LOADING && { href })} className={classes}>
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
