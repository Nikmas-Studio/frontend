import HBA from '@/components/modules/HBA';
import Intro from '@/components/modules/Intro';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <>
      <Intro />
      <HBA />
      <div className='h-[1000px]'></div>
    </>
  );
}
