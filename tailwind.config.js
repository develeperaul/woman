/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        gray: '#686868',
        title: '#0F0F0F',
      },
      fontSize: {
        t2: ['14px', '125%'],
      },
    },
    container: {
      center: true,
      padding: '16px',
    },
  },
  plugins: [],
};
