import { ReactElement, RefObject } from 'react';
import GuestAccountIcon from '../elements/GuestAccountIcon';
import ThemeToggle from './ThemeToggle';

interface HeaderButtonsProps {
  animationElements: {
    header: RefObject<HTMLElement>;
    headerLogo: RefObject<HTMLParagraphElement>;
  };
}

function HeaderButtons({
  animationElements,
}: HeaderButtonsProps): ReactElement {
  return (
    <div className='flex  items-center  gap-x-5'>
      <ThemeToggle
        animationElements={animationElements}
        className='flex-none'
      />
      <GuestAccountIcon className='flex-none' />
    </div>
  );
}

export default HeaderButtons;
