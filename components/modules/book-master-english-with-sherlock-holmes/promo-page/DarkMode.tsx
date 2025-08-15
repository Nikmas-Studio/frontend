import H2 from '@/components/elements/H2';
import H3 from '@/components/elements/H3';
import MainContainer from '@/components/elements/MainContainer';
import { libreBaskerville } from '@/fonts';
import darkMode from '@/public/images/dark-mode.jpeg';
import themeToggle from '@/public/images/sherlock-theme-toggle.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';

function DarkMode(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2 className={`mb-9  ${libreBaskerville.className}  !leading-snug`}>
          Dark mode cares about&nbsp;your&nbsp;eyes in&nbsp;the&nbsp;evening
        </H2>
        <div className='relative'>
          <div className='relative'>
            <Image
              className='rounded-[14px]  md:w-4/5  lg:rounded-[20px]  xl:w-[48.3%]'
              src={darkMode}
              alt='Dark mode'
            />
            <Image
              className='absolute  right-0  top-[83%]  w-[37%]  rounded-[14px]  
                         md:top-0  md:w-[28%]  lg:rounded-[20px]  xl:left-[44%]  
                         xl:right-auto  xl:w-[16%]'
              src={themeToggle}
              alt='Theme toggle'
            />
          </div>
          <H3
            className={`mt-[8.5vw]  !text-[5.4vw]  ${libreBaskerville.className}  
                        !leading-snug  2sm:!text-[1.5rem]  1.5sm:!text-[1.7rem]
                        1.5sm:!leading-snug  md:mt-7  xl:absolute  xl:left-[64%]
                        xl:top-20  xl:mt-0  xl:!text-[1.9rem]  xl:!leading-snug`}
          >
            Read comfortably,
            <br /> day and evening
          </H3>
        </div>
      </MainContainer>
    </section>
  );
}

export default DarkMode;
