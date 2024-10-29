import MasterGitAndGithubBookLayout from '@/components/layouts/MasterGitAndGithubBookLayout';
import { BookVersionProvider } from '@/context/book-version/Context';
import { BookVersion } from '@/types/book-version';
import { ReactElement } from 'react';
import GlobalEffects from './GlobalEffects';
import CoverPage from './pages/CoverPage';
import EndPageRead from './pages/EndPageRead';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

interface BookReadProps {
  initialPageId?: string;
}

function BookRead({ initialPageId }: BookReadProps): ReactElement {
  return (
    <MasterGitAndGithubBookLayout initialPageId={initialPageId}>
      <BookVersionProvider version={BookVersion.READ}>
        <GlobalEffects initialPageId={initialPageId}>
          <CoverPage />
          <Page1 />
          <Page2 />
          <Page3 />
          <EndPageRead />
        </GlobalEffects>
      </BookVersionProvider>
    </MasterGitAndGithubBookLayout>
  );
}

export default BookRead;
