import React from 'react';
import '../public/css/global.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { LoadingIndicator, BackToTop, Header } from '../components';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = router.route;

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component key={url} {...pageProps} />
      </AnimatePresence>
      <LoadingIndicator />
      <BackToTop />
    </>
  );
}

export default MyApp;
