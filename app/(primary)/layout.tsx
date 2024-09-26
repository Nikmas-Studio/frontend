import Footer from '@/components/modules/Footer';
import Header from '@/components/modules/Header';
import Providers from '@/components/modules/Providers';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactElement, ReactNode } from 'react';

const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Nikmas Studio',
  description:
    'Next-gen publishing studio that specializes in creating interactive web books.',
};

function MainLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <html lang='en' className={`${gilroy.className}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                console.log('init theme');
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
                console.log(document.body);
                console.log('add body-visible');
                document.documentElement.classList.add('body-visible');
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className='dark:bg-black'>
        <Providers>
          <div className='pt-[5.118rem]  md:pt-[6.0625rem]'>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default MainLayout;
