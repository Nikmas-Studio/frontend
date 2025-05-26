import TranslationTooltip from '@/components/elements/book-master-english-with-sherlock-holmes/TranslationTooltip';
import BookMasterEnglishWithSherlockHolmesLayout from '@/components/layouts/BookMasterEnglishWithSherlockHolmes';
import { BookVersionProvider } from '@/context/book-version/Context';
import { BookVersion } from '@/types/book-version';
import { ReactElement } from 'react';
import GlobalEffects from './GlobalEffects';
import Page1 from './pages/Page1';

interface BookReadProps {
  initialPageId?: string;
}

function BookRead({ initialPageId }: BookReadProps): ReactElement {
  return (
    <BookMasterEnglishWithSherlockHolmesLayout initialPageId={initialPageId}>
      <BookVersionProvider version={BookVersion.READ}>
        <GlobalEffects initialPageId={initialPageId}>
          <Page1 />
          <TranslationTooltip />
        </GlobalEffects>
      </BookVersionProvider>
    </BookMasterEnglishWithSherlockHolmesLayout>
  );
}

export default BookRead;
