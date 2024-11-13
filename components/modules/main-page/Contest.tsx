import MainContainer from '@/components/elements/MainContainer';
import { ReactElement } from 'react';

function Contest(): ReactElement {
  return (
    <section className='mt-[6.5rem]  lg:mt-36'>
      <MainContainer className='flex  flex-col  items-center  px-[6.3rem]'>
        <div>
          <p className='text-2xl  !leading-snug  sm:text-3xl  dark:text-white'>
            Get <br />
            free <br />
            lifetime <br />
            access <br />
            to&nbsp;all <br />
            current <br />
            and&nbsp;future <br />
            interactive <br />
            e-books <br />
            from <br />
            Nikmas&nbsp;Studio
          </p>
          <p className='mt-5  text-2xl  !leading-snug  sm:text-3xl  dark:text-white'>
            {/* <ExternalLink href='https://www.instagram.com' defaultTextLink> */}
            by&nbsp;participating <br />
            in&nbsp;a&nbsp;contest <br />
            (details very soon...)
            {/* </ExternalLink> */}
          </p>
        </div>
      </MainContainer>
    </section>
  );
}

export default Contest;
