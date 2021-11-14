import React from 'react';
import Head from 'next/head';
import { Homepage } from '../components';

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-lavender to-st-patricks-blue flex flex-col items-center justify-center min-h-screen m-auto">
            <Head>
                <title>Michal Zimmermann | Pieces of knowledge from the world of web development.</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/css/global.css" />
                <link rel="preload" href="/fonts/Phenomena/Phenomena-Bold.woff2" as="font" crossOrigin="" />
            </Head>

            <Homepage />

            <footer className="flex items-center justify-center w-full h-24 border-t bg-gray-900 text-white">
                hello world
            </footer>
        </div>
    );
}
