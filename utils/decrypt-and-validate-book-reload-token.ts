import { BOOK_RELOAD_KEY } from '@/constants/general';
import { sha256 } from 'js-sha256';

interface BookReloadTokenValidationResult {
  isValid: boolean;
}

export function decryptAndValidateBookReloadToken(
  encryptedToken: string,
): BookReloadTokenValidationResult {
  const secretKey = BOOK_RELOAD_KEY;

  const decodedToken = atob(encryptedToken);
  const [value, expiry, signature] = decodedToken.split('.');
  if (!value || !expiry || !signature) {
    return { isValid: false };
  }

  if (Date.now() > parseInt(expiry, 10)) {
    return { isValid: false };
  }

  const expectedSignature = sha256.hmac(secretKey, `${value}.${expiry}`);

  if (expectedSignature !== signature) {
    return { isValid: false };
  }

  return { isValid: true };
}
