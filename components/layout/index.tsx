import React from 'react';
import { Header, Metadata } from '../';

const Layout = ({ children }: React.PropsWithChildren<unknown>) => (
  <div className="w-[80ch] max-w-[100%] min-h-screen m-auto">
    <Metadata />
    <Header />
    <main className="mx-5">{children}</main>
  </div>
);

export { Layout };
