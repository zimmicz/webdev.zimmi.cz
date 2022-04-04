import { motion, useViewportScroll } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { MenuLink } from '..';
import FileText from '../../public/icons/file-text.svg';
import Code from '../../public/icons/code.svg';
import Rss from '../../public/icons/rss.svg';
import ChevronDown from '../../public/icons/chevron-down.svg';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '../../config';
import { useToggle } from '../../hooks';
import { Menu, MenuButton } from '@reach/menu-button';
import type { getAllCategories } from '../../lib/utils';
import { Categories } from './components/categories';

const Header = ({ categories }: { categories: PromiseReturnType<ReturnType<typeof getAllCategories>> }) => {
  const { scrollY } = useViewportScroll();
  const [expanded, { setOn: expand, setOff: collapse }] = useToggle(true);
  const { navigation, header, content, title, description } = expanded ? classNames.expanded : classNames.mini;

  React.useEffect(() => {
    const handler = () => {
      // prevent header flickering when going to mini mode
      if (scrollY.get() > 200 || (scrollY.get() < 200 && scrollY.getPrevious() > 200)) {
        collapse();
      } else {
        expand();
      }
    };

    return scrollY.onChange(handler);
  }, []);

  return (
    <motion.header
      layout
      variants={{
        mini: {
          position: 'sticky',
          maxHeight: ['150px', '100px'],
          zIndex: 10,
        },
      }}
      animate="mini"
      transition={{ duration: 0.25, type: 'spring' }}
      initial={false}
      className={`${header} sticky top-0`}
    >
      <div className={content}>
        <motion.div animate={{ x: 0 }} initial={{ x: -50 }}>
          <Link href="/" passHref>
            <a>
              <h1 className={title}>{BLOG_TITLE}</h1>
            </a>
          </Link>
          <p className={description}>{BLOG_DESCRIPTION}</p>
        </motion.div>
        <nav className="md:ml-auto w-full sm:w-auto">
          <ul className={navigation}>
            <li>
              <Link href="/posts" passHref>
                <MenuLink className="flex items-center space-x-3 self-center">
                  <span>posts</span>
                  <FileText className="my-icon-primary hidden sm:block" />
                </MenuLink>
              </Link>
            </li>
            <li>
              <Link href="/snippets" passHref>
                <MenuLink className="flex items-center space-x-3 self-center">
                  <span>snippets</span>
                  <Code className="my-icon-primary self-end hidden sm:block" />
                </MenuLink>
              </Link>
            </li>
            <li className="self-center">
              <Menu>
                <MenuButton
                  className="font-bold text-primary text-decoration-fade from-primary to-primary flex items-center space-x-3 py-2
                  "
                >
                  <span>categories</span>
                  <ChevronDown className="my-icon-primary hidden sm:block self-end" />
                </MenuButton>
                <Categories categories={categories} />
              </Menu>
            </li>
            <li>
              <Link href="/feed.xml" passHref>
                <MenuLink className="flex items-center space-x-3 self-center">
                  <span>rss</span>
                  <Rss className="my-icon-primary hidden sm:block" />
                </MenuLink>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

const classNames = {
  mini: {
    header: 'bg-gray-100 h-20 p-5 sticky top-0 z-10 font-title font-bold w-full top-0 flex h-auto justify-center',
    content:
      'max-w-[100%] w-[90ch] flex mx-auto items-center flex-wrap md:flex-nowrap justify-center sm:justify-between space-y-0',
    title: 'text-xl justify-center',
    description: 'text-gray-500 font-normal hidden',
    navigation: 'flex space-x-5 justify-center',
  },
  expanded: {
    header: 'bg-gray-100 p-5 md:py-10 sticky top-0 font-title font-bold w-full flex',
    content: 'max-w-[100%] w-[90ch] flex mx-auto items-center flex-wrap md:flex-nowrap justify-center',
    title: 'text-5xl sm:text-7xl',
    description: 'sm:text-lg md:text-2xl text-gray-500 sm:mt-5 my-2 text-center md:text-left',
    navigation:
      'w-full flex justify-center items-end md:flex-col text-xl md:text-right space-x-3 sm:space-x-10 md:space-y-3',
  },
};

export { Header };
