/* eslint-disable @next/next/no-head-element */
'use client';

import localFont from 'next/font/local';
import { ReactElement, ReactNode } from 'react';
import Background from '../elements/master-git-and-github-book/Background';
import ProvidersDefault from '../modules/providers/ProvidersDefault';
import ProvidersMasterGitAndGithubBook from '../modules/providers/ProvidersMasterGitAndGithubBook';

const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

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
