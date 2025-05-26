'use client';

import { gilroy } from '@/fonts';
import { ReactElement, ReactNode } from 'react';
import Background from '../elements/book-master-git-and-github/Background';
import ProvidersBookMasterGitAndGithub from '../modules/providers/ProvidersBookMasterGitAndGithu';
import ProvidersDefault from '../modules/providers/ProvidersDefault';

interface MasterGitAndGithubBookLayoutProps {
  initialPageId: string | undefined;
  children: ReactNode;
}

function BookMasterGitAndGithubLayout({
  initialPageId,
  children,
}: MasterGitAndGithubBookLayoutProps): ReactElement {
  return (
    <ProvidersDefault>
      <ProvidersBookMasterGitAndGithub initialPageId={initialPageId}>
        <div id='main-book-wrapper' className={`${gilroy.className}`}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.documentElement.classList.add('overflow-hidden');
                
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
      </ProvidersBookMasterGitAndGithub>
    </ProvidersDefault>
  );
}

export default BookMasterGitAndGithubLayout;
