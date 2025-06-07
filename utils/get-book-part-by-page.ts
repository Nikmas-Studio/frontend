/* eslint-disable @typescript-eslint/no-explicit-any */

import { DETAILED_BOOK_PART_PAGE_RANGES } from '@/constants/book-master-english-with-sherlock-holmes/main';

type PathObject = Record<string, any>;

export function getBookPartByPage(page: number): string | null {
  function traverse(node: any, path: string[]): PathObject | null {
    if (node && typeof node === 'object') {
      if ('from' in node && 'to' in node) {
        if (page >= node.from && page <= node.to) {
          return path.reduceRight((acc, key) => ({ [key]: acc }), null as any);
        }
        return null;
      }

      for (const key in node) {
        const result = traverse(node[key], [...path, key]);
        if (result !== null) return result;
      }
    }

    return null;
  }

  return JSON.stringify(traverse(DETAILED_BOOK_PART_PAGE_RANGES, []));
}
