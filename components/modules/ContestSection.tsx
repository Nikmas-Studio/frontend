import MainContainer from '../elements/MainContainer';

function ContestSection() {
  return (
    <section className='mt-36'>
      <MainContainer className='flex  flex-col  items-center  px-[6.3rem]'>
        <div>
          <p className='text-3xl  leading-snug'>
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
          <p className='text-3xl  leading-snug  mt-7'>
            <a
              href='https://www.instagram.com'
              className='border-b-gray-200  hover:border-b-black  transition-all  pb-[0.08rem]  border-b'
            >
              by&nbsp;participating <br />
              in&nbsp;a&nbsp;contest
            </a>
          </p>
        </div>
      </MainContainer>
    </section>
  );
}

export default ContestSection;
