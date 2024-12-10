'use client';

import BookReadWrapper from '@/components/modules/master-git-and-github-book/BookReadWrapper';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Master Git & Github: From Everyday Tasks to Deep Waters [Read]',
  description:
    'Next-gen, highly illustrative, and interactive e-book to master Git and GitHub and make you a version control guru.',
  openGraph: {
    title: 'Master Git & GitHub: From Everyday Tasks to Deep Waters',
    description:
      'Next-gen, highly illustrative, and interactive e-book to master Git and GitHub and make you a version control guru.',
    url: 'https://nikmas.studio/book-master-git-and-github/read',
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

function MasterGitAndGithubBookRead(): ReactElement {
  return <BookReadWrapper />;
}

export default MasterGitAndGithubBookRead;
