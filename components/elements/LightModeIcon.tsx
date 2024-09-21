import classNames from 'classnames';
import { forwardRef, ReactElement } from 'react';

interface LightModeIconProps {
  className?: string;
}

const LightModeIcon = forwardRef<SVGSVGElement, LightModeIconProps>(
  function LightModeIcon({ className }: LightModeIconProps, ref): ReactElement {
    const lightModeIconClasses = classNames(
      'w-[1.5rem]  h-[1.5rem]  md:w-[1.7rem]  md:h-[1.7rem]  hover:cursor-pointer  hover:rotate-90  transition-transform  translate-y-[-0.5px]  select-none',
      className,
    );

    return (
      <svg
        ref={ref}
        xmlns='http://www.w3.org/2000/svg'
        width='27'
        height='27'
        viewBox='0 0 512 512'
        className={lightModeIconClasses}
      >
        <path
          fillRule='evenodd'
          d='M256,0a16,16,0,0,1,16,16V64a16,16,0,0,1-32,0V16A16,16,0,0,1,256,0ZM75.04,75.151a16,16,0,0,1,22.627,0l33.942,33.941a16,16,0,1,1-22.628,22.628L75.04,97.779A16,16,0,0,1,75.04,75.151ZM0.28,255.99a16,16,0,0,1,16-16h48a16,16,0,1,1,0,32h-48A16,16,0,0,1,.28,255.99ZM84.99,427.278a16,16,0,0,1,0-22.627l33.941-33.941a16,16,0,0,1,22.627,22.627l-33.941,33.941A16,16,0,0,1,84.99,427.278Zm171.5,84.375a16,16,0,0,1-16-16v-48a16,16,0,0,1,32,0v48A16,16,0,0,1,256.49,511.653Zm180.285-74.708a16,16,0,0,1-22.627,0L380.207,403a16,16,0,1,1,22.627-22.628l33.941,33.942A16,16,0,0,1,436.775,436.945ZM511.5,255.666a16,16,0,0,1-16,16h-48a16,16,0,0,1,0-32h48A16,16,0,0,1,511.5,255.666ZM443.789,68.381a16,16,0,0,1,0,22.627L409.848,124.95a16,16,0,1,1-22.628-22.628l33.941-33.941A16,16,0,0,1,443.789,68.381ZM257,111.775A144.225,144.225,0,1,1,112.775,256,144.225,144.225,0,0,1,257,111.775ZM257,144A113,113,0,1,1,144,257,113,113,0,0,1,257,144Z'
        />
      </svg>
    );
  },
);

export default LightModeIcon;
