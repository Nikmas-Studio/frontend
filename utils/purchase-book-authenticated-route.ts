import axios from 'axios';

export async function purchaseBookAuthenticated(
  bookURI: string,
): Promise<{ paymentLink: string }> {
  const res = await axios.post(`/api/books/${bookURI}/purchase-authenticated`);

  const paymentLink = res.data.paymentLink;

  return paymentLink;
}
