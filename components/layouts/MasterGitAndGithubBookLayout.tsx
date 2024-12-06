'use client';

import { gilroy } from '@/fonts';
import { ReactElement, ReactNode } from 'react';
import Background from '../elements/master-git-and-github-book/Background';
import ProvidersDefault from '../modules/providers/ProvidersDefault';
import ProvidersMasterGitAndGithubBook from '../modules/providers/ProvidersMasterGitAndGithubBook';

interface MasterGitAndGithubBookLayoutProps {
  initialPageId: string | undefined;
  children: ReactNode;
}

function MasterGitAndGithubBookLayout({
  initialPageId,
  children,
}: MasterGitAndGithubBookLayoutProps): ReactElement {
  return (
    <ProvidersDefault>
      <ProvidersMasterGitAndGithubBook initialPageId={initialPageId}>
        <div id='main-book-wrapper' className={`${gilroy.className}`}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                const path = window.location.pathname;
                
                if (
                  !path.endsWith('read') &&
                  !path.endsWith('read/') &&
                  !path.endsWith('demo') &&
                  !path.endsWith('demo/')
                ) {
                  document.body.classList.add('invisible');     
                }
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

export default MasterGitAndGithubBookLayout;
