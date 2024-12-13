'use client';

import {
  LOG_INFO_ROUTE,
  MASTER_GIT_AND_GITHUB_BOOK_PRICE,
  MASTER_GIT_AND_GITHUB_BOOK_URI,
} from '@/constants/general';
import { BookState } from '@/types/book-state';
import { EventName } from '@/types/meta-pixel';
import { buildBookAccessRoute } from '@/utils/build-book-access-route';
import { decryptAndValidateBookReloadToken } from '@/utils/decrypt-and-validate-book-reload-token';
import { verifyOrder } from '@/utils/verifyOrder';
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
    async function notifyMetaPixelOfPurchase(): Promise<void> {
      const orderId = searchParams.get('order');
      if (orderId === null) {
        return;
      }

      window.history.replaceState(
        null,
        '',
        `/${MASTER_GIT_AND_GITHUB_BOOK_URI}/read`,
      );

      const { isValid } = await verifyOrder(orderId);
      if (isValid) {
        console.log('order with orderId:', orderId, 'is valid');
        window.fbq(
          'track',
          EventName.PURCHASE,
          { value: MASTER_GIT_AND_GITHUB_BOOK_PRICE, currency: 'USD' },
          { eventID: orderId },
        );

        axios
          .post(LOG_INFO_ROUTE, {
            message: `Successfully notified MetaPixel of purchase with orderId: ${orderId}`,
          })
          .catch(() => {});
      } else {
        console.log('order with orderId:', orderId, 'is not valid');
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
    window.location.href = `/${MASTER_GIT_AND_GITHUB_BOOK_URI}`;
    return (
      <div className='flex  h-screen  w-screen  justify-center  [background:linear-gradient(135deg,#ff5013,#271ad3)]'></div>
    );
  }

  if (isSmallDevice.current && !reloadTokenIsValid.current) {
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
