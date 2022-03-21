import React from 'react';
import '../public/css/global.css';
import '@code-hike/mdx/dist/index.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { LoadingIndicator } from '../components/loading-indicator';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = router.route;

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component key={url} {...pageProps} />
      </AnimatePresence>
      <LoadingIndicator />
    </>
  );
}

export default MyApp;
