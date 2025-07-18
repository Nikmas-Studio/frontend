import axios from 'axios';

export async function purchaseBookGuest({
  bookURI,
  email,
  captchaToken,
  promoCode,
}: {
  bookURI: string;
  email: string;
  captchaToken: string;
  promoCode: string | null;
}): Promise<void> {
  await axios.post(`/api/books/${bookURI}/purchase-guest`, {
    email,
    captchaToken,
    readerName: process.env.NEXT_PUBLIC_HONEYPOT_KEY,
    promoCode: promoCode || undefined,
  });
}
