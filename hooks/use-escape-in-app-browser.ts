import { BASE_FRONTEND_URL } from '@/constants/general';
import { EscapeComponentURLs } from '@/types/escape-component-urls';
import Bowser from 'bowser';
import InAppSpy from 'inapp-spy';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect } from 'react';

export interface UseEscapeInAppBrowserHookProps {
  setReturnEscapeComponentURL: Dispatch<
    SetStateAction<EscapeComponentURLs | null>
  >;
}

export function useEscapeInAppBrowser({
  setReturnEscapeComponentURL,
}: UseEscapeInAppBrowserHookProps): void {
  const path = usePathname();

  useEffect(() => {
    const originalURL = `${BASE_FRONTEND_URL}${path === '/' ? '' : path}`;

    const { isInApp } = InAppSpy();

    if (!isInApp) return;

    const os = Bowser.getParser(window.navigator.userAgent).getOSName(true);

    let escapeURL: string;
    if (os === 'android') {
      escapeURL = `intent:${originalURL}#Intent;scheme=https;end`;
    } else if (os === 'ios') {
      const osVersion = Bowser.getParser(
        window.navigator.userAgent,
      ).getOSVersion();

      if (osVersion) {
        const [majorVersion] = osVersion.split('.').map(Number);

        if (majorVersion >= 17) {
          escapeURL = `x-safari-${originalURL}`;
        } else {
          setReturnEscapeComponentURL({
            originalURL,
          });
          return;
        }
      } else {
        setReturnEscapeComponentURL({
          originalURL,
        });
        return;
      }
    } else {
      setReturnEscapeComponentURL({ originalURL });
      return;
    }

    window.location.replace(escapeURL);

    setReturnEscapeComponentURL({
      originalURL,
      escapeURL,
    });
  }, [path, setReturnEscapeComponentURL]);
}
