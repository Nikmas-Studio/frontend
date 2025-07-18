import axios from 'axios';

export async function checkPromoCodeValidityApi(
  promoCode: string,
): Promise<{ isValid: boolean }> {
  try {
    const res = await axios.get(`/api/promo-codes/${promoCode}/check-validity`);
    return { isValid: res.data.valid };
  } catch (error) {
    return { isValid: false };
  }
}
