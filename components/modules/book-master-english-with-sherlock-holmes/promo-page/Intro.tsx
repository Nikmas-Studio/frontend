import BasicTextNode from '@/components/elements/BasicTextNode';
import DemoOrReadButton from '@/components/elements/book-master-english-with-sherlock-holmes/promo/DemoOrReadButton';
import SubscriptionButtonPromo from '@/components/elements/book-master-english-with-sherlock-holmes/promo/SubscriptionButtonPromo';
import TextLi from '@/components/elements/book-master-english-with-sherlock-holmes/TextLi';
import TextOl from '@/components/elements/book-master-english-with-sherlock-holmes/TextOl';
import ExternalLink from '@/components/elements/ExternalLink';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville, merriweather } from '@/fonts';
import linkedInLogoDark from '@/public/images/linkedin-logo-dark.png';
import linkedInLogoLight from '@/public/images/linkedin-logo-light.png';
import publisherPhoto from '@/public/images/Nick_Maslov_black_and_white.jpg';
import authorPhoto from '@/public/images/Sir_Arthur_Conan_Doyle.jpg';
import classNames from 'classnames';
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
              Advance your English through story — with the
              highest&#8209;quality, highlight&#8209;based, context&#8209;aware
              AI&nbsp;translation, built right into the book and available in
              any language.
            </BasicTextNode>
            <TextNode>
              The Sherlock Holmes stories are not only some of the world’s most
              thrilling detective tales, but also a treasure trove of rich
              vocabulary. If you want to truly strengthen your knowledge of any
              language, you should read Sherlock Holmes translated into that
              language. The goal of this interactive edition is to help you
              powerfully boost your English skills, which is why the book is
              presented in its original version — in English.
            </TextNode>
            <h2
              className={`${classNames(
                `[font-size:1.3rem]  underline  italic  text-black  dark:text-white  lining-nums  text-lg  mb-3  
                [-webkit-font-smoothing:subpixel-antialiased]`,
                merriweather.className,
              )}`}
            >
              The 4 Secrets of This Book’s Power
            </h2>
            <TextNode className='!mb-0'>
              There are 4 secrets that make this book one of the world’s best
              tools for advancing your English:
            </TextNode>
            <TextOl className='mb-5'>
              <TextLi>
                <span className='italic'>The built-in translation.</span>{' '}
                Constantly switching back and forth between a book and an
                external translator is the most inconvenient part of reading
                literature in a foreign language. You’ll quickly get tired of
                this constant context switching and, in all likelihood, give up
                reading altogether. To solve this core problem, we’ve
                implemented a built-in translator that activates instantly when
                you highlight any piece of text — no need to click anything
                extra or switch to another app. Our translator also understands
                the context around the highlighted fragment, so the translation
                is as accurate as possible.
              </TextLi>
              <TextLi>
                <span className='italic'>Translation of entire phrases.</span>{' '}
                You can translate not just individual words, but entire phrases
                — even full sentences. English has many expressions where the
                meaning of the whole differs from the meanings of the individual
                words — for example, phrasal verbs. With our highlight-based
                translation system, you can select and translate phrases of any
                length as a whole.
              </TextLi>
              <TextLi>
                <span className='italic'>The world’s best AI translation.</span>{' '}
                For translation, we use ChatGPT under the hood — one of the most
                advanced AIs in the world. When translating any fragment, we
                also provide the AI with the surrounding text context in which
                that fragment appears and ask AI to translate the fragment as
                accurately as possible within that specific context. As a
                result, by combining ChatGPT with context awareness, we achieve
                one of the highest-quality translations — right inside the book.
              </TextLi>
              <TextLi>
                <span className='italic'>
                  Effective natural memorization of words and phrases.
                </span>{' '}
                Vivid moments stay in our active memory for a long time. And
                when a person reads an exciting story like Sherlock Holmes,
                filled with such striking scenes, linking the learning of new
                words and phrases to those moments helps retain the vocabulary
                in long-term memory — naturally and effortlessly. Furthermore,
                books expose you to more words per minute than any other tool —
                nothing else comes close. That’s exactly why reading is one of
                the most effective ways to expand your vocabulary.
              </TextLi>
            </TextOl>
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
