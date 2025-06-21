import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';

export function storyToObjectKey(story: Story): string {
  return story
    .replace(/ /g, '_')
    .replaceAll('’', '')
    .replaceAll('-', '_')
    .replaceAll('“', '')
    .replaceAll('”', '')
    .toUpperCase();
}
