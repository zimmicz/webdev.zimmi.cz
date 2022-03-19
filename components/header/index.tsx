import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { MenuLink } from '..';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '../../config';

const Header = () => (
  <header className="py-5 md:py-10 font-title font-bold px-5 xl:px-20 flex-wrap max-w-screen-xl flex-col md:flex-row md:flex-nowrap w-full flex space-y-5 md:space-y-10 md:space-y-0 justify-center items-center">
    <motion.div animate={{ x: 0 }} initial={{ x: -50 }} className="text-center md:text-left">
      <Link href="/">
        <a>
          <h1 className="text-5xl sm:text-7xl mb-3">{BLOG_TITLE}</h1>
        </a>
      </Link>
      <small className="text-lg md:text-2xl">{BLOG_DESCRIPTION}</small>
    </motion.div>
    <nav className="md:ml-auto flex">
      <ul className="w-full flex items-end md:flex-col text-xl md:text-right space-x-10 md:space-y-5">
        <li>
          <Link href="/posts" passHref>
            <MenuLink className="flex items-center space-x-3">
              <span>posts</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline self-end"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href="/snippets" passHref>
            <MenuLink className="flex items-center space-x-3">
              <span>snippets</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline self-end"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <MenuLink className="flex items-center space-x-3">
              <span>rss</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline self-end"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </MenuLink>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export { Header };
