import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H2 from '@/components/elements/book-master-english-with-sherlock-holmes/H2';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import SubscriptionButton from '@/components/elements/book-master-english-with-sherlock-holmes/SubscriptionButton';
import TextLi from '@/components/elements/book-master-english-with-sherlock-holmes/TextLi';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import TextOl from '@/components/elements/book-master-english-with-sherlock-holmes/TextOl';
import ExternalLink from '@/components/elements/ExternalLink';
import classNames from 'classnames';
import { ReactElement } from 'react';
import Controls from '../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
}

function InstructionsPage({
  pageNumber,
  hidePageNumber = false,
}: PageProps): ReactElement {
  const iconClasses = classNames(
    `fill-none  [stroke-linecap:round]  [stroke-linejoin:round]
    stroke-orange`,
  );

  return (
    <PageWrapper pageNumber={pageNumber}>
      <Controls pageNumber={hidePageNumber ? undefined : pageNumber} />
      <BookMainContainer>
        <H2 className='mb-10  max-sm:mb-7'>How to Use the Book</H2>
        <div className='max-w-[40rem]  max-md:mb-7'>
          <TextNode className='mb-5' noIndent>
            In Settings (
            <svg
              className='inline  translate-y-[0.33rem]  align-text-bottom'
              width={35}
              height={35}
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g data-name='Layer 2' id='Layer_2'>
                <g id='Workspace'>
                  <rect className='fill-none' height='24' width='24' />
                  <line className={iconClasses} x1='7' x2='7' y1='6' y2='13' />
                  <circle className={iconClasses} cx='7' cy='14.5' r='1.5' />
                  <line className={iconClasses} x1='7' x2='7' y1='16' y2='18' />
                  <line className={iconClasses} x1='12' x2='12' y1='6' y2='8' />
                  <circle className={iconClasses} cx='12' cy='9.5' r='1.5' />
                  <line
                    className={iconClasses}
                    x1='12'
                    x2='12'
                    y1='11'
                    y2='18'
                  />
                  <line
                    className={iconClasses}
                    x1='17'
                    x2='17'
                    y1='6'
                    y2='11'
                  />
                  <circle className={iconClasses} cx='17' cy='12.5' r='1.5' />
                  <line
                    className={iconClasses}
                    x1='17'
                    x2='17'
                    y1='14'
                    y2='18'
                  />
                </g>
              </g>
            </svg>
            ) in the top right corner of the page, choose your preferred theme
            and set the translation language.
          </TextNode>
          <TextNode noIndent className='mb-5'>
            With the Book Navigator ({' '}
            <svg
              className='group  inline  translate-y-[-0.15rem]  align-text-bottom'
              height='20'
              viewBox='0 0 63 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='20.3074'
                cy='20.3073'
                r='12.3594'
                transform='rotate(45 20.3074 20.3073)'
                className='stroke-orange'
                strokeWidth='3.6'
              />
              <rect
                x='29.8264'
                y='28.5571'
                width='22.873'
                height='3.6'
                rx='2'
                transform='rotate(45 29.8264 28.5571)'
                className='fill-orange'
              />
            </svg>
            ) in the top right corner of the page, explore the book’s structure
            and find the pages you need; on desktop, click&nbsp;outside or press
            Escape to hide the navigator.
          </TextNode>
          <TextNode className='mb-4' noIndent>
            Highlight any text fragment to see the context-aware AI translation;
            click&nbsp;outside or press Escape to hide the translation block:
          </TextNode>
          <video
            className='w-[365px]  max-w-full  rounded-[14px]  border
                     border-gray-light  dark:hidden'
            width='736'
            height='398'
            autoPlay
            muted
            playsInline
            loop
            preload='none'
          >
            <source
              src='https://9lqg3ssfq5ex47ks.public.blob.vercel-storage.com/translation-feature-light-5kZAiqZdEizozLEXaSmu6vxK19Omhs.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
          <video
            className='hidden  w-[365px]  max-w-full  rounded-[14px]  border
                     border-gray-dark  dark:block'
            width='736'
            height='398'
            autoPlay
            muted
            playsInline
            loop
            preload='none'
          >
            <source
              src='https://9lqg3ssfq5ex47ks.public.blob.vercel-storage.com/translation-feature-dark-dN8P9F4XITNbXThTyW7gcmbTGLFV0k.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <H2 className='mb-10  mt-20  max-w-[50rem]  max-sm:mb-7  max-sm:mt-[4.6rem]'>
          This book is the key to your global success!
        </H2>
        <div className='mb-5  max-w-[40rem]'>
          <TextNode noIndent className='mb-5'>
            Full details about this book:
            <br />
            <ExternalLink
              defaultTextLink
              href='https://nikmas.studio/book-master-english-with-sherlock-holmes'
            >
              https://nikmas.studio/book-master-english-with-sherlock-holmes
            </ExternalLink>
          </TextNode>
          <TextNode noIndent className='mb-5'>
            Proficiency in English gives you access to the highest-paying jobs —
            because it allows you to operate in global markets, where salaries
            are significantly higher. Proficiency in English is often a
            requirement for leadership roles. Proficiency in English lets you
            travel the world comfortably and confidently, because you can speak
            fluently with anyone you meet. Proficiency in English opens the door
            for you to cutting-edge knowledge, most of which is first published
            in English — and the more of this modern knowledge you have, the
            more valuable you become — and the more you earn. Proficiency in
            English is the key to your global success!
          </TextNode>
          <TextNode noIndent className='mb-5'>
            <span className='underline'>
              Reading is the most effective way for mastering a language,
            </span>{' '}
            because when you read, you encounter more words per minute than with
            any other method. And if what you're reading is also a fascinating,
            gripping story, words are remembered far more effectively — because
            they become tied to vivid moments that stay in your active memory
            for a long time.
          </TextNode>
          <TextNode noIndent className='!mb-0'>
            However, reading foreign literature comes with its own problems:
          </TextNode>
          <TextOl className='mb-5'>
            <TextLi>
              <span className='italic'>
                The frustration from constant switching between a book and an
                external translator.
              </span>{' '}
              Constantly switching back and forth between a book and an external
              translator is the most inconvenient part of reading literature in
              a foreign language. You’ll quickly get tired of this constant
              context switching and, in all likelihood, give up reading
              altogether.
            </TextLi>
            <TextLi>
              <span className='italic'>
                An external translator lacks context.
              </span>{' '}
              When you manually translate a word or phrase using an external
              translator, it has no idea of the surrounding context — which
              often results in inaccurate translations.
            </TextLi>
          </TextOl>
          <TextNode noIndent className='mb-5'>
            <span className='italic'>We solved these problems.</span> Our book
            includes a built-in, highest-quality AI translator that activates
            instantly when you highlight any fragment — whether it’s a word, a
            phrase, or even a full sentence. And because it takes the
            surrounding context into account, the translation is as accurate as
            possible. Now you can enjoy the smoothest reading and learning flow
            — and advance toward your global success at full speed!
          </TextNode>
          <TextNode noIndent className='mb-5'>
            What we offer to read is the complete collection of Sherlock Holmes
            stories. These stories are not only some of the world’s most
            thrilling detective tales, but also a treasure trove of rich
            everyday vocabulary. If you want to truly strengthen your knowledge
            of any language, you should read Sherlock Holmes translated into
            that language. The goal of this interactive edition is to help you
            powerfully boost your English skills, which is why the book is
            presented in its original version — in English.
          </TextNode>
          <TextNode noIndent className='mb-5  italic  underline'>
            Sherlock Holmes stories + built-in, context-aware AI translation =
            English&nbsp;proficiency in record time =
            Your&nbsp;Global&nbsp;Success. Remember&nbsp;this&nbsp;formula!
          </TextNode>
          <TextNode noIndent className='mb-3'>
            Even when you have no time. Read the book just 10 minutes a day —
            and advance toward your global success with joy and ease:
          </TextNode>
          <SubscriptionButton />
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default InstructionsPage;
