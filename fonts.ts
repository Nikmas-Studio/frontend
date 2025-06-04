import {
  Libre_Baskerville as LibreBaskerville,
  Merriweather,
} from 'next/font/google';
import localFont from 'next/font/local';

export const gilroy = localFont({
  src: [
    {
      path: './public/fonts/Gilroy-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './public/fonts/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './public/fonts/Gilroy-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './public/fonts/Gilroy-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './public/fonts/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './public/fonts/Gilroy-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const merriweather = Merriweather({
  weight: ['300', '400', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic', 'vietnamese', 'latin-ext', 'cyrillic-ext'],
  variable: '--font-merriweather',
});

export const libreBaskerville = LibreBaskerville({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
});
