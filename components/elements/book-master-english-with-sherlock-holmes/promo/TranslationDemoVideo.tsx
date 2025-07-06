'use client';

import {
  TRANSLATION_DEMO_VIDEO_DESKTOP_DARK_SRC,
  TRANSLATION_DEMO_VIDEO_DESKTOP_LIGHT_SRC,
  TRANSLATION_DEMO_VIDEO_MOBILE_DARK_SRC,
  TRANSLATION_DEMO_VIDEO_MOBILE_LIGHT_SRC,
} from '@/constants/book-master-english-with-sherlock-holmes/videos';
import Image from 'next/image';
import { ReactElement, useEffect, useRef, useState } from 'react';

import { useTheme } from '@/context/theme/Context';
import translationDemoDesktopDarkPoster from '@/public/images/sherlock-translation-demo-desktop-dark-poster.jpg';
import translationDemoDesktopLightPoster from '@/public/images/sherlock-translation-demo-desktop-light-poster.jpg';
import translationDemoMobileDarkPoster from '@/public/images/sherlock-translation-demo-mobile-dark-poster.jpg';
import translationDemoMobileLightPoster from '@/public/images/sherlock-translation-demo-mobile-light-poster.jpg';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

function TranslationDemoVideo(): ReactElement {
  const { selectedTheme } = useTheme();

  const [observerRef, videoIsInView] = useInView({
    triggerOnce: true,
    rootMargin: '2000px 0px',
  });

  const [
    translationDemoVideoMobileLightIsLoaded,
    setTranslationDemoVideoMobileLightIsLoaded,
  ] = useState(false);
  const translationDemoVideoMobileLightRef = useRef<HTMLVideoElement | null>(
    null,
  );

  const [
    translationDemoVideoMobileDarkIsLoaded,
    setTranslationDemoVideoMobileDarkIsLoaded,
  ] = useState(false);
  const translationDemoVideoMobileDarkRef = useRef<HTMLVideoElement | null>(
    null,
  );

  const [
    translationDemoVideoDesktopLightIsLoaded,
    setTranslationDemoVideoDesktopLightIsLoaded,
  ] = useState(false);
  const translationDemoVideoDesktopLightRef = useRef<HTMLVideoElement | null>(
    null,
  );

  const [
    translationDemoVideoDesktopDarkIsLoaded,
    setTranslationDemoVideoDesktopDarkIsLoaded,
  ] = useState(false);
  const translationDemoVideoDesktopDarkRef = useRef<HTMLVideoElement | null>(
    null,
  );

  useEffect(() => {
    if (videoIsInView) {
      if (translationDemoVideoMobileLightRef.current) {
        translationDemoVideoMobileLightRef.current.play().catch(() => {});
      }

      if (translationDemoVideoMobileDarkRef.current) {
        translationDemoVideoMobileDarkRef.current.play().catch(() => {});
      }

      if (translationDemoVideoDesktopLightRef.current) {
        translationDemoVideoDesktopLightRef.current.play().catch(() => {});
      }

      if (translationDemoVideoDesktopDarkRef.current) {
        translationDemoVideoDesktopDarkRef.current.play().catch(() => {});
      }
    }
  }, [videoIsInView]);

  useEffect(() => {
    function handleVideoPlay(): void {
      if (!videoIsInView) {
        return;
      }

      if (translationDemoVideoMobileLightRef.current) {
        translationDemoVideoMobileLightRef.current.play().catch(() => {});
      }

      if (translationDemoVideoMobileDarkRef.current) {
        translationDemoVideoMobileDarkRef.current.play().catch(() => {});
      }

      if (translationDemoVideoDesktopLightRef.current) {
        translationDemoVideoDesktopLightRef.current.play().catch(() => {});
      }

      if (translationDemoVideoDesktopDarkRef.current) {
        translationDemoVideoDesktopDarkRef.current.play().catch(() => {});
      }
    }

    window.addEventListener('resize', handleVideoPlay);

    return () => {
      window.removeEventListener('resize', handleVideoPlay);
    };
  }, [videoIsInView]);

  useEffect(() => {
    function handleVideoPlay(): void {
      if (!videoIsInView) {
        return;
      }

      if (translationDemoVideoMobileLightRef.current) {
        translationDemoVideoMobileLightRef.current.play().catch(() => {});
      }

      if (translationDemoVideoMobileDarkRef.current) {
        translationDemoVideoMobileDarkRef.current.play().catch(() => {});
      }

      if (translationDemoVideoDesktopLightRef.current) {
        translationDemoVideoDesktopLightRef.current.play().catch(() => {});
      }

      if (translationDemoVideoDesktopDarkRef.current) {
        translationDemoVideoDesktopDarkRef.current.play().catch(() => {});
      }
    }

    handleVideoPlay();
  }, [selectedTheme, videoIsInView]);

  return (
    <div ref={observerRef}>
      <div
        className='pointer-events-none  relative  aspect-[0.58]  w-full
                   max-w-[500px]  overflow-hidden  rounded-[14px]  border  
                 border-gray-light  lg:hidden  lg:rounded-[20px]  dark:hidden'
      >
        <Image
          className={classNames(
            'absolute  inset-0  transition-opacity  z-20  size-full  object-cover',
            {
              'opacity-0': translationDemoVideoMobileLightIsLoaded,
            },
          )}
          src={translationDemoMobileLightPoster}
          alt='Translation demo mobile light poster'
        />
        <video
          ref={translationDemoVideoMobileLightRef}
          className={classNames(
            'absolute  transition-opacity  inset-0  z-10  size-full  object-cover',
            {
              'opacity-0': !translationDemoVideoMobileLightIsLoaded,
              'opacity-100': translationDemoVideoMobileLightIsLoaded,
            },
          )}
          onCanPlay={() => {
            setTranslationDemoVideoMobileLightIsLoaded(true);
          }}
          muted
          playsInline
          loop
          width={886}
          height={1526}
          preload='none'
        >
          <source
            src={TRANSLATION_DEMO_VIDEO_MOBILE_LIGHT_SRC}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className='pointer-events-none relative  hidden  aspect-[0.58]  w-full
                   max-w-[500px]  overflow-hidden  rounded-[14px]  border  
                 border-gray-dark  lg:hidden  lg:rounded-[20px]  dark:block  
                   dark:lg:hidden'
      >
        <Image
          className={classNames(
            'absolute  inset-0  transition-opacity  z-20  size-full  object-cover',
            {
              'opacity-0': translationDemoVideoMobileDarkIsLoaded,
            },
          )}
          src={translationDemoMobileDarkPoster}
          alt='Translation demo mobile dark poster'
        />
        <video
          ref={translationDemoVideoMobileDarkRef}
          className={classNames(
            'absolute  transition-opacity  inset-0  z-10  size-full  object-cover',
            {
              'opacity-0': !translationDemoVideoMobileDarkIsLoaded,
              'opacity-100': translationDemoVideoMobileDarkIsLoaded,
            },
          )}
          onCanPlay={() => {
            setTranslationDemoVideoMobileDarkIsLoaded(true);
          }}
          muted
          playsInline
          loop
          width={886}
          height={1526}
          preload='none'
        >
          <source
            src={TRANSLATION_DEMO_VIDEO_MOBILE_DARK_SRC}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className='pointer-events-none  relative  hidden  aspect-[1.847]  w-full  max-w-[2992px]  
                   overflow-hidden  rounded-[14px]  border  border-gray-light    
                   lg:block  lg:rounded-[20px]  dark:hidden  dark:lg:hidden'
      >
        <Image
          className={classNames(
            'absolute  inset-0  transition-opacity  z-20  size-full  object-cover',
            {
              'opacity-0': translationDemoVideoDesktopLightIsLoaded,
            },
          )}
          src={translationDemoDesktopLightPoster}
          alt='Translation demo desktop light poster'
        />
        <video
          ref={translationDemoVideoDesktopLightRef}
          className={classNames(
            'absolute  transition-opacity  inset-0  z-10  size-full  object-cover',
            {
              'opacity-0': !translationDemoVideoDesktopLightIsLoaded,
              'opacity-100': translationDemoVideoDesktopLightIsLoaded,
            },
          )}
          onCanPlay={() => {
            setTranslationDemoVideoDesktopLightIsLoaded(true);
          }}
          muted
          playsInline
          loop
          width={2992}
          height={1620}
          preload='none'
        >
          <source
            src={TRANSLATION_DEMO_VIDEO_DESKTOP_LIGHT_SRC}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className='pointer-events-none  relative  hidden aspect-[1.847]  w-full
                   max-w-[2992px]  overflow-hidden  rounded-[14px]  border
                 border-gray-dark  lg:rounded-[20px]  dark:lg:block'
      >
        <Image
          className={classNames(
            'absolute  inset-0  transition-opacity  z-20  size-full  object-cover',
            {
              'opacity-0': translationDemoVideoDesktopDarkIsLoaded,
            },
          )}
          src={translationDemoDesktopDarkPoster}
          alt='Translation demo desktop dark poster'
        />
        <video
          ref={translationDemoVideoDesktopDarkRef}
          className={classNames(
            'absolute  transition-opacity  inset-0  z-10  size-full  object-cover',
            {
              'opacity-0': !translationDemoVideoDesktopDarkIsLoaded,
              'opacity-100': translationDemoVideoDesktopDarkIsLoaded,
            },
          )}
          onCanPlay={() => {
            setTranslationDemoVideoDesktopDarkIsLoaded(true);
          }}
          muted
          playsInline
          loop
          width={2992}
          height={1620}
          preload='none'
        >
          <source
            src={TRANSLATION_DEMO_VIDEO_DESKTOP_DARK_SRC}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default TranslationDemoVideo;
