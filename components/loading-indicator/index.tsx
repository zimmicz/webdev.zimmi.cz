import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { useToggle } from '../../hooks';

const LoadingIndicator = () => {
  const router = useRouter();
  const [isLoading, { toggle }] = useToggle();

  React.useEffect(() => {
    router.events.on('routeChangeStart', toggle);
    router.events.on('routeChangeComplete', toggle);

    return () => {
      router.events.off('routeChangeStart', toggle);
      router.events.off('routeChangeComplete', toggle);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ scale: 0 }}
          className="fixed bottom-14 right-14 px-2 border-gray-300 border-b"
        >
          <div style={style} className="animate-loading"></div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const style = {
  width: '25px',
  height: '30px',
  background:
    'linear-gradient(#ec0868 0 0) 0% 100%, linear-gradient(#ec0868 0 0) 50% 100%, linear-gradient(#ec0868 0 0) 100% 100%',
  backgroundSize: '5px 100%',
  backgroundRepeat: 'no-repeat',
  boxShadow: 'rgb(151, 151, 151) 0px 8px 6px -6px',
};

export { LoadingIndicator };
