/* eslint-disable @next/next/no-head-element */

import localFont from 'next/font/local';
import { ReactElement, ReactNode } from 'react';
import ProvidersDefault from '../modules/providers/ProvidersDefault';

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
    <ProvidersDefault>
      <div className={`${gilroy.className}`}>{children}</div>
    </ProvidersDefault>
  );
}

export default DefaultLayout;
