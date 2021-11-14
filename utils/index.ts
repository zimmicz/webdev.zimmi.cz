import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

const getCurrentBreakPoint = () => {
    const { screens } = fullConfig.theme;

    if (!screens) {
        return;
    }

    const breakpoints = Object.values(screens)
        .map((bp) => bp.replace('px', ''))
        .map((bp) => parseInt(bp))
        .sort((a, b) => a - b);

    if (typeof window === 'undefined') {
        return;
    }

    const breakpoint = breakpoints.find((bp) => bp > window.innerWidth) ?? breakpoints[breakpoints.length - 1];
    const [current] = Object.entries(screens).find(([, pixels]) => pixels.startsWith(breakpoint.toString())) ?? [];

    return current;
};

export { getCurrentBreakPoint };
