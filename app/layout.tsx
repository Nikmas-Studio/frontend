import Script from 'next/script';
import './globals.css';

import RecaptchaSettings from '@/components/modules/RecaptchaSettings';
import { SessionProvider } from '@/context/session/Context';
import Image from 'next/image';
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
        <Script id='early-theme-setup' strategy='beforeInteractive'>{`
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
                   window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {
              }
        `}</Script>
        <Script id='later-theme-setup'>
          {`
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
                 window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {
            }
          `}
        </Script>
        <Script
          id='early-remove-invisible-body-class'
          strategy='beforeInteractive'
        >
          {`
              const path = window.location.pathname;
              
              if (!path.includes('/read') && !path.includes('/demo')) {
                document.body.classList.remove('invisible');
              }
          `}
        </Script>
        <Script id='later-remove-invisible-body-class'>
          {`
              const path = window.location.pathname;
              
              if (!path.includes('/read') && !path.includes('/demo')) {
                document.body.classList.remove('invisible');
              }
          `}
        </Script>
        <Script id='meta-pixel'>
          {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1174635817619006');
              fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            alt='meta-pixel'
            height='1'
            width='1'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=1174635817619006&ev=PageView&noscript=1'
          />
        </noscript>
      </head>
      <body className='invisible'>
        <SessionProvider>
          {children}
          {/* <EscapeInAppBrowser /> */}
          <RecaptchaSettings />
        </SessionProvider>
      </body>
    </html>
  );
}
