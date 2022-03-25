import React from 'react';
import Link from 'next/link';
import type { ReadTimeResults } from 'reading-time';

const PostCtaLink = ({ readingTime, slug }: { readingTime: ReadTimeResults; slug: string }) => (
  <Link href={`/posts/${slug}`} passHref>
    <a className="flex items-center h-1 mb-2 sm:mb-0 text-primary">
      <strong className="pr-5">It&apos;s just a {readingTime.text}, go ahead!</strong>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 group-hover:animate-arabela"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </Link>
);

export { PostCtaLink };
