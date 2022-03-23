import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { MenuLink } from '..';
import FileText from '../../public/icons/file-text.svg';
import Code from '../../public/icons/code.svg';
import Rss from '../../public/icons/rss.svg';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '../../config';

const Header = () => (
  <header className="bg-gray-100 p-5 md:py-10 font-title font-bold w-full">
    <div className="max-w-[100%] w-[90ch] flex mx-auto items-center flex-wrap md:flex-nowrap justify-center space-y-5 ">
      <motion.div animate={{ x: 0 }} initial={{ x: -50 }} className="space-y-5 text-center md:text-left">
        <Link href="/">
          <a>
            <h1 className="text-5xl sm:text-7xl">{BLOG_TITLE}</h1>
          </a>
        </Link>
        <p className="sm:text-lg md:text-2xl text-gray-500">{BLOG_DESCRIPTION}</p>
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
    </div>
  </header>
);

export { Header };
