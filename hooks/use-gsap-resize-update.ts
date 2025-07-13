import { RESIZE_THRESHOLD } from '@/constants/general';
import { useEffect, useState } from 'react';

function useGsapResizeUpdate(): { gsapShouldUpdate: boolean } {
  const [gsapShouldUpdate, setGsapShouldUpdate] = useState(false);

  useEffect(() => {
    let initialHeight = window.innerHeight;
    let initialWidth = window.innerWidth;
    let initialOuterWidth = window.outerWidth;

    function handleResize(): void {
      const currentHeight = window.innerHeight;
      const currentWidth = window.innerWidth;
      const currentOuterWidth = window.outerWidth;

      const initialZoomRatio = initialOuterWidth / initialWidth;
      const currentZoomRatio = currentOuterWidth / currentWidth;
      const zoomChanged = Math.abs(initialZoomRatio - currentZoomRatio) > 0.05;

      if (zoomChanged) {
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
        initialOuterWidth = currentOuterWidth;
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
