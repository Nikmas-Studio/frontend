import { BookPartPageRange } from '@/types/book-part-page-range';

export const BASE_PATH_READ = '/book-master-english-with-sherlock-holmes/read';
export const BASE_PATH_DEMO = '/book-master-english-with-sherlock-holmes/demo';
export const MAX_TRANSLATION_FRAGMENT_LENGTH = 500;

export const BOOK_PART_PAGE_RANGES: BookPartPageRange[] = [
  { from: 1, to: 2, story: 'A Study in Scarlet' },
];
