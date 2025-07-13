import BookNavigatorDemoVideo from '@/components/elements/book-master-english-with-sherlock-holmes/promo/BookNavigatorDemoVideo';
import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import { ReactElement } from 'react';

function BookNavigator(): ReactElement {
  return (
    <section className='mt-20  lg:mt-24'>
      <MainContainer>
        <H2
          className={`mb-9  lg:mb-11  2lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
        >
          Book navigator at&nbsp;your disposal
        </H2>
        <TextNode className='lg:mb-6'>
          Explore the book’s structure and find the pages you need:
        </TextNode>
        <BookNavigatorDemoVideo />
        {/* <video
          className='pointer-events-none  w-full  max-w-[500px]  rounded-[14px]  border  
                     border-gray-light  lg:hidden  lg:rounded-[20px]  dark:hidden'
          autoPlay
          muted
          playsInline
          loop
          width={886}
          height={1526}
          preload='none'
          poster={NAVIGATOR_DEMO_VIDEO_MOBILE_LIGHT_POSTER_SRC}
        >
          <source
            src={NAVIGATOR_DEMO_VIDEO_MOBILE_LIGHT_SRC}
            type='video/mp4'
          />
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
          preload='none'
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
          preload='none'
          poster={NAVIGATOR_DEMO_VIDEO_DESKTOP_LIGHT_POSTER_SRC}
        >
          <source
            src={NAVIGATOR_DEMO_VIDEO_DESKTOP_LIGHT_SRC}
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
          poster={NAVIGATOR_DEMO_VIDEO_DESKTOP_DARK_POSTER_SRC}
        >
          <source
            src={NAVIGATOR_DEMO_VIDEO_DESKTOP_DARK_SRC}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video> */}
      </MainContainer>
    </section>
  );
}

export default BookNavigator;
