import BasicTextNode from '@/components/elements/BasicTextNode';
import DemoOrReadButton from '@/components/elements/book-master-english-with-sherlock-holmes/promo/DemoOrReadButton';
import SubscriptionButtonPromo from '@/components/elements/book-master-english-with-sherlock-holmes/promo/SubscriptionButtonPromo';
import TextLi from '@/components/elements/book-master-english-with-sherlock-holmes/TextLi';
import TextOl from '@/components/elements/book-master-english-with-sherlock-holmes/TextOl';
import ExternalLink from '@/components/elements/ExternalLink';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import linkedInLogoDark from '@/public/images/linkedin-logo-dark.png';
import linkedInLogoLight from '@/public/images/linkedin-logo-light.png';
import publisherPhoto from '@/public/images/Nick_Maslov_black_and_white.jpg';
import authorPhoto from '@/public/images/Sir_Arthur_Conan_Doyle.jpg';
import Image from 'next/image';
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
        <div
          className='mt-11  lg:flex  lg:flex-row  lg:justify-between  
                            lg:gap-8  xl:gap-0'
        >
          <div
            className='top-[6.2rem]  flex  w-full  flex-none  flex-col  
                           self-start  sm:w-[400px]  lg:sticky  lg:w-[30vw]
                           xl:w-[400px]'
          >
            <div className='mb-10'>
              <BookCover />
            </div>
            <DemoOrReadButton />
          </div>
          <div className='mt-11  max-w-[685px]  lg:mt-0  xl:pl-14  xl:pr-16'>
            <BasicTextNode
              className={`mb-6  text-[1.375rem]  font-semibold
                           leading-snug  ${libreBaskerville.className}`}
            >
              Multiply your income. Live and work globally. All by becoming
              proficient in English. Master the language in record time — with
              the most effective and engaging tool, verified and recommended by
              the world’s best English teachers.
            </BasicTextNode>
            <TextNode>
              Proficiency in English gives you access to the highest-paying jobs
              — because it allows you to operate in global markets. Proficiency
              in English is often a requirement for leadership roles.
              Proficiency in English opens the door for you to cutting-edge
              knowledge, most of which is first published in English.
              Proficiency in English lets you travel the world comfortably,
              because you can speak fluently with anyone you meet. Proficiency
              in English is your key to global success!
            </TextNode>
            <TextNode>
              <span className='underline'>
                Reading is the most effective way for mastering a language,
              </span>{' '}
              because when you read, you encounter more words per minute than
              with any other method. And if what you're reading is also a
              fascinating, gripping story, words are remembered far more
              effectively — because they become tied to vivid moments that stay
              in your active memory for a long time.
            </TextNode>
            <TextNode className='!mb-0'>
              However, reading foreign literature comes with its own problems:
            </TextNode>
            <TextOl className='mb-5'>
              <TextLi>
                <span className='italic'>
                  The frustration from constant switching between a book and an
                  external translator.
                </span>{' '}
                Constantly switching back and forth between a book and an
                external translator is the most inconvenient part of reading
                literature in a foreign language. You’ll quickly get tired of
                this constant context switching and, in all likelihood, give up
                reading altogether.
              </TextLi>
              <TextLi>
                <span className='italic'>
                  External translators lack context.
                </span>{' '}
                When you manually translate a word or phrase using an external
                translator, it has no idea of the surrounding context — which
                often results in inaccurate translations.
              </TextLi>
            </TextOl>
            <TextNode>
              <span className='italic'>We solved these problems.</span> Our book
              includes a built-in, high-quality translator that activates
              instantly when you highlight any fragment — whether it’s a word, a
              phrase, or even a full sentence. And because it takes the
              surrounding context into account, the translation is as accurate
              as possible.
            </TextNode>
            <TextNode>
              What we offer to read is the complete collection of Sherlock
              Holmes stories. These stories are not only some of the world’s
              most thrilling detective tales, but also a treasure trove of rich
              everyday vocabulary. If you want to truly strengthen your
              knowledge of any language, you should read Sherlock Holmes
              translated into that language. The goal of this interactive
              edition is to help you powerfully boost your English skills, which
              is why the book is presented in its original version — in English.
            </TextNode>
            <TextNode className='italic  underline'>
              Sherlock Holmes stories + built-in, context-aware translator =
              English proficiency in record time. Remember this formula!
            </TextNode>
            <TextNode className='!mb-0'>
              <span className='italic'>
                The book supports translation into all major world languages:{' '}
              </span>
              French, Spanish, Portuguese (Portugal, Brazil), Italian, German,
              Dutch, Danish, Finnish, Norwegian (Bokmål), Swedish, Ukrainian,
              Russian, Estonian, Latvian, Lithuanian, Slovenian, Polish, Czech,
              Slovak, Hungarian, Romanian, Bulgarian, Greek, Turkish, Arabic,
              Hebrew, Japanese, Korean, Chinese (Simplified, Traditional), Thai,
              Indonesian, Vietnamese.
            </TextNode>
          </div>
          <div className='mt-12  flex-none  lg:mt-0  lg:w-[235px]'>
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
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default Intro;
