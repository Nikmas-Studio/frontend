import { BOOK_RELOAD_KEY } from '@/constants/general';
import { sha256 } from 'js-sha256';

export function encryptBookReloadToken(): string {
  const secretKey = BOOK_RELOAD_KEY;

  const value = 'bookReloadToken';

  const expiry = Date.now() + 5 * 60 * 1000;
  const plainToken = `${value}.${expiry}`;
  const signature = sha256.hmac(secretKey, plainToken);

  const combinedToken = `${plainToken}.${signature}`;
  return btoa(combinedToken);
}
