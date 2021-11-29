import React from 'react';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

const BannerImage = ({ credit, src, aspectRatio }: { credit: string; src: string; aspectRatio: string }) => {
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
        <div
            className={`transition group-hover:scale-100 aspect-w-${width} aspect-h-${height} scale-95 mx-auto ${
                needsPlaceholder ? 'w-full h-full' : undefined
            }`}
        >
            {needsPlaceholder ? (
                <div className="w-full h-full animate-pulse bg-lavender opacity-5 rounded-md shadow-lg" />
            ) : null}
            <figure>
                <img
                    onLoad={() => setNeedsPlaceholder(false)}
                    ref={ref}
                    className="shadow-lg rounded-md"
                    decoding="async"
                    data-src={src}
                />
                {needsPlaceholder ? null : (
                    <figcaption className="text-st-patricks-blue text-center rounded-b-md bg-white bg-opacity-30 w-full absolute bottom-0">
                        <small>{credit}</small>
                    </figcaption>
                )}
            </figure>
        </div>
    );
};

export { BannerImage };
