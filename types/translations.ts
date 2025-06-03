export interface TranslateProps {
  bookURI: string;
  targetLanguage: string;
  context: string;
  fragment: string;
  bookPart: string;
}

export interface SelectionData {
  context: string;
  fragment: string;
  range: Range;
  pageNumber: number | null;
}

export type Translation = string;
