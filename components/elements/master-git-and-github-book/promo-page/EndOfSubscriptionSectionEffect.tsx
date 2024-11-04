'use client';

import { useButtonRef } from '@/context/button-ref/Context';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function EndOfSubscriptionSectionEffect(): ReactElement {
  const trackingDivRef = useRef<HTMLDivElement>(null);
  const subscriptionButtonRef = useButtonRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: trackingDivRef.current,
      start: 'top top',
      onEnter: () => {
        subscriptionButtonRef!.current?.classList.remove('translate-x-[200%]');
      },
      onEnterBack: () => {
        subscriptionButtonRef!.current?.classList.add('translate-x-[200%]');
      },
    });
  }, []);

  return <div ref={trackingDivRef}></div>;
}

export default EndOfSubscriptionSectionEffect;
