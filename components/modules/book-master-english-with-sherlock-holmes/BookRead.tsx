import TranslationTooltip from '@/components/elements/book-master-english-with-sherlock-holmes/TranslationTooltip';
import BookMasterEnglishWithSherlockHolmesLayout from '@/components/layouts/BookMasterEnglishWithSherlockHolmes';
import {
  PAGES_WITH_VIEWPORT_HEIGHT,
  PAGES_WITHOUT_NUMBER,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { BookVersionProvider } from '@/context/book-version/Context';
import { BookVersion } from '@/types/book-version';
import { ReactElement } from 'react';
import BookNavigator from './BookNavigator';
import GlobalEffects from './GlobalEffects';
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
import CoverPage from './pages/CoverPage';
import InstructionsPage from './pages/InstructionsPage';
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
import Page112 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-beryl-coronet/Page112';
import Page113 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-beryl-coronet/Page113';
import Page114 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-beryl-coronet/Page114';
import Page115 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-beryl-coronet/Page115';
import Page116 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-beryl-coronet/Page116';
import Page117 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-beryl-coronet/Page117';
import Page94 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-blue-carbuncle/Page94';
import Page95 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-blue-carbuncle/Page95';
import Page96 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-blue-carbuncle/Page96';
import Page97 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-blue-carbuncle/Page97';
import Page118 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-copper-beeches/Page118';
import Page119 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-copper-beeches/Page119';
import Page120 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-copper-beeches/Page120';
import Page121 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-copper-beeches/Page121';
import Page122 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-copper-beeches/Page122';
import Page103 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-engineers-thumb/Page103';
import Page104 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-engineers-thumb/Page104';
import Page105 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-engineers-thumb/Page105';
import Page106 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-engineers-thumb/Page106';
import Page107 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-noble-bachelor/Page107';
import Page108 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-noble-bachelor/Page108';
import Page109 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-noble-bachelor/Page109';
import Page110 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-noble-bachelor/Page110';
import Page111 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-noble-bachelor/Page111';
import Page100 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-speckled-band/Page100';
import Page101 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-speckled-band/Page101';
import Page102 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-speckled-band/Page102';
import Page98 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-speckled-band/Page98';
import Page99 from './pages/the-adventures-of-sherlock-holmes/the-adventure-of-the-speckled-band/Page99';
import Page80 from './pages/the-adventures-of-sherlock-holmes/the-boscombe-valley-mystery/Page80';
import Page81 from './pages/the-adventures-of-sherlock-holmes/the-boscombe-valley-mystery/Page81';
import Page82 from './pages/the-adventures-of-sherlock-holmes/the-boscombe-valley-mystery/Page82';
import Page83 from './pages/the-adventures-of-sherlock-holmes/the-boscombe-valley-mystery/Page83';
import Page84 from './pages/the-adventures-of-sherlock-holmes/the-boscombe-valley-mystery/Page84';
import Page85 from './pages/the-adventures-of-sherlock-holmes/the-five-orange-pips/Page85';
import Page86 from './pages/the-adventures-of-sherlock-holmes/the-five-orange-pips/Page86';
import Page87 from './pages/the-adventures-of-sherlock-holmes/the-five-orange-pips/Page87';
import Page88 from './pages/the-adventures-of-sherlock-holmes/the-five-orange-pips/Page88';
import Page89 from './pages/the-adventures-of-sherlock-holmes/the-man-with-the-twisted-lip/Page89';
import Page90 from './pages/the-adventures-of-sherlock-holmes/the-man-with-the-twisted-lip/Page90';
import Page91 from './pages/the-adventures-of-sherlock-holmes/the-man-with-the-twisted-lip/Page91';
import Page92 from './pages/the-adventures-of-sherlock-holmes/the-man-with-the-twisted-lip/Page92';
import Page93 from './pages/the-adventures-of-sherlock-holmes/the-man-with-the-twisted-lip/Page93';
import Page70 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page70';
import Page71 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page71';
import Page72 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page72';
import Page73 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page73';
import Page74 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page74';
import Page75 from './pages/the-adventures-of-sherlock-holmes/the-red-headed-league/Page75';
import Page123 from './pages/the-momoirs-of-sherlock-holmes/silver-blaze/Page123';
import Page124 from './pages/the-momoirs-of-sherlock-holmes/silver-blaze/Page124';
import Page125 from './pages/the-momoirs-of-sherlock-holmes/silver-blaze/Page125';
import Page126 from './pages/the-momoirs-of-sherlock-holmes/silver-blaze/Page126';
import Page127 from './pages/the-momoirs-of-sherlock-holmes/silver-blaze/Page127';
import Page128 from './pages/the-momoirs-of-sherlock-holmes/silver-blaze/Page128';
import Page148 from './pages/the-momoirs-of-sherlock-holmes/the-crooked-man/Page148';
import Page149 from './pages/the-momoirs-of-sherlock-holmes/the-crooked-man/Page149';
import Page150 from './pages/the-momoirs-of-sherlock-holmes/the-crooked-man/Page150';
import Page151 from './pages/the-momoirs-of-sherlock-holmes/the-crooked-man/Page151';
import Page164 from './pages/the-momoirs-of-sherlock-holmes/the-final-problem/Page164';
import Page165 from './pages/the-momoirs-of-sherlock-holmes/the-final-problem/Page165';
import Page166 from './pages/the-momoirs-of-sherlock-holmes/the-final-problem/Page166';
import Page136 from './pages/the-momoirs-of-sherlock-holmes/the-gloria-scott/Page136';
import Page137 from './pages/the-momoirs-of-sherlock-holmes/the-gloria-scott/Page137';
import Page138 from './pages/the-momoirs-of-sherlock-holmes/the-gloria-scott/Page138';
import Page139 from './pages/the-momoirs-of-sherlock-holmes/the-gloria-scott/Page139';
import Page155 from './pages/the-momoirs-of-sherlock-holmes/the-greek-interpreter/Page155';
import Page156 from './pages/the-momoirs-of-sherlock-holmes/the-greek-interpreter/Page156';
import Page157 from './pages/the-momoirs-of-sherlock-holmes/the-greek-interpreter/Page157';
import Page158 from './pages/the-momoirs-of-sherlock-holmes/the-greek-interpreter/Page158';
import Page140 from './pages/the-momoirs-of-sherlock-holmes/the-musgrave-ritual/Page140';
import Page141 from './pages/the-momoirs-of-sherlock-holmes/the-musgrave-ritual/Page141';
import Page142 from './pages/the-momoirs-of-sherlock-holmes/the-musgrave-ritual/Page142';
import Page143 from './pages/the-momoirs-of-sherlock-holmes/the-musgrave-ritual/Page143';
import Page159 from './pages/the-momoirs-of-sherlock-holmes/the-naval-treaty/Page159';
import Page160 from './pages/the-momoirs-of-sherlock-holmes/the-naval-treaty/Page160';
import Page161 from './pages/the-momoirs-of-sherlock-holmes/the-naval-treaty/Page161';
import Page162 from './pages/the-momoirs-of-sherlock-holmes/the-naval-treaty/Page162';
import Page163 from './pages/the-momoirs-of-sherlock-holmes/the-naval-treaty/Page163';
import Page144 from './pages/the-momoirs-of-sherlock-holmes/the-reigate-squires/Page144';
import Page145 from './pages/the-momoirs-of-sherlock-holmes/the-reigate-squires/Page145';
import Page146 from './pages/the-momoirs-of-sherlock-holmes/the-reigate-squires/Page146';
import Page147 from './pages/the-momoirs-of-sherlock-holmes/the-reigate-squires/Page147';
import Page152 from './pages/the-momoirs-of-sherlock-holmes/the-resident-patient/Page152';
import Page153 from './pages/the-momoirs-of-sherlock-holmes/the-resident-patient/Page153';
import Page154 from './pages/the-momoirs-of-sherlock-holmes/the-resident-patient/Page154';
import Page133 from './pages/the-momoirs-of-sherlock-holmes/the-stock-brokers-clerk/Page133';
import Page134 from './pages/the-momoirs-of-sherlock-holmes/the-stock-brokers-clerk/Page134';
import Page135 from './pages/the-momoirs-of-sherlock-holmes/the-stock-brokers-clerk/Page135';
import Page129 from './pages/the-momoirs-of-sherlock-holmes/the-yellow-face/Page129';
import Page130 from './pages/the-momoirs-of-sherlock-holmes/the-yellow-face/Page130';
import Page131 from './pages/the-momoirs-of-sherlock-holmes/the-yellow-face/Page131';
import Page132 from './pages/the-momoirs-of-sherlock-holmes/the-yellow-face/Page132';
import Page167 from './pages/the-return-of-sherlock-holmes/the-adventure-of-the-empty-house/Page167';
import Page168 from './pages/the-return-of-sherlock-holmes/the-adventure-of-the-empty-house/Page168';
import Page169 from './pages/the-return-of-sherlock-holmes/the-adventure-of-the-empty-house/Page169';
import Page170 from './pages/the-return-of-sherlock-holmes/the-adventure-of-the-empty-house/Page170';
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
import SettingsDropdown from './SettingsDropdown';

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
            Page84,
            Page85,
            Page86,
            Page87,
            Page88,
            Page89,
            Page90,
            Page91,
            Page92,
            Page93,
            Page94,
            Page95,
            Page96,
            Page97,
            Page98,
            Page99,
            Page100,
            Page101,
            Page102,
            Page103,
            Page104,
            Page105,
            Page106,
            Page107,
            Page108,
            Page109,
            Page110,
            Page111,
            Page112,
            Page113,
            Page114,
            Page115,
            Page116,
            Page117,
            Page118,
            Page119,
            Page120,
            Page121,
            Page122,
            Page123,
            Page124,
            Page125,
            Page126,
            Page127,
            Page128,
            Page129,
            Page130,
            Page131,
            Page132,
            Page133,
            Page134,
            Page135,
            Page136,
            Page137,
            Page138,
            Page139,
            Page140,
            Page141,
            Page142,
            Page143,
            Page144,
            Page145,
            Page146,
            Page147,
            Page148,
            Page149,
            Page150,
            Page151,
            Page152,
            Page153,
            Page154,
            Page155,
            Page156,
            Page157,
            Page158,
            Page159,
            Page160,
            Page161,
            Page162,
            Page163,
            Page164,
            Page165,
            Page166,
            Page167,
            Page168,
            Page169,
            Page170,
          ].map((PageComponent, index) => {
            return (
              <PageComponent
                hidePageNumber={PAGES_WITHOUT_NUMBER.includes(index + 1)}
                viewportHeight={PAGES_WITH_VIEWPORT_HEIGHT.includes(index + 1)}
                pageNumber={index + 1}
                key={index}
              />
            );
          })}
          <TranslationTooltip />
          <SettingsDropdown />
          <BookNavigator />
        </GlobalEffects>
      </BookVersionProvider>
    </BookMasterEnglishWithSherlockHolmesLayout>
  );
}

export default BookRead;
