import BookDemo from '@/components/modules/master-git-and-github-book/BookDemo';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Master Git & Github: From Everyday Tasks to Deep Waters [Demo]',
  description:
    'A next-gen, highly illustrative, and interactive e-book to master Git and Github and make you a version control guru.',
};

function MasterGitAndGithubBookRead(): ReactElement {
  return <BookDemo />;
}

export default MasterGitAndGithubBookRead;
