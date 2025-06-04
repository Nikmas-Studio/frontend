import TranslationTooltip from '@/components/elements/book-master-english-with-sherlock-holmes/TranslationTooltip';
import BookMasterEnglishWithSherlockHolmesLayout from '@/components/layouts/BookMasterEnglishWithSherlockHolmes';
import {
  PAGES_WITH_VIEWPORT_HEIGHT,
  PAGES_WITHOUT_CONTROLS,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { BookVersionProvider } from '@/context/book-version/Context';
import { BookVersion } from '@/types/book-version';
import { ReactElement } from 'react';
import BookNavigator from './BookNavigator';
import GlobalEffects from './GlobalEffects';
import CoverPage from './pages/CoverPage';
import InstructionsPage from './pages/InstructionsPage';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

interface BookReadProps {
  initialPageId?: string;
}

function BookRead({ initialPageId }: BookReadProps): ReactElement {
  return (
    <BookMasterEnglishWithSherlockHolmesLayout initialPageId={initialPageId}>
      <BookVersionProvider version={BookVersion.READ}>
        <GlobalEffects initialPageId={initialPageId}>
          <CoverPage />
          {[InstructionsPage, Page2, Page3, Page4, Page5].map(
            (PageComponent, index) => {
              return (
                <PageComponent
                  hidePageNumber={PAGES_WITHOUT_CONTROLS.includes(index + 1)}
                  viewportHeight={PAGES_WITH_VIEWPORT_HEIGHT.includes(
                    index + 1,
                  )}
                  pageNumber={index + 1}
                  key={index}
                />
              );
            },
          )}
          <TranslationTooltip />
          <BookNavigator />
        </GlobalEffects>
      </BookVersionProvider>
    </BookMasterEnglishWithSherlockHolmesLayout>
  );
}

export default BookRead;
