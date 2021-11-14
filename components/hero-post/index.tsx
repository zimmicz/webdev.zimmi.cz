import Link from 'next/link';
import React from 'react';

const HeroPost = ({ content, tags, title }: { content: string; tags: Array<string>; title: string }) => (
    <article className="group p-20 w-full flex flex-wrap xl:flex-nowrap justify-around bg-cornsilk text-st-patricks-blue leading-10 gap-8">
        <h1 className="text-3xl lg:text-7xl font-title font-bold text-lavender">
            <Link href="/">
                <a className="hover:border-b hover:border-lavender">{title}</a>
            </Link>
        </h1>
        <p>{content}</p>
        <img
            src="https://images.unsplash.com/photo-1636279246851-c873a2566c16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
            className="rounded-lg shadow-lg xl:max-h-96 xl:max-w-sm object-cover scale-95 group-hover:scale-100 transition-transform duration-500"
        />
    </article>
);

export { HeroPost };
