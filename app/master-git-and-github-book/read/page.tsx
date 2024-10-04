import PageSplitter from '@/components/elements/PageSplitter';
import MasterGitAndGithubBookReadLayout from '@/components/layouts/MasterGitAndGithubBookReadLayout';
import CoverPage from '@/components/modules/git-and-github-book/pages/CoverPage';
import Page1 from '@/components/modules/git-and-github-book/pages/Page1';
import Page2 from '@/components/modules/git-and-github-book/pages/Page2';
import { ReactElement } from 'react';

function MasterGitAndGithubBookRead(): ReactElement {
  return (
    <MasterGitAndGithubBookReadLayout>
      <body className='dark:bg-[#00040a]'>
        <CoverPage />
        <Page1 />
        <PageSplitter />
        <Page2 />
      </body>
    </MasterGitAndGithubBookReadLayout>
  );
}

export default MasterGitAndGithubBookRead;
