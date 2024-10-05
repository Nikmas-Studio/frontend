'use client';

import { ActiveBackgroundProvider } from '@/context/background-git-and-github-book/Context';
import { ReactElement, ReactNode } from 'react';

function ProvidersGitAndGithubBook({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <ActiveBackgroundProvider>{children}</ActiveBackgroundProvider>;
}

export default ProvidersGitAndGithubBook;
