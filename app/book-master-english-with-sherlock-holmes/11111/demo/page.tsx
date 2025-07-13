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
  title: 'Master English with Sherlock Holmes [Demo]',
  description:
    'Advance your English through story — with the highest‑quality, highlight‑based, context‑aware AI translation, built right into the book and available in any language.',
  openGraph: {
    title: 'Master English with Sherlock Holmes [Demo]',
    description:
      'Advance your English through story — with the highest‑quality, highlight‑based, context‑aware AI translation, built right into the book and available in any language.',
    url: 'https://nikmas.studio/book-master-english-with-sherlock-holmes/read',
    siteName: 'Nikmas Studio',
    images: [
      {
        url: 'https://nikmas.studio/images/sherlock-og-primary.jpg',
        width: 1200,
        height: 630,
        alt: 'Master English with Sherlock Holmes [Interactive e-book]',
      },
      {
        url: 'https://nikmas.studio/images/sherlock-og-high-res.jpg',
        width: 1800,
        height: 945,
        alt: 'Master English with Sherlock Holmes [Interactive e-book]',
      },
      {
        url: 'https://nikmas.studio/images/sherlock-og-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Master English with Sherlock Holmes [Interactive e-book]',
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
