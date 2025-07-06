export interface BoughtState {
  paidTill: string;
}

export type DetailedBookState =
  | BoughtState
  | BookState.LOADING
  | BookState.UNBOUGHT;

export enum BookState {
  LOADING = 'LOADING',
  UNBOUGHT = 'UNBOUGHT',
  BOUGHT = 'BOUGHT',
}

export function bookIsBought(value: DetailedBookState): value is BoughtState {
  return (
    typeof value === 'object' &&
    value !== null &&
    'paidTill' in value &&
    typeof value.paidTill === 'string'
  );
}
