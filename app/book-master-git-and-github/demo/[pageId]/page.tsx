import BookDemo from '@/components/modules/master-git-and-github-book/BookDemo';
import { ReactElement } from 'react';

interface BookReadProps {
  params: {
    pageId: string;
  };
}

function MasterGitAndGithubBookReadWithPageNumber({
  params: { pageId },
}: BookReadProps): ReactElement {
  return <BookDemo initialPageId={pageId} />;
}

export default MasterGitAndGithubBookReadWithPageNumber;
