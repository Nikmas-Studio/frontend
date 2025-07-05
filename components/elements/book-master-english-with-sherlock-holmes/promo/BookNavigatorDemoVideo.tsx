import {
  NAVIGATOR_DEMO_VIDEO_DESKTOP_DARK_POSTER_SRC,
  NAVIGATOR_DEMO_VIDEO_DESKTOP_DARK_SRC,
  NAVIGATOR_DEMO_VIDEO_DESKTOP_LIGHT_POSTER_SRC,
  NAVIGATOR_DEMO_VIDEO_DESKTOP_LIGHT_SRC,
  NAVIGATOR_DEMO_VIDEO_MOBILE_DARK_POSTER_SRC,
  NAVIGATOR_DEMO_VIDEO_MOBILE_DARK_SRC,
  NAVIGATOR_DEMO_VIDEO_MOBILE_LIGHT_POSTER_SRC,
  NAVIGATOR_DEMO_VIDEO_MOBILE_LIGHT_SRC,
} from '@/constants/book-master-english-with-sherlock-holmes/videos';
import { ReactElement } from 'react';

function BookNavigatorDemoVideo(): ReactElement {
  return (
    <div>
      <video
        className='pointer-events-none  w-full  max-w-[500px]  rounded-[14px]  border  
                     border-gray-light  lg:hidden  lg:rounded-[20px]  dark:hidden'
        autoPlay
        muted
        playsInline
        loop
        width={886}
        height={1526}
        preload='metadata'
        poster={NAVIGATOR_DEMO_VIDEO_MOBILE_LIGHT_POSTER_SRC}
      >
        <source src={NAVIGATOR_DEMO_VIDEO_MOBILE_LIGHT_SRC} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <video
        className='pointer-events-none  hidden  w-full  max-w-[500px]  rounded-[14px]  border  
                     border-gray-dark  lg:hidden  lg:rounded-[20px]  
                     dark:block  dark:lg:hidden'
        autoPlay
        muted
        playsInline
        loop
        width={886}
        height={1526}
        preload='metadata'
        poster={NAVIGATOR_DEMO_VIDEO_MOBILE_DARK_POSTER_SRC}
      >
        <source src={NAVIGATOR_DEMO_VIDEO_MOBILE_DARK_SRC} type='video/mp4' />
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
        preload='metadata'
        poster={NAVIGATOR_DEMO_VIDEO_DESKTOP_LIGHT_POSTER_SRC}
      >
        <source src={NAVIGATOR_DEMO_VIDEO_DESKTOP_LIGHT_SRC} type='video/mp4' />
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
        preload='metadata'
        poster={NAVIGATOR_DEMO_VIDEO_DESKTOP_DARK_POSTER_SRC}
      >
        <source src={NAVIGATOR_DEMO_VIDEO_DESKTOP_DARK_SRC} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BookNavigatorDemoVideo;
