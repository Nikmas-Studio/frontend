import facebookLogo from '@/public/images/facebook-logo.svg';
import instagramLogo from '@/public/images/instagram-logo.png';
import linkedinLogo from '@/public/images/linkedin-logo.png';
import telegramLogo from '@/public/images/telegram-logo.png';
import Image from 'next/image';
import { ReactElement } from 'react';
import ExternalLink from '../elements/ExternalLink';
import MainContainer from '../elements/MainContainer';

function Footer(): ReactElement {
  return (
    <footer
      className='mt-44  border-t  border-gray-light  
                     pb-20  pt-12  sm:pb-[4.5rem]  dark:border-gray-dark'
    >
      <MainContainer
        className='flex  flex-col-reverse  items-center  sm:flex-row
                   sm:items-start  sm:justify-between'
      >
        <div className='flex  flex-col  items-center  sm:items-start'>
          <p className='mb-5  text-lg  dark:text-white'>
            © Nikmas Studio, 2024
          </p>
          <ul className='flex  flex-col  items-center  gap-2  text-sm  sm:items-start'>
            <li>
              {/* <Link className='default-link' href='/terms-and-conditions'> */}
              Terms and conditions (very soon...)
              {/* </Link> */}
            </li>
            <li>
              {/* <Link className='default-link' href='/privacy-policy'> */}
              Privacy policy (very soon...)
              {/* </Link> */}
            </li>
            <li>
              {/* <Link className='default-link' href='/cookies-policy'> */}
              Cookies policy (very soon...)
              {/* </Link> */}
            </li>
          </ul>
        </div>
        <ul className='mb-12  flex  gap-5  sm:mb-0  sm:grid  sm:grid-cols-2  md:grid-flow-col'>
          <li>
            <ExternalLink href='https://t.me/nikmas_studio'>
              <Image
                src={telegramLogo}
                alt='Telegram logo'
                width={50}
                height={50}
                className='transition-all  hover:scale-[1.2]'
                quality={100}
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href='https://www.instagram.com/nikmas.studio/'>
              <Image
                src={instagramLogo}
                alt='Instagram logo'
                width={50}
                height={50}
                className='transition-all  hover:scale-[1.2]'
                quality={100}
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href='https://www.facebook.com/nikmas.studio'>
              <Image
                src={facebookLogo}
                alt='Facebook logo'
                width={50}
                height={50}
                className='transition-all  hover:scale-[1.2]'
                quality={100}
              />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href='https://www.linkedin.com/company/nikmas-studio'>
              <Image
                src={linkedinLogo}
                alt='LinkedIn logo'
                width={50}
                height={50}
                className='transition-all  hover:scale-[1.2]'
                quality={100}
              />
            </ExternalLink>
          </li>
        </ul>
        <div className='mb-9  flex  flex-col  sm:mb-0'>
          <p className='mb-1  text-lg  leading-snug  dark:text-white'>
            For&nbsp;questions <br /> and&nbsp;suggestions:
          </p>
          <p className='text-lg  font-semibold  dark:text-white'>
            <ExternalLink href='mailto:team@nikmas.studio'>
              team@nikmas.studio
            </ExternalLink>
          </p>
        </div>
      </MainContainer>
    </footer>
  );
}

export default Footer;
