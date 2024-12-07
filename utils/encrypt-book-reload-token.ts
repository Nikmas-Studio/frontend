import { BOOK_RELOAD_KEY } from '@/constants/general';

interface EncryptionResult {
  encryptedToken: string;
  iv: string;
}

export async function encryptBookReloadToken(): Promise<EncryptionResult> {
  const secretKey = BOOK_RELOAD_KEY;
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secretKey);

  const hash = await crypto.subtle.digest('SHA-256', keyData);

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    hash,
    { name: 'AES-GCM' },
    false,
    ['encrypt'],
  );

  const value = 'true';
  const expiry = Date.now() + 1000 * 60; // 1 minute

  const token = `${value}.${expiry}`;
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    cryptoKey,
    encoder.encode(token),
  );

  return {
    encryptedToken: btoa(String.fromCharCode(...new Uint8Array(encrypted))),
    iv: btoa(String.fromCharCode(...iv)),
  };
}
