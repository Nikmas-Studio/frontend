'use client';

import { ActiveBackgroundProvider } from '@/context/background-master-git-and-github-book/Context';
import { InitialScrollToPageStateProvider } from '@/context/initial-scroll-to-page/Context';
import { PendingUrlUpdatesProvider } from '@/context/pending-url-updates/Context';
import { ReactElement, ReactNode } from 'react';

function ProvidersMasterGitAndGithubBook({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <InitialScrollToPageStateProvider>
      <ActiveBackgroundProvider>
        <PendingUrlUpdatesProvider>{children}</PendingUrlUpdatesProvider>
      </ActiveBackgroundProvider>
    </InitialScrollToPageStateProvider>
  );
}

export default ProvidersMasterGitAndGithubBook;
