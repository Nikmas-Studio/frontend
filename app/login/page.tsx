import { VALIDATE_AUTH_TOKEN_ROUTE } from '@/constants/general';
import { buildBackendUrl } from '@/utils/build-backend-url';
import axios from 'axios';
import { redirect } from 'next/navigation';

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ authToken: string | undefined }>;
}): Promise<never> {
  const { authToken } = await searchParams;
  await validateAuthToken(authToken);
  redirect('/');
}

async function validateAuthToken(authToken: string | undefined): Promise<void> {
  if (authToken === undefined) {
    return;
  }

  try {
    await axios.post(buildBackendUrl(VALIDATE_AUTH_TOKEN_ROUTE), {
      authToken,
    });
  } catch (error) {}
}

export default Page;
