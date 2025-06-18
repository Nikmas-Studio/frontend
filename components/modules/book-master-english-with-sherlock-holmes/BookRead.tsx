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
import Page4 from './pages/a-study-in-scarlet/Page4';
import Page5 from './pages/a-study-in-scarlet/Page5';
import Page6 from './pages/a-study-in-scarlet/Page6';
import Page7 from './pages/a-study-in-scarlet/Page7';
import Page8 from './pages/a-study-in-scarlet/Page8';
import Page9 from './pages/a-study-in-scarlet/Page9';
import Page76 from './pages/the-adventures-of-sherlock-holmes/a-case-of-identity/Page76';
import Page77 from './pages/the-adventures-of-sherlock-holmes/a-case-of-identity/Page77';
import Page78 from './pages/the-adventures-of-sherlock-holmes/a-case-of-identity/Page78';
import Page79 from './pages/the-adventures-of-sherlock-holmes/a-case-of-identity/Page79';
import Page63 from './pages/the-adventures-of-sherlock-holmes/a-scandal-in-bohemia/Page63';
import Page64 from './pages/the-adventures-of-sherlock-holmes/a-scandal-in-bohemia/Page64';
import Page65 from './pages/the-adventures-of-sherlock-holmes/a-scandal-in-bohemia/Page65';
import Page66 from './pages/the-adventures-of-sherlock-holmes/a-scandal-in-bohemia/Page66';
import Page67 from './pages/the-adventures-of-sherlock-holmes/a-scandal-in-bohemia/Page67';
import Page68 from './pages/the-adventures-of-sherlock-holmes/a-scandal-in-bohemia/Page68';
import Page69 from './pages/the-adventures-of-sherlock-holmes/a-scandal-in-bohemia/Page69';
import Page80 from './pages/the-adventures-of-sherlock-holmes/the-boscombe-valley-mystery/Page80';
import Page81 from './pages/the-adventures-of-sherlock-holmes/the-boscombe-valley-mystery/Page81';
import Page82 from './pages/the-adventures-of-sherlock-holmes/the-boscombe-valley-mystery/Page82';
import Page83 from './pages/the-adventures-of-sherlock-holmes/the-boscombe-valley-mystery/Page83';
import Page70 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page70';
import Page71 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page71';
import Page72 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page72';
import Page73 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page73';
import Page74 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page74';
import Page75 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page75';
import Page36 from './pages/the-sign-of-the-four/Page36';
import Page37 from './pages/the-sign-of-the-four/Page37';
import Page38 from './pages/the-sign-of-the-four/Page38';
import Page39 from './pages/the-sign-of-the-four/Page39';
import Page40 from './pages/the-sign-of-the-four/Page40';
import Page41 from './pages/the-sign-of-the-four/Page41';
import Page42 from './pages/the-sign-of-the-four/Page42';
import Page43 from './pages/the-sign-of-the-four/Page43';
import Page44 from './pages/the-sign-of-the-four/Page44';
import Page45 from './pages/the-sign-of-the-four/Page45';
import Page46 from './pages/the-sign-of-the-four/Page46';
import Page47 from './pages/the-sign-of-the-four/Page47';
import Page48 from './pages/the-sign-of-the-four/Page48';
import Page49 from './pages/the-sign-of-the-four/Page49';
import Page50 from './pages/the-sign-of-the-four/Page50';
import Page51 from './pages/the-sign-of-the-four/Page51';
import Page52 from './pages/the-sign-of-the-four/Page52';
import Page53 from './pages/the-sign-of-the-four/Page53';
import Page54 from './pages/the-sign-of-the-four/Page54';
import Page55 from './pages/the-sign-of-the-four/Page55';
import Page56 from './pages/the-sign-of-the-four/Page56';
import Page57 from './pages/the-sign-of-the-four/Page57';
import Page58 from './pages/the-sign-of-the-four/Page58';
import Page59 from './pages/the-sign-of-the-four/Page59';
import Page60 from './pages/the-sign-of-the-four/Page60';
import Page61 from './pages/the-sign-of-the-four/Page61';
import Page62 from './pages/the-sign-of-the-four/Page62';

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
            Page43,
            Page44,
            Page45,
            Page46,
            Page47,
            Page48,
            Page49,
            Page50,
            Page51,
            Page52,
            Page53,
            Page54,
            Page55,
            Page56,
            Page57,
            Page58,
            Page59,
            Page60,
            Page61,
            Page62,
            Page63,
            Page64,
            Page65,
            Page66,
            Page67,
            Page68,
            Page69,
            Page70,
            Page71,
            Page72,
            Page73,
            Page74,
            Page75,
            Page76,
            Page77,
            Page78,
            Page79,
            Page80,
            Page81,
            Page82,
            Page83,
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
