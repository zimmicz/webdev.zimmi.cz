import React from 'react';
import { Header, Metadata } from '../';

const Layout = ({ children }: React.PropsWithChildren<unknown>) => (
  <div className="flex flex-col items-center justify-center min-h-screen m-auto">
    <Metadata />
    <main className="space-y-10 flex flex-col items-center w-full flex-1 mb-10 mt-6 md:mt-16 ">
      <Header />
      {children}
    </main>
  </div>
);

export { Layout };
