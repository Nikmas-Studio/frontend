import { NAVIGATOR_PART_ID_PREFIX } from '@/constants/general';
import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';

export function partIdToStory(id: string): Story {
  return id
    .replace(`${NAVIGATOR_PART_ID_PREFIX}`, '')
    .replaceAll('_', ' ')
    .replaceAll('0', '’')
    .replaceAll('1', '“')
    .replaceAll('2', '”') as Story;
}
