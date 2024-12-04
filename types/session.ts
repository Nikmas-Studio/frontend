export interface Session {
  readerId: string;
  readerEmail: string;
  isInvestor: boolean;
  hasFullAccess: boolean;
}

export enum ReaderStatus {
  REGULAR = 'REGULAR',
  INVESTOR = 'INVESTOR',
  FULL_ACCESS = 'FULL_ACCESS',
}
