export interface TranslationTooltipFragmentPosition {
  firstLineRect: DOMRect;
  lastLineRect: DOMRect;
  scrollX: number;
}

export type TranslationTooltipContent = {
  translation: string;
  error: boolean;
};
