import { RESIZE_THRESHOLD } from '@/constants/general';
import classNames from 'classnames';
import {
  CSSProperties,
  forwardRef,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

interface PageProps {
  id: string;
  className?: string;
  children: ReactNode;
  viewportHeight?: boolean;
}

const Page = forwardRef<HTMLElement, PageProps>(function Page(
  { id, className, children, viewportHeight = false }: PageProps,
  ref,
): ReactElement {
  const [minHeight, setMinHeight] = useState(window.innerHeight);

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
        initialHeight = currentHeight;
        initialWidth = currentWidth;
        setMinHeight(window.innerHeight);
      }
    }

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const classes = classNames(
    'relative  z-30  w-screen  bg-white  dark:bg-black',
    className,
  );

  return (
    <section
      style={
        {
          minHeight: `${minHeight}px`,
          height: viewportHeight ? `${minHeight}px` : '',
        } as CSSProperties
      }
      id={id}
      ref={ref}
      className={classes}
    >
      {children}
    </section>
  );
});

export default Page;
