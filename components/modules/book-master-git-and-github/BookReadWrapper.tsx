'use client';

import {
  BOOK_MASTER_GIT_AND_GITHUB_URI,
  BOOK_PRICE,
  LOG_INFO_ROUTE,
} from '@/constants/general';
import { BookState } from '@/types/book-state';
import { EventName } from '@/types/meta-pixel';
import { buildBookAccessRoute } from '@/utils/build-book-access-route';
import { decryptAndValidateBookReloadToken } from '@/utils/decrypt-and-validate-book-reload-token';
import { verifyOrder } from '@/utils/verify-order';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { ReactElement, useEffect, useRef, useState } from 'react';
import BookRead from './BookRead';

interface BookReadProps {
  initialPageId?: string;
}

function BookReadWrapper({ initialPageId }: BookReadProps): ReactElement {
  const [bookState, setBookState] = useState<BookState>(BookState.LOADING);
  const reloadTokenIsValid = useRef(false);
  const isSmallDevice = useRef(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function defineBookState(): Promise<void> {
      if (window.innerWidth <= 1280) {
        isSmallDevice.current = true;
      }

      const encryptedReloadToken = localStorage.getItem('reloadToken');
      if (encryptedReloadToken !== null) {
        const { isValid } =
          decryptAndValidateBookReloadToken(encryptedReloadToken);
        reloadTokenIsValid.current = isValid;
      }

      try {
        const res = await axios.get(
          buildBookAccessRoute(BOOK_MASTER_GIT_AND_GITHUB_URI),
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
      const orderId = searchParams.get('order');
      if (orderId === null) {
        return;
      }

      window.history.replaceState(
        null,
        '',
        `/${BOOK_MASTER_GIT_AND_GITHUB_URI}/read`,
      );

      const { isValid } = await verifyOrder(orderId);
      if (isValid) {
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
    }

    notifyMetaPixelOfPurchase();
  }, [searchParams]);

  if (bookState === BookState.LOADING) {
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
    window.location.href = `/${BOOK_MASTER_GIT_AND_GITHUB_URI}`;
    return (
      <div className='flex  h-screen  w-screen  justify-center  [background:linear-gradient(135deg,#ff5013,#271ad3)]'></div>
    );
  }

  if (isSmallDevice.current && !reloadTokenIsValid.current) {
    // if (isSmallDevice.current) {
    return (
      <>
        <div
          className='fixed  inset-0  z-[111992]  flex  
                      size-full  justify-center [background:linear-gradient(135deg,#ff5013,#271ad3)]'
        >
          {initialPageId === undefined && (
            <div className='mt-[40vh]'>
              <CircularProgress className='!size-[50px]  !text-white' />
            </div>
          )}
        </div>
        <BookRead initialPageId={initialPageId} />
      </>
    );
  }

  return <BookRead initialPageId={initialPageId} />;
}

export default BookReadWrapper;
