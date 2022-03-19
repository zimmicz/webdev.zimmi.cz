import React from 'react';

const common = {
  heading: 'font-title font-bold text-3xl lg:text-5xl',
};

const H1 = ({ children }: React.PropsWithChildren<unknown>) => {
  return <h1 className={`${common.heading} leading-snug lg:leading-snug text-primary`}>{children}</h1>;
};

const H2 = ({ children }: React.PropsWithChildren<unknown>) => {
  return <h2 className={common.heading}>{children}</h2>;
};

const H3 = ({ children }: React.PropsWithChildren<unknown>) => {
  return <h3 className={common.heading}>{children}</h3>;
};

const H4 = ({ children }: React.PropsWithChildren<unknown>) => {
  return <h4 className={common.heading}>{children}</h4>;
};

const H5 = ({ children }: React.PropsWithChildren<unknown>) => {
  return <h5 className={common.heading}>{children}</h5>;
};

const H6 = ({ children }: React.PropsWithChildren<unknown>) => {
  return <h6 className={`${common.heading} lg:text-6xl`}>{children}</h6>;
};

export { H1, H2, H3, H4, H5, H6 };
