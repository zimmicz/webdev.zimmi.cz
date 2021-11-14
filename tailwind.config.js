module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                arabela: 'arabela 500ms ease-in-out forwards',
                shine: 'shine 3s linear infinite',
            },
            backgroundImage: {
                'head-gradient': 'radial-gradient(circle, white, hsla(252, 40%, 29%, .4))',
            },
            backgroundSize: {
                '200%': '200%',
            },
            keyframes: {
                shine: {
                    to: {
                        'background-position': '-200% center',
                    },
                },
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
                lavender: 'hsla(270, 77%, 71%, 1)',
                'st-patricks-blue': 'hsla(252, 40%, 29%, 1)',
            },
            fontFamily: {
                title: ['Phenomena'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
