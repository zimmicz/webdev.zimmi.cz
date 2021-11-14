import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = { content: string; tags: Array<string>; title: string };

const Post = ({ content, tags, title }: Props) => (
    <motion.section
        initial="rest"
        whileHover="hover"
        className="group transition-colors hover:border-lavender border-4 rounded-lg bg-st-patricks-blue text-gray-300 p-4 sm:p-10 leading-10 sm:leading-10 sm:text-base border-transparent flex flex-col gap-6 lg:gap-8 "
    >
        <h1 className="text-3xl lg:text-5xl font-title font-bold text-lavender">
            <Link href="/">
                <a className="hover:border-b hover:border-lavender">{title}</a>
            </Link>
        </h1>
        <div className="flex flex-wrap justify-between text-base gap-2">
            <small className="flex gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hidden sm:inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span className="self-center">2021/10/28</span>
            </small>
            <ul className="flex space-x-4">
                {tags.map((tag) => (
                    <li key={tag}>
                        <Link href="/tags/react">
                            <a>
                                <small className="border-lavender border md:border-2 py-1 px-4 rounded-full bg-st-patricks-blue hover:bg-lavender transition-colors">
                                    {tag}
                                </small>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <img
            src="https://images.unsplash.com/photo-1636118128238-1e68a4e4b6c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80"
            className="rounded-lg scale-90 shadow-lg group-hover:scale-95 transition-transform duration-500"
        />
        <p>{content}</p>

        <Link href="/" passHref>
            <motion.a className="flex items-center h-1 mb-2 sm:mb-0">
                <motion.strong className="text-lavender" variants={sectionMotion}>
                    It's just a 5 min read, go ahead!
                </motion.strong>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:animate-arabela"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </motion.a>
        </Link>
    </motion.section>
);

const sectionMotion = {
    rest: {
        opacity: [0, 0, 0],
        position: 'absolute' as const,
        left: '-9999px',
        transition: {
            duration: 0,
            type: 'tween',
            ease: 'easeInOut',
        },
    },
    hover: {
        opacity: [0, 0.1, 1],
        position: 'unset' as const,
        transition: {
            delay: 0.4,
            duration: 0.1,
            type: 'tween',
            ease: 'easeInOut',
            times: [0, 0.1, 1],
        },
    },
};

export { Post };
