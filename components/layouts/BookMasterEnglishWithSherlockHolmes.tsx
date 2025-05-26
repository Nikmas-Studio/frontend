'use client';

import { gilroy } from '@/fonts';
import { ReactElement, ReactNode } from 'react';
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
          {children}
        </div>
      </ProvidersBookMasterEnglishWithSherlockHolmes>
    </ProvidersDefault>
  );
}

export default BookMasterEnglishWithSherlockHolmesLayout;
