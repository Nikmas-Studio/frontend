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
import { lightThemeIsSelected } from '@/utils/check-selected-theme';
import { ReactElement, useEffect, useState } from 'react';

function TranslationDemoVideo(): ReactElement {
  const { selectedTheme } = useTheme();
  const [videoSrc, setVideoSrc] = useState('');
  const [posterSrc, setPosterSrc] = useState('');

  useEffect(() => {
    if (lightThemeIsSelected(selectedTheme)) {
      if (window.innerWidth < 1024) {
        setVideoSrc(TRANSLATION_DEMO_VIDEO_MOBILE_LIGHT_SRC);
        setPosterSrc(TRANSLATION_DEMO_VIDEO_MOBILE_LIGHT_POSTER_SRC);
      } else {
        setVideoSrc(TRANSLATION_DEMO_VIDEO_DESKTOP_LIGHT_SRC);
        setPosterSrc(TRANSLATION_DEMO_VIDEO_DESKTOP_LIGHT_POSTER_SRC);
      }
    } else {
      if (window.innerWidth < 1024) {
        setVideoSrc(TRANSLATION_DEMO_VIDEO_MOBILE_DARK_SRC);
        setPosterSrc(TRANSLATION_DEMO_VIDEO_MOBILE_DARK_POSTER_SRC);
      } else {
        setVideoSrc(TRANSLATION_DEMO_VIDEO_DESKTOP_DARK_SRC);
        setPosterSrc(TRANSLATION_DEMO_VIDEO_DESKTOP_DARK_POSTER_SRC);
      }
    }
  }, [selectedTheme]);

  return (
    <>
      <video
        key={videoSrc}
        className='pointer-events-none  w-full  max-w-[500px]  rounded-[14px]  border  
                     border-gray-light  lg:max-w-[2992px]  lg:rounded-[20px]  dark:border-gray-dark'
        autoPlay
        muted
        playsInline
        loop
        preload='none'
        poster={posterSrc}
      >
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* <video
        className='pointer-events-none  hidden  w-full  max-w-[500px]  rounded-[14px]  border  
                     border-gray-dark  lg:hidden  lg:rounded-[20px]  
                     dark:block  dark:lg:hidden'
        autoPlay
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
        className='pointer-events-none  hidden  w-full  max-w-[2992px]  rounded-[14px]  
                     border  border-gray-light    
                     lg:block  lg:rounded-[20px]  dark:hidden  dark:lg:hidden'
        autoPlay
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
        className='pointer-events-none  hidden  w-full  max-w-[2992px]  rounded-[14px]  
                     border  border-gray-dark  lg:rounded-[20px]  dark:lg:block'
        autoPlay
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
      </video> */}
    </>
  );
}

export default TranslationDemoVideo;
