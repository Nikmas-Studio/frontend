import BookSection from '@/components/modules/BookSection';
import ContestSection from '@/components/modules/ContestSection';
import HBASection from '@/components/modules/HBASection';
import IntroSection from '@/components/modules/IntroSection';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <main>
      <IntroSection />
      <HBASection />
      <BookSection />
      <ContestSection />
    </main>
  );
}
