export interface BoughtState {
  paidUntil?: string;
  subscriptionIsActive: boolean;
  bookPrice: number;
}

export enum BookState {
  LOADING = 'LOADING',
  UNBOUGHT = 'UNBOUGHT',
  BOUGHT = 'BOUGHT',
}

export type DetailedBookState =
  | BoughtState
  | BookState.LOADING
  | BookState.UNBOUGHT;

export function bookIsBought(value: DetailedBookState): value is BoughtState {
  return (
    typeof value === 'object' &&
    value !== null &&
    'subscriptionIsActive' in value &&
    typeof value.subscriptionIsActive === 'boolean'
  );
}
