import React from 'react';

const useIntersectionObserver = <T extends HTMLElement>(
  callback: (intersecting: boolean) => void,
  options: IntersectionObserverInit & { once?: boolean } = {},
) => {
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      callback(entries[0].isIntersecting);

      if (options.once) {
        observer.unobserve(entries[0].target);
      }
    }, options);

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
