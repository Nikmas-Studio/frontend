/* eslint-disable @next/next/no-head-element */
'use client';

import localFont from 'next/font/local';
import { ReactElement, ReactNode, useEffect } from 'react';
import Background from '../elements/master-git-and-github-book/Background';
import ProvidersDefault from '../modules/providers/ProvidersDefault';
import ProvidersGitAndGithubBook from '../modules/providers/ProvidersGitAndGithubBook';

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
  useEffect(() => {
    document.documentElement.classList.remove('overflow-hidden');
  }, []);

  return (
    <ProvidersDefault>
      <ProvidersGitAndGithubBook>
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
      </ProvidersGitAndGithubBook>
    </ProvidersDefault>
  );
}

export default MasterGitAndGithubBookReadLayout;
