import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect } from 'react';
import Bowser from 'bowser';
import InAppSpy from 'inapp-spy';
const { isInApp } = InAppSpy();

export interface UseEscapeInAppBrowserHookProps {
  setReturnEscapeComponent: Dispatch<SetStateAction<string | null>>;
}

export function useEscapeInAppBrowser({
  setReturnEscapeComponent,
}: UseEscapeInAppBrowserHookProps): void {
  const path = usePathname();

  useEffect(() => {
    const currentUrl = path;

    const { isInApp } = InAppSpy();

    if (!isInApp) return;

    const os = Bowser.getParser(window.navigator.userAgent).getOSName(true);

    let link;
    if (os === 'android') {
      link = `intent:${currentUrl}#Intent;end`;
    } else if (os === 'ios') {
      link = `shortcuts://x-callback-url/run-shortcut?name=${crypto.randomUUID()}&x-error=${encodeURIComponent(currentUrl)}`;
    } else {
      console.error('Unsupported OS or in-app browser.');
      return;
    }

    window.location.replace(link);

    setReturnEscapeComponent(path);
  }, [path, setReturnEscapeComponent]);
}
