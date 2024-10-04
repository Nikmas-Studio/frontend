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
        <div className='relative  z-20  overflow-hidden'>
          <div className='fixed  inset-0  z-20  bg-parallax  bg-cover'></div>
          <Page1 />
          <Page2 />
        </div>
      </body>
    </MasterGitAndGithubBookReadLayout>
  );
}

export default MasterGitAndGithubBookRead;
