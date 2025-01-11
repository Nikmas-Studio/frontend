import BasicTextNode from '@/components/elements/BasicTextNode';
import H2 from '@/components/elements/H2';
import H3 from '@/components/elements/H3';
import MainContainer from '@/components/elements/MainContainer';
import SubscriptionButton from '@/components/elements/master-git-and-github-book/SubscriptionButton';
import TextLi from '@/components/elements/TextLi';
import TextNode from '@/components/elements/TextNode';
import TextUl from '@/components/elements/TextUl';
import { merriweather } from '@/fonts';
import { ReactElement } from 'react';

function Subscription(): ReactElement {
  return (
    <section className='mt-[5.7rem]  lg:mt-24'>
      <MainContainer
        className='rounded-[14px]  border  border-gray-light
                   px-5  pb-12  pt-8  lg:flex  lg:flex-col
                   lg:items-center  lg:rounded-[20px]  lg:px-14  lg:pb-24
                   lg:pt-10  xl:px-20  xl:pb-28  
                   xl:pt-14  dark:border-gray-dark'
      >
        <div>
          <div>
            <H2 className='mb-3'>Subscription</H2>
            <TextNode className='max-w-[530px]'>
              The&nbsp;book is in&nbsp;the&nbsp;early stages,
              and&nbsp;this&nbsp;is the&nbsp;opportunity for&nbsp;you
              to&nbsp;both benefit from&nbsp;it and&nbsp;support
              the&nbsp;studio.
            </TextNode>
          </div>
          <div className='mt-9  lg:flex  lg:flex-row  lg:gap-12  xl:gap-14'>
            <div className='flex  flex-col'>
              <p
                className='translate-y-1.5  text-[1.1875rem]  font-bold
                                text-subscription'
              >
                Now
              </p>
              <H3 className='mb-6  font-medium'>During early access</H3>
              <ul>
                <li>
                  <TextNode className='max-w-72'>
                    <strong className='font-black'>
                      Read all the&nbsp;book sections
                    </strong>{' '}
                    as&nbsp;we gradually publish&nbsp;them
                  </TextNode>
                </li>
                <li>
                  <TextNode className='!text-2xl  font-light'>+</TextNode>
                </li>
                <li>
                  <TextNode className='max-w-80'>
                    <strong className='font-black'>
                      Lifetime subscription to&nbsp;the&nbsp;book
                    </strong>{' '}
                    with&nbsp;a&nbsp;one-time payment
                  </TextNode>
                </li>
                <li>
                  <TextNode className='!text-2xl  font-light'>+</TextNode>
                </li>
                <li>
                  <TextNode className='font-black'>Investor status:</TextNode>
                  <TextUl>
                    <TextLi className='max-w-72'>
                      20% lifetime discount on&nbsp;all studio books
                      that&nbsp;will&nbsp;ever be&nbsp;published
                    </TextLi>
                    <TextLi>investor badge</TextLi>
                  </TextUl>
                </li>
                <li>
                  <TextNode className='!text-2xl  font-light'>+</TextNode>
                </li>
                <li>
                  <TextNode className='!mb-0  max-w-[25.4rem]'>
                    By&nbsp;purchasing the&nbsp;early access, you directly help
                    speed&nbsp;up the&nbsp;release of&nbsp;new sections
                    of&nbsp;the&nbsp;book, useful&nbsp;and convenient features
                    for&nbsp;reading and&nbsp;better assimilation
                    of&nbsp;the&nbsp;material, and&nbsp;also support
                    the&nbsp;development of&nbsp;other&nbsp;books
                  </TextNode>
                </li>
              </ul>
              <BasicTextNode
                className='mt-11  text-center  text-4xl  
                               font-medium'
              >
                $23
              </BasicTextNode>
              <SubscriptionButton className='mt-12  self-center  lg:mt-14' />
            </div>
            <div
              className='mt-20  h-px  bg-gray-light  lg:mb-20
                               lg:mt-0  lg:h-auto  lg:w-px
                               dark:bg-gray-dark'
            />
            <div className='mt-7  lg:flex  lg:flex-col  lg:justify-between'>
              <div>
                <H3 className='mb-6  font-medium'>After release</H3>
                <TextNode className='!mb-0  font-black'>
                  Read all the&nbsp;book sections
                </TextNode>
                <div className='mb-5  mt-9'>
                  <BasicTextNode className='text-4xl  font-medium'>
                    $23<span className='text-xl  font-black'>/</span>
                    <span className={`text-lg  ${merriweather.className}`}>
                      year
                    </span>
                  </BasicTextNode>
                </div>
              </div>
              <div className='mt-16  max-w-[32.5rem]  lg:mb-[7.6rem]'>
                <H3 className='mb-6  font-medium'>Why subscription</H3>
                <TextNode>
                  Unlike a&nbsp;paper book, a&nbsp;web book must always be
                  online and&nbsp;requires ongoing maintenance. The&nbsp;more
                  people read a&nbsp;web book, the&nbsp;more server resources
                  are&nbsp;needed. That&apos;s&nbsp;why our&nbsp;books
                  are&nbsp;available through&nbsp;a&nbsp;subscription.
                </TextNode>
                <TextNode>
                  The&nbsp;subscription not&nbsp;only covers server
                  and&nbsp;maintenance costs, but&nbsp;also supports
                  the&nbsp;creation of&nbsp;new books. It&nbsp;allows us
                  to&nbsp;make our&nbsp;books the&nbsp;way we envision them,
                  rather than settling for&nbsp;less to&nbsp;save
                  on&nbsp;production.
                </TextNode>
                <TextNode className='!mb-0'>
                  However, during the&nbsp;early access period of&nbsp;our first
                  book, we&apos;re making an&nbsp;exception: we&apos;re offering
                  a&nbsp;lifetime subscription to&nbsp;the book with
                  a&nbsp;one-time payment to&nbsp;our&nbsp;first readers
                  whom&nbsp;we&nbsp;consider our&nbsp;investors.
                  Their&nbsp;support gives us the&nbsp;initial boost, and we
                  highly appreciate it, reciprocating in&nbsp;kind.
                </TextNode>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default Subscription;
