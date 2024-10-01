import Footer from '@/components/modules/Footer';
import GlobalEffects from '@/components/modules/GlobalEffects';
import Header from '@/components/modules/Header';
import Providers from '@/components/modules/Providers';
import { ReactElement, ReactNode } from 'react';

function MainLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <body className='dark:bg-black'>
      <GlobalEffects>
        <Providers>
          <div className='pt-[5.118rem]  md:pt-[6.0625rem]'>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </GlobalEffects>
    </body>
  );
}

export default MainLayout;
