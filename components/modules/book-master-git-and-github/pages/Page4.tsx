'use client';

import ExternalLink from '@/components/elements/ExternalLink';
import BookMainContainer from '@/components/elements/book-master-git-and-github/BookMainContainer';
import H3 from '@/components/elements/book-master-git-and-github/H3';
import H4 from '@/components/elements/book-master-git-and-github/H4';
import Page from '@/components/elements/book-master-git-and-github/Page';
import TextNode from '@/components/elements/book-master-git-and-github/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/master-git-and-github-book';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import classNames from 'classnames';
import { ReactElement, useRef } from 'react';
import Controls from '../Controls';

function Page4(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 4,
    basePath,
  });

  const pageClasses = classNames('bg-white  dark:bg-git-black  my-5');

  return (
    <Page id='page-4' ref={sectionRef} className={pageClasses}>
      <Controls pageNumber={4} />
      <BookMainContainer>
        <H3>Who Uses Git</H3>
        <TextNode className='max-w-[45%]  max-2xl:max-w-[33rem]'>
          Git is used by&nbsp;millions of&nbsp;people across&nbsp;various
          industries and&nbsp;professions. Below are some
          of&nbsp;the&nbsp;primary groups who rely on&nbsp;Git:
        </TextNode>
        <div
          className='mt-11  grid  max-w-[90%]  grid-cols-2  gap-5  max-2xl:max-w-[68.5rem]
                     max-sm:max-w-[35.5rem]  max-sm:grid-cols-1'
        >
          <div>
            <H4>Software Developers</H4>
            <TextNode>
              From&nbsp;tech giants like&nbsp;Google and&nbsp;Facebook
              to&nbsp;yesterday&#8209;born startups and&nbsp;hobby projects,
              developers across&nbsp;the&nbsp;globe use Git. If&nbsp;you’re
              a&nbsp;developer or&nbsp;plan to&nbsp;become one, Git
              is&nbsp;an&nbsp;absolute must for&nbsp;version control
              and&nbsp;team collaboration.
            </TextNode>
            <TextNode className='!text-sm'>
              <ExternalLink defaultTextLink href='https://stackshare.io/git'>
                According to&nbsp;stackshare.io
              </ExternalLink>
              , as&nbsp;of&nbsp;November 2024, 9232 companies reportedly use Git
              in&nbsp;their&nbsp;tech&nbsp;stacks
            </TextNode>
          </div>
          <div className='max-sm:hidden'></div>
          <div className='max-sm:hidden'></div>
          <div>
            <H4>Tech-Adjacent Roles</H4>
            <TextNode>
              In&nbsp;tech projects, designers, product managers, technical
              writers, and&nbsp;other team members need to&nbsp;contribute files
              or&nbsp;documentation. Git acts as&nbsp;a&nbsp;single source
              of&nbsp;truth, allowing everyone to&nbsp;access and&nbsp;update
              project resources in&nbsp;an&nbsp;organized way.
            </TextNode>
          </div>
          <div>
            <H4>Governments</H4>
            <TextNode>
              Governments have&nbsp;begun adopting Git to&nbsp;manage
              and&nbsp;publish laws and&nbsp;legal documents.
              In&nbsp;the&nbsp;case of&nbsp;the&nbsp;Washington, D.C. City
              Council, citizens have&nbsp;even found and&nbsp;fixed typos
              collaboratively in&nbsp;the&nbsp;legal text using&nbsp;Git!
            </TextNode>
            <TextNode className='!text-sm'>
              <ExternalLink
                defaultTextLink
                href='https://government.github.com/community'
              >
                Government organizations that use Git
              </ExternalLink>
            </TextNode>
          </div>
          <div className='max-sm:hidden'></div>
          <div className='max-sm:hidden'></div>
          <div>
            <H4>Scientists</H4>
            <TextNode>
              Many scientific projects involve coding,
              whether&nbsp;for&nbsp;simulations, data analysis,
              or&nbsp;experimental automation. Git allows researchers
              to&nbsp;version control their&nbsp;scripts, programs,
              and&nbsp;datasets while&nbsp;collaborating seamlessly.
            </TextNode>
            <TextNode>
              Additionally, research groups frequently use GitHub
              to&nbsp;facilitate open peer reviews, allowing reviewers
              to&nbsp;comment directly on&nbsp;specific parts
              of&nbsp;the&nbsp;code or&nbsp;documentation, fostering transparent
              and&nbsp;constructive feedback.
            </TextNode>
          </div>
          <div>
            <H4>Writers</H4>
            <TextNode>
              Some writers love using Git to&nbsp;manage drafts of&nbsp;complex
              novels, screenplays, or&nbsp;other works with&nbsp;numerous moving
              parts and&nbsp;frequent changes across&nbsp;multiple files.
            </TextNode>
            <TextNode>
              In&nbsp;particular, Git is&nbsp;gaining traction
              in&nbsp;collaborative textbook writing with&nbsp;multiple authors.
              For&nbsp;instance, well&nbsp;known{' '}
              <ExternalLink
                defaultTextLink
                href='https://git-scm.com/book/en/v2'
              >
                Pro Git book{' '}
              </ExternalLink>
              is&nbsp;maintained as&nbsp;an&nbsp;open-source project
              on&nbsp;GitHub, where&nbsp;multiple contributors, including
              its&nbsp;primary authors and&nbsp;the&nbsp;community, work
              together to&nbsp;refine and&nbsp;expand the&nbsp;book’s content.
            </TextNode>
          </div>
          <div className='max-sm:hidden'></div>
          <div className='max-sm:hidden'></div>
          <div>
            <H4>Anyone else</H4>
            <TextNode>
              There&nbsp;are&nbsp;people who&nbsp;use Git for&nbsp;tracking
              personal budgeting and&nbsp;family tree research, drafting PhD
              theses, maintaining a&nbsp;daily diary, planning weddings,
              versioning home automation configurations, monitoring gardening
              logs, and&nbsp;even composing symphonies.
            </TextNode>
          </div>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page4;
