'use client';

import MasterGitAndGithubBookReadLayout from '@/components/layouts/MasterGitAndGithubBookReadLayout';
import { ReactElement, useEffect } from 'react';
import CoverPage from './pages/CoverPage';
import EndPage from './pages/EndPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

interface BookReadProps {
  initialPageId?: string;
}

function BookRead({ initialPageId }: BookReadProps): ReactElement {
  useEffect(() => {
    if (initialPageId === undefined) {
      return;
    }

    function scrollToPage(initialPageId: string): void {
      if (initialPageId === 'end') {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'instant',
        });

        return;
      }

      const page = document.getElementById(`page-${initialPageId}`);
      page?.scrollIntoView({ behavior: 'instant' });
    }

    scrollToPage(initialPageId);
  }, [initialPageId]);

  return (
    <MasterGitAndGithubBookReadLayout>
      <CoverPage />
      <Page1 />
      <Page2 />
      <Page3 />
      <EndPage />
    </MasterGitAndGithubBookReadLayout>
  );
}

export default BookRead;
