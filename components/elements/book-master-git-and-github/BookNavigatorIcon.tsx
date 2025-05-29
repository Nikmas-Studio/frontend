import { useBookNavigatorDispatch } from '@/context/book-navigator/Context';
import classNames from 'classnames';
import { ReactElement } from 'react';

interface BookNavigatorIconProps {
  className?: string;
}

function BookNavigatorIcon({
  className,
}: BookNavigatorIconProps): ReactElement {
  const classes = classNames(className, 'group  cursor-pointer');
  const { setBookNavigatorIsOpened } = useBookNavigatorDispatch();

  return (
    <svg
      className={classes}
      onClick={() => {
        setBookNavigatorIsOpened(true);
      }}
      height='20'
      viewBox='0 0 46 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='20.3074'
        cy='20.3073'
        r='12.3594'
        transform='rotate(45 20.3074 20.3073)'
        className='stroke-black  group-hover:stroke-orange  dark:stroke-smooth-white'
        stroke-width='3.6'
      />
      <rect
        x='29.8264'
        y='28.5571'
        width='22.873'
        height='3.6'
        rx='2'
        transform='rotate(45 29.8264 28.5571)'
        className='fill-black  group-hover:fill-orange  dark:fill-smooth-white'
      />
    </svg>
  );
}

export default BookNavigatorIcon;
