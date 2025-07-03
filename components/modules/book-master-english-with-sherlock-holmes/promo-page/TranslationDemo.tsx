import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import {
  TRANSLATION_DEMO_VIDEO_DESKTOP_DARK_SRC,
  TRANSLATION_DEMO_VIDEO_DESKTOP_LIGHT_SRC,
  TRANSLATION_DEMO_VIDEO_MOBILE_DARK_SRC,
  TRANSLATION_DEMO_VIDEO_MOBILE_LIGHT_SRC,
} from '@/constants/book-master-english-with-sherlock-holmes/videos';
import { libreBaskerville } from '@/fonts';
import { ReactElement } from 'react';

function TranslationDemo(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2
          className={`mb-7  lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
        >
          Highlight-based AI translations are built right into the book
        </H2>
        <TextNode className='max-w-[45rem]  lg:mb-6'>
          The highest-quality, highlight-based, context-aware AI translations
          are built right into the book and available in any language. Choose
          your translation language in settings, then highlight any
          text&nbsp;fragment&nbsp;— and see the instant pop&#8209;up with the
          meaning:
        </TextNode>
        <video
          className='pointer-events-none  w-full  max-w-[500px]  rounded-[14px]  border  
                     border-gray-light  lg:hidden  lg:rounded-[20px]  dark:hidden'
          autoPlay
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
        >
          <source
            src={TRANSLATION_DEMO_VIDEO_MOBILE_DARK_SRC}
            type='video/mp4'
          />
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
        >
          <source
            src={TRANSLATION_DEMO_VIDEO_DESKTOP_DARK_SRC}
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </MainContainer>
    </section>
  );
}

export default TranslationDemo;
