import H2 from '@/components/elements/H2';
import H3 from '@/components/elements/H3';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import darkModeEnabled from '@/public/images/dark-mode-enabled.jpg';
import themeToggle from '@/public/images/theme-toggle.jpg';
import ufoLights from '@/public/images/ufo-lights.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';

function DarkMode(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2 className='mb-7  lg:mb-9'>
          Dark mode saves your&nbsp;eyes in&nbsp;the&nbsp;evening
        </H2>
        <div className='flex  flex-col  gap-11  lg:flex-row'>
          <div>
            <H3 className='mb-5  font-medium'>Dark mode disabled</H3>
            <Image
              className='rounded-[14px]  lg:rounded-[20px]'
              src={ufoLights}
              alt='UFO lights in "Close Encounters of the Third Kind"'
            />
            <TextNode className='!mb-0  mt-4  !text-sm'>
              UFO lights in&nbsp;&quot;Close Encounters of&nbsp;the&nbsp;Third
              Kind&quot;
            </TextNode>
          </div>
          <div className='relative'>
            <H3 className='mb-5  font-medium'>Dark mode enabled</H3>
            <div className='relative'>
              <Image
                className='rounded-[14px]  lg:rounded-[20px]  
                         dark:border  dark:border-gray-dark'
                src={darkModeEnabled}
                alt='Dark mode enabled'
              />
              <Image
                className='absolute  right-[10px]  top-[5px]  w-1/4  rounded-[8px]
                             dark:border-gray-dark'
                src={themeToggle}
                alt='Theme toggle'
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default DarkMode;
