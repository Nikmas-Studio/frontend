import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import { ReactElement } from 'react';

function QuestionsAndAnswers(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2
          className={`mb-7  lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
        >
          Questions&nbsp;& answers
        </H2>
        <div className='mb-11  max-w-[45rem]'>
          <TextNode className='font-bold'>
            What’s the point of paying for this book if I can just copy text
            into Google Translate?
          </TextNode>
          <TextNode>
            Constantly switching back and forth between a book and an external
            translator is the most inconvenient part of reading literature in a
            foreign language. You’ll quickly get tired of this constant context
            switching and, in all likelihood, give up reading altogether. To
            solve this core problem, we’ve implemented a built-in translator
            that activates instantly when you highlight any piece of text — no
            need to click anything extra or switch to another app. Our
            translator also understands the context around the highlighted
            fragment, so the translation is as accurate as possible.
          </TextNode>
        </div>
        <div className='mb-11  max-w-[45rem]'>
          <TextNode className='font-bold'>
            Why is there a subscription?
          </TextNode>
          <TextNode>
            Unlike a paper book, a web book must always be online and requires
            ongoing maintenance. The more people read a web book, the more
            server resources are needed. That’s why our books are available
            through a subscription.
          </TextNode>
          <TextNode>
            The subscription not only covers server and maintenance costs, but
            also supports the creation of new books. It allows us to make our
            books the way we envision them, rather than settling for less to
            save on production.
          </TextNode>
        </div>
        <div className='mb-11  max-w-[45rem]'>
          <TextNode className='font-bold'>How to subscribe?</TextNode>
          <TextNode>
            Click the «Subscription» button in the bottom right corner of the
            current page. A panel will open at the bottom of the page.{' '}
            <span className='italic'>If&nbsp;you’re not logged in,</span> we’ll
            ask you to enter your email address, and we’ll send you a payment
            link. After successful payment, you’ll be able to access your
            account on nikmas.studio using the same email you provided, and the
            full version of the book will be available to you.{' '}
            <span className='italic'>If&nbsp;you’re already logged in,</span>{' '}
            simply click the «Proceed to payment» button in the panel that
            opens, and once the payment is successful, you’ll get full access to
            the book.
          </TextNode>
          <TextNode>
            While you’re subscribed to the book, your access will automatically
            renew every year when your previously paid period ends. If you want
            to stop the recurring payments, just cancel your subscription.
          </TextNode>
        </div>
        <div className='max-w-[45rem]'>
          <TextNode className='font-bold'>
            How to cancel the subscription?
          </TextNode>
          <TextNode>
            If you’re subscribed and logged in, you’ll see a check mark on the
            green button in the bottom right corner: «✓Subscription». Click the
            green button — a panel will open at the bottom of the page with a
            «Cancel subscription» button. After you cancel your subscription,
            once your previously paid annual period ends, the book will become
            unavailable. Whenever you wish, you can start your subscription
            again.
          </TextNode>
        </div>
      </MainContainer>
    </section>
  );
}

export default QuestionsAndAnswers;
