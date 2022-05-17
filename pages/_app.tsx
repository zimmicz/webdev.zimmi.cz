import React from 'react';
import Script from 'next/script';
import '../public/css/global.css';
import '../public/css/sendinblue.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { LoadingIndicator, BackToTop, Header, Footer } from '../components';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = router.route;

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component key={url} {...pageProps} />
      </AnimatePresence>
      <Footer />
      <LoadingIndicator />
      <BackToTop />
    </>
  );
}

export default MyApp;
