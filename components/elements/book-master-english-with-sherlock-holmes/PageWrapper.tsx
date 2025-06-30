'use client';

import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { RESIZE_THRESHOLD } from '@/constants/general';
import { useBookVersion } from '@/context/book-version/Context';
import { useTouchDevice } from '@/context/touch-device/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface PageProps {
  pageNumber: number;
  viewportHeight?: boolean;
  children: ReactNode;
}

function PageWrapper({
  pageNumber,
  viewportHeight = false,
  children,
}: PageProps): ReactElement {
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const [shouldRenderChildren, setShouldRenderChildren] = useState(false);
  const [forceRemountForResize, setForceRemountForResize] = useState(false);
  const { isTouchDevice } = useTouchDevice();

  const { ref: inViewRef, inView } = useInView({
    rootMargin: '300px',
    triggerOnce: false,
  });

  const combinedRef = (node: HTMLDivElement | null): void => {
    sectionRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (sectionRef.current !== null && measuredHeight == null) {
      const height = sectionRef.current.offsetHeight;
      setMeasuredHeight(height);
    }
  }, [children, measuredHeight]);

  useEffect(() => {
    if (measuredHeight !== null) {
      setShouldRenderChildren(inView);
    }
  }, [inView, measuredHeight]);

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
        initialHeight = currentHeight;
        initialWidth = currentWidth;
        initialOuterWidth = currentOuterWidth;

        setForceRemountForResize(true);

        requestAnimationFrame(() => {
          if (sectionRef.current) {
            setMeasuredHeight(sectionRef.current.offsetHeight);
          }

          setForceRemountForResize(false);
        });
      }
    }

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: pageNumber,
    basePath,
  });

  const showChildren =
    measuredHeight == null ||
    shouldRenderChildren ||
    forceRemountForResize ||
    !isTouchDevice;

  return (
    <Page
      id={`page-${pageNumber}`}
      viewportHeight={viewportHeight}
      className='mb-5'
      ref={combinedRef}
    >
      {showChildren ? children : <div style={{ height: measuredHeight }} />}
    </Page>
  );
}

export default PageWrapper;
