import MasterGitAndGithubBookReadLayout from '@/components/layouts/MasterGitAndGithubBookReadLayout';
import CoverPage from '@/components/modules/master-git-and-github-book/pages/CoverPage';
import Page1 from '@/components/modules/master-git-and-github-book/pages/Page1';
import Page2 from '@/components/modules/master-git-and-github-book/pages/Page2';
import Page3 from '@/components/modules/master-git-and-github-book/pages/Page3';
import WrapUpPage from '@/components/modules/master-git-and-github-book/pages/WrapUpPage';
import { ReactElement } from 'react';

function MasterGitAndGithubBookRead(): ReactElement {
  return (
    <MasterGitAndGithubBookReadLayout>
      <CoverPage />
      <Page1 />
      <Page2 />
      <Page3 />
      <WrapUpPage />
    </MasterGitAndGithubBookReadLayout>
  );
}

export default MasterGitAndGithubBookRead;
