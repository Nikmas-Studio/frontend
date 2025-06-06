import SubscriptionButton from '@/components/elements/book-master-git-and-github/SubscriptionButton';
import MainContainer from '@/components/elements/MainContainer';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import BookNavigator from '@/components/modules/book-master-git-and-github/promo-page/BookNavigator';
import Contents from '@/components/modules/book-master-git-and-github/promo-page/Contents';
import DarkMode from '@/components/modules/book-master-git-and-github/promo-page/DarkMode';
import InteractivityDemo from '@/components/modules/book-master-git-and-github/promo-page/InteractivityDemo';
import Intro from '@/components/modules/book-master-git-and-github/promo-page/Intro';
import PageNumbersUpdate from '@/components/modules/book-master-git-and-github/promo-page/PageNumbersUpdate';
import QuizzesAndExercises from '@/components/modules/book-master-git-and-github/promo-page/QuizzesAndExercises';
import ReadOnAnyDevice from '@/components/modules/book-master-git-and-github/promo-page/ReadOnAnyDevice';
import Subscription from '@/components/modules/book-master-git-and-github/promo-page/Subscription';
import ThreeDots from '@/components/modules/book-master-git-and-github/promo-page/ThreeDots';
import SubscriptionModal from '@/components/modules/book-master-git-and-github/SubsctiptionModal';
import Footer from '@/components/modules/Footer';
import HeaderDefault from '@/components/modules/header/header-element/HeaderDefault';
import { BOOK_MASTER_GIT_AND_GITHUB_URI } from '@/constants/general';
import { BookStateProvider } from '@/context/book-state/Context';
import { SubscriptionModalProvider } from '@/context/subscription-modal/Context';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Master Git & GitHub: From Everyday Tasks to Deep Waters',
  description:
    'Next-gen, highly illustrative, and interactive e-book to master Git and GitHub and make you a version control guru.',
  openGraph: {
    title: 'Master Git & GitHub: From Everyday Tasks to Deep Waters',
    description:
      'Next-gen, highly illustrative, and interactive e-book to master Git and GitHub and make you a version control guru.',
    url: 'https://nikmas.studio/book-master-git-and-github',
    siteName: 'Nikmas Studio',
    images: [
      {
        url: 'https://nikmas.studio/images/git-book-og-primary.jpg',
        width: 1200,
        height: 630,
        alt: 'Master Git & GitHub: From Everyday Tasks to Deep Waters',
      },
      {
        url: 'https://nikmas.studio/images/git-book-og-high-res.jpg',
        width: 1800,
        height: 945,
        alt: 'Master Git & GitHub: From Everyday Tasks to Deep Waters',
      },
      {
        url: 'https://nikmas.studio/images/git-book-og-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Master Git & GitHub: From Everyday Tasks to Deep Waters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

function MasterGitAndGithubBookPromo(): ReactElement {
  return (
    <DefaultLayout>
      <SubscriptionModalProvider>
        <BookStateProvider bookURI={BOOK_MASTER_GIT_AND_GITHUB_URI}>
          <div>
            <div className='pt-[5.118rem]'>
              <HeaderDefault />
              <Intro />
              <Contents />
              <Subscription />
              <InteractivityDemo />
              <MainContainer
                className='lg:flex  lg:flex-row  lg:justify-between
                                    lg:gap-20'
              >
                <ReadOnAnyDevice />
                <PageNumbersUpdate />
              </MainContainer>
              <DarkMode />
              <BookNavigator />
              <QuizzesAndExercises />
              <ThreeDots />
              <MainContainer className='flex  flex-row  justify-end'>
                <SubscriptionButton className='mr-5' />
              </MainContainer>
              <SubscriptionModal formInputId='promo-subscription-modal-email' />
              <Footer />
            </div>
          </div>
        </BookStateProvider>
      </SubscriptionModalProvider>
    </DefaultLayout>
  );
}

export default MasterGitAndGithubBookPromo;
