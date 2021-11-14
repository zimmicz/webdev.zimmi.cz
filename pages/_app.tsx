import React from 'react';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: { Component: () => React.ReactElement; pageProps: Record<string, unknown> }) {
    return <Component {...pageProps} />;
}

export default MyApp;
