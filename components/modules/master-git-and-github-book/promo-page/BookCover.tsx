'use client';

import { useBookState } from '@/context/book-state/Context';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light.jpg';
import { BookState } from '@/types/book-state';
import Image from 'next/image';
import { ReactElement } from 'react';

function BookCover(): ReactElement {
  const { bookState } = useBookState();

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
    // <a {...(bookState !== BookState.LOADING && { href })} className='block'>
    <div>
      <Image
        src={bookCoverLight}
        alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
        className='pointer-events-none  w-full  select-none
                           rounded-[14px]  
                           [box-shadow:0px_0px_85px_20px_rgba(0,0,0,0.06)]  dark:hidden'
        sizes='(max-width: 639px) 100vw, (max-width: 1023px) 400px, (max-width: 1279px) 30vw, 400px'
        quality={100}
        priority
      />
      <Image
        src={bookCoverDark}
        alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
        className='pointer-events-none  hidden  w-full  select-none
                             rounded-[14px]  dark:inline-block'
        sizes='(max-width: 639px) 100vw, (max-width: 1023px) 400px, (max-width: 1279px) 30vw, 400px'
        quality={100}
        priority
      />
    </div>
    // </a>
  );
}

export default BookCover;
