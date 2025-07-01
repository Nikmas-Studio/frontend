import classNames from 'classnames';
import {
  CSSProperties,
  forwardRef,
  ReactElement,
  ReactNode,
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [minHeight, setMinHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   let initialHeight = window.innerHeight;
  //   let initialWidth = window.innerWidth;
  //   let initialOuterWidth = window.outerWidth;

  //   function handleResize(): void {
  //     const currentHeight = window.innerHeight;
  //     const currentWidth = window.innerWidth;
  //     const currentOuterWidth = window.outerWidth;

  //     const initialZoomRatio = initialOuterWidth / initialWidth;
  //     const currentZoomRatio = currentOuterWidth / currentWidth;
  //     const zoomChanged = Math.abs(initialZoomRatio - currentZoomRatio) > 0.05;

  //     if (zoomChanged) {
  //       return;
  //     }

  //     const heightChanged =
  //       Math.abs(currentHeight - initialHeight) > RESIZE_THRESHOLD;
  //     const widthChanged =
  //       Math.abs(currentWidth - initialWidth) > RESIZE_THRESHOLD;

  //     if (heightChanged || widthChanged) {
  //       initialHeight = currentHeight;
  //       initialWidth = currentWidth;
  //       initialOuterWidth = currentOuterWidth;
  //       setMinHeight(window.innerHeight);
  //     }
  //   }

  //   window.addEventListener('resize', handleResize);

  //   return (): void => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

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
