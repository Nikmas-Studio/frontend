import { SelectionData } from "@/types/translations";

export function getSelectionData(): SelectionData | null {
  const selection = getSelection();

  if (selection === null || selection.rangeCount === 0) {
    return null;
  }

  const range = selection.getRangeAt(0);
  const fragment = selection.toString().trim();
  const container = range.commonAncestorContainer;

  const containerElement =
    container.nodeType === Node.TEXT_NODE
      ? container.parentElement
      : (container as Element);
  const paragraph = containerElement?.closest('p, h1, h2, h3, h4, h5, h6');

  if (!paragraph) {
    return null;
  }

  const paragraphText = paragraph?.textContent || '';

  const tempRange = range.cloneRange();
  tempRange.selectNodeContents(paragraph!);
  tempRange.setEnd(range.startContainer, range.startOffset);
  const index = tempRange.toString().length;

  const before = paragraphText.slice(0, index);
  const after = paragraphText.slice(index + fragment.length);

  function getLastSentenceBoundaryIndex(text: string): number {
    const match = [...text.matchAll(/[.!?]/g)].pop();
    return match ? match.index! + 1 : 0;
  }

  function getFirstSentenceBoundaryOffset(text: string): number {
    const match = text.match(/[.!?]/);
    return match ? match.index! + 1 : text.length;
  }

  const sentenceStart = getLastSentenceBoundaryIndex(before);
  const sentenceEnd =
    index + fragment.length + getFirstSentenceBoundaryOffset(after);

  const sentence = paragraphText.slice(sentenceStart, sentenceEnd).trim();

  return {
    context: sentence,
    fragment: fragment,
    range,
  };
}
