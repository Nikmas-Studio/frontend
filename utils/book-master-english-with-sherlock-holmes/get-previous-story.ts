import { BOOK_PARTS } from '@/constants/book-master-english-with-sherlock-holmes/main';
import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';

export function getPreviousStory(currentStory: Story): Story | null {
  const index = BOOK_PARTS.indexOf(currentStory);
  if (index > 0) {
    return BOOK_PARTS[index - 1];
  }
  return null;
}
