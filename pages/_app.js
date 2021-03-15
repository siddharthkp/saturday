import { ThemeProvider } from 'react-ui';
import theme from 'react-ui/themes/light';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

theme.components.Input = {
  ...theme.components.Input,
  variants: {
    subtle: {
      backgroundColor: 'transparent !important',
      borderColor: 'transparent !important',
      fontSize: 'inherit',
      resize: 'none',
    },
  },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>saturday</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider tokens={theme.tokens} components={theme.components}>
        <AnimatePresence>
          <motion.section
            key={router.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.section>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
