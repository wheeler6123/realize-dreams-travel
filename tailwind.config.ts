/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
      extend: {
          colors: {
              brand: {
                  dark: '#5651e5',
                  light: '#709dff',
              },
          },
          fontFamily: {
              sans: ['Poppins', 'sans-serif'],
              'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
          },
          screens: {
              'xs': {max: '240px'}
          },
      },
  },
  plugins: [],
};
