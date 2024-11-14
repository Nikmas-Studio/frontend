'use client';

import { useEscapeInAppBrowser } from '@/hooks/use-escape-in-app-browser';
import { ReactElement, useState } from 'react';
import ExternalLink from './ExternalLink';
import MainContainer from './MainContainer';
import TextNode from './TextNode';

function EscapeInAppBrowser(): ReactElement | null {
  const [returnEscapeComponentURL, setReturnEscapeComponent] = useState<
    string | null
  >(null);

  useEscapeInAppBrowser({
    setReturnEscapeComponentURL: setReturnEscapeComponent,
  });

  if (returnEscapeComponentURL === null) return null;

  return (
    <div className='fixed  inset-0  z-[9999999]  size-full  bg-white  dark:bg-black'>
      <MainContainer className='mt-10'>
        <TextNode>
          This website requires a modern browser like Chrome, Safari, or Firefox
          to function properly.
        </TextNode>
        <TextNode>Open this link in a modern browser:</TextNode>
        <ExternalLink defaultTextLink href={returnEscapeComponentURL}>
          {returnEscapeComponentURL}
        </ExternalLink>
      </MainContainer>
    </div>
  );
}

export default EscapeInAppBrowser;
