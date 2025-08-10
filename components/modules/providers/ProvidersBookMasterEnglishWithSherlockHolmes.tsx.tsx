'use client';

import { ActivePageProvider } from '@/context/active-page/Context';
import { ActiveBackgroundProvider } from '@/context/background-master-git-and-github-book/Context';
import { PromoDrawerProvider } from '@/context/book-master-english-with-sherlock-holmes/promo-drawer/Context';
import { SettingsProvider } from '@/context/book-master-english-with-sherlock-holmes/settings/Context';
import { TranslationLanguageProvider } from '@/context/book-master-english-with-sherlock-holmes/translation-language/Context';
import { BookNavigatorProvider } from '@/context/book-navigator/Context';
import { InitialPageIdProvider } from '@/context/initial-page-id/Context';
import { InitialScrollToPageStateProvider } from '@/context/initial-scroll-to-page/Context';
import { IsScrollingToPageProvider } from '@/context/is-scrolling-to-page/Context';
import { PendingUrlUpdatesProvider } from '@/context/pending-url-updates/Context';
import { TranslationTooltipProvider } from '@/context/translation-tooltip/Context';
import { ReactElement, ReactNode } from 'react';

interface ProvidersMasterGitAndGithubBookProps {
  initialPageId: string | undefined;
  children: ReactNode;
}

function ProvidersMasterEnglishWithSherlockHolmes({
  initialPageId,
  children,
}: ProvidersMasterGitAndGithubBookProps): ReactElement {
  return (
    <InitialPageIdProvider initialPageId={initialPageId}>
      <InitialScrollToPageStateProvider>
        <ActiveBackgroundProvider>
          <PendingUrlUpdatesProvider>
            <TranslationTooltipProvider>
              <TranslationLanguageProvider>
                <BookNavigatorProvider>
                  <SettingsProvider>
                    <IsScrollingToPageProvider>
                      <ActivePageProvider>
                        <PromoDrawerProvider>{children}</PromoDrawerProvider>
                      </ActivePageProvider>
                    </IsScrollingToPageProvider>
                  </SettingsProvider>
                </BookNavigatorProvider>
              </TranslationLanguageProvider>
            </TranslationTooltipProvider>
          </PendingUrlUpdatesProvider>
        </ActiveBackgroundProvider>
      </InitialScrollToPageStateProvider>
    </InitialPageIdProvider>
  );
}

export default ProvidersMasterEnglishWithSherlockHolmes;
