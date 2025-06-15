/* eslint-disable @typescript-eslint/no-explicit-any */
import { DETAILED_BOOK_PART_PAGE_RANGES } from '@/constants/book-master-english-with-sherlock-holmes/main';
import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';

/**
 * Convert a ranges-object root key such as
 *   "A_STUDY_IN_SCARLET"  →  "a study in scarlet"
 */
function rootKeyToLabel(key: string): string {
  return key.toLowerCase().replace(/_/g, ' ');
}

/**
 * Recursively collect every `from` value in a subtree.
 */
function collectFromValues(node: unknown, bucket: number[]): void {
  if (typeof node !== 'object' || node === null) return;

  // leaf object with { from, to }
  if ('from' in node && typeof (node as any).from === 'number') {
    bucket.push((node as any).from);
    return;
  }

  for (const value of Object.values(node)) {
    collectFromValues(value, bucket);
  }
}

/**
 * Returns the first page number (`from`) for the requested story,
 * or `undefined` if that story is not present in the ranges map.
 */
export function getFirstPageOfStory(story: Story): number | null {
  // ----- 1. find the matching root key -----
  const storyLabel = story.toLowerCase();
  const rootKey = Object.keys(DETAILED_BOOK_PART_PAGE_RANGES).find(
    (k) => rootKeyToLabel(k) === storyLabel,
  );
  if (!rootKey) return null;

  const bucket: number[] = [];
  collectFromValues(
    (DETAILED_BOOK_PART_PAGE_RANGES as Record<string, any>)[rootKey],
    bucket,
  );

  // ----- 3. return the smallest one -----
  return bucket.length > 0 ? Math.min(...bucket) : null;
}
