import BasicTextNode from '@/components/elements/BasicTextNode';
import ExternalLink from '@/components/elements/ExternalLink';
import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import linkedInLogoDark from '@/public/images/linkedin-logo-dark.png';
import linkedInLogoLight from '@/public/images/linkedin-logo-light.png';
import publisherPhoto from '@/public/images/Nick_Maslov_black_and_white.jpg';
import authorPhoto from '@/public/images/Sir_Arthur_Conan_Doyle.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';

function BehindTheBook(): ReactElement {
  return (
    <section className='mt-16  lg:mt-24'>
      <MainContainer className='lg:flex  lg:justify-between  lg:gap-10'>
        <H2
          className={`mb-7  max-w-[55rem]  lg:mb-9  lg:mt-14  ${libreBaskerville.className}  !leading-snug`}
        >
          Behind the book
        </H2>
        <hr className='mt-[4.9rem]  hidden  w-full  grow  border-black  xl:block  dark:border-white' />
        <div className='shrink-0  md:flex  md:gap-10'>
          <div>
            <Image
              src={authorPhoto}
              alt='Author: Sir Arthur Conan Doyle'
              className='pointer-events-none  w-[280px]  select-none  
                         rounded-[14px]  md:h-[214px]  md:w-auto  lg:h-[200px]'
              width={280}
              quality={100}
              priority
            />
            <BasicTextNode
              className={`mb-2  mt-4  w-[275px]  text-[1.28rem]  ${libreBaskerville.className}
                          font-bold  lg:w-[237px]  lg:text-[1.2rem]`}
            >
              Author:
              <br />
              Arthur&nbsp;Conan&nbsp;Doyle
            </BasicTextNode>
            <TextNode className='w-[275px]  !text-base  lg:w-[215px]'>
              A&nbsp;British writer and&nbsp;physician
            </TextNode>
          </div>
          <div className='mt-10  md:mt-0'>
            <Image
              src={publisherPhoto}
              alt='Publisher: Nick Maslov'
              className='pointer-events-none  w-[280px]  select-none  rounded-[14px]  
                         md:h-[214px]  md:w-auto  lg:h-[200px]'
              width={280}
              quality={100}
              priority
            />
            <BasicTextNode
              className={`mb-2  mt-4  w-[275px]  text-[1.28rem]  ${libreBaskerville.className}
                          font-bold  lg:w-[237px]  lg:text-[1.2rem]`}
            >
              Publisher:
              <br />
              Nick&nbsp;Maslov{' '}
              <ExternalLink href='https://www.linkedin.com/in/nikmaslov'>
                <Image
                  className='inline  size-6  translate-x-1.5  
                                   translate-y-[-0.1875rem]  transition-transform
                                   hover:scale-[1.15]  dark:hidden'
                  src={linkedInLogoLight}
                  alt="Nick Maslov's LinkedIn"
                />
                <Image
                  className='hidden  size-6  translate-x-1.5  
                                   translate-y-[-0.1875rem]  transition-transform
                                   hover:scale-[1.15]  dark:inline'
                  src={linkedInLogoDark}
                  alt="Nick Maslov's LinkedIn"
                />
              </ExternalLink>
            </BasicTextNode>
            <TextNode className='!mb-0  w-[275px]  !text-base  lg:w-[257px]'>
              Founder, CEO, and&nbsp;Chief&nbsp;Director
              at&nbsp;Nikmas&nbsp;Studio
            </TextNode>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default BehindTheBook;
