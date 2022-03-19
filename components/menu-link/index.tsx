import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type LinkProps = Pick<React.ComponentProps<typeof Link>, 'href' | 'children'> & { onClick: React.MouseEventHandler };

const MenuLink = ({ onClick, href, children, className }: { className?: string } & Partial<LinkProps>) => {
  return (
    <motion.a
      animate={{ x: 0 }}
      initial={{ x: 50 }}
      onClick={onClick}
      href={href?.toString()}
      className={`${className} pb-2 text-decoration-fade from-black to-black`}
    >
      {children}
    </motion.a>
  );
};

export { MenuLink };
