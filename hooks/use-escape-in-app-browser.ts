import Bowser from 'bowser';
import InAppSpy from 'inapp-spy';
import { useEffect } from 'react';

export function useEscapeInAppBrowser(): void {
  useEffect(() => {
    const currentUrl = window.location.href; // Get the current URL
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

    const div = document.createElement('div');
    div.className = 'fixed  size-full  inset-0  bg-white  dark:bg-black';
    div.innerHTML = `
      <div class='mt-[40px]  ml-[20px]'>
        <p class='text-black  dark:text-white'>Tap the link to open in your default browser:</p>
        <a class='text-black  dark:text-white' href="${link}" target="_blank">Open</a>
      </div>
    `;
    document.body.appendChild(div);
  }, []);
}
