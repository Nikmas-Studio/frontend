import { Merriweather } from 'next/font/google';
import localFont from 'next/font/local';

export const gilroy = localFont({
  src: [
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
  ],
});

export const merriweather = Merriweather({
  weight: ['400', '900'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-merriweather',
});
