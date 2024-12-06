'use client';

import LoadingFullPageSpinner from '@/components/elements/LoadingFullPageSpinner';
import {
  PAYMENT_SUCCESS_AUTHENTICATED_ROUTE,
  PAYMENT_SUCCESS_GUEST_ROUTE,
} from '@/constants/general';
import { useSession } from '@/context/session/Context';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactElement, useEffect } from 'react';

function PaymentSuccess(): ReactElement {
  const router = useRouter();
  const { session, loading: sessionStateIsLoading } = useSession();

  const searchParams = useSearchParams();
  const orderReference = searchParams.get('order');
  const authToken = searchParams.get('authToken');

  useEffect(() => {
    async function handlePaymentSuccess(): Promise<void> {
      if (orderReference === null) {
        router.push('/');
      }

      const routeUrl =
        session === null
          ? PAYMENT_SUCCESS_GUEST_ROUTE
          : PAYMENT_SUCCESS_AUTHENTICATED_ROUTE;

      try {
        const data = {
          orderId: orderReference,
          authToken: session === null ? authToken : undefined,
        };

        console.log(data);

        const res = await axios.post(routeUrl, {
          orderId: orderReference,
          authToken: session === null ? authToken : undefined,
        });

        router.push(`/${res.data.bookURI}/read`);
      } catch (error) {
        router.push('/');
      }
    }

    if (!sessionStateIsLoading) {
      handlePaymentSuccess();
    }
  }, [router, orderReference, authToken, session, sessionStateIsLoading]);

  return <LoadingFullPageSpinner />;
}

export default PaymentSuccess;
