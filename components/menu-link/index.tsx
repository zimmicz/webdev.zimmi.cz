import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type LinkProps = Pick<React.ComponentProps<typeof Link>, 'href' | 'children'> & { onClick: React.MouseEventHandler };

const MenuLink = React.forwardRef(
  (
    { onClick, href, children, className }: { className?: string } & Partial<LinkProps>,
    ref: React.Ref<HTMLAnchorElement>,
  ) => {
    return (
      <motion.a
        ref={ref}
        onClick={onClick}
        href={href?.toString()}
        className={`${className} py-2 text-primary text-decoration-fade from-primary to-primary`}
      >
        {children}
      </motion.a>
    );
  },
);

MenuLink.displayName = 'MenuLink';

export { MenuLink };
