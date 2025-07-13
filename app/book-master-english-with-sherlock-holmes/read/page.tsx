import BookRead from '@/components/modules/book-master-english-with-sherlock-holmes/BookRead';
import BookReadWrapper from '@/components/modules/book-master-english-with-sherlock-holmes/BookReadWrapper';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Master English with Sherlock Holmes [Read]',
  description:
    'Advance your English through story — with the highest‑quality, highlight‑based, context‑aware AI translation, built right into the book and available in any language.',
  openGraph: {
    title: 'Master English with Sherlock Holmes [Read]',
    description:
      'Advance your English through story — with the highest‑quality, highlight‑based, context‑aware AI translation, built right into the book and available in any language.',
    url: 'https://nikmas.studio/book-master-english-with-sherlock-holmes/read',
    siteName: 'Nikmas Studio',
    images: [
      {
        url: 'https://nikmas.studio/images/sherlock-primary.jpg',
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

function BookMasterEnglishWithSherlockHolmesRead(): ReactElement {
  return (
    <BookReadWrapper>
      <BookRead />
    </BookReadWrapper>
  );
}

export default BookMasterEnglishWithSherlockHolmesRead;
