import useOutsideClick from '@/hooks/use-outside-click';
import { Theme } from '@/types/theme';
import classNames from 'classnames';
import {
  forwardRef,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import ThemeToggleDropdownItem from './ThemeToggleDropdownItem';

const ThemeToggle = forwardRef<SVGSVGElement, Record<string, never>>(
  function ThemeToggle(_, ref): ReactElement {
    const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
    const [selectedTheme, setSelectedMode] = useState(() => {
      const savedTheme = localStorage.getItem('theme');

      switch (savedTheme) {
        case Theme.Light:
          return Theme.Light;
        case Theme.Dark:
          return Theme.Dark;
        default:
          return Theme.System;
      }
    });

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

    function handleThemeChange(newTheme: Theme): void {
      if (newTheme === Theme.System) {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', newTheme);
      }

      setSelectedMode(newTheme);
      setDropdownIsOpened(false);
    }

    const dropdownElementRef = useRef<HTMLUListElement | null>(null);

    useOutsideClick(
      [ref as RefObject<SVGSVGElement>, dropdownElementRef],
      () => {
        setDropdownIsOpened(false);
      },
    );

    const dropdownClasses = classNames(
      'absolute  right-0  top-10  flex  flex-col  rounded-lg  bg-white  pb-9  pt-7  shadow-[0px_10px_30px_rgba(0,0,0,0.03)]  transition-all',
      {
        'opacity-0  pointer-events-none': !dropdownIsOpened,
        'opacity-100  pointer-events-auto': dropdownIsOpened,
      },
    );

    return (
      <div className='relative'>
        <svg
          onClick={() => setDropdownIsOpened((prev) => !prev)}
          ref={ref}
          xmlns='http://www.w3.org/2000/svg'
          width='27'
          height='27'
          viewBox='0 0 512 512'
          className='size-6  translate-y-[-0.5px]  select-none  transition-transform  hover:rotate-90  hover:cursor-pointer  md:size-[1.7rem]'
        >
          <path
            fillRule='evenodd'
            d='M256,0a16,16,0,0,1,16,16V64a16,16,0,0,1-32,0V16A16,16,0,0,1,256,0ZM75.04,75.151a16,16,0,0,1,22.627,0l33.942,33.941a16,16,0,1,1-22.628,22.628L75.04,97.779A16,16,0,0,1,75.04,75.151ZM0.28,255.99a16,16,0,0,1,16-16h48a16,16,0,1,1,0,32h-48A16,16,0,0,1,.28,255.99ZM84.99,427.278a16,16,0,0,1,0-22.627l33.941-33.941a16,16,0,0,1,22.627,22.627l-33.941,33.941A16,16,0,0,1,84.99,427.278Zm171.5,84.375a16,16,0,0,1-16-16v-48a16,16,0,0,1,32,0v48A16,16,0,0,1,256.49,511.653Zm180.285-74.708a16,16,0,0,1-22.627,0L380.207,403a16,16,0,1,1,22.627-22.628l33.941,33.942A16,16,0,0,1,436.775,436.945ZM511.5,255.666a16,16,0,0,1-16,16h-48a16,16,0,0,1,0-32h48A16,16,0,0,1,511.5,255.666ZM443.789,68.381a16,16,0,0,1,0,22.627L409.848,124.95a16,16,0,1,1-22.628-22.628l33.941-33.941A16,16,0,0,1,443.789,68.381ZM257,111.775A144.225,144.225,0,1,1,112.775,256,144.225,144.225,0,0,1,257,111.775ZM257,144A113,113,0,1,1,144,257,113,113,0,0,1,257,144Z'
          />
        </svg>
        <ul ref={dropdownElementRef} className={dropdownClasses}>
          <ThemeToggleDropdownItem
            className='gap-[0.7rem]'
            itemTheme={Theme.Light}
            selectedTheme={selectedTheme}
            onClick={() => handleThemeChange(Theme.Light)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='27'
              height='27'
              viewBox='0 0 512 512'
              className='size-6  translate-y-[-0.031rem]  md:size-[1.7rem]'
            >
              <path
                fillRule='evenodd'
                d='M256,0a16,16,0,0,1,16,16V64a16,16,0,0,1-32,0V16A16,16,0,0,1,256,0ZM75.04,75.151a16,16,0,0,1,22.627,0l33.942,33.941a16,16,0,1,1-22.628,22.628L75.04,97.779A16,16,0,0,1,75.04,75.151ZM0.28,255.99a16,16,0,0,1,16-16h48a16,16,0,1,1,0,32h-48A16,16,0,0,1,.28,255.99ZM84.99,427.278a16,16,0,0,1,0-22.627l33.941-33.941a16,16,0,0,1,22.627,22.627l-33.941,33.941A16,16,0,0,1,84.99,427.278Zm171.5,84.375a16,16,0,0,1-16-16v-48a16,16,0,0,1,32,0v48A16,16,0,0,1,256.49,511.653Zm180.285-74.708a16,16,0,0,1-22.627,0L380.207,403a16,16,0,1,1,22.627-22.628l33.941,33.942A16,16,0,0,1,436.775,436.945ZM511.5,255.666a16,16,0,0,1-16,16h-48a16,16,0,0,1,0-32h48A16,16,0,0,1,511.5,255.666ZM443.789,68.381a16,16,0,0,1,0,22.627L409.848,124.95a16,16,0,1,1-22.628-22.628l33.941-33.941A16,16,0,0,1,443.789,68.381ZM257,111.775A144.225,144.225,0,1,1,112.775,256,144.225,144.225,0,0,1,257,111.775ZM257,144A113,113,0,1,1,144,257,113,113,0,0,1,257,144Z'
              />
            </svg>
            <p className='select-none'>Light</p>
          </ThemeToggleDropdownItem>
          <ThemeToggleDropdownItem
            className='gap-[0.8rem]'
            itemTheme={Theme.Dark}
            selectedTheme={selectedTheme}
            onClick={() => handleThemeChange(Theme.Dark)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              width={27}
              height={27}
              className='size-[1.4rem]  translate-x-[0.1rem]  translate-y-[-0.031rem]  md:size-[1.6rem]'
            >
              <path
                fill='black'
                d='M268.279,496c-67.574,0-130.978-26.191-178.534-73.745S16,311.293,16,243.718A252.252,252.252,0,0,1,154.183,18.676a24.44,24.44,0,0,1,34.46,28.958,220.12,220.12,0,0,0,54.8,220.923A218.746,218.746,0,0,0,399.085,333.2h0a220.2,220.2,0,0,0,65.277-9.846,24.439,24.439,0,0,1,28.959,34.461A252.256,252.256,0,0,1,268.279,496ZM153.31,55.781A219.3,219.3,0,0,0,48,243.718C48,365.181,146.816,464,268.279,464a219.3,219.3,0,0,0,187.938-105.31,252.912,252.912,0,0,1-57.13,6.513h0a250.539,250.539,0,0,1-178.268-74.016,252.147,252.147,0,0,1-67.509-235.4Z'
              />
            </svg>
            <p className='select-none'>Dark</p>
          </ThemeToggleDropdownItem>
          <ThemeToggleDropdownItem
            className='gap-[0.8rem]'
            itemTheme={Theme.System}
            selectedTheme={selectedTheme}
            onClick={() => handleThemeChange(Theme.System)}
          >
            <svg
              width='27'
              height='27'
              viewBox='0 0 23 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='size-[1.4rem]  translate-x-[0.1rem]  translate-y-[-0.031rem]  md:size-[1.6rem]'
            >
              <path
                d='M11.5 15C13.433 15 15 13.433 15 11.5C15 9.567 13.433 8 11.5 8C9.567 8 8 9.567 8 11.5C8 13.433 9.567 15 11.5 15Z'
                stroke='black'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M20.7877 6.94946L19.9978 5.55054C19.5618 4.77758 18.5957 4.51346 17.8398 4.95931L17.4243 5.20485C15.8444 6.13692 13.8696 4.97142 13.8696 3.10646V2.61538C13.8696 1.72288 13.1626 1 12.2897 1H10.7099C9.83704 1 9.13006 1.72288 9.13006 2.61538V3.10646C9.13006 4.97142 7.15525 6.13773 5.5754 5.20485L5.1599 4.95931C4.40394 4.51346 3.43787 4.77758 3.00183 5.55054L2.2119 6.94946C1.77587 7.72242 2.03417 8.71023 2.79013 9.15608L3.20563 9.40162C4.78548 10.3345 4.78548 12.6655 3.20563 13.5984L2.79013 13.8439C2.03417 14.2898 1.77587 15.2776 2.2119 16.0505L3.00183 17.4495C3.43787 18.2224 4.40394 18.4865 5.1599 18.0407L5.5754 17.7952C7.15525 16.8623 9.13006 18.0286 9.13006 19.8935V20.3846C9.13006 21.2771 9.83704 22 10.7099 22H12.2897C13.1626 22 13.8696 21.2771 13.8696 20.3846V19.8935C13.8696 18.0286 15.8444 16.8623 17.4243 17.7952L17.8398 18.0407C18.5957 18.4865 19.5618 18.2224 19.9978 17.4495L20.7877 16.0505C21.2238 15.2776 20.9655 14.2898 20.2095 13.8439L19.794 13.5984C18.2142 12.6655 18.2142 10.3345 19.794 9.40162L20.2095 9.15608C20.9655 8.71023 21.2246 7.72242 20.7877 6.94946Z'
                stroke='black'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <p className='select-none'>System</p>
          </ThemeToggleDropdownItem>
        </ul>
      </div>
    );
  },
);

export default ThemeToggle;
