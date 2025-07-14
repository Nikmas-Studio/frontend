import axios from 'axios';

export async function notifyMetaPixelOfPurchaseApi(
  bookUri: string,
): Promise<{ wasAlreadyNotified: boolean; orderId: string }> {
  const res = await axios.post(`/api/notify-meta-pixel-of-purchase/${bookUri}`);

  return { wasAlreadyNotified: res.data.wasAlreadyNotified, orderId: res.data.orderId };
}
