import Footer from '@/components/modules/Footer';
import Header from '@/components/modules/Header';
import { ReactElement, ReactNode } from 'react';

function MainLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <main className='pt-[6.0625rem]'>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default MainLayout;
