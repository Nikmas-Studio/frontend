export interface BoughtState {
  paidUntil: string;
  subscriptionIsActive: boolean;
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
    'paidUntil' in value &&
    typeof value.paidUntil === 'string' &&
    'subscriptionIsActive' in value &&
    typeof value.subscriptionIsActive === 'boolean'
  );
}
