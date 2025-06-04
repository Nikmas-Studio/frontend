import { BOOK_PART_PAGE_RANGES } from '@/constants/book-master-english-with-sherlock-holmes/main';

export function getBookPartByPage(page: number): string | null {
  const match = BOOK_PART_PAGE_RANGES.find(
    (range) => page >= range.from && page <= range.to,
  );
  return match !== undefined ? match.story : null;
}
