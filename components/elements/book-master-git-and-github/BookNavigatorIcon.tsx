import { useBookNavigatorDispatch } from '@/context/book-navigator/Context';
import classNames from 'classnames';
import { ReactElement } from 'react';

interface BookNavigatorIconProps {
  className?: string;
  alwaysWhite?: boolean;
}

function BookNavigatorIcon({
  className,
  alwaysWhite = false,
}: BookNavigatorIconProps): ReactElement {
  const classes = classNames(className, 'group  cursor-pointer');
  const { setBookNavigatorIsOpened } = useBookNavigatorDispatch();

  const circleClasses = classNames({
    'stroke-black  group-hover:stroke-orange  dark:stroke-smooth-white':
      !alwaysWhite,
    'stroke-white  group-hover:stroke-orange  dark:stroke-smooth-white':
      alwaysWhite,
  });

  const rectClasses = classNames({
    'fill-black  group-hover:fill-orange  dark:fill-smooth-white': !alwaysWhite,
    'fill-white  group-hover:fill-orange  dark:fill-smooth-white': alwaysWhite,
  });

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
        className={circleClasses}
        strokeWidth='3.6'
      />
      <rect
        x='29.8264'
        y='28.5571'
        width='22.873'
        height='3.6'
        rx='2'
        transform='rotate(45 29.8264 28.5571)'
        className={rectClasses}
      />
    </svg>
  );
}

export default BookNavigatorIcon;
