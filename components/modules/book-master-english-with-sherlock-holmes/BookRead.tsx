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
import Page270 from './pages/his-last-bow/Page270';
import Page271 from './pages/his-last-bow/Page271';
import Page272 from './pages/his-last-bow/Page272';
import Page273 from './pages/his-last-bow/Page273';
import Page274 from './pages/his-last-bow/Page274';
import Page275 from './pages/his-last-bow/Page275';
import Page276 from './pages/his-last-bow/Page276';
import Page277 from './pages/his-last-bow/Page277';
import Page278 from './pages/his-last-bow/Page278';
import Page279 from './pages/his-last-bow/Page279';
import Page280 from './pages/his-last-bow/Page280';
import Page281 from './pages/his-last-bow/Page281';
import Page282 from './pages/his-last-bow/Page282';
import Page283 from './pages/his-last-bow/Page283';
import Page284 from './pages/his-last-bow/Page284';
import Page285 from './pages/his-last-bow/Page285';
import Page286 from './pages/his-last-bow/Page286';
import Page287 from './pages/his-last-bow/Page287';
import Page288 from './pages/his-last-bow/Page288';
import Page289 from './pages/his-last-bow/Page289';
import Page290 from './pages/his-last-bow/Page290';
import Page291 from './pages/his-last-bow/Page291';
import Page292 from './pages/his-last-bow/Page292';
import Page293 from './pages/his-last-bow/Page293';
import Page294 from './pages/his-last-bow/Page294';
import Page295 from './pages/his-last-bow/Page295';
import Page296 from './pages/his-last-bow/Page296';
import Page297 from './pages/his-last-bow/Page297';
import Page298 from './pages/his-last-bow/Page298';
import Page299 from './pages/his-last-bow/Page299';
import Page300 from './pages/his-last-bow/Page300';
import Page301 from './pages/his-last-bow/Page301';
import Page302 from './pages/his-last-bow/Page302';
import Page303 from './pages/his-last-bow/Page303';
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
import Page304 from './pages/the-case-book-of-sherlock-holmes/Page304';
import Page305 from './pages/the-case-book-of-sherlock-holmes/Page305';
import Page306 from './pages/the-case-book-of-sherlock-holmes/Page306';
import Page307 from './pages/the-case-book-of-sherlock-holmes/Page307';
import Page308 from './pages/the-case-book-of-sherlock-holmes/Page308';
import Page309 from './pages/the-case-book-of-sherlock-holmes/Page309';
import Page310 from './pages/the-case-book-of-sherlock-holmes/Page310';
import Page311 from './pages/the-case-book-of-sherlock-holmes/Page311';
import Page312 from './pages/the-case-book-of-sherlock-holmes/Page312';
import Page313 from './pages/the-case-book-of-sherlock-holmes/Page313';
import Page314 from './pages/the-case-book-of-sherlock-holmes/Page314';
import Page315 from './pages/the-case-book-of-sherlock-holmes/Page315';
import Page316 from './pages/the-case-book-of-sherlock-holmes/Page316';
import Page317 from './pages/the-case-book-of-sherlock-holmes/Page317';
import Page318 from './pages/the-case-book-of-sherlock-holmes/Page318';
import Page319 from './pages/the-case-book-of-sherlock-holmes/Page319';
import Page320 from './pages/the-case-book-of-sherlock-holmes/Page320';
import Page321 from './pages/the-case-book-of-sherlock-holmes/Page321';
import Page322 from './pages/the-case-book-of-sherlock-holmes/Page322';
import Page323 from './pages/the-case-book-of-sherlock-holmes/Page323';
import Page324 from './pages/the-case-book-of-sherlock-holmes/Page324';
import Page325 from './pages/the-case-book-of-sherlock-holmes/Page325';
import Page326 from './pages/the-case-book-of-sherlock-holmes/Page326';
import Page327 from './pages/the-case-book-of-sherlock-holmes/Page327';
import Page328 from './pages/the-case-book-of-sherlock-holmes/Page328';
import Page329 from './pages/the-case-book-of-sherlock-holmes/Page329';
import Page330 from './pages/the-case-book-of-sherlock-holmes/Page330';
import Page331 from './pages/the-case-book-of-sherlock-holmes/Page331';
import Page332 from './pages/the-case-book-of-sherlock-holmes/Page332';
import Page333 from './pages/the-case-book-of-sherlock-holmes/Page333';
import Page334 from './pages/the-case-book-of-sherlock-holmes/Page334';
import Page335 from './pages/the-case-book-of-sherlock-holmes/Page335';
import Page336 from './pages/the-case-book-of-sherlock-holmes/Page336';
import Page337 from './pages/the-case-book-of-sherlock-holmes/Page337';
import Page338 from './pages/the-case-book-of-sherlock-holmes/Page338';
import Page339 from './pages/the-case-book-of-sherlock-holmes/Page339';
import Page340 from './pages/the-case-book-of-sherlock-holmes/Page340';
import Page341 from './pages/the-case-book-of-sherlock-holmes/Page341';
import Page342 from './pages/the-case-book-of-sherlock-holmes/Page342';
import Page343 from './pages/the-case-book-of-sherlock-holmes/Page343';
import Page214 from './pages/the-hound-of-the-baskervilles/Page214';
import Page215 from './pages/the-hound-of-the-baskervilles/Page215';
import Page216 from './pages/the-hound-of-the-baskervilles/Page216';
import Page217 from './pages/the-hound-of-the-baskervilles/Page217';
import Page218 from './pages/the-hound-of-the-baskervilles/Page218';
import Page219 from './pages/the-hound-of-the-baskervilles/Page219';
import Page220 from './pages/the-hound-of-the-baskervilles/Page220';
import Page221 from './pages/the-hound-of-the-baskervilles/Page221';
import Page222 from './pages/the-hound-of-the-baskervilles/Page222';
import Page223 from './pages/the-hound-of-the-baskervilles/Page223';
import Page224 from './pages/the-hound-of-the-baskervilles/Page224';
import Page225 from './pages/the-hound-of-the-baskervilles/Page225';
import Page226 from './pages/the-hound-of-the-baskervilles/Page226';
import Page227 from './pages/the-hound-of-the-baskervilles/Page227';
import Page228 from './pages/the-hound-of-the-baskervilles/Page228';
import Page229 from './pages/the-hound-of-the-baskervilles/Page229';
import Page230 from './pages/the-hound-of-the-baskervilles/Page230';
import Page231 from './pages/the-hound-of-the-baskervilles/Page231';
import Page232 from './pages/the-hound-of-the-baskervilles/Page232';
import Page233 from './pages/the-hound-of-the-baskervilles/Page233';
import Page234 from './pages/the-hound-of-the-baskervilles/Page234';
import Page235 from './pages/the-hound-of-the-baskervilles/Page235';
import Page236 from './pages/the-hound-of-the-baskervilles/Page236';
import Page237 from './pages/the-hound-of-the-baskervilles/Page237';
import Page238 from './pages/the-hound-of-the-baskervilles/Page238';
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
import Page207 from './pages/the-return-of-sherlock-holmes/abbey-grange/Page207';
import Page208 from './pages/the-return-of-sherlock-holmes/abbey-grange/Page208';
import Page209 from './pages/the-return-of-sherlock-holmes/abbey-grange/Page209';
import Page188 from './pages/the-return-of-sherlock-holmes/black-peter/Page188';
import Page189 from './pages/the-return-of-sherlock-holmes/black-peter/Page189';
import Page190 from './pages/the-return-of-sherlock-holmes/black-peter/Page190';
import Page191 from './pages/the-return-of-sherlock-holmes/charles-augustus-milverton/Page191';
import Page192 from './pages/the-return-of-sherlock-holmes/charles-augustus-milverton/Page192';
import Page193 from './pages/the-return-of-sherlock-holmes/charles-augustus-milverton/Page193';
import Page176 from './pages/the-return-of-sherlock-holmes/dancing-men/Page176';
import Page177 from './pages/the-return-of-sherlock-holmes/dancing-men/Page177';
import Page178 from './pages/the-return-of-sherlock-holmes/dancing-men/Page178';
import Page179 from './pages/the-return-of-sherlock-holmes/dancing-men/Page179';
import Page167 from './pages/the-return-of-sherlock-holmes/empty-house/Page167';
import Page168 from './pages/the-return-of-sherlock-holmes/empty-house/Page168';
import Page169 from './pages/the-return-of-sherlock-holmes/empty-house/Page169';
import Page170 from './pages/the-return-of-sherlock-holmes/empty-house/Page170';
import Page171 from './pages/the-return-of-sherlock-holmes/empty-house/Page171';
import Page200 from './pages/the-return-of-sherlock-holmes/golden-pince-nez/Page200';
import Page201 from './pages/the-return-of-sherlock-holmes/golden-pince-nez/Page201';
import Page202 from './pages/the-return-of-sherlock-holmes/golden-pince-nez/Page202';
import Page203 from './pages/the-return-of-sherlock-holmes/golden-pince-nez/Page203';
import Page204 from './pages/the-return-of-sherlock-holmes/missing-three-quarter/Page204';
import Page205 from './pages/the-return-of-sherlock-holmes/missing-three-quarter/Page205';
import Page206 from './pages/the-return-of-sherlock-holmes/missing-three-quarter/Page206';
import Page172 from './pages/the-return-of-sherlock-holmes/norwood-builder/Page172';
import Page173 from './pages/the-return-of-sherlock-holmes/norwood-builder/Page173';
import Page174 from './pages/the-return-of-sherlock-holmes/norwood-builder/Page174';
import Page175 from './pages/the-return-of-sherlock-holmes/norwood-builder/Page175';
import Page183 from './pages/the-return-of-sherlock-holmes/priory-school/Page183';
import Page184 from './pages/the-return-of-sherlock-holmes/priory-school/Page184';
import Page185 from './pages/the-return-of-sherlock-holmes/priory-school/Page185';
import Page186 from './pages/the-return-of-sherlock-holmes/priory-school/Page186';
import Page187 from './pages/the-return-of-sherlock-holmes/priory-school/Page187';
import Page210 from './pages/the-return-of-sherlock-holmes/second-stain/Page210';
import Page211 from './pages/the-return-of-sherlock-holmes/second-stain/Page211';
import Page212 from './pages/the-return-of-sherlock-holmes/second-stain/Page212';
import Page213 from './pages/the-return-of-sherlock-holmes/second-stain/Page213';
import Page194 from './pages/the-return-of-sherlock-holmes/six-napoleons/Page194';
import Page195 from './pages/the-return-of-sherlock-holmes/six-napoleons/Page195';
import Page196 from './pages/the-return-of-sherlock-holmes/six-napoleons/Page196';
import Page180 from './pages/the-return-of-sherlock-holmes/solitary-cyclist/Page180';
import Page181 from './pages/the-return-of-sherlock-holmes/solitary-cyclist/Page181';
import Page182 from './pages/the-return-of-sherlock-holmes/solitary-cyclist/Page182';
import Page197 from './pages/the-return-of-sherlock-holmes/three-students/Page197';
import Page198 from './pages/the-return-of-sherlock-holmes/three-students/Page198';
import Page199 from './pages/the-return-of-sherlock-holmes/three-students/Page199';
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
import Page239 from './pages/the-vallery-of-fear/Page239';
import Page240 from './pages/the-vallery-of-fear/Page240';
import Page241 from './pages/the-vallery-of-fear/Page241';
import Page242 from './pages/the-vallery-of-fear/Page242';
import Page243 from './pages/the-vallery-of-fear/Page243';
import Page244 from './pages/the-vallery-of-fear/Page244';
import Page245 from './pages/the-vallery-of-fear/Page245';
import Page246 from './pages/the-vallery-of-fear/Page246';
import Page247 from './pages/the-vallery-of-fear/Page247';
import Page248 from './pages/the-vallery-of-fear/Page248';
import Page249 from './pages/the-vallery-of-fear/Page249';
import Page250 from './pages/the-vallery-of-fear/Page250';
import Page251 from './pages/the-vallery-of-fear/Page251';
import Page252 from './pages/the-vallery-of-fear/Page252';
import Page253 from './pages/the-vallery-of-fear/Page253';
import Page254 from './pages/the-vallery-of-fear/Page254';
import Page255 from './pages/the-vallery-of-fear/Page255';
import Page256 from './pages/the-vallery-of-fear/Page256';
import Page257 from './pages/the-vallery-of-fear/Page257';
import Page258 from './pages/the-vallery-of-fear/Page258';
import Page259 from './pages/the-vallery-of-fear/Page259';
import Page260 from './pages/the-vallery-of-fear/Page260';
import Page261 from './pages/the-vallery-of-fear/Page261';
import Page262 from './pages/the-vallery-of-fear/Page262';
import Page263 from './pages/the-vallery-of-fear/Page263';
import Page264 from './pages/the-vallery-of-fear/Page264';
import Page265 from './pages/the-vallery-of-fear/Page265';
import Page266 from './pages/the-vallery-of-fear/Page266';
import Page267 from './pages/the-vallery-of-fear/Page267';
import Page268 from './pages/the-vallery-of-fear/Page268';
import Page269 from './pages/the-vallery-of-fear/Page269';
import PromoDrawer from './promo-page/Drawer';
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
            Page171,
            Page172,
            Page173,
            Page174,
            Page175,
            Page176,
            Page177,
            Page178,
            Page179,
            Page180,
            Page181,
            Page182,
            Page183,
            Page184,
            Page185,
            Page186,
            Page187,
            Page188,
            Page189,
            Page190,
            Page191,
            Page192,
            Page193,
            Page194,
            Page195,
            Page196,
            Page197,
            Page198,
            Page199,
            Page200,
            Page201,
            Page202,
            Page203,
            Page204,
            Page205,
            Page206,
            Page207,
            Page208,
            Page209,
            Page210,
            Page211,
            Page212,
            Page213,
            Page214,
            Page215,
            Page216,
            Page217,
            Page218,
            Page219,
            Page220,
            Page221,
            Page222,
            Page223,
            Page224,
            Page225,
            Page226,
            Page227,
            Page228,
            Page229,
            Page230,
            Page231,
            Page232,
            Page233,
            Page234,
            Page235,
            Page236,
            Page237,
            Page238,
            Page239,
            Page240,
            Page241,
            Page242,
            Page243,
            Page244,
            Page245,
            Page246,
            Page247,
            Page248,
            Page249,
            Page250,
            Page251,
            Page252,
            Page253,
            Page254,
            Page255,
            Page256,
            Page257,
            Page258,
            Page259,
            Page260,
            Page261,
            Page262,
            Page263,
            Page264,
            Page265,
            Page266,
            Page267,
            Page268,
            Page269,
            Page270,
            Page271,
            Page272,
            Page273,
            Page274,
            Page275,
            Page276,
            Page277,
            Page278,
            Page279,
            Page280,
            Page281,
            Page282,
            Page283,
            Page284,
            Page285,
            Page286,
            Page287,
            Page288,
            Page289,
            Page290,
            Page291,
            Page292,
            Page293,
            Page294,
            Page295,
            Page296,
            Page297,
            Page298,
            Page299,
            Page300,
            Page301,
            Page302,
            Page303,
            Page304,
            Page305,
            Page306,
            Page307,
            Page308,
            Page309,
            Page310,
            Page311,
            Page312,
            Page313,
            Page314,
            Page315,
            Page316,
            Page317,
            Page318,
            Page319,
            Page320,
            Page321,
            Page322,
            Page323,
            Page324,
            Page325,
            Page326,
            Page327,
            Page328,
            Page329,
            Page330,
            Page331,
            Page332,
            Page333,
            Page334,
            Page335,
            Page336,
            Page337,
            Page338,
            Page339,
            Page340,
            Page341,
            Page342,
            Page343,
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
          <PromoDrawer />
        </GlobalEffects>
      </BookVersionProvider>
    </BookMasterEnglishWithSherlockHolmesLayout>
  );
}

export default BookRead;
