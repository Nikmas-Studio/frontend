import { NAVIGATOR_TITLE_ID_PREFIX } from '@/constants/general';
import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';

export function storyToTitleId(story: Story): string {
  return `${NAVIGATOR_TITLE_ID_PREFIX}${story
    .replaceAll(' ', '_')
    .replaceAll('’', '0')
    .replaceAll('“', '1')
    .replaceAll('”', '2')}`;
}
