import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { VALIDATE_AUTH_TOKEN_ROUTE } from '@/constants/general';
import { buildBackendUrl } from '@/utils/build-backend-url';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { ReactElement } from 'react';

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ authToken: string | undefined }>;
}): Promise<ReactElement | never> {
  const { authToken } = await searchParams;

  const { redirect: toRedirect } = await validateAuthToken(authToken);

  if (toRedirect) {
    redirect('/');
    // return (
    //   <MainContainer>
    //     <TextNode className='mt-[35vh]  text-center'>Correct link.</TextNode>
    //   </MainContainer>
    // );
  }

  return (
    <MainContainer>
      <TextNode className='mt-[35vh]  text-center'>
        This&nbsp;link has&nbsp;expired or&nbsp;is&nbsp;invalid. Please request
        a&nbsp;new login link.
      </TextNode>
    </MainContainer>
  );
}

async function validateAuthToken(
  authToken: string | undefined,
): Promise<{ redirect: boolean }> {
  if (authToken === undefined) {
    console.log('authToken is undefined');
    return { redirect: true };
  }

  console.log('after return');

  try {
    const res = await axios.post(
      buildBackendUrl(VALIDATE_AUTH_TOKEN_ROUTE),
      {
        authToken,
      },
      { withCredentials: true },
    );

    console.log('validate auth token res: ', res);
  } catch (error) {
    return { redirect: false };
  }

  return { redirect: true };
}

export default Page;
