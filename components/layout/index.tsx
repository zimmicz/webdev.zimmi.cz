import React from 'react';
import { motion } from 'framer-motion';
import { Header, Metadata } from '../';

const Layout = ({ children, ...props }: React.PropsWithChildren<unknown>) => (
  <main className="w-[80ch] max-w-[100%] min-h-screen mx-auto">
    <Metadata />
    <Header />
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      className="mx-5"
      {...props}
    >
      {children}
    </motion.div>
  </main>
);

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200, y: 0 },
};
export { Layout };
