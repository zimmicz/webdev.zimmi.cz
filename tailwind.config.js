// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  important: '#app',
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './hoc/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        arabela: 'arabela 500ms ease-in-out forwards',
        loading: 'loading 1000ms infinite linear',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundSize: {
        'full-2': '100% 2px',
        '0-2': '0 2px',
      },
      keyframes: {
        arabela: {
          from: {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0)',
          },
          to: {
            'margin-left': 'auto',
            transform: 'scale(1)',
          },
        },
        loading: {
          '20%': {
            backgroundSize: '5px 60% ,5px 100%,5px 100%',
          },
          '40%': {
            backgroundSize: '5px 80% ,5px 60% ,5px 100%',
          },
          '60%': {
            backgroundSize: '5px 100%,5px 80% ,5px 60%',
          },
          '80%': {
            backgroundSize: '5px 100%,5px 100%,5px 80%',
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#e34a80',
          50: '#fdfcfb',
          100: '#fbf0f0',
          200: '#f8cce1',
          300: '#ef9ec2',
          400: '#ee6d9e',
          500: '#e34a80',
          600: '#ce305f',
          700: '#a82445',
          800: '#7b1a2c',
          900: '#4c1017',
        },
        info: {
          DEFAULT: '#7c66ba',
          50: '#f9fafb',
          100: '#eff1fa',
          200: '#dbdaf4',
          300: '#b9b5e4',
          400: '#988bcf',
          500: '#7c66ba',
          600: '#644b9f',
          700: '#4b377a',
          800: '#332553',
          900: '#1c1731',
        },
        warning: {
          DEFAULT: '#9d6f16',
          50: '#fbf9f3',
          100: '#f8efbb',
          200: '#f0dc80',
          300: '#dbb84f',
          400: '#bc8e2b',
          500: '#9d6f16',
          600: '#80560e',
          700: '#63400d',
          800: '#442c0b',
          900: '#2e1c09',
        },
        success: {
          DEFAULT: '#308a4d',
          50: '#f3f6f4',
          100: '#e1efe9',
          200: '#bce3cf',
          300: '#86c7a3',
          400: '#44a674',
          500: '#308a4d',
          600: '#297239',
          700: '#24572e',
          800: '#1a3c24',
          900: '#12251b',
        },
        subtle: colors.gray['400'],
      },
      fontFamily: {
        title: ['Phenomena'],
        text: ['Fredoka'],
      },
      fontSize: {
        lg: ['1.125rem', '2.8rem'],
        sidenote: ['1rem', '1.5'],
      },
      stroke: {
        primary: '#e34a80',
        subtle: colors.gray['400'],
      },
      transitionProperty: {
        bg: 'background-position, background-size',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['hover'],
    },
  },
};
