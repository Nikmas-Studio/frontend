'use client';

import {
  BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI,
  BOOK_PRICE,
  LOG_ERROR_ROUTE,
  LOG_INFO_ROUTE,
} from '@/constants/general';
import { BookState } from '@/types/book-state';
import { EventName } from '@/types/meta-pixel';
import { buildBookAccessRoute } from '@/utils/build-book-access-route';
import { decryptAndValidateBookReloadToken } from '@/utils/decrypt-and-validate-book-reload-token';
import { notifyMetaPixelOfPurchaseApi } from '@/utils/notify-meta-pixel-of-purchase';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';

interface BookReadProps {
  children: ReactNode;
}

function BookReadWrapper({ children }: BookReadProps): ReactElement {
  const [bookState, setBookState] = useState<BookState>(BookState.LOADING);
  const reloadTokenIsValid = useRef(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function defineBookState(): Promise<void> {
      const encryptedReloadToken = localStorage.getItem('reloadToken');
      if (encryptedReloadToken !== null) {
        const { isValid } =
          decryptAndValidateBookReloadToken(encryptedReloadToken);
        reloadTokenIsValid.current = isValid;
      }

      try {
        const res = await axios.get(
          buildBookAccessRoute(BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI),
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
    async function notifyMetaPixelOfPurchase(): Promise<void> {
      try {
        const { wasAlreadyNotified, orderId } =
          await notifyMetaPixelOfPurchaseApi(
            BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI,
          );

        if (!wasAlreadyNotified) {
          window.fbq(
            'track',
            EventName.PURCHASE,
            { value: BOOK_PRICE, currency: 'USD' },
            { eventID: orderId },
          );

          axios
            .post(LOG_INFO_ROUTE, {
              message: `Successfully notified MetaPixel of purchase with orderId: ${orderId}`,
            })
            .catch(() => {});
        }
      } catch (e) {
        axios.post(LOG_ERROR_ROUTE, {
          message: `Failed to notify MetaPixel of purchase for book ${BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI}: ${JSON.stringify(e)}`,
        });
      }
    }

    notifyMetaPixelOfPurchase();
  }, [searchParams]);

  if (bookState === BookState.LOADING) {
    return (
      <div
        className='flex  h-screen  w-screen  justify-center
                  bg-white  dark:bg-black'
      >
        <div className='mt-[40vh]'>
          <CircularProgress
            className='!size-[50px]  !text-black  
                     dark:!text-white'
          />
        </div>
      </div>
    );
  }

  if (bookState === BookState.UNBOUGHT) {
    window.location.href = `/${BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI}`;
    return <div className='flex  h-screen  w-screen  justify-center'></div>;
  }

  return <>{children}</>;
}

export default BookReadWrapper;
