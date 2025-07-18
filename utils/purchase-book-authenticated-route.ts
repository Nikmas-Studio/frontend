import axios from 'axios';

export async function purchaseBookAuthenticated(
  bookURI: string,
  promoCode: string | null,
): Promise<{ paymentLink: string }> {
  const res = await axios.post(
    `/api/books/${bookURI}/purchase-authenticated${promoCode !== null && `?promoCode=${promoCode}`}`,
  );

  const paymentLink = res.data.paymentLink;

  return { paymentLink };
}
