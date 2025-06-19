/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DETAILED_BOOK_PART_PAGE_RANGES } from '@/constants/book-master-english-with-sherlock-holmes/main';
import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';

/** Recursively collect all `from` values */
function collectFromValues(node: unknown, bucket: number[]): void {
  if (typeof node !== 'object' || node === null) return;

  if ('from' in node && typeof (node as any).from === 'number') {
    bucket.push((node as any).from);
    return;
  }
  for (const value of Object.values(node)) {
    collectFromValues(value, bucket);
  }
}

/**
 * Find the first page of any story, regardless of nesting depth.
 * Returns `null` if the story is not found.
 */
export function getFirstPageOfStory(story: Story): number | null {
  const targetKey = story.replace(/ /g, '_').replaceAll('’', '').toUpperCase(); // "A_SCANDAL_IN_BOHEMIA"

  const fromValues: number[] = [];

  /** Depth-first search for the target key */
  function traverse(node: any): void {
    if (typeof node !== 'object' || node === null) return;

    for (const [key, value] of Object.entries(node)) {
      if (key.toUpperCase() === targetKey) {
        collectFromValues(value, fromValues); // grab all `from`s under this story
      } else {
        traverse(value); // keep searching deeper
      }
    }
  }

  traverse(DETAILED_BOOK_PART_PAGE_RANGES);

  return fromValues.length ? Math.min(...fromValues) : null;
}
