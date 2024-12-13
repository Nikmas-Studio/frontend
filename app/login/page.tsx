'use client';

import LoadingFullPageSpinner from '@/components/elements/LoadingFullPageSpinner';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { VALIDATE_AUTH_TOKEN_ROUTE } from '@/constants/general';
import { useSessionDispatch } from '@/context/session/Context';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { ReactElement, useEffect, useRef, useState } from 'react';

enum PageState {
  LOADING = 'LOADING',
  INVALID = 'INVALID',
}

function Page(): ReactElement | never {
  const searchParams = useSearchParams();
  const [pageState, setPageState] = useState(PageState.LOADING);
  const authToken = searchParams.get('authToken');
  const authTokenIsValidated = useRef(false);
  const { setSession } = useSessionDispatch();

  useEffect(() => {
    async function validateAuthToken(authToken: string | null): Promise<void> {
      if (authToken === null) {
        window.location.href = '/';
      }

      try {
        const res = await axios.post(VALIDATE_AUTH_TOKEN_ROUTE, {
          authToken,
        });
        setSession(res.data.session);
      } catch (error) {
        setPageState(PageState.INVALID);
        return;
      }

      authTokenIsValidated.current = true;

      window.location.href = '/';
    }

    if (authTokenIsValidated.current === false) {
      validateAuthToken(authToken);
    }
  }, [authToken, setSession]);

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
