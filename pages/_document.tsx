import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
      </Head>
      <body id="app">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
