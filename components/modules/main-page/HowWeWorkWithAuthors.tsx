import BasicTextNode from '@/components/elements/BasicTextNode';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { ReactElement } from 'react';

function HowWeWorkWithAuthors(): ReactElement {
  return (
    <section className='mt-24  lg:mb-48  lg:mt-36'>
      <MainContainer className='flex  flex-col  items-center'>
        <div className='max-w-[35rem]'>
          <h2
            className='mb-8  text-[2.1rem]  font-bold  leading-tight  
                       text-black  sm:text-[2.7rem]  dark:text-white'
          >
            How we work with&nbsp;authors
          </h2>
          <TextNode className='!mb-2'>
            Authors approach the&nbsp;studio with&nbsp;manuscripts
            or&nbsp;previously published books and&nbsp;submit requests
            to&nbsp;create interactive e&#8209;books.
          </TextNode>
          <div className='mb-7'>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
          </div>
          <TextNode className='!mb-2'>
            The&nbsp;studio carefully reviews and&nbsp;selects these submissions
            based on&nbsp;criteria such as&nbsp;quality, usefulness,
            originality, relevance, and&nbsp;demand.
          </TextNode>
          <div className='mb-7'>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
          </div>
          <TextNode className='!mb-2'>
            Authors whose works are&nbsp;accepted receive comprehensive support
            from&nbsp;the&nbsp;studio: a&nbsp;team of&nbsp;producers, directors,
            editors, designers, illustrators, and&nbsp;developers collaborates
            with&nbsp;the&nbsp;author to&nbsp;create an&nbsp;interactive
            e&#8209;book, which&nbsp;is&nbsp;then published
            on&nbsp;the&nbsp;studio&apos;s website. The&nbsp;marketing
            department handles the&nbsp;promotion of&nbsp;the&nbsp;book.
          </TextNode>
          <div className='mb-7'>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
          </div>
          <TextNode className='!mb-2'>
            The&nbsp;studio earns <strong className='font-black'>70%</strong>{' '}
            of&nbsp;the book&apos;s sales, while&nbsp;the&nbsp;other{' '}
            <strong className='font-black'>30%</strong> goes
            to&nbsp;the&nbsp;author.
          </TextNode>
          <div className='mb-7'>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
            <BasicTextNode className='text-4xl  leading-[0.5]'>.</BasicTextNode>
          </div>
          <TextNode className='!mb-0'>
            It&apos;s worth noting that for&nbsp;printed books, authors
            typically earn an&nbsp;average of&nbsp;
            <strong className='font-black'>5—10%</strong>{' '}
            of&nbsp;the&nbsp;book&apos;s price, with&nbsp;the&nbsp;remainder
            distributed among&nbsp;the&nbsp;retailer, publisher,
            and&nbsp;printer. In&nbsp;contrast, with&nbsp;our&nbsp;online
            publishing model, as we need neither&nbsp;the&nbsp;retailer
            nor&nbsp;the&nbsp;printer, authors can earn{' '}
            <strong className='font-black'>
              3&#8288;—&#8288;6&nbsp;times&nbsp;more.
            </strong>
          </TextNode>
        </div>
      </MainContainer>
    </section>
  );
}

export default HowWeWorkWithAuthors;
