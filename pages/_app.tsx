import React from 'react';
import '../public/css/global.css';

function MyApp({ Component, pageProps }: { Component: () => React.ReactElement; pageProps: Record<string, unknown> }) {
    return <Component {...pageProps} />;
}

export default MyApp;
