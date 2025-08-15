import BasicTextNode from '@/components/elements/BasicTextNode';
import TryDemoAndSubscriptionButtonsPromo from '@/components/elements/book-master-english-with-sherlock-holmes/promo/SubscriptionButtonPromo';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { benzin, libreBaskerville } from '@/fonts';
import { ReactElement } from 'react';
import BookCover from './BookCover';

function Intro(): ReactElement {
  return (
    <section>
      <MainContainer>
        <h1
          className={`mb-3  mt-5  text-4xl  font-bold  leading-snug  
                           lg:text-[2.7rem]  ${libreBaskerville.className}  dark:text-white`}
        >
          Master&nbsp;English with&nbsp;Sherlock Holmes
        </h1>
        <h2
          className={`text-4xl  italic  lg:text-[2.7rem]  ${libreBaskerville.className}  dark:text-white`}
        >
          Interactive e&#8209;book
        </h2>
        <div className='mt-11  lg:flex  lg:gap-8  xl:gap-0'>
          <div
            className='top-[6.2rem]  flex  w-full  flex-none  flex-col  
                           self-start  sm:w-[400px]  lg:sticky  lg:w-[35vw]
                           xl:w-[400px]'
          >
            {/* <div className='mb-10'> */}
            <BookCover />
            {/* </div> */}
            {/* <DemoOrReadButton /> */}
          </div>
          <div className='mt-9  grow  lg:mt-0  xl:pl-12'>
            <div className='1.5xl:flex  1.5xl:justify-between'>
              <div>
                <h2
                  className={`${benzin.className}  text-center  text-4xl  leading-snug  sm:text-left  1.5xl:text-[2.5rem]`}
                >
                  <span className='relative  mb-1  inline-block  bg-[#d5e1ed]  px-2  text-[#0071E9]  dark:bg-[#0e284b]  dark:text-[#2C8EF7]'>
                    <div className='absolute  inset-y-0  left-0  w-[0.1875rem]  bg-[#0071E9]  dark:bg-[#2C8EF7]'>
                      <div className='absolute  -top-2  left-[-0.40625rem]  size-4  rounded-full  bg-[#0071E9]  dark:bg-[#2C8EF7]'></div>
                    </div>
                    This&nbsp;book is&nbsp;the&nbsp;key
                    <div className='absolute  inset-y-0  right-0  w-[0.1875rem]  bg-[#0071E9]'>
                      <div className='absolute  -bottom-2  right-[-0.40625rem]  size-4  rounded-full  bg-[#0071E9]  dark:bg-[#2C8EF7]'></div>
                    </div>
                  </span>
                  <br />
                  <span className='dark:text-white'>
                    to&nbsp;your global success
                  </span>
                </h2>
                <h3 className='mt-5  text-[2.1rem]  font-bold  leading-tight  1.5xl:text-[2.25rem]  dark:text-white'>
                  Multiply your&nbsp;income. <br />
                  Live and&nbsp;work globally. <br />
                  All&nbsp;by&nbsp;becoming proficient in&nbsp;English.
                </h3>
              </div>
              <BasicTextNode
                className='mt-5  text-[2.5rem]  italic  leading-tight
                           1.5xl:mt-0  
                           1.5xl:text-[2.75rem]'
              >
                Read <br className='hidden  1.5xl:inline' />
                just 10 <br className='hidden  1.5xl:inline' />
                minutes <br className='hidden  1.5xl:inline' />a day
              </BasicTextNode>
            </div>
            <div className='mt-6  grid  gap-5  1.5xl:grid-cols-2'>
              <div className='max-w-[40.625rem]  rounded-xl  bg-[#FFEAC5]  px-[2.15rem]  pb-[1.85rem]  pt-5'>
                <TextNode className='!mb-0  !text-[1.15rem]  !leading-normal  dark:!text-black'>
                  Reading is{' '}
                  <span className='font-bold'>the most effective way</span> for
                  mastering a language
                </TextNode>
              </div>
              <div className='max-w-[40.625rem]  rounded-xl  bg-[#FFEAC5]  px-[2.15rem]  pb-[1.85rem]  pt-5'>
                <TextNode className='!mb-0  !text-[1.15rem]  !leading-normal  dark:!text-black'>
                  One of{' '}
                  <span className='font-bold'>
                    the most thrilling and vocabulary-rich
                  </span>{' '}
                  books in history
                </TextNode>
              </div>
              <div className='max-w-[40.625rem]  rounded-xl  bg-[#FFEAC5]  px-[2.15rem]  pb-[1.85rem]  pt-5'>
                <TextNode className='!mb-0  !text-[1.15rem]  !leading-normal  dark:!text-black'>
                  Built-in, highest-quality,{' '}
                  <span className='font-bold'>highlight-based</span> AI{' '}
                  <span className='font-bold'>translation</span>
                </TextNode>
              </div>
              <div className='max-w-[40.625rem]  rounded-xl  bg-[#FFEAC5]  px-[2.15rem]  pb-[1.85rem]  pt-5'>
                <TextNode className='!mb-0  !text-[1.15rem]  !leading-normal  dark:!text-black'>
                  Supports translation into{' '}
                  <span className='font-bold'>32 major world languages</span>
                </TextNode>
              </div>
              <div className='max-w-[40.625rem]  rounded-xl  bg-[#FFEAC5]  px-[2.15rem]  pb-[1.85rem]  pt-5'>
                <TextNode className='!mb-0  !text-[1.15rem]  !leading-normal  dark:!text-black'>
                  <span className='font-bold'>Translate any fragments:</span>{' '}
                  words, phrases, sentences
                </TextNode>
              </div>
              <div className='max-w-[40.625rem]  rounded-xl  bg-[#FFEAC5]  px-[2.15rem]  pb-[1.85rem]  pt-5'>
                <TextNode className='!mb-0  !text-[1.15rem]  !leading-normal  dark:!text-black'>
                  <span className='font-bold'>Context-awareness</span> delivers
                  the most accurate translations
                </TextNode>
              </div>
              <div className='max-w-[40.625rem]  rounded-xl  bg-[#FFEAC5]  px-[2.15rem]  pb-[1.85rem]  pt-5'>
                <TextNode className='!mb-0  !text-[1.15rem]  !leading-normal  dark:!text-black'>
                  <span className='font-bold'>No friction</span> from switching
                  between a book and a translator
                </TextNode>
              </div>
              <div className='max-w-[40.625rem]  rounded-xl  bg-[#FFEAC5]  px-[2.15rem]  pb-[1.85rem]  pt-5'>
                <TextNode className='!mb-0  !text-[1.15rem]  !leading-normal  dark:!text-black'>
                  Enjoy <span className='font-bold'>the smoothest</span> reading
                  and learning <span className='font-bold'>flow</span>
                </TextNode>
              </div>
              <div className='max-w-[40.625rem]  rounded-xl  bg-[#FFEAC5]  px-[2.15rem]  pb-[1.85rem]  pt-5'>
                <TextNode className='!mb-0  !text-[1.15rem]  !leading-normal  dark:!text-black'>
                  Experience{' '}
                  <span className='font-bold'>effective memorization</span> of
                  words and phrases
                </TextNode>
              </div>
              <div className='max-w-[40.625rem]  rounded-xl  bg-[#FFEAC5]  px-[2.15rem]  pb-[1.85rem]  pt-5'>
                <TextNode className='!mb-0  !text-[1.15rem]    !leading-normal  dark:!text-black'>
                  <span className='font-bold'>Verified and recommended</span> by
                  the world’s best English teachers
                </TextNode>
              </div>
            </div>
          </div>
          {/* <div className='mt-12  flex-none  lg:mt-0  lg:w-[215px]'>
            <div className='flex  flex-col  lg:flex-col-reverse'>
              <div>
                <div
                  className='flex  items-end  justify-between  lg:mt-16  
                             lg:flex-col  lg:items-start  lg:justify-start'
                >
                  <div>
                    <BasicTextNode
                      className={`${libreBaskerville.className}  text-xl`}
                    >
                      <span className='text-[3.43rem]'>$23</span>/year
                    </BasicTextNode>
                    <div>
                      <TextNode className='!mb-0  mt-2  hidden  !text-base  lg:block'>
                        With auto-renewal.
                      </TextNode>
                      <TextNode className='!mb-0  mt-[2px]  hidden  !text-base  lg:block'>
                        Cancel any time
                      </TextNode>
                    </div>
                  </div>
                  <SubscriptionButtonPromo />
                </div>
                <div>
                  <TextNode className='!mb-0  mt-2  !text-base  lg:hidden'>
                    With auto-renewal.
                  </TextNode>
                  <TextNode className='!mb-0  mt-0  !text-base  lg:hidden'>
                    Cancel any time
                  </TextNode>
                </div>
              </div>
              <div className='mt-12  lg:mt-0'>
                <div>
                  <Image
                    src={authorPhoto}
                    alt='Author: Sir Arthur Conan Doyle'
                    className='pointer-events-none  w-[275px]  select-none  rounded-[14px]
                         lg:w-[215px]'
                    sizes='(max-width: 1023) 275px, 215px'
                    quality={100}
                    priority
                  />
                  <BasicTextNode
                    className={`mb-2  mt-4  w-[275px]  text-[1.28rem]  ${libreBaskerville.className}
                          font-bold  lg:w-[215px]  lg:text-[1.15rem]`}
                  >
                    Author:
                    <br />
                    Arthur&nbsp;Conan&nbsp;Doyle
                  </BasicTextNode>
                  <TextNode className='w-[275px]  !text-base  lg:w-[215px]'>
                    A&nbsp;British writer and&nbsp;physician
                  </TextNode>
                </div>
                <div className='mt-10  lg:mt-9'>
                  <Image
                    src={publisherPhoto}
                    alt='Publisher: Nick Maslov'
                    className='pointer-events-none  w-[275px]  select-none  rounded-[14px]
                         lg:w-[215px]'
                    sizes='(max-width: 1023) 275px, 215px'
                    quality={100}
                    priority
                  />
                  <BasicTextNode
                    className={`mb-2  mt-4  w-[275px]  text-[1.28rem]  ${libreBaskerville.className}
                          font-bold  lg:w-[215px]  lg:text-[1.15rem]`}
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
                  <TextNode className='!mb-0  w-[275px]  !text-base  lg:w-[215px]'>
                    Founder, CEO, and&nbsp;Chief&nbsp;Director
                    at&nbsp;Nikmas&nbsp;Studio
                  </TextNode>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className='mt-10'>
          <TryDemoAndSubscriptionButtonsPromo />
        </div>
      </MainContainer>
    </section>
  );
}

export default Intro;
