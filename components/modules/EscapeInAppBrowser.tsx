'use client';

import { useEscapeInAppBrowser } from '@/hooks/use-escape-in-app-browser';
import { ReactElement, useState } from 'react';
import MainContainer from '../elements/MainContainer';
import TextNode from '../elements/TextNode';

function EscapeInAppBrowser(): ReactElement | null {
  const [returnEscapeComponentURL, setReturnEscapeComponent] = useState<
    string | null
  >(null);

  useEscapeInAppBrowser({
    setReturnEscapeComponentURL: setReturnEscapeComponent,
  });

  if (returnEscapeComponentURL === null) return null;

  if (returnEscapeComponentURL.startsWith('intent:')) {
    const initialUrlMatch =
      returnEscapeComponentURL.match(/intent:(.*?)#Intent/);
    const initialUrl = initialUrlMatch![1];
    return (
      <div className='fixed  inset-0  z-[9999999]  size-full  bg-white  dark:bg-black'>
        <MainContainer className='!mb-0  mt-10'>
          <TextNode>
            This&nbsp;website requires a&nbsp;modern, full&#8209;fledged browser
            like&nbsp;Chrome, Safari, or&nbsp;Firefox to&nbsp;function properly:
          </TextNode>
          <TextNode>
            <a href={returnEscapeComponentURL} className='default-link'>
              Open in&nbsp;a&nbsp;modern browser
            </a>
          </TextNode>
          <TextNode className='!mb-0'>
            You can also manually copy and&nbsp;open this&nbsp;link
            in&nbsp;a&nbsp;modern, full&#8209;fledged browser, or&nbsp;use
            your&nbsp;current browser&apos;s features to&nbsp;perform
            the&nbsp;switch:
          </TextNode>
          <TextNode className='!mb-0'>
            <a href={initialUrl} className='default-link'>
              {initialUrl}
            </a>
          </TextNode>
        </MainContainer>
      </div>
    );
  }

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
          browser&apos;s features to&nbsp;perform the&nbsp;switch:
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
