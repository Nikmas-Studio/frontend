'use client';

import { gilroy } from '@/fonts';
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
          {/* <Script
            id='book-master-english-with-sherlock-holmes-invisible-script'
            strategy='beforeInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                const path = window.location.pathname;
                console.log('invisible');
                
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
          /> */}
          <Background>{children}</Background>
        </div>
      </ProvidersBookMasterEnglishWithSherlockHolmes>
    </ProvidersDefault>
  );
}

export default BookMasterEnglishWithSherlockHolmesLayout;
