'use client';

import { MASTER_GIT_AND_GITHUB_BOOK_URI } from '@/constants/general';
import { BookState } from '@/types/book-state';
import { buildBookAccessRoute } from '@/utils/build-book-access-route';
import { decryptAndValidateBookReloadToken } from '@/utils/decrypt-and-validate-book-reload-token';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import BookRead from './BookRead';

interface BookReadProps {
  initialPageId?: string;
}

function BookReadWrapper({ initialPageId }: BookReadProps): ReactElement {
  const [bookState, setBookState] = useState<BookState>(BookState.LOADING);
  let reloadTokenIsValid = false;
  const encryptedReloadToken = localStorage.getItem('reloadToken');
  if (encryptedReloadToken !== null) {
    const { isValid } = decryptAndValidateBookReloadToken(encryptedReloadToken);
    reloadTokenIsValid = isValid;
  }

  useEffect(() => {
    async function defineBookState(): Promise<void> {
      try {
        const res = await axios.get(
          buildBookAccessRoute(MASTER_GIT_AND_GITHUB_BOOK_URI),
        );
        if (res.data.accessGranted) {
          setBookState(BookState.BOUGHT);
        } else {
          setBookState(BookState.UNBOUGHT);
        }
      } catch (error) {
        setBookState(BookState.UNBOUGHT);
      }
    }

    defineBookState();
  }, []);

  console.log('bookState1', bookState);
  console.log('reloadTokenIsValid?1: ', reloadTokenIsValid);

  if (bookState === BookState.LOADING && !reloadTokenIsValid) {
    console.log('reload token is invalid');
    return (
      <div
        className='flex  
                      h-screen  w-screen  justify-center  [background:linear-gradient(135deg,#ff5013,#271ad3)]'
      >
        <div className='mt-[40vh]'>
          <CircularProgress className='!size-[50px]  !text-white' />
        </div>
      </div>
    );
  }

  if (bookState === BookState.UNBOUGHT) {
    window.location.href = `/${MASTER_GIT_AND_GITHUB_BOOK_URI}`;
    return (
      <div className='flex  h-screen  w-screen  justify-center  [background:linear-gradient(135deg,#ff5013,#271ad3)]'></div>
    );
  }

  console.log('bookState2', bookState);
  console.log('reloadTokenIsValid?2: ', reloadTokenIsValid);

  return <BookRead initialPageId={initialPageId} />;
}

export default BookReadWrapper;
