import React from 'react';
import Head from 'next/head';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '../../config';

const Metadata = () => (
    <Head>
        <title>
            {BLOG_TITLE} | {BLOG_DESCRIPTION}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Phenomena/Phenomena-Bold.woff2" as="font" crossOrigin="" />
    </Head>
);

export { Metadata };
