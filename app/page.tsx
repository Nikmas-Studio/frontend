import BookSection from '@/components/modules/BookSection';
import ContestSection from '@/components/modules/ContestSection';
import Footer from '@/components/modules/Footer';
import HBASection from '@/components/modules/HBASection';
import HeaderMain from '@/components/modules/header/header-element/HeaderMain';
import IntroSection from '@/components/modules/IntroSection';
import ProvidersMain from '@/components/modules/ProvidersMain';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <ProvidersMain>
      <body className='dark:bg-black'>
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
      </body>
    </ProvidersMain>
  );
}
