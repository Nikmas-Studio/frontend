import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { benzin, libreBaskerville } from '@/fonts';
import buildYourDream from '@/public/images/build-your-dream.jpeg';
import Image from 'next/image';
import { ReactElement } from 'react';

function BuildYourDream(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer className='xl:flex  xl:gap-10'>
        <Image
          className='mb-9  rounded-[14px]  lg:rounded-[20px]  xl:w-[55%]'
          src={buildYourDream}
          alt='Build your dream'
        />
        <div className='xl:w-[45%]'>
          <h2
            className={`max-w-[55rem]  ${benzin.className}  mb-2  inline-block  text-[2.35rem]
                      !leading-tight  text-subscription  1.5xl:mt-5  1.5xl:text-[2.5rem]`}
          >
            <span className={``}>Build your dream!</span>
          </h2>
          <TextNode
            id='sherlock-promo-sumup'
            className={`max-w-[52rem]  ${libreBaskerville.className}  !text-[2rem]  font-bold  !leading-snug  1.5xl:!text-[2.1rem]`}
          >
            Read the&nbsp;book just&nbsp;10&nbsp;minutes a&nbsp;day&nbsp;—
            and&nbsp;advance toward&nbsp;your&nbsp;global success
            with&nbsp;joy&nbsp;and&nbsp;ease!
          </TextNode>
        </div>
      </MainContainer>
    </section>
  );
}

export default BuildYourDream;
