import React from 'react';

// @ts-expect-error my-sidenote does not exist in JSX namespace
const Sidenote = ({ children }: React.PropsWithChildren<unknown>) => <my-sidenote>{children}</my-sidenote>;

export default Sidenote;
