'use client';

import { ActiveBackgroundProvider } from '@/context/background-master-git-and-github-book/Context';
import { InitialPageIdProvider } from '@/context/initial-page-id/Context';
import { InitialScrollToPageStateProvider } from '@/context/initial-scroll-to-page/Context';
import { PendingUrlUpdatesProvider } from '@/context/pending-url-updates/Context';
import { ReactElement, ReactNode } from 'react';

interface ProvidersMasterGitAndGithubBookProps {
  initialPageId: string | undefined;
  children: ReactNode;
}

function ProvidersBookMasterGitAndGithub({
  initialPageId,
  children,
}: ProvidersMasterGitAndGithubBookProps): ReactElement {
  return (
    <InitialPageIdProvider initialPageId={initialPageId}>
      <InitialScrollToPageStateProvider>
        <ActiveBackgroundProvider>
          <PendingUrlUpdatesProvider>{children}</PendingUrlUpdatesProvider>
        </ActiveBackgroundProvider>
      </InitialScrollToPageStateProvider>
    </InitialPageIdProvider>
  );
}

export default ProvidersBookMasterGitAndGithub;
