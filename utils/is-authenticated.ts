import { SESSION_ID_COOKIE_NAME } from '@/constants/general';

export function checkAuth(): boolean {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const sessionId = require('next/headers')
    .cookies()
    .get(SESSION_ID_COOKIE_NAME)?.value;
  return !!sessionId;
}
