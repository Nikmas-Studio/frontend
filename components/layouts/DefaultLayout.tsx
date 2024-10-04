/* eslint-disable @next/next/no-head-element */

import localFont from 'next/font/local';
import { ReactElement, ReactNode } from 'react';
import ProvidersDefault from '../modules/ProvidersDefault';

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

function DefaultLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <html lang='en' className={`${gilroy.className}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
                   window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <ProvidersDefault>{children}</ProvidersDefault>
    </html>
  );
}

export default DefaultLayout;
