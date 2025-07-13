import TranslationTooltip from '@/components/elements/book-master-english-with-sherlock-holmes/TranslationTooltip';
import BookMasterEnglishWithSherlockHolmesLayout from '@/components/layouts/BookMasterEnglishWithSherlockHolmes';
import {
  PAGES_WITH_VIEWPORT_HEIGHT,
  PAGES_WITHOUT_NUMBER,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI } from '@/constants/general';
import { PromoDrawerProvider } from '@/context/book-master-english-with-sherlock-holmes/promo-drawer/Context';
import { BookStateProvider } from '@/context/book-state/Context';
import { BookVersionProvider } from '@/context/book-version/Context';
import { BookVersion } from '@/types/book-version';
import { ReactElement } from 'react';
import BookNavigator from './BookNavigator';
import GlobalEffects from './GlobalEffects';
import Page2 from './pages/a-study-in-scarlet/Page2';
import Page3 from './pages/a-study-in-scarlet/Page3';
import Page4 from './pages/a-study-in-scarlet/Page4';
import Page5 from './pages/a-study-in-scarlet/Page5';
import Page6 from './pages/a-study-in-scarlet/Page6';
import Page7 from './pages/a-study-in-scarlet/Page7';
import Page8 from './pages/a-study-in-scarlet/Page8';
import Page9 from './pages/a-study-in-scarlet/Page9';
import CoverPage from './pages/CoverPage';
import InstructionsPage from './pages/InstructionsPage';
import TheEndOfDemoPage from './pages/TheEndOfDemo';
import PromoDrawer from './promo-page/Drawer';
import SettingsDropdown from './SettingsDropdown';

interface BookReadProps {
  initialPageId?: string;
}

function BookDemo({ initialPageId }: BookReadProps): ReactElement {
  return (
    <BookMasterEnglishWithSherlockHolmesLayout initialPageId={initialPageId}>
      <BookVersionProvider version={BookVersion.DEMO}>
        <BookStateProvider
          bookURI={BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI}
        >
          <PromoDrawerProvider>
            <GlobalEffects initialPageId={initialPageId}>
              <CoverPage />
              {[
                InstructionsPage,
                Page2,
                Page3,
                Page4,
                Page5,
                Page6,
                Page7,
                Page8,
                Page9,
                TheEndOfDemoPage,
              ].map((PageComponent, index) => {
                return (
                  <PageComponent
                    hidePageNumber={PAGES_WITHOUT_NUMBER.includes(index + 1)}
                    viewportHeight={PAGES_WITH_VIEWPORT_HEIGHT.includes(
                      index + 1,
                    )}
                    pageNumber={index + 1}
                    key={index}
                  />
                );
              })}
              <TranslationTooltip />
              <SettingsDropdown />
              <BookNavigator demo />
              <PromoDrawer />
            </GlobalEffects>
          </PromoDrawerProvider>
        </BookStateProvider>
      </BookVersionProvider>
    </BookMasterEnglishWithSherlockHolmesLayout>
  );
}

export default BookDemo;
