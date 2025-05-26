export interface TranslateProps {
  bookURI: string;
  targetLanguage: string;
  context: string;
  fragment: string;
}

export interface SelectionData {
  context: string;
  fragment: string;
  range: Range;
}

export type Translation = string;