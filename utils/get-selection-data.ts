import { SelectionData } from '@/types/translations';

export function getSelectionData(): SelectionData | null {
  const selection = getSelection();

  if (selection === null || selection.rangeCount === 0) {
    return null;
  }

  const range = selection.getRangeAt(0);
  const fragment = selection.toString().trim();
  if (fragment.length === 0) {
    return null;
  }

  const container = range.commonAncestorContainer;

  const paragraph =
    container.nodeType === Node.TEXT_NODE
      ? container.parentElement
      : (container as Element);

  if (!paragraph) {
    return null;
  }

  if (paragraph.id === 'translation-tooltip') {
    return null;
  }

  const pageNumber = getPageNumber(paragraph);

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
    fragment,
    range,
    pageNumber,
  };
}

function getPageNumber(paragraph: Element | null): number | null {
  if (!paragraph) return null;

  let node: HTMLElement | null = paragraph as HTMLElement;

  while (node) {
    if (node.tagName === 'SECTION' && node.id && /^page-\d+$/.test(node.id)) {
      const match = node.id.match(/^page-(\d+)$/);
      return match ? parseInt(match[1], 10) : null;
    }

    node = node.parentElement;
  }

  return null;
}
