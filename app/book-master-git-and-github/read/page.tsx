'use client';

import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

const BookReadWrapper = dynamic(
  () =>
    import('@/components/modules/master-git-and-github-book/BookReadWrapper'),
  { ssr: false },
);

function MasterGitAndGithubBookRead(): ReactElement {
  return <BookReadWrapper />;
}

export default MasterGitAndGithubBookRead;
