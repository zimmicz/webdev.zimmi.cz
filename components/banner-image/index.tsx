import React from 'react';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

const BannerImage = ({ credit, aspectRatio, url, ...props }: Defined<Post['frontmatter']['image']>) => {
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
    <div className={`aspect-[${width}/${height}] scale-95`}>
      <figure className={`${needsPlaceholder ? 'animate-pulse bg-primary opacity-5 rounded-md shadow-lg' : ''}`}>
        <img
          {...props}
          onLoad={() => setNeedsPlaceholder(false)}
          ref={ref}
          className="shadow-lg rounded-md mx-auto"
          decoding="async"
          data-src={url}
        />
        {needsPlaceholder ? null : (
          <figcaption className="text-center pr-5 rounded-b-md bg-white bg-opacity-30 w-full absolute bottom-0">
            <small>{credit}</small>
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export { BannerImage };
