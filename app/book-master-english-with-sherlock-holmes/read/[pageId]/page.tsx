import BookRead from '@/components/modules/book-master-english-with-sherlock-holmes/BookRead';
import BookReadWrapper from '@/components/modules/book-master-english-with-sherlock-holmes/BookReadWrapper';
import { Metadata } from 'next';
import { ReactElement } from 'react';

interface BookReadProps {
  params: {
    pageId: string;
  };
}

export const metadata: Metadata = {
  title: 'Master English with Sherlock Holmes [Read]',
  description:
    'Become proficient in English in record time — with the most effective and engaging tool, verified and recommended by the world’s best English teachers.',
  openGraph: {
    title: 'Master English with Sherlock Holmes [Read]',
    description:
      'Become proficient in English in record time — with the most effective and engaging tool, verified and recommended by the world’s best English teachers.',
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

function BookMasterEnglishWithSherlockHolmesRead({
  params: { pageId },
}: BookReadProps): ReactElement {
  return (
    <BookReadWrapper>
      <BookRead initialPageId={pageId} />
    </BookReadWrapper>
  );
}

export default BookMasterEnglishWithSherlockHolmesRead;
