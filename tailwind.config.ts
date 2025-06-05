import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2sm': '460px',
      '1.5sm': '537px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      '1.5lg': '1120px',
      '2lg': '1180px',
      xl: '1280px',
      '2xl': '1536px',
      'max-2xl': { max: '1536px' },
      'max-xl': { max: '1280px' },
      'max-lg': { max: '1024px' },
      'max-1.5lg': { max: '1120px' },
      'max-2md': { max: '960px' },
      'max-md': { max: '768px' },
      'max-sm': { max: '640px' },
      'max-2sm': { max: '460px' },
      'max-3sm': { max: '420px' },
      'h-2md': { raw: '(max-height: 730px)' },
      'h-md': { raw: '(max-height: 560px)' },
      'h-sm': { raw: '(max-height: 450px)' },
      'wh-sm': { raw: '(max-width: 450px) and (max-height: 750px)' },
    },
    extend: {
      colors: {
        'git-black': '#00040A',
        'git-white': '#e3e3e3',
        'smooth-white': '#e3e3e3',
        orange: '#ff5013',
        blue: '#2e1eff',
        'git-dark-blue': '#09132a',
        subscription: '#29AD04',
        'subscription-darker': '#248F04',
        'gray-light': '#EBEBEB',
        'gray-light-darker': '#E3E3E3',
        'gray-light-darker2': '#D0D0D0',
        'gray-dark': '#282828',
        'gray-dark-lighter': '#414141',
        'gray-dark-lighter2': '#505050',
      },
      backgroundImage: {
        'git-part-1-dark':
          'url("../public/images/git-and-github-book-part-1-bg-pattern-dark.jpg")',
        'git-part-1-light':
          'url("../public/images/git-and-github-book-part-1-bg-pattern-light.jpg")',
      },
      keyframes: {
        'scroll-hint-arrows': {
          '0%': {
            opacity: '0',
            transform: 'rotate(45deg) translate(-20px, -20px)',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            transform: 'rotate(45deg) translate(20px, 20px)',
          },
        },
        'scroll-hint-mouse': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(12px)',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
export default config;
