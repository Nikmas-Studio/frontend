import MainContainer from '@/components/elements/MainContainer';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Footer from '@/components/modules/Footer';
import HeaderDefault from '@/components/modules/header/header-element/HeaderDefault';
import Contents from '@/components/modules/master-git-and-github-book/promo-page/Contents';
import DarkMode from '@/components/modules/master-git-and-github-book/promo-page/DarkMode';
import InteractivityDemo from '@/components/modules/master-git-and-github-book/promo-page/InteractivityDemo';
import Intro from '@/components/modules/master-git-and-github-book/promo-page/Intro';
import PageNumbersUpdate from '@/components/modules/master-git-and-github-book/promo-page/PageNumbersUpdate';
import ReadOnAnyDevice from '@/components/modules/master-git-and-github-book/promo-page/ReadOnAnyDevice';
import Subscription from '@/components/modules/master-git-and-github-book/promo-page/Subscription';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Master Git & Github: From Everyday Tasks to Deep Waters',
  description:
    'A next-gen, highly illustrative, and interactive e-book to master Git and Github and make you a version control guru.',
};

function MasterGitAndGithubBookPromo(): ReactElement {
  return (
    <DefaultLayout>
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
          <Footer />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default MasterGitAndGithubBookPromo;
