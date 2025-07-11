import { GET_DEMO_LINK_ROUTE } from '@/constants/general';
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
  await axios.post(GET_DEMO_LINK_ROUTE, {
    email,
    bookURI,
    captchaToken,
    readerName: process.env.NEXT_PUBLIC_HONEYPOT_KEY,
  });
}
