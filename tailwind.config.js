module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        arabela: 'arabela 500ms ease-in-out forwards',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        'head-gradient': 'radial-gradient(circle, white, hsla(252, 40%, 29%, .1))',
      },
      backgroundSize: {
        '200%': '200%',
        full: '100% 100%',
        'full-2': '100% 2px',
        '0-full': '0px 100%',
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
      },
      colors: {
        cornsilk: '#fffade',
        primary: '#EC0868',
        'st-patricks-blue': 'hsla(252, 40%, 29%, 1)',
      },
      fontFamily: {
        title: ['Phenomena'],
      },
      transitionProperty: {
        bg: 'background-position, background-size',
      },
    },
  },
  variants: {
    extend: {},
  },
};
