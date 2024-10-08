'use client';

import { ActiveBackgroundProvider } from '@/context/background-master-git-and-github-book/Context';
import { PendingUrlUpdatesProvider } from '@/context/pending-url-updates/Context';
import { ReactElement, ReactNode } from 'react';

function ProvidersMasterGitAndGithubBook({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <ActiveBackgroundProvider>
      <PendingUrlUpdatesProvider>{children}</PendingUrlUpdatesProvider>
    </ActiveBackgroundProvider>
  );
}

export default ProvidersMasterGitAndGithubBook;
