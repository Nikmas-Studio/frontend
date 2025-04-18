import DefaultLayout from '@/components/layouts/DefaultLayout';
import Footer from '@/components/modules/Footer';
import HeaderMain from '@/components/modules/header/header-element/HeaderMain';
import Intro from '@/components/modules/main-page/Intro';
import MainContent from '@/components/modules/main-page/MainContent';
import ProvidersMain from '@/components/modules/providers/ProvidersMain';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Nikmas Studio',
  description:
    'Next-gen publishing studio that specializes in creating interactive edu books.',
  openGraph: {
    title: 'Nikmas Studio',
    description:
      'Next-gen publishing studio that specializes in creating interactive edu books.',
    url: 'https://nikmas.studio',
    siteName: 'Nikmas Studio',
    images: [
      {
        url: 'https://nikmas.studio/images/main-og-primary.jpg',
        width: 1200,
        height: 630,
        alt: 'Nikmas Studio',
      },
      {
        url: 'https://nikmas.studio/images/main-og-high-res.jpg',
        width: 1800,
        height: 945,
        alt: 'Nikmas Studio',
      },
      {
        url: 'https://nikmas.studio/images/main-og-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Nikmas Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: 'max-image-preview:none',
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
