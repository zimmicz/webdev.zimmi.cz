import React from 'react';
import _ from 'lodash';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Link from '../../public/icons/link.svg';

const withAnchor = (WrappedComponent: (props: React.PropsWithChildren<unknown>) => React.ReactElement) => {
  const Component = ({ children, ...props }: React.PropsWithChildren<unknown>) => {
    if (typeof children !== 'string') {
      throw new Error('Children should be of type string.');
    }

    const router = useRouter();

    if (router.asPath === '/') {
      return <WrappedComponent {...props}>{children}</WrappedComponent>;
    }

    const title = _.kebabCase(children);
    const anchor = `${router.asPath.split('#')[0]}#${title}`;

    return (
      <WrappedComponent {...props}>
        <NextLink href={anchor}>
          <a id={title} className="flex items-center group">
            <span className="flex-grow">{children}</span>
            <span className="invisible group-hover:visible">
              <Link className="my-icon-primary" />
            </span>
          </a>
        </NextLink>
      </WrappedComponent>
    );
  };

  Component.displayName = 'AnchoredComponent';

  return Component;
};

export { withAnchor };
