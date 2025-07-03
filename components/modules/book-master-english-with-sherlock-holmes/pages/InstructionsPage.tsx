import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import H2 from '@/components/elements/book-master-english-with-sherlock-holmes/H2';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
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
      </BookMainContainer>
    </PageWrapper>
  );
}

export default InstructionsPage;
