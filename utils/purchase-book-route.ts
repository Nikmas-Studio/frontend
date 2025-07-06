import { PAYMENT_ROUTE_AUTHENTICATED } from '@/constants/general';
import axios from 'axios';

export async function purchaseBook(
  bookURI: string,
): Promise<{ paymentLink: string }> {
  const res = await axios.post(PAYMENT_ROUTE_AUTHENTICATED, {
    bookURI,
  });

  const paymentLink = res.data.paymentLink;

  return paymentLink;
}
