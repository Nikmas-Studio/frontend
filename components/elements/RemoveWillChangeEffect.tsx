'use client';

import { RefObject, useEffect } from 'react';

function RemoveWillChangeEffect({
  buddhaImageRef,
}: {
  buddhaImageRef: RefObject<SVGSVGElement>;
}): null {
  useEffect(() => {
    buddhaImageRef.current?.classList.remove('will-change-transform');
  }, [buddhaImageRef]);

  return null;
}

export default RemoveWillChangeEffect;
