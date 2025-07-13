import { NAVIGATOR_PART_ID_PREFIX } from '@/constants/general';
import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';

export function storyToPartId(story: Story): string {
  return `${NAVIGATOR_PART_ID_PREFIX}${story
    .replaceAll(' ', '_')
    .replaceAll('’', '0')
    .replaceAll('“', '1')
    .replaceAll('”', '2')}`;
}
