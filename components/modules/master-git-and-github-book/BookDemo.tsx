import MasterGitAndGithubBookLayout from '@/components/layouts/MasterGitAndGithubBookLayout';
import { BookVersionProvider } from '@/context/book-version/Context';
import { SubscriptionModalProvider } from '@/context/subscription-modal/Context';
import { BookVersion } from '@/types/book-version';
import { ReactElement } from 'react';
import GlobalEffects from './GlobalEffects';
import CoverPage from './pages/CoverPage';
import EndPageDemo from './pages/EndPageDemo';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3Demo from './pages/Page3Demo';
import SubscriptionModal from './SubsctiptionModal';

interface BookDemoProps {
  initialPageId?: string;
}

function BookDemo({ initialPageId }: BookDemoProps): ReactElement {
  return (
    <MasterGitAndGithubBookLayout initialPageId={initialPageId}>
      <BookVersionProvider version={BookVersion.DEMO}>
        <SubscriptionModalProvider>
          <GlobalEffects initialPageId={initialPageId}>
            <CoverPage />
            <Page1 />
            <Page2 />
            <Page3Demo />
            <EndPageDemo />
            <SubscriptionModal
              formInputId='demo-subscription-modal-email'
              fixBody={false}
            />
          </GlobalEffects>
        </SubscriptionModalProvider>
      </BookVersionProvider>
    </MasterGitAndGithubBookLayout>
  );
}

export default BookDemo;
