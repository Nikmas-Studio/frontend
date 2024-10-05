'use client';

import { ThemeProvider } from '@/context/theme/Context';
import { TouchDeviceProvider } from '@/context/touch-device/Context';
import { ReactElement, ReactNode } from 'react';

function ProvidersDefault({ children }: { children: ReactNode }): ReactElement {
  return (
    <TouchDeviceProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </TouchDeviceProvider>
  );
}

export default ProvidersDefault;
