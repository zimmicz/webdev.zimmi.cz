import { motion, useAnimation, useViewportScroll } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { MenuLink } from '..';
import FileText from '../../public/icons/file-text.svg';
import Code from '../../public/icons/code.svg';
import Rss from '../../public/icons/rss.svg';
import ChevronDown from '../../public/icons/chevron-down.svg';
import { BLOG_TITLE, BLOG_DESCRIPTION, PATHS } from '../../config';
import { useToggle } from '../../hooks';
import { Menu, MenuButton } from '@reach/menu-button';
import { Categories } from './components/categories';

const Header = () => {
  const { scrollY } = useViewportScroll();
  const menuControls = useAnimation();
  const [expanded, { setOn: expand, setOff: collapse }] = useToggle(true);
  const { navigation, header, content, title, description } = expanded ? classNames.expanded : classNames.mini;
  const menuItems = [
    ...menuLinks.slice(0, 2),
    <MyMenuButton
      key="categories"
      renderButton={
        <>
          <span>categories</span>
          <ChevronDown className="my-icon-primary hidden sm:block self-end" />
        </>
      }
      renderContent={<Categories />}
    />,
    ...menuLinks.slice(2),
  ];

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

  React.useEffect(() => {
    menuControls.set({ opacity: 0 });
    menuControls.start((i) => ({
      opacity: 1,
      transition: { duration: i * 0.5, ease: 'easeOut' },
    }));
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
        <div>
          <Link href="/" passHref>
            <a>
              <h1 className={title}>{BLOG_TITLE}</h1>
            </a>
          </Link>
          <p className={description}>{BLOG_DESCRIPTION}</p>
        </div>
        <nav className="md:ml-auto w-full sm:w-auto">
          <ul className={navigation}>
            {menuItems.map((item, i) => (
              <motion.li key={i} custom={i} animate={menuControls}>
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

const MyMenuLink = ({ children, ...props }: React.PropsWithChildren<unknown>) => (
  <MenuLink className="flex items-center space-x-3 self-center" {...props}>
    {children}
  </MenuLink>
);

const MyMenuButton = ({
  renderButton,
  renderContent,
}: {
  renderButton: React.ReactNode;
  renderContent: React.ReactNode;
}) => (
  <Menu>
    <MenuButton
      className="font-bold text-primary text-decoration-fade from-primary to-primary flex items-center space-x-3 py-2
                  "
    >
      {renderButton}
    </MenuButton>
    {renderContent}
  </Menu>
);

const menuLinks = [
  <Link key={PATHS.posts} href={PATHS.posts} passHref>
    <MyMenuLink>
      <span>posts</span>
      <FileText className="my-icon-primary hidden sm:block" />
    </MyMenuLink>
  </Link>,
  <Link key={PATHS.snippets} href={PATHS.snippets} passHref>
    <MyMenuLink key="snippets">
      <span>snippets</span>
      <Code className="my-icon-primary self-end hidden sm:block" />
    </MyMenuLink>
  </Link>,
  <Link key={PATHS.rss} href={PATHS.rss} passHref>
    <MyMenuLink key="rss">
      <span>rss</span>
      <Rss className="my-icon-primary hidden sm:block" />
    </MyMenuLink>
  </Link>,
];

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
