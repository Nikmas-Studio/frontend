/* eslint-disable @next/next/no-head-element */
'use client';

import { gilroy } from '@/fonts';
import { ReactElement, ReactNode } from 'react';
import Background from '../elements/master-git-and-github-book/Background';
import ProvidersDefault from '../modules/providers/ProvidersDefault';
import ProvidersMasterGitAndGithubBook from '../modules/providers/ProvidersMasterGitAndGithubBook';

function MasterGitAndGithubBookReadLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <ProvidersDefault>
      <ProvidersMasterGitAndGithubBook>
        <div className={`${gilroy.className}`}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.documentElement.classList.add('overflow-hidden');
              `,
            }}
          />
          <Background />
          {children}
        </div>
      </ProvidersMasterGitAndGithubBook>
    </ProvidersDefault>
  );
}

export default MasterGitAndGithubBookReadLayout;
