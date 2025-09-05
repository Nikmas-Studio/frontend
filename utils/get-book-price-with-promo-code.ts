export function getBookPriceWithPromoCode(promoCode: string): number {
  if (promoCode === 'it-club-1111') {
    return 19;
  }

  return 23;
}
