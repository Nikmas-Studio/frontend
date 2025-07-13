import BookMasterGitAndGithubLayout from '@/components/layouts/BookMasterGitAndGithubLayout';
import { BookVersionProvider } from '@/context/book-version/Context';
import { BookVersion } from '@/types/book-version';
import { ReactElement } from 'react';
import GlobalEffects from './GlobalEffects';
import CoverPage from './pages/CoverPage';
import EndPageRead from './pages/EndPageRead';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3Read from './pages/Page3Read';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';

interface BookReadProps {
  initialPageId?: string;
}

function BookRead({ initialPageId }: BookReadProps): ReactElement {
  return (
    <BookMasterGitAndGithubLayout initialPageId={initialPageId}>
      <BookVersionProvider version={BookVersion.READ}>
        <GlobalEffects initialPageId={initialPageId}>
          <CoverPage />
          <Page1 />
          <Page2 />
          <Page3Read />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
          <Page8 />
          <EndPageRead />
        </GlobalEffects>
      </BookVersionProvider>
    </BookMasterGitAndGithubLayout>
  );
}

export default BookRead;
