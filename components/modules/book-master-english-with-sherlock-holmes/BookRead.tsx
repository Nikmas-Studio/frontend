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
import Page10 from './pages/a-study-in-scarlet/Page10';
import Page11 from './pages/a-study-in-scarlet/Page11';
import Page12 from './pages/a-study-in-scarlet/Page12';
import Page13 from './pages/a-study-in-scarlet/Page13';
import Page14 from './pages/a-study-in-scarlet/Page14';
import Page15 from './pages/a-study-in-scarlet/Page15';
import Page16 from './pages/a-study-in-scarlet/Page16';
import Page17 from './pages/a-study-in-scarlet/Page17';
import Page18 from './pages/a-study-in-scarlet/Page18';
import Page19 from './pages/a-study-in-scarlet/Page19';
import Page2 from './pages/a-study-in-scarlet/Page2';
import Page20 from './pages/a-study-in-scarlet/Page20';
import Page21 from './pages/a-study-in-scarlet/Page21';
import Page22 from './pages/a-study-in-scarlet/Page22';
import Page23 from './pages/a-study-in-scarlet/Page23';
import Page24 from './pages/a-study-in-scarlet/Page24';
import Page25 from './pages/a-study-in-scarlet/Page25';
import Page26 from './pages/a-study-in-scarlet/Page26';
import Page27 from './pages/a-study-in-scarlet/Page27';
import Page28 from './pages/a-study-in-scarlet/Page28';
import Page29 from './pages/a-study-in-scarlet/Page29';
import Page3 from './pages/a-study-in-scarlet/Page3';
import Page30 from './pages/a-study-in-scarlet/Page30';
import Page31 from './pages/a-study-in-scarlet/Page31';
import Page32 from './pages/a-study-in-scarlet/Page32';
import Page33 from './pages/a-study-in-scarlet/Page33';
import Page34 from './pages/a-study-in-scarlet/Page34';
import Page35 from './pages/a-study-in-scarlet/Page35';
import Page36 from './pages/a-study-in-scarlet/Page36';
import Page37 from './pages/a-study-in-scarlet/Page37';
import Page38 from './pages/a-study-in-scarlet/Page38';
import Page39 from './pages/a-study-in-scarlet/Page39';
import Page4 from './pages/a-study-in-scarlet/Page4';
import Page40 from './pages/a-study-in-scarlet/Page40';
import Page41 from './pages/a-study-in-scarlet/Page41';
import Page42 from './pages/a-study-in-scarlet/Page42';
import Page5 from './pages/a-study-in-scarlet/Page5';
import Page6 from './pages/a-study-in-scarlet/Page6';
import Page7 from './pages/a-study-in-scarlet/Page7';
import Page8 from './pages/a-study-in-scarlet/Page8';
import Page9 from './pages/a-study-in-scarlet/Page9';

interface BookReadProps {
  initialPageId?: string;
}

function BookRead({ initialPageId }: BookReadProps): ReactElement {
  return (
    <BookMasterEnglishWithSherlockHolmesLayout initialPageId={initialPageId}>
      <BookVersionProvider version={BookVersion.READ}>
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
            Page10,
            Page11,
            Page12,
            Page13,
            Page14,
            Page15,
            Page16,
            Page17,
            Page18,
            Page19,
            Page20,
            Page21,
            Page22,
            Page23,
            Page24,
            Page25,
            Page26,
            Page27,
            Page28,
            Page29,
            Page30,
            Page31,
            Page32,
            Page33,
            Page34,
            Page35,
            Page36,
            Page37,
            Page38,
            Page39,
            Page40,
            Page41,
            Page42,
          ].map((PageComponent, index) => {
            return (
              <PageComponent
                hidePageNumber={PAGES_WITHOUT_CONTROLS.includes(index + 1)}
                viewportHeight={PAGES_WITH_VIEWPORT_HEIGHT.includes(index + 1)}
                pageNumber={index + 1}
                key={index}
              />
            );
          })}
          <TranslationTooltip />
          <BookNavigator />
        </GlobalEffects>
      </BookVersionProvider>
    </BookMasterEnglishWithSherlockHolmesLayout>
  );
}

export default BookRead;
