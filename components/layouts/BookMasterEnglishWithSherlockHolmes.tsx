'use client';

import { gilroy } from '@/fonts';
import Script from 'next/script';
import { ReactElement, ReactNode } from 'react';
import Background from '../elements/book-master-english-with-sherlock-holmes/Background';
import ProvidersBookMasterEnglishWithSherlockHolmes from '../modules/providers/ProvidersBookMasterEnglishWithSherlockHolmes.tsx';
import ProvidersDefault from '../modules/providers/ProvidersDefault';

interface BookMasterEnglishWithSherlockHolmesLayoutProps {
  initialPageId: string | undefined;
  children: ReactNode;
}

function BookMasterEnglishWithSherlockHolmesLayout({
  initialPageId,
  children,
}: BookMasterEnglishWithSherlockHolmesLayoutProps): ReactElement {
  return (
    <ProvidersDefault>
      <ProvidersBookMasterEnglishWithSherlockHolmes
        initialPageId={initialPageId}
      >
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
      </ProvidersBookMasterEnglishWithSherlockHolmes>
    </ProvidersDefault>
  );
}

export default BookMasterEnglishWithSherlockHolmesLayout;
