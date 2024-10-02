import BookSection from '@/components/modules/BookSection';
import ContestSection from '@/components/modules/ContestSection';
import Footer from '@/components/modules/Footer';
import GlobalEffects from '@/components/modules/GlobalEffects';
import HBASection from '@/components/modules/HBASection';
import HeaderMain from '@/components/modules/header/header-element/HeaderMain';
import IntroSection from '@/components/modules/IntroSection';
import Providers from '@/components/modules/Providers';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <body className='dark:bg-black'>
      <GlobalEffects>
        <Providers>
          <div className='pt-[5.118rem]  md:pt-[6.0625rem]'>
            <HeaderMain />
            <main>
              <IntroSection />
              <HBASection />
              <BookSection />
              <ContestSection />
            </main>
            <Footer />
          </div>
        </Providers>
      </GlobalEffects>
    </body>
  );
}
