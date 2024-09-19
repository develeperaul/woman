/** @type {import('tailwindcss').Config} */
import color from './public/colors5.json';
module.exports = {
  content: ['./src/**/*.vue'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: color,
      fontSize: {
        t00: ['9px', '120%'],
        t0: ['18px', 'normal'],
        t1: ['16px', '130%'],
        t2: ['14px', '125%'],
        t3: ['12px', '125%'],
        t4: ['10px', '130%'],
        h1: ['30px', 'normal'],
        h2: ['20px', '125%'],
      },
      spacing: {
        4.5: '1.12rem',
        5.5: '1.375rem',
        7.5: '1.88rem',
      },
      borderRadius: {
        10: '0.625rem',
      },
    },
    container: {
      center: true,
      padding: '22px',
    },
    boxShadow: {
      base: '0px 3px 12px 0px rgba(0, 0, 0, 0.07), 0px -2px 10px 0px rgba(0, 0, 0, 0.05);',
      btn: '0px 2px 10px 0px rgba(0, 0, 0, 0.20)',
    },
  },
  plugins: [],
};
