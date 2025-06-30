import { RESIZE_THRESHOLD } from '@/constants/general';
import { useEffect, useState } from 'react';

function useGsapResizeUpdate(): { gsapShouldUpdate: boolean } {
  const [gsapShouldUpdate, setGsapShouldUpdate] = useState(false);

  useEffect(() => {
    let initialHeight = window.innerHeight;
    let initialWidth = window.innerWidth;
    const initialDPR = window.devicePixelRatio;

    function handleResize(): void {
      const currentHeight = window.innerHeight;
      const currentWidth = window.innerWidth;
      const currentDPR = window.devicePixelRatio;

      const dprChanged = currentDPR !== initialDPR;

      if (dprChanged) {
        // Probably zoom — skip updating minHeight
        return;
      }

      const heightChanged =
        Math.abs(currentHeight - initialHeight) > RESIZE_THRESHOLD;
      const widthChanged =
        Math.abs(currentWidth - initialWidth) > RESIZE_THRESHOLD;

      if (heightChanged || widthChanged) {
        setGsapShouldUpdate((prev) => !prev);
        initialHeight = currentHeight;
        initialWidth = currentWidth;
      }
    }

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { gsapShouldUpdate };
}

export default useGsapResizeUpdate;
