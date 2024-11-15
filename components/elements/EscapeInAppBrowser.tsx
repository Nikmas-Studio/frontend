'use client';

import { useEscapeInAppBrowser } from '@/hooks/use-escape-in-app-browser';
import { ReactElement, useState } from 'react';
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
          This&nbsp;website requires a&nbsp;modern, full&#8209;fledged browser
          like&nbsp;Chrome, Safari, or&nbsp;Firefox to&nbsp;function properly.
        </TextNode>
        <TextNode className='!mb-0'>
          Manually copy and&nbsp;open this&nbsp;link in&nbsp;a&nbsp;modern,
          full&#8209;fledged browser, or&nbsp;use your&nbsp;current
          browser&apos;s features to&nbsp;switch:
        </TextNode>
        <TextNode className='!mb-0'>
          <a href={returnEscapeComponentURL} className='default-link'>
            {returnEscapeComponentURL}
          </a>
        </TextNode>
      </MainContainer>
    </div>
  );
}

export default EscapeInAppBrowser;
