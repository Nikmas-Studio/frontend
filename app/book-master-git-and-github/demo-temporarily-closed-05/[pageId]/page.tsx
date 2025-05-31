import BookDemo from '@/components/modules/master-git-and-github-book/BookDemo';
import { Metadata } from 'next';
import { ReactElement } from 'react';

interface BookReadProps {
  params: {
    pageId: string;
  };
}

export const metadata: Metadata = {
  title: 'Master Git & Github: From Everyday Tasks to Deep Waters [Demo]',
  description:
    'Next-gen, highly illustrative, and interactive e-book to master Git and GitHub and make you a version control guru.',
  openGraph: {
    title: 'Master Git & GitHub: From Everyday Tasks to Deep Waters',
    description:
      'Next-gen, highly illustrative, and interactive e-book to master Git and GitHub and make you a version control guru.',
    siteName: 'Nikmas Studio',
    images: [
      {
        url: 'https://nikmas.studio/images/git-book-og-primary.jpg',
        width: 1200,
        height: 630,
        alt: 'Master Git & GitHub: From Everyday Tasks to Deep Waters',
      },
      {
        url: 'https://nikmas.studio/images/git-book-og-high-res.jpg',
        width: 1800,
        height: 945,
        alt: 'Master Git & GitHub: From Everyday Tasks to Deep Waters',
      },
      {
        url: 'https://nikmas.studio/images/git-book-og-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Master Git & GitHub: From Everyday Tasks to Deep Waters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

function MasterGitAndGithubBookReadWithPageNumber({
  params: { pageId },
}: BookReadProps): ReactElement {
  return <BookDemo initialPageId={pageId} />;
}

export default MasterGitAndGithubBookReadWithPageNumber;
