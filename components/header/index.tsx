import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { MenuLink } from '..';
import FileText from '../../public/icons/file-text.svg';
import Code from '../../public/icons/code.svg';
import Rss from '../../public/icons/rss.svg';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '../../config';

const Header = () => (
  <header className="p-5 md:py-10 font-title font-bold flex-wrap max-w-screen-xl flex-col md:flex-row md:flex-nowrap w-full flex space-y-5 md:space-y-10 md:space-y-0 justify-center items-center">
    <motion.div animate={{ x: 0 }} initial={{ x: -50 }} className="text-center md:text-left">
      <Link href="/">
        <a>
          <h1 className="text-5xl sm:text-7xl mb-3">{BLOG_TITLE}</h1>
        </a>
      </Link>
      <small className="text-lg md:text-2xl">{BLOG_DESCRIPTION}</small>
    </motion.div>
    <nav className="md:ml-auto flex">
      <ul className="w-full flex items-end md:flex-col text-xl md:text-right space-x-10 md:space-y-3">
        <li>
          <Link href="/posts" passHref>
            <MenuLink className="flex items-center space-x-3">
              <span>posts</span>
              <FileText className="my-icon-primary" />
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href="/snippets" passHref>
            <MenuLink className="flex items-center space-x-3">
              <span>snippets</span>
              <Code className="my-icon-primary" />
            </MenuLink>
          </Link>
        </li>
        <li>
          <Link href="/feed.xml" passHref>
            <MenuLink className="flex items-center space-x-3">
              <span>rss</span>
              <Rss className="my-icon-primary" />
            </MenuLink>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export { Header };
