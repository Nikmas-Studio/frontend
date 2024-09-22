import { useEffect } from 'react';

function useTheme(): void {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // apply a visibility class to the body to ensure there's no FOUC
    document.body.classList.add('body-visible');

    return () => {
      // clean up by removing the class if the component unmounts
      document.body.classList.remove('body-visible');
    };
  }, []);
}

export default useTheme;
