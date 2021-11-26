import React from 'react';

const useIntersectionObserver = <T extends HTMLElement>(callback: () => void) => {
    const ref = React.useRef<T>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].intersectionRatio <= 0) {
                return;
            }

            callback();
            observer.unobserve(entries[0].target);
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return ref;
};

export { useIntersectionObserver };
