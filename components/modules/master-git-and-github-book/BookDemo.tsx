'use client';

import MasterGitAndGithubBookLayout from '@/components/layouts/MasterGitAndGithubBookLayout';
import { BookVersionProvider } from '@/context/book-version/Context';
import { BookVersion } from '@/types/book-version';
import { ReactElement } from 'react';
import GlobalEffects from './GlobalEffects';
import CoverPage from './pages/CoverPage';
import EndPageDemo from './pages/EndPageDemo';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

interface BookDemoProps {
  initialPageId?: string;
}

function BookDemo({ initialPageId }: BookDemoProps): ReactElement {
  return (
    <MasterGitAndGithubBookLayout initialPageId={initialPageId}>
      <BookVersionProvider version={BookVersion.DEMO}>
        <GlobalEffects initialPageId={initialPageId}>
          <CoverPage />
          <Page1 />
          <Page2 />
          <Page3 />
          <EndPageDemo />
        </GlobalEffects>
      </BookVersionProvider>
    </MasterGitAndGithubBookLayout>
  );
}

export default BookDemo;
