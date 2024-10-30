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
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      'max-2xl': { max: '1536px' },
      'max-xl': { max: '1280px' },
      'max-lg': { max: '1024px' },
      'max-2md': { max: '960px' },
      'max-md': { max: '768px' },
      'max-sm': { max: '640px' },
      'max-2sm': { max: '460px' },
      'max-3sm': { max: '420px' },
      'h-2md': { raw: '(max-height: 730px)' },
      'h-md': { raw: '(max-height: 560px)' },
      'h-sm': { raw: '(max-height: 450px)' },
      'wh-sm': { raw: '(max-width: 380px) and (max-height: 680px)' },
    },
    extend: {
      colors: {
        'git-black': '#00040A',
        'git-white': '#e3e3e3',
        'git-orange': '#ff5013',
        'git-blue': '#271ad3',
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
