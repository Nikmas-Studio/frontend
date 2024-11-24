import BookRead from '@/components/modules/master-git-and-github-book/BookRead';
import { ReactElement } from 'react';

interface BookReadProps {
  params: {
    pageId: string;
  };
}

function MasterGitAndGithubBookReadWithPageNumber({
  params: { pageId },
}: BookReadProps): ReactElement {
  return <BookRead initialPageId={pageId} />;
  // return <></>;
}

export default MasterGitAndGithubBookReadWithPageNumber;
