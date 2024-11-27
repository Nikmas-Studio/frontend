import Script from 'next/script';
import './globals.css';

import EscapeInAppBrowser from '@/components/modules/EscapeInAppBrowser';
import RecaptchaSettings from '@/components/modules/RecaptchaSettings';
import { ReactElement, ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang='en' className='bg-white dark:bg-black'>
      <head>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-0Z0LRD55BR'
        ></Script>
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0Z0LRD55BR');
        `}
        </Script>
        <meta name='format-detection' content='email=no' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
                   window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>
        {children}
        <EscapeInAppBrowser />
        <RecaptchaSettings />
      </body>
    </html>
  );
}
