import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useToggle } from '../../hooks';
import ArrowUpCircle from '../../public/icons/arrow-up.svg';

const BackToTop = () => {
  const [on, { setOn, setOff }] = useToggle(false);

  const handler = React.useCallback(() => {
    if (window.scrollY > window.innerHeight / 3) {
      setOn();
    } else {
      setOff();
    }
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0 });

  React.useLayoutEffect(handler, []);

  React.useLayoutEffect(() => {
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {on ? (
        <motion.button
          onClick={scrollToTop}
          title="Back to top"
          exit={{ scale: 0 }}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed right-28 bottom-12"
        >
          <ArrowUpCircle className="my-icon-primary" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export { BackToTop };
