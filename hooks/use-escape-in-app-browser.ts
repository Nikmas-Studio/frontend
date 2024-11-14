import { BASE_FRONTEND_URL } from '@/constants/general';
import Bowser from 'bowser';
import InAppSpy from 'inapp-spy';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect } from 'react';

export interface UseEscapeInAppBrowserHookProps {
  setReturnEscapeComponent: Dispatch<SetStateAction<string | null>>;
}

export function useEscapeInAppBrowser({
  setReturnEscapeComponent,
}: UseEscapeInAppBrowserHookProps): void {
  const path = usePathname();

  useEffect(() => {
    const currentUrl = `${BASE_FRONTEND_URL}${path}`;

    const { isInApp } = InAppSpy();

    if (!isInApp) return;

    const os = Bowser.getParser(window.navigator.userAgent).getOSName(true);

    let link;
    if (os === 'android') {
      link = `intent:${BASE_FRONTEND_URL}#Intent;end`;
      console.log('redirect in-app browser link for android: ', link);
    } else if (os === 'ios') {
      link = `shortcuts://x-callback-url/run-shortcut?name=${crypto.randomUUID()}&x-error=${encodeURIComponent(currentUrl)}`;
      console.log('redirect in-app browser link for ios: ', link);
    } else {
      console.error('Unsupported OS or in-app browser.');
      return;
    }

    window.location.replace(link);

    setReturnEscapeComponent(link);
  }, [path, setReturnEscapeComponent]);
}
