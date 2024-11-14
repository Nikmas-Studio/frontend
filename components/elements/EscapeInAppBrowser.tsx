'use client';

import { useEscapeInAppBrowser } from '@/hooks/use-escape-in-app-browser';
import { ReactElement, useState } from 'react';
import MainContainer from './MainContainer';
import TextNode from './TextNode';

function EscapeInAppBrowser(): ReactElement | null {
  const [returnEscapeComponent, setReturnEscapeComponent] = useState<
    string | null
  >(null);

  useEscapeInAppBrowser({ setReturnEscapeComponent });

  if (returnEscapeComponent === null) return null;

  return (
    <div className='fixed  inset-0  z-[9999999]  size-full  bg-white  dark:bg-black'>
      <MainContainer className='mt-10'>
        <TextNode>
          This website requires a modern browser like Chrome, Safari, or Firefox
          to function properly.
        </TextNode>
      </MainContainer>
    </div>
  );
}

export default EscapeInAppBrowser;
