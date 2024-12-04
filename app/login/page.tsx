'use client';

import LoadingFullPageSpinner from '@/components/elements/LoadingFullPageSpinner';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { VALIDATE_AUTH_TOKEN_ROUTE } from '@/constants/general';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';

enum PageState {
  LOADING = 'LOADING',
  INVALID = 'INVALID',
}

function Page(): ReactElement | never {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [pageState, setPageState] = useState(PageState.LOADING);
  const authToken = searchParams.get('authToken');

  useEffect(() => {
    async function validateAuthToken(authToken: string | null): Promise<void> {
      if (authToken === undefined) {
        router.push('/');
      }

      try {
        await axios.post(VALIDATE_AUTH_TOKEN_ROUTE, {
          authToken,
        });
      } catch (error) {
        console.log('error validating auth token', error);
        setPageState(PageState.INVALID);
      }

      router.push('/');
    }

    validateAuthToken(authToken);
  }, [authToken, router]);

  if (pageState === PageState.INVALID) {
    return (
      <MainContainer>
        <TextNode className='mt-[35vh]  text-center'>
          This&nbsp;link has&nbsp;expired or&nbsp;is&nbsp;invalid. Please
          request a&nbsp;new login link.
        </TextNode>
      </MainContainer>
    );
  }

  return <LoadingFullPageSpinner />;
}

export default Page;
