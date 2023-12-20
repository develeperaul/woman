/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        primaryto: () => {
          return '#C131C1';
        },
        primary: () => {
          return '#9C31C1';
        },
        primaryto2: () => {
          return '#C131C1';
        },
        primary2: () => {
          return '#9C31C1';
        },
        second: () => {
          return '#E5D4ED';
        },
        filter: () => {
          return '#635575';
        },
        whitedarken: '#F2F2F2',
        gray: '#686868',
        gray2: '#616161',
        gray3: '#E2E2E2',
        gray4: '#E6E6E6',
        title: '#0F0F0F',
        title2: '#1D1128',
        link: '#007ABE',
        error: '#EB3B3B',
        green: '#219653',
        yellow: '#FFDC23',
      },
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
