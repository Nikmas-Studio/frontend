import { gilroy } from '@/fonts';
import { ReactElement, ReactNode } from 'react';
import ProvidersDefault from '../modules/providers/ProvidersDefault';

function DefaultLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <ProvidersDefault>
      <div className={`${gilroy.className}`}>{children}</div>
    </ProvidersDefault>
  );
}

export default DefaultLayout;
