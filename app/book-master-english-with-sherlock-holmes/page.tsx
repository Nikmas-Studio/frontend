import MainContainer from '@/components/elements/MainContainer';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import BookNavigator from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/BookNavigator';
import Contents from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/Contents';
import DarkMode from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/DarkMode';
import DemoOrSubscription from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/DemoOrSubscription';
import PromoDrawer from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/Drawer';
import Intro from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/Intro';
import PageNumbersUpdate from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/PageNumbersUpdate';
import QuestionsAndAnswers from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/QuestionsAndAnswers';
import ReadOnAnyDevice from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/ReadOnAnyDevice';
import ThreeDots from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/ThreeDots';
import TranslationDemo from '@/components/modules/book-master-english-with-sherlock-holmes/promo-page/TranslationDemo';
import Footer from '@/components/modules/Footer';
import HeaderDefault from '@/components/modules/header/header-element/HeaderDefault';
import { BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI } from '@/constants/general';
import { PromoDrawerProvider } from '@/context/book-master-english-with-sherlock-holmes/promo-drawer/Context';
import { BookStateProvider } from '@/context/book-state/Context';
import { ReactElement } from 'react';

function BookPromoMasterEnglishWithSherlockHolmes(): ReactElement {
  return (
    <DefaultLayout>
      <BookStateProvider bookURI={BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI}>
        <PromoDrawerProvider>
          <div className='pt-[4.5rem]'>
            <HeaderDefault />
            <Intro />
            <Contents />
            <TranslationDemo />
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
