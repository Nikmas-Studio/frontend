import Footer from '@/components/modules/Footer';
import Header from '@/components/modules/Header';
import Providers from '@/components/modules/Providers';
import { ReactElement, ReactNode } from 'react';

function MainLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <Providers>
      <div className='pt-[5.118rem]  md:pt-[6.0625rem]'>
        <Header />
        {children}
        <Footer />
      </div>
    </Providers>
  );
}

export default MainLayout;
