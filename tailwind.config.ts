import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        'max-2xl': { max: '1536px' },
        'max-xl': { max: '1280px' },
        'max-lg': { max: '1024px' },
        'max-md': { max: '768px' },
        'max-sm': { max: '640px' },
        'max-2sm': { max: '460px' },
        'h-sm': { raw: '(max-height: 400px)' },
      },
      backgroundImage: {
        parallax: 'url("../public/images/bg-parallax.jpg")',
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
