'use client';

import BookReadWrapper from '@/components/modules/master-git-and-github-book/BookReadWrapper';
import { ReactElement } from 'react';

interface BookReadProps {
  params: {
    pageId: string;
  };
}

function MasterGitAndGithubBookReadWithPageNumber({
  params: { pageId },
}: BookReadProps): ReactElement {
  return <BookReadWrapper initialPageId={pageId} />;
}

export default MasterGitAndGithubBookReadWithPageNumber;
