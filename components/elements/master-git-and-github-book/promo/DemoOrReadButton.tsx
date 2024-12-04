'use client';

import { BookState } from '@/types/book-state';
import { CircularProgress } from '@mui/material';
import classNames from 'classnames';
import { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { buildBookAccessRoute } from '@/utils/build-book-access-route';
import { MASTER_GIT_AND_GITHUB_BOOK_URI } from '@/constants/general';

function DemoOrReadButton(): ReactElement {
  const [bookState, setBookState] = useState<BookState>(BookState.LOADING);

  useEffect(() => {
    async function defineBookState(): Promise<void> {
      const res = await axios.get(
        buildBookAccessRoute(MASTER_GIT_AND_GITHUB_BOOK_URI),
      );
      if (res.data.accessGranted) {
        setBookState(BookState.BOUGHT);
      } else {
        setBookState(BookState.UNBOUGHT);
      }
    }

    defineBookState();
  }, []);

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
    <a href={href} className={classes}>
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
