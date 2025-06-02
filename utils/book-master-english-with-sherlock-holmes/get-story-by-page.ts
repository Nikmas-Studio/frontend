import { STORY_PAGE_RANGES } from '@/constants/book-master-english-with-sherlock-holmes';

export function getStoryByPage(page: number): string | null {
  const match = STORY_PAGE_RANGES.find(
    (range) => page >= range.from && page <= range.to,
  );
  return match !== undefined ? match.story : null;
}
