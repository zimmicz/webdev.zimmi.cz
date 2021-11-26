import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReadTimeResults } from 'reading-time';

const PostCtaLink = ({ readingTime, slug }: { readingTime: ReadTimeResults; slug: string }) => (
    <Link href={`/posts/${slug}`} passHref>
        <motion.a className="flex items-center h-1 mb-2 sm:mb-0">
            <motion.strong className="text-lavender" variants={variants}>
                It's just a {readingTime.text}, go ahead!
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
);

const variants = {
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

export { PostCtaLink };
