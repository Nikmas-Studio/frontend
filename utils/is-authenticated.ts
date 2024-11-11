import { SESSION_ID_COOKIE_NAME } from '@/constants/general';

export async function checkAuth(): Promise<boolean> {
  const { cookies } = await import('next/headers');
  const cookieManager = cookies();

  const sessionId = cookieManager.get(SESSION_ID_COOKIE_NAME)?.value;
  return !!sessionId;
}
