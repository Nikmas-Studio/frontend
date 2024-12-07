import { BOOK_RELOAD_KEY } from '@/constants/general';

interface BookReloadTokenValidationResult {
  isValid: boolean;
}

export async function decryptAndValidateBookReloadToken(
  encryptedToken: string,
  iv: string,
): Promise<BookReloadTokenValidationResult> {
  const secretKey = BOOK_RELOAD_KEY;
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secretKey);
  const hash = await crypto.subtle.digest('SHA-256', keyData);

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    hash,
    { name: 'AES-GCM' },
    false,
    ['decrypt'],
  );

  const tokenBytes = Uint8Array.from(atob(encryptedToken), (c) =>
    c.charCodeAt(0),
  );
  const ivBytes = Uint8Array.from(atob(iv), (c) => c.charCodeAt(0));

  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: ivBytes },
    cryptoKey,
    tokenBytes,
  );

  const decoder = new TextDecoder();
  const decryptedToken = decoder.decode(decrypted);
  const expiry = decryptedToken.split('.')[1];

  if (Date.now() > parseInt(expiry, 10)) {
    return { isValid: false };
  }

  return { isValid: true };
}
