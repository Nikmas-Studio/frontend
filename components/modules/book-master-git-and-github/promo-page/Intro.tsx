import BasicTextNode from '@/components/elements/BasicTextNode';
import DemoOrReadButton from '@/components/elements/book-master-git-and-github/promo/DemoOrReadButton';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import authorPhoto from '@/public/images/Nick_Maslov.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';
import BookCover from './BookCover';

function Intro(): ReactElement {
  return (
    <section>
      <MainContainer>
        <h1
          className='mb-3  mt-5  text-4xl  font-bold  leading-tight  
                           lg:text-[2.7rem]  dark:text-white'
        >
          Master Git&nbsp;& GitHub: <br className='xl:hidden' />
          From&nbsp;Everyday Tasks to&nbsp;Deep Waters
        </h1>
        <h2 className='text-4xl  font-medium  lg:text-[2.7rem]  dark:text-white'>
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
          <div className='mt-12  max-w-[685px]  lg:mt-0  xl:pl-14  xl:pr-16'>
            <BasicTextNode
              className='mb-7  text-[1.375rem]  font-semibold
                           leading-snug'
            >
              This is a&nbsp;next&#8209;gen, highly illustrative,
              and&nbsp;interactive e&#8209;book to&nbsp;master
              Git&nbsp;and&nbsp;GitHub. We&apos;ll start
              from&nbsp;the&nbsp;essentials you need to&nbsp;know
              to&nbsp;complete everyday tasks seamlessly,
              and&nbsp;then&nbsp;dive deep into&nbsp;advanced topics
              and&nbsp;internal details to&nbsp;make you a&nbsp;version control
              guru.
            </BasicTextNode>
            <TextNode>
              Git and&nbsp;GitHub are&nbsp;the&nbsp;version control tools.
              They&apos;re the&nbsp;tools that&nbsp;every software developer
              should know. And&nbsp;they&apos;re the&nbsp;tools that&nbsp;every
              person who&nbsp;works with&nbsp;files can benefit from.
              And&nbsp;there&nbsp;are&nbsp;many resources to&nbsp;learn those
              things. But,&nbsp;the&nbsp;popular resources on&nbsp;Git
              and&nbsp;GitHub we know are&nbsp;either highly illustrative
              and&nbsp;interactive but&nbsp;quite superficial, deep enough
              but&nbsp;static and&nbsp;dull, or&nbsp;they are&nbsp;videos.
            </TextNode>
            <TextNode>
              What we&nbsp;offer is&nbsp;the&nbsp;e&#8209;book that&nbsp;is
              at&nbsp;the&nbsp;same time highly illustrative, interactive,
              and&nbsp;in-depth — guiding you step by&nbsp;step
              from&nbsp;a&nbsp;point where you know nothing about&nbsp;Git
              and&nbsp;GitHub to&nbsp;a&nbsp;master level in&nbsp;those tools.
              The&nbsp;book is&nbsp;crafted from&nbsp;the&nbsp;finest materials
              sourced from&nbsp;top resources and&nbsp;enriched
              with&nbsp;personal experience. Our goal is to&nbsp;make it
              a&nbsp;global bestseller and&nbsp;a&nbsp;timeless classic
              that&nbsp;every developer will&nbsp;be&nbsp;encouraged
              to&nbsp;read.
            </TextNode>
            <TextNode>
              And&nbsp;unlike video format, it&apos;ll&nbsp;be
              very&nbsp;convenient to&nbsp;use this&nbsp;book
              as&nbsp;a&nbsp;reference: you&apos;ll
              be&nbsp;able&nbsp;to&nbsp;find the&nbsp;necessary piece
              of&nbsp;information instantly with&nbsp;special search tools
              integrated into&nbsp;the&nbsp;book navigator.
            </TextNode>
            <TextNode>Enjoy the&nbsp;read!</TextNode>
          </div>
          <div className='mt-10  flex-none  lg:mt-0  lg:w-[235px]'>
            <Image
              src={authorPhoto}
              alt='Author: Nick Maslov'
              className='pointer-events-none  w-[275px]  select-none  rounded-[14px]
                         lg:w-[215px]'
              sizes='(max-width: 1023) 275px, 215px'
              quality={100}
              priority
            />
            <BasicTextNode
              className='mb-1  mt-5  w-[275px]  text-[1.28rem]
                             font-bold  lg:w-[225px]  lg:text-[1.2rem]'
            >
              Author:&nbsp;Nick&nbsp;Maslov
            </BasicTextNode>
            <TextNode className='w-[275px]  !text-base  lg:w-auto'>
              CEO, Enterprise&nbsp;Architect, and&nbsp;Chief&nbsp;Director
              at&nbsp;Nikmas&nbsp;Studio
            </TextNode>
            <BasicTextNode
              className='mt-11  text-6xl  font-medium  
                             leading-[1.1]  lg:mt-9  lg:text-4xl  
                             lg:leading-[1.1]'
            >
              We Are
              <br />
              The Future
              <br />
              of Edu
              <br />
              Books
            </BasicTextNode>
            <TextNode
              className='mt-7  max-w-[685px]  lg:mt-5  lg:max-w-48  
                                 lg:text-[1.0625rem]  lg:leading-normal'
            >
              Through our format of&nbsp;interactive e-books, we&nbsp;create
              the&nbsp;best conditions for&nbsp;deep understanding
              and&nbsp;thorough internalization of&nbsp;the&nbsp;material —
              solving&nbsp;the&nbsp;core challenges of&nbsp;education.
            </TextNode>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default Intro;
