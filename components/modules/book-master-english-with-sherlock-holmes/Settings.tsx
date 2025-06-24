'use client';

import classNames from 'classnames';
import { forwardRef, ReactElement, useEffect, useRef } from 'react';

import {
  useSettings,
  useSettingsDispatch,
} from '@/context/book-master-english-with-sherlock-holmes/settings/Context';
import { useTheme } from '@/context/theme/Context';
import { useTouchDevice } from '@/context/touch-device/Context';

interface SettingsProps {
  className?: string;
  alwaysWhite?: boolean;
}

const Settings = forwardRef<HTMLDivElement, SettingsProps>(
  function ThemeToggleDefault(
    { className, alwaysWhite = false }: SettingsProps,
    ref,
  ): ReactElement {
    const iconClasses = classNames(
      'fill-none  [stroke-linecap:round]  [stroke-linejoin:round]',
      {
        'stroke-black  group-hover:stroke-orange  dark:stroke-smooth-white':
          !alwaysWhite,
        'stroke-white  group-hover:stroke-orange  dark:stroke-smooth-white':
          alwaysWhite,
      },
    );

    const { selectedTheme } = useTheme();

    const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

    const { isTouchDevice } = useTouchDevice();
    const isTouchDeviceRef = useRef(isTouchDevice);

    useEffect(() => {
      isTouchDeviceRef.current = isTouchDevice;
    }, [isTouchDevice]);

    useEffect(() => {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [selectedTheme]);

    const { setSettingsDropdownIsOpened, setSettingsDropdownPosition } =
      useSettingsDispatch();

    const { outsideClickIsActive } = useSettings();

    const settingsWrapperClasses = classNames(
      'relative  flex  flex-col  justify-center  transition-opacity',
      className,
    );

    function handleToggleDropdown(): void {
      if (outsideClickIsActive.current) {
        return;
      }

      const rect = toggleButtonRef.current?.getBoundingClientRect();

      const dropdownWidth = 204;
      const dropdownHeight = 590;

      if (rect !== undefined) {
        const spaceBelow = window.innerHeight - rect.bottom;
        const top = dropdownHeight + 5 > spaceBelow ? 50 : rect.bottom + 5;

        setSettingsDropdownPosition({
          top,
          left: rect.right - dropdownWidth,
        });

        setSettingsDropdownIsOpened((prev) => !prev);
      }
    }

    return (
      <div ref={ref} className={settingsWrapperClasses}>
        <button
          ref={toggleButtonRef}
          className='group  relative  size-[35px]  translate-x-[7px]  cursor-pointer'
          onClick={handleToggleDropdown}
        >
          <svg
            width={35}
            height={35}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g data-name='Layer 2' id='Layer_2'>
              <g id='Workspace'>
                <rect className='fill-none' height='24' width='24' />
                <line className={iconClasses} x1='7' x2='7' y1='6' y2='13' />
                <circle className={iconClasses} cx='7' cy='14.5' r='1.5' />
                <line className={iconClasses} x1='7' x2='7' y1='16' y2='18' />
                <line className={iconClasses} x1='12' x2='12' y1='6' y2='8' />
                <circle className={iconClasses} cx='12' cy='9.5' r='1.5' />
                <line className={iconClasses} x1='12' x2='12' y1='11' y2='18' />
                <line className={iconClasses} x1='17' x2='17' y1='6' y2='11' />
                <circle className={iconClasses} cx='17' cy='12.5' r='1.5' />
                <line className={iconClasses} x1='17' x2='17' y1='14' y2='18' />
              </g>
            </g>
          </svg>
        </button>
      </div>
    );
  },
);

export default Settings;
