'use client';

import { RefObject, useEffect } from 'react';

function RemoveWillChangeEffect({
  buddhaImageRef,
}: {
  buddhaImageRef: RefObject<HTMLElement>;
}): null {
  useEffect(() => {
    setTimeout(() => {
      buddhaImageRef.current?.classList.remove('will-change-transform');
    }, 100);
  }, [buddhaImageRef]);

  return null;
}

export default RemoveWillChangeEffect;
