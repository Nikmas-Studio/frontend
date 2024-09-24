import { ReactElement } from 'react';
import ExternalLink from '../elements/ExternalLink';
import MainContainer from '../elements/MainContainer';

function ContestSection(): ReactElement {
  return (
    <section className='mt-32  lg:mt-36'>
      <MainContainer className='flex  flex-col  items-center  px-[6.3rem]'>
        <div>
          <p className='text-2xl  !leading-snug  sm:text-3xl'>
            Get <br />
            free <br />
            lifetime <br />
            access <br />
            to&nbsp;all <br />
            current <br />
            and&nbsp;future <br />
            interactive <br />
            web-books <br />
            from <br />
            Nikmas&nbsp;Studio
          </p>
          <p className='mt-5  text-2xl  !leading-snug  sm:text-3xl'>
            <ExternalLink href='https://www.instagram.com' defaultTextLink>
              by&nbsp;participating <br />
              in&nbsp;a&nbsp;contest
            </ExternalLink>
          </p>
        </div>
      </MainContainer>
    </section>
  );
}

export default ContestSection;
