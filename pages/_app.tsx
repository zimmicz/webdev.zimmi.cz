import React from 'react';
import '../public/css/global.css';
import '@code-hike/mdx/dist/index.css';

function MyApp({ Component, pageProps }: { Component: () => React.ReactElement; pageProps: Record<string, unknown> }) {
    return <Component {...pageProps} />;
}

export default MyApp;
