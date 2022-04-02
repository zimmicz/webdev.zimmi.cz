import React from 'react';
import { motion } from 'framer-motion';
import { Metadata } from '../';

const Layout = ({ children, ...props }: React.PropsWithChildren<unknown>) => (
  <>
    {/*
        TODO find a better way to leave space for responsive header than using pt-
    */}
    <main className="w-[80ch] max-w-[100%] min-h-screen mx-auto pt-48 sm:pt-60 md:pt-80 px-4 sm:px-10">
      <Metadata />
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
  </>
);

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200, y: 0 },
};
export { Layout };
