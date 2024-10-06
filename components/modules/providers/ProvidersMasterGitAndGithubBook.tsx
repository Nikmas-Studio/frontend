'use client';

import { ActiveBackgroundProvider } from '@/context/background-master-git-and-github-book/Context';
import { ReactElement, ReactNode } from 'react';

function ProvidersMasterGitAndGithubBook({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <ActiveBackgroundProvider>{children}</ActiveBackgroundProvider>;
}

export default ProvidersMasterGitAndGithubBook;
