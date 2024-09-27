'use client';

import { BookSectionStateProvider } from '@/context/book-section/Context';
import { ThemeProvider } from '@/context/theme/Context';
import { TouchDeviceProvider } from '@/context/touch-device/Context';
import { ReactElement, ReactNode } from 'react';

function Providers({ children }: { children: ReactNode }): ReactElement {
  return (
    <TouchDeviceProvider>
      <ThemeProvider>
        <BookSectionStateProvider>{children}</BookSectionStateProvider>
      </ThemeProvider>
    </TouchDeviceProvider>
  );
}

export default Providers;
