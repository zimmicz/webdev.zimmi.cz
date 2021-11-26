import React from 'react';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

const BannerImage = ({ src, aspectRatio, className }: { src: string; aspectRatio: string; className?: string }) => {
    const [needsPlaceholder, setNeedsPlaceholder] = React.useState(true);
    const [width, height] = aspectRatio.split(':');
    const onIntersection = () => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const dataSrc = element.dataset.src;

        if (!dataSrc) {
            return;
        }

        element.setAttribute('src', dataSrc);
    };
    const ref = useIntersectionObserver<HTMLImageElement>(onIntersection);

    return (
        <div className={`aspect-w-${width} aspect-h-${height} scale-95 ${className}`}>
            {needsPlaceholder ? <div className="animate-pulse bg-lavender opacity-5 rounded-md shadow-lg" /> : null}
            <img
                onLoad={() => setNeedsPlaceholder(false)}
                ref={ref}
                className="shadow-lg rounded-md"
                decoding="async"
                data-src={src}
            />
        </div>
    );
};

export { BannerImage };
