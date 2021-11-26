import React from 'react';

const H1 = ({ children }: React.PropsWithChildren<unknown>) => {
    return <h1 className="text-3xl lg:text-5xl font-title font-bold text-lavender">{children}</h1>;
};

const H2 = ({ children }: React.PropsWithChildren<unknown>) => {
    return <h2 className="text-3xl lg:text-5xl font-title font-bold text-lavender">{children}</h2>;
};

const H3 = ({ children }: React.PropsWithChildren<unknown>) => {
    return <h3 className="text-3xl lg:text-5xl font-title font-bold text-lavender">{children}</h3>;
};

const H4 = ({ children }: React.PropsWithChildren<unknown>) => {
    return <h4 className="text-3xl lg:text-5xl font-title font-bold text-lavender">{children}</h4>;
};

const H5 = ({ children }: React.PropsWithChildren<unknown>) => {
    return <h5 className="text-3xl lg:text-5xl font-title font-bold text-lavender">{children}</h5>;
};

const H6 = ({ children }: React.PropsWithChildren<unknown>) => {
    return <h6 className="text-3xl lg:text-6xl font-title font-bold text-lavender">{children}</h6>;
};

export { H1, H2, H3, H4, H5, H6 };
