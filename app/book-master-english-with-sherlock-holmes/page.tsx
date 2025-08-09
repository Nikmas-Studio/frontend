import MainContainer from '@/components/elements/MainContainer';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import BookNavigator from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/BookNavigator';
import Contents from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/Contents';
import ContextAwareness from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/ContextAwareness';
import DarkMode from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/DarkMode';
import DemoOrSubscription from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/DemoOrSubscription';
import PromoDrawer from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/Drawer';
import EffectiveMemorization from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/EffectiveMemorization';
import EnjoyTheSmoothestReadingAndLearningFlow from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/EnjoyTheSmoothestReadingAndLearningFlow';
import EvenWhenYouHaveNoTime from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/EvenWhenYouHaveNoTime';
import Intro from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/Intro';
import PageNumbersUpdate from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/PageNumbersUpdate';
import QuestionsAndAnswers from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/QuestionsAndAnswers';
import ReadOnAnyDevice from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/ReadOnAnyDevice';
import Reviews from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/Reviews';
import ThreeDots from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/ThreeDots';
import TranslationDemo from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/TranslationDemo';
import TravelWithComfortAndConfidence from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/TravelWithComfortAndConfidence';
import UnlockCuttingEdgeKnowledge from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/UnlockCuttingEdgeKnowledge';
import YourKeyToGlobalSuccess from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/YourKeyToGlobalSuccess';
import Footer from '@/components/modules/Footer';
import HeaderDefault from '@/components/modules/header/header-element/HeaderDefault';
import { BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI } from '@/constants/general';
import { PromoDrawerProvider } from '@/context/book-master-english-with-sherlock-holmes/promo-drawer/Context';
import { BookStateProvider } from '@/context/book-state/Context';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Master English with Sherlock Holmes [Interactive e-book]',
  description:
    'Advance your English through story — with the highest‑quality, highlight‑based, context‑aware AI translation, built right into the book and available in any language.',
  openGraph: {
    title: 'Master English with Sherlock Holmes [Interactive e-book]',
    description:
      'Advance your English through story — with the highest‑quality, highlight‑based, context‑aware AI translation, built right into the book and available in any language.',
    url: 'https://nikmas.studio/book-master-english-with-sherlock-holmes',
    siteName: 'Nikmas Studio',
    images: [
      {
        url: 'https://nikmas.studio/images/sherlock-og-primary.jpg',
        width: 1200,
        height: 630,
        alt: 'Master English with Sherlock Holmes [Interactive e-book]',
      },
      {
        url: 'https://nikmas.studio/images/sherlock-og-high-res.jpg',
        width: 1800,
        height: 945,
        alt: 'Master English with Sherlock Holmes [Interactive e-book]',
      },
      {
        url: 'https://nikmas.studio/images/sherlock-og-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Master English with Sherlock Holmes [Interactive e-book]',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

function BookPromoMasterEnglishWithSherlockHolmes(): ReactElement {
  return (
    <DefaultLayout>
      <BookStateProvider bookURI={BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI}>
        <PromoDrawerProvider>
          <div className='pt-[4.5rem]'>
            <HeaderDefault />
            <Intro />
            <YourKeyToGlobalSuccess />
            <TravelWithComfortAndConfidence />
            <UnlockCuttingEdgeKnowledge />
            <Reviews />
            <Contents />
            <TranslationDemo />
            <ContextAwareness />
            <EnjoyTheSmoothestReadingAndLearningFlow />
            <EffectiveMemorization />
            <MainContainer
              className='lg:flex  lg:flex-row  lg:justify-between
                                    lg:gap-20'
            >
              <ReadOnAnyDevice />
              <PageNumbersUpdate />
            </MainContainer>
            <DarkMode />
            <BookNavigator />
            <QuestionsAndAnswers />
            <EvenWhenYouHaveNoTime />
            <DemoOrSubscription />
            <ThreeDots />
            <Footer />
          </div>
          <PromoDrawer />
        </PromoDrawerProvider>
      </BookStateProvider>
    </DefaultLayout>
  );
}

export default BookPromoMasterEnglishWithSherlockHolmes;
