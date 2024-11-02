'use client';

import {
  INTERACTIVITY_DEMO_VIDEO_DARK_SRC,
  INTERACTIVITY_DEMO_VIDEO_LIGHT_SRC,
} from '@/constants/master-git-and-github-book';
import { useTheme } from '@/context/theme/Context';
import { Theme } from '@/types/theme';
import { getSelectedThemeByDocumentClass } from '@/utils/check-selected-theme';
import classNames from 'classnames';
import { ReactElement, useRef } from 'react';

interface InteractivityDemoVideoProps {
  className?: string;
}

function InteractivityDemoVideo({
  className,
}: InteractivityDemoVideoProps): ReactElement {
  const { selectedTheme, isManualThemeChange } = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const classes = classNames('pointer-events-none', className);

  let videoSrc;

  if (isManualThemeChange) {
    videoSrc =
      selectedTheme === Theme.LIGHT
        ? INTERACTIVITY_DEMO_VIDEO_LIGHT_SRC
        : INTERACTIVITY_DEMO_VIDEO_DARK_SRC;
  } else {
    const initialTheme = getSelectedThemeByDocumentClass();

    if (initialTheme === Theme.DARK) {
      videoSrc = INTERACTIVITY_DEMO_VIDEO_DARK_SRC;
    } else {
      videoSrc = INTERACTIVITY_DEMO_VIDEO_LIGHT_SRC;
    }
  }

  return (
    <video
      ref={videoRef}
      className={classes}
      key={videoSrc}
      autoPlay
      muted
      playsInline
      loop
      width={2992}
      height={1624}
    >
      <source src={videoSrc} type='video/mp4' />
    </video>
  );
}

export default InteractivityDemoVideo;
