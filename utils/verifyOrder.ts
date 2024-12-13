import { LOG_ERROR_ROUTE } from '@/constants/general';
import axios from 'axios';

export async function verifyOrder(
  orderId: string,
): Promise<{ isValid: boolean }> {
  try {
    const res = await axios.post(`/api/orders/verify`, { orderId });
    return res.data.isValid;
  } catch (error) {
    axios
      .post(LOG_ERROR_ROUTE, {
        message: `Failed to verify order with orderId: ${orderId}: ${JSON.stringify(error)}`,
      })
      .catch(() => {});

    return { isValid: false };
  }
}
