import Image from 'next/image';
import lightModeIcon from '../../public/images/light-mode.png';

function LightModeIcon() {
  return (
    <Image
      className='w-[1.7rem]  h-[1.7rem]  hover:cursor-pointer  hover:rotate-90  transition-transform  translate-y-[-0.5px]  select-none'
      src={lightModeIcon}
      alt='Light mode icon'
    />
  );
}

export default LightModeIcon;
