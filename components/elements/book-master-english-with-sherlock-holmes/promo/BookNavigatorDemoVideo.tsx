'use client';

import {
  NAVIGATOR_DEMO_VIDEO_DESKTOP_DARK_SRC,
  NAVIGATOR_DEMO_VIDEO_DESKTOP_LIGHT_SRC,
  NAVIGATOR_DEMO_VIDEO_MOBILE_DARK_SRC,
  NAVIGATOR_DEMO_VIDEO_MOBILE_LIGHT_SRC,
} from '@/constants/book-master-english-with-sherlock-holmes/videos';
import { useTheme } from '@/context/theme/Context';
import navigatorDemoDesktopDarkPoster from '@/public/images/sherlock-navigation-demo-desktop-dark-poster.jpg';
import navigatorDemoDesktopLightPoster from '@/public/images/sherlock-navigation-demo-desktop-light-poster.jpg';
import navigatorDemoMobileDarkPoster from '@/public/images/sherlock-navigation-demo-mobile-dark-poster.jpg';
import navigatorDemoMobileLightPoster from '@/public/images/sherlock-navigation-demo-mobile-light-poster.jpg';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function BookNavigatorDemoVideo(): ReactElement {
  const { selectedTheme } = useTheme();

  const [observerRef, videoIsInView] = useInView({
    triggerOnce: true,
    rootMargin: '2000px 0px',
  });

  const [
    navigatorDemoVideoMobileLightIsLoaded,
    setNavigatorDemoVideoMobileLightIsLoaded,
  ] = useState(false);
  const navigatorDemoVideoMobileLightRef = useRef<HTMLVideoElement | null>(
    null,
  );

  const [
    navigatorDemoVideoMobileDarkIsLoaded,
    setNavigatorDemoVideoMobileDarkIsLoaded,
  ] = useState(false);
  const navigatorDemoVideoMobileDarkRef = useRef<HTMLVideoElement | null>(null);

  const [
    navigatorDemoVideoDesktopLightIsLoaded,
    setNavigatorDemoVideoDesktopLightIsLoaded,
  ] = useState(false);
  const navigatorDemoVideoDesktopLightRef = useRef<HTMLVideoElement | null>(
    null,
  );

  const [
    navigatorDemoVideoDesktopDarkIsLoaded,
    setNavigatorDemoVideoDesktopDarkIsLoaded,
  ] = useState(false);
  const navigatorDemoVideoDesktopDarkRef = useRef<HTMLVideoElement | null>(
    null,
  );

  useEffect(() => {
    if (videoIsInView) {
      if (navigatorDemoVideoMobileLightRef.current) {
        navigatorDemoVideoMobileLightRef.current.play().catch(() => {});
      }

      if (navigatorDemoVideoMobileDarkRef.current) {
        navigatorDemoVideoMobileDarkRef.current.play().catch(() => {});
      }

      if (navigatorDemoVideoDesktopLightRef.current) {
        navigatorDemoVideoDesktopLightRef.current.play().catch(() => {});
      }

      if (navigatorDemoVideoDesktopDarkRef.current) {
        navigatorDemoVideoDesktopDarkRef.current.play().catch(() => {});
      }
    }
  }, [videoIsInView]);

  useEffect(() => {
    function handleVideoPlay(): void {
      if (navigatorDemoVideoMobileLightRef.current) {
        navigatorDemoVideoMobileLightRef.current.play().catch(() => {});
      }

      if (navigatorDemoVideoMobileDarkRef.current) {
        navigatorDemoVideoMobileDarkRef.current.play().catch(() => {});
      }

      if (navigatorDemoVideoDesktopLightRef.current) {
        navigatorDemoVideoDesktopLightRef.current.play().catch(() => {});
      }

      if (navigatorDemoVideoDesktopDarkRef.current) {
        navigatorDemoVideoDesktopDarkRef.current.play().catch(() => {});
      }
    }

    window.addEventListener('resize', handleVideoPlay);

    return () => {
      window.removeEventListener('resize', handleVideoPlay);
    };
  }, []);

  useEffect(() => {
    function handleVideoPlay(): void {
      if (navigatorDemoVideoMobileLightRef.current) {
        navigatorDemoVideoMobileLightRef.current.play().catch(() => {});
      }

      if (navigatorDemoVideoMobileDarkRef.current) {
        navigatorDemoVideoMobileDarkRef.current.play().catch(() => {});
      }

      if (navigatorDemoVideoDesktopLightRef.current) {
        navigatorDemoVideoDesktopLightRef.current.play().catch(() => {});
      }

      if (navigatorDemoVideoDesktopDarkRef.current) {
        navigatorDemoVideoDesktopDarkRef.current.play().catch(() => {});
      }
    }

    handleVideoPlay();
  }, [selectedTheme]);
  return (
    <div ref={observerRef}>
      <div
        className='pointer-events-none  relative  aspect-[0.58]  w-full  max-w-[500px]  
                   overflow-hidden  rounded-[14px]  border  
                 border-gray-light  lg:hidden  lg:rounded-[20px]  dark:hidden'
      >
        <Image
          className={classNames(
            'absolute  inset-0  transition-opacity  z-20  size-full  object-cover',
            {
              'opacity-0': navigatorDemoVideoMobileLightIsLoaded,
            },
          )}
          src={navigatorDemoMobileLightPoster}
          alt='Navigator demo mobile light poster'
        />
        <video
          ref={navigatorDemoVideoMobileLightRef}
          className={classNames(
            'absolute  transition-opacity  inset-0  z-10  size-full  object-cover',
            {
              'opacity-0': !navigatorDemoVideoMobileLightIsLoaded,
              'opacity-100': navigatorDemoVideoMobileLightIsLoaded,
            },
          )}
          onCanPlay={() => {
            setNavigatorDemoVideoMobileLightIsLoaded(true);
          }}
          muted
          playsInline
          loop
          width={886}
          height={1526}
          preload='none'
        >
          <source
            src={NAVIGATOR_DEMO_VIDEO_MOBILE_LIGHT_SRC}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className='pointer-events-none  relative hidden  aspect-[0.58]  w-full 
                   max-w-[500px]  overflow-hidden  rounded-[14px]  border  
                 border-gray-dark  lg:hidden  lg:rounded-[20px]  
                   dark:block  dark:lg:hidden'
      >
        <Image
          className={classNames(
            'absolute  inset-0  transition-opacity  z-20  size-full  object-cover',
            {
              'opacity-0': navigatorDemoVideoMobileDarkIsLoaded,
            },
          )}
          src={navigatorDemoMobileDarkPoster}
          alt='Navigator demo mobile dark poster'
        />
        <video
          ref={navigatorDemoVideoMobileDarkRef}
          className={classNames(
            'absolute  transition-opacity  inset-0  z-10  size-full  object-cover',
            {
              'opacity-0': !navigatorDemoVideoMobileDarkIsLoaded,
              'opacity-100': navigatorDemoVideoMobileDarkIsLoaded,
            },
          )}
          onCanPlay={() => {
            setNavigatorDemoVideoMobileDarkIsLoaded(true);
          }}
          muted
          playsInline
          loop
          width={886}
          height={1526}
          preload='none'
        >
          <source src={NAVIGATOR_DEMO_VIDEO_MOBILE_DARK_SRC} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className='pointer-events-none  relative  hidden  aspect-[1.847]  w-full
                   max-w-[2992px]  overflow-hidden  rounded-[14px]
                   border  border-gray-light    
                   lg:block  lg:rounded-[20px]  dark:hidden  dark:lg:hidden'
      >
        <Image
          className={classNames(
            'absolute  inset-0  transition-opacity  z-20  size-full  object-cover',
            {
              'opacity-0': navigatorDemoVideoDesktopLightIsLoaded,
            },
          )}
          src={navigatorDemoDesktopLightPoster}
          alt='Navigator demo desktop light poster'
        />
        <video
          ref={navigatorDemoVideoDesktopLightRef}
          className={classNames(
            'absolute  transition-opacity  inset-0  z-10  size-full  object-cover',
            {
              'opacity-0': !navigatorDemoVideoDesktopLightIsLoaded,
              'opacity-100': navigatorDemoVideoDesktopLightIsLoaded,
            },
          )}
          onCanPlay={() => {
            setNavigatorDemoVideoDesktopLightIsLoaded(true);
          }}
          muted
          playsInline
          loop
          width={2992}
          height={1620}
          preload='none'
        >
          <source
            src={NAVIGATOR_DEMO_VIDEO_DESKTOP_LIGHT_SRC}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className='pointer-events-none  relative  hidden aspect-[1.847]  w-full
                   max-w-[2992px]  overflow-hidden  rounded-[14px]  
                   border  border-gray-dark  lg:rounded-[20px]  dark:lg:block'
      >
        <Image
          className={classNames(
            'absolute  inset-0  transition-opacity  z-20  size-full  object-cover',
            {
              'opacity-0': navigatorDemoVideoDesktopDarkIsLoaded,
            },
          )}
          src={navigatorDemoDesktopDarkPoster}
          alt='Navigator demo desktop dark poster'
        />
        <video
          ref={navigatorDemoVideoDesktopDarkRef}
          className={classNames(
            'absolute  transition-opacity  inset-0  z-10  size-full  object-cover',
            {
              'opacity-0': !navigatorDemoVideoDesktopDarkIsLoaded,
              'opacity-100': navigatorDemoVideoDesktopDarkIsLoaded,
            },
          )}
          onCanPlay={() => {
            setNavigatorDemoVideoDesktopDarkIsLoaded(true);
          }}
          muted
          playsInline
          loop
          width={2992}
          height={1620}
          preload='none'
        >
          <source
            src={NAVIGATOR_DEMO_VIDEO_DESKTOP_DARK_SRC}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default BookNavigatorDemoVideo;
