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
      <Script id="sendinblue" strategy="lazyOnload">
        {`
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
  window.LOCALE = 'en';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

  window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

  window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";




  window.translation = {
    common: {
      selectedList: '{quantity} list selected',
      selectedLists: '{quantity} lists selected'
    }
  };

  var AUTOHIDE = Boolean(0);
`}
      </Script>
      <Script src="https://sibforms.com/forms/end-form/build/main.js"></Script>
    </>
  );
}

export default MyApp;
