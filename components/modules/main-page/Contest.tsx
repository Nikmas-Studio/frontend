import ExternalLink from '@/components/elements/ExternalLink';
import MainContainer from '@/components/elements/MainContainer';
import { ReactElement } from 'react';

function Contest(): ReactElement {
  return (
    <section className='mt-28  lg:mb-48  lg:mt-40'>
      <MainContainer className='flex  flex-col  items-center  px-[6.3rem]'>
        <div>
          <p className='text-3xl  !leading-snug  lg:text-[2.2rem]  dark:text-white'>
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
          <p className='mt-5  text-3xl  !leading-snug  lg:text-[2.2rem]  dark:text-white'>
            <ExternalLink
              href='https://www.instagram.com/p/DDmKQ1pIaoF/?igsh=eXBqc2IzbWRnZWhh'
              defaultTextLink
            >
              by&nbsp;participating <br />
              in&nbsp;a&nbsp;contest <br />
            </ExternalLink>
          </p>
        </div>
      </MainContainer>
    </section>
  );
}

export default Contest;
