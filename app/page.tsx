import DefaultLayout from '@/components/layouts/DefaultLayout';
import Footer from '@/components/modules/Footer';
import HeaderMain from '@/components/modules/header/header-element/HeaderMain';
import Book from '@/components/modules/main-page/Book';
import Contest from '@/components/modules/main-page/Contest';
import Eleven from '@/components/modules/main-page/Eleven';
import Intro from '@/components/modules/main-page/Intro';
import MainContent from '@/components/modules/main-page/MainContent';
import Mission from '@/components/modules/main-page/Mission';
import ProvidersMain from '@/components/modules/providers/ProvidersMain';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Nikmas Studio',
  description:
    'Next-gen publishing studio that specializes in creating interactive e-books.',
  openGraph: {
    title: 'Nikmas Studio',
    description:
      'Next-gen publishing studio that specializes in creating interactive e-books.',
    url: 'https://nikmas.studio',
    siteName: 'Nikmas Studio',
    images: [
      {
        url: 'https://nikmas.studio/images/og-primary.jpg',
        width: 1200,
        height: 630,
        alt: 'Nikmas Studio',
      },
      {
        url: 'https://nikmas.studio/images/og-high-res.jpg',
        width: 1800,
        height: 945,
        alt: 'Nikmas Studio',
      },
      {
        url: 'https://nikmas.studio/images/og-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Nikmas Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home(): ReactElement {
  return (
    <DefaultLayout>
      <ProvidersMain>
        <div className='pt-[5.118rem]'>
          <HeaderMain />
          <main>
            <Intro />
            <MainContent />
          </main>
          <Footer />
        </div>
      </ProvidersMain>
    </DefaultLayout>
  );
}
