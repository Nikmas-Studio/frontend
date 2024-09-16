import Footer from '@/components/modules/Footer';
import Header from '@/components/modules/Header';
import { ReactNode } from 'react';

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default MainLayout;
