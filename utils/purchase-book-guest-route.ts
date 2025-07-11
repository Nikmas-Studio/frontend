import axios from 'axios';

export async function purchaseBookGuest({
  bookURI,
  email,
  captchaToken,
}: {
  bookURI: string;
  email: string;
  captchaToken: string;
}): Promise<void> {
  await axios.post(`api/books/${bookURI}/purchase-guest`, {
    email,
    captchaToken,
    readerName: process.env.NEXT_PUBLIC_HONEYPOT_KEY,
  });
}
