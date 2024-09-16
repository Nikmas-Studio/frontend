import GuestAccountIcon from '../elements/GuestAccountIcon';
import LightModeIcon from '../elements/LightModeIcon';

function HeaderButtons() {
  return (
    <div className='flex  gap-x-5  items-center'>
      <LightModeIcon />
      <GuestAccountIcon />
    </div>
  );
}

export default HeaderButtons;
