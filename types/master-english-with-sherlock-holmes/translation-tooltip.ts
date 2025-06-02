export interface TranslationTooltipFragmentPosition {
  rect: DOMRect;
  scrollY: number;
  scrollX: number;
}

export type TranslationTooltipContent = {
  translation: string;
  error: boolean;
};
