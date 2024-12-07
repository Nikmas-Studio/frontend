'use client';

import BookRead from '@/components/modules/master-git-and-github-book/BookRead';
import { MASTER_GIT_AND_GITHUB_BOOK_URI } from '@/constants/general';
import { BookState } from '@/types/book-state';
import { buildBookAccessRoute } from '@/utils/build-book-access-route';
import { decryptAndValidateBookReloadToken } from '@/utils/decrypt-and-validate-book-reload-token';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { ReactElement, useEffect, useRef, useState } from 'react';

function MasterGitAndGithubBookRead(): ReactElement {
  const [bookState, setBookState] = useState<BookState>(BookState.LOADING);
  const reloadTokenIsValid = useRef<boolean>(false);

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

  useEffect(() => {
    async function setToken(): Promise<void> {
      const encryptedToken = localStorage.getItem('reloadToken');
      const iv = localStorage.getItem('reloadTokenIv');

      try {
        const { isValid } = await decryptAndValidateBookReloadToken(
          encryptedToken!,
          iv!,
        );

        reloadTokenIsValid.current = isValid;
      } catch (error) {}
    }

    setToken();
  }, []);

  if (bookState === BookState.LOADING && !reloadTokenIsValid.current) {
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

  return <BookRead />;
}

export default MasterGitAndGithubBookRead;
