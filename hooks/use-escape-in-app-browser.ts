import { BASE_FRONTEND_URL } from '@/constants/general';
import Bowser from 'bowser';
import InAppSpy from 'inapp-spy';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect } from 'react';

export interface UseEscapeInAppBrowserHookProps {
  setReturnEscapeComponentURL: Dispatch<SetStateAction<string | null>>;
}

export function useEscapeInAppBrowser({
  setReturnEscapeComponentURL,
}: UseEscapeInAppBrowserHookProps): void {
  const path = usePathname();

  useEffect(() => {
    const currentUrl = `${BASE_FRONTEND_URL}${path === '/' ? '' : path}`;

    const { isInApp } = InAppSpy();

    if (!isInApp) return;

    const os = Bowser.getParser(window.navigator.userAgent).getOSName(true);

    let link;
    if (os === 'android') {
      link = `intent:${currentUrl}#Intent;end`;
    } else if (os === 'ios') {
      // link = `shortcuts://x-callback-url/run-shortcut?name=${crypto.randomUUID()}&x-error=${encodeURIComponent(currentUrl)}`;
      setReturnEscapeComponentURL(currentUrl);
      return;
    } else {
      return;
    }

    window.location.replace(link);

    setReturnEscapeComponentURL(currentUrl);
  }, [path, setReturnEscapeComponentURL]);
}
