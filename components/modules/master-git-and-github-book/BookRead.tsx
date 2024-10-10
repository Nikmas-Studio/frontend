import MasterGitAndGithubBookReadLayout from '@/components/layouts/MasterGitAndGithubBookReadLayout';
import { BASE_PATH_READ } from '@/constants/master-git-and-github-book';
import { ReactElement } from 'react';
import GlobalEffects from './GlobalEffects';
import CoverPage from './pages/CoverPage';
import EndPage from './pages/EndPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

interface BookReadProps {
  initialPageId?: string;
}

function BookRead({ initialPageId }: BookReadProps): ReactElement {
  return (
    <MasterGitAndGithubBookReadLayout>
      <GlobalEffects initialPageId={initialPageId} basePath={BASE_PATH_READ}>
        <CoverPage />
        <Page1 />
        <Page2 />
        <Page3 />
        <EndPage />
      </GlobalEffects>
    </MasterGitAndGithubBookReadLayout>
  );
}

export default BookRead;
