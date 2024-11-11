import { SESSION_ID_COOKIE_NAME } from '@/constants/general';
import { cookies } from 'next/headers';

export function checkAuth(): boolean {
  const sessionId = cookies().get(SESSION_ID_COOKIE_NAME)?.value;
  return !!sessionId;
}
