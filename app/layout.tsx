import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactElement, ReactNode } from 'react';
import './globals.css';
import Script from 'next/script';

const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Bold.woff2',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html lang='en' className={`${gilroy.className}`}>
      <head>
        <Script>
          {`
            if (
              localStorage.theme === 'dark' ||
              (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
            
            document.body.classList.add('body-visible');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
