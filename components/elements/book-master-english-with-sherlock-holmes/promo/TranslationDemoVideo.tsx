'use client';

import {
  TRANSLATION_DEMO_VIDEO_DESKTOP_DARK_POSTER_SRC,
  TRANSLATION_DEMO_VIDEO_DESKTOP_DARK_SRC,
  TRANSLATION_DEMO_VIDEO_DESKTOP_LIGHT_POSTER_SRC,
  TRANSLATION_DEMO_VIDEO_DESKTOP_LIGHT_SRC,
  TRANSLATION_DEMO_VIDEO_MOBILE_DARK_POSTER_SRC,
  TRANSLATION_DEMO_VIDEO_MOBILE_DARK_SRC,
  TRANSLATION_DEMO_VIDEO_MOBILE_LIGHT_POSTER_SRC,
  TRANSLATION_DEMO_VIDEO_MOBILE_LIGHT_SRC,
} from '@/constants/book-master-english-with-sherlock-holmes/videos';
import { useTheme } from '@/context/theme/Context';
import { ReactElement, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function TranslationDemoVideo(): ReactElement {
  const { selectedTheme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '1000px 0px',
    threshold: 0.1,
  });

  useEffect(() => {
    function playActiveVideo(): void {
      if (inView) {
        const mobileLightVideo = mobileLightVideoRef.current;
        const mobileDarkVideo = mobileDarkVideoRef.current;
        const desktopLightVideo = desktopLightVideoRef.current;
        const desktopDarkVideo = desktopDarkVideoRef.current;

        if (mobileLightVideo) {
          const style = window.getComputedStyle(mobileLightVideo);
          if (style.display !== 'none') {
            mobileLightVideo.play().catch(() => {});
          }
        }
        if (mobileDarkVideo) {
          const style = window.getComputedStyle(mobileDarkVideo);
          if (style.display !== 'none') {
            mobileDarkVideo.play().catch(() => {});
          }
        }
        if (desktopLightVideo) {
          const style = window.getComputedStyle(desktopLightVideo);
          if (style.display !== 'none') {
            desktopLightVideo.play().catch(() => {});
          }
        }
        if (desktopDarkVideo) {
          const style = window.getComputedStyle(desktopDarkVideo);
          if (style.display !== 'none') {
            desktopDarkVideo.play().catch(() => {});
          }
        }
      }
    }

    playActiveVideo();

    window.addEventListener('resize', playActiveVideo);
    return () => {
      window.removeEventListener('resize', playActiveVideo);
    };
  }, [inView, selectedTheme]);

  useEffect(() => {
    if (inView) {
      const mobileLightVideo = mobileLightVideoRef.current;
      const mobileDarkVideo = mobileDarkVideoRef.current;
      const desktopLightVideo = desktopLightVideoRef.current;
      const desktopDarkVideo = desktopDarkVideoRef.current;

      if (mobileLightVideo) {
        mobileLightVideo.play().catch(() => {});
      }
      if (mobileDarkVideo) {
        mobileDarkVideo.play().catch(() => {});
      }
      if (desktopLightVideo) {
        desktopLightVideo.play().catch(() => {});
      }
      if (desktopDarkVideo) {
        desktopDarkVideo.play().catch(() => {});
      }
    }
  }, [inView]);

  const mobileLightVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileDarkVideoRef = useRef<HTMLVideoElement | null>(null);
  const desktopLightVideoRef = useRef<HTMLVideoElement | null>(null);
  const desktopDarkVideoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div ref={ref}>
      <video
        ref={mobileLightVideoRef}
        className='pointer-events-none  w-full  max-w-[500px]  rounded-[14px]  border  
                     border-gray-light  lg:hidden  lg:rounded-[20px]  dark:hidden'
        muted
        playsInline
        loop
        width={886}
        height={1526}
        preload='none'
        poster={TRANSLATION_DEMO_VIDEO_MOBILE_LIGHT_POSTER_SRC}
      >
        <source
          src={TRANSLATION_DEMO_VIDEO_MOBILE_LIGHT_SRC}
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
      <video
        ref={mobileDarkVideoRef}
        className='pointer-events-none  hidden  w-full  max-w-[500px]  rounded-[14px]  border  
                     border-gray-dark  lg:hidden  lg:rounded-[20px]  
                     dark:block  dark:lg:hidden'
        muted
        playsInline
        loop
        width={886}
        height={1526}
        preload='none'
        poster={TRANSLATION_DEMO_VIDEO_MOBILE_DARK_POSTER_SRC}
      >
        <source src={TRANSLATION_DEMO_VIDEO_MOBILE_DARK_SRC} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <video
        ref={desktopLightVideoRef}
        className='pointer-events-none  hidden  w-full  max-w-[2992px]  rounded-[14px]  
                     border  border-gray-light    
                     lg:block  lg:rounded-[20px]  dark:hidden  dark:lg:hidden'
        muted
        playsInline
        loop
        width={2992}
        height={1620}
        preload='none'
        poster={TRANSLATION_DEMO_VIDEO_DESKTOP_LIGHT_POSTER_SRC}
      >
        <source
          src={TRANSLATION_DEMO_VIDEO_DESKTOP_LIGHT_SRC}
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
      <video
        ref={desktopDarkVideoRef}
        className='pointer-events-none  hidden  w-full  max-w-[2992px]  rounded-[14px]  
                     border  border-gray-dark  lg:rounded-[20px]  dark:lg:block'
        muted
        playsInline
        loop
        width={2992}
        height={1620}
        preload='none'
        poster={TRANSLATION_DEMO_VIDEO_DESKTOP_DARK_POSTER_SRC}
      >
        <source
          src={TRANSLATION_DEMO_VIDEO_DESKTOP_DARK_SRC}
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default TranslationDemoVideo;
