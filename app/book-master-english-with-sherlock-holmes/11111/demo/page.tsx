import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
const BookDemo = dynamic(
  () =>
    import(
      '@/components/modules/book-master-english-with-sherlock-holmes/BookDemo'
    ),
  {
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: 'Master English with Sherlock Holmes [Read]',
  description:
    'Next-gen interactive e-book to master English. Learn through story — with high-quality, context-aware AI translation and chapter-based modules that break down grammar, vocabulary, and language patterns as you read.',
  openGraph: {
    title: 'Master English with Sherlock Holmes',
    description:
      'Next-gen interactive e-book to master English. Learn through story — with high-quality, context-aware AI translation and chapter-based modules that break down grammar, vocabulary, and language patterns as you read.',
    url: 'https://nikmas.studio/book-master-english-with-sherlock-holmes/read',
    siteName: 'Nikmas Studio',
    images: [
      {
        url: 'https://nikmas.studio/images/book-master-english-with-sherlock-holmes-og-primary.jpg',
        width: 1200,
        height: 630,
        alt: 'Master English with Sherlock Holmes',
      },
      {
        url: 'https://nikmas.studio/images/book-master-english-with-sherlock-holmes-og-high-res.jpg',
        width: 1800,
        height: 945,
        alt: 'Master English with Sherlock Holmes',
      },
      {
        url: 'https://nikmas.studio/images/book-master-english-with-sherlock-holmes-og-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Master English with Sherlock Holmes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

function BookMasterEnglishWithSherlockHolmesDemo(): ReactElement {
  return <BookDemo />;
}

export default BookMasterEnglishWithSherlockHolmesDemo;
