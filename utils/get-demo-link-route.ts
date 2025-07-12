import axios from 'axios';

export async function getDemoLink({
  bookURI,
  email,
  captchaToken,
}: {
  bookURI: string;
  email: string;
  captchaToken: string;
}): Promise<void> {
  await axios.post(`/api/books/${bookURI}/get-demo-link`, {
    email,
    captchaToken,
    readerName: process.env.NEXT_PUBLIC_HONEYPOT_KEY,
  });
}
