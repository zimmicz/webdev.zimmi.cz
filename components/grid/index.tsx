import React from 'react';

const Grid = ({ children }: React.PropsWithChildren<unknown>) => (
    <div className="grid grid-cols-1 mx-5 xl:mx-20 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-8">{children}</div>
);

export { Grid };
