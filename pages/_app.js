import React from 'react';
import { ThemeProvider } from 'react-ui';
import theme from 'react-ui/themes/light';
import Head from 'next/head';
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

theme.components.Button = {
  ...theme.components.Button,
  variants: {
    ...theme.components.Button.variants,
    icon: {
      ...theme.components.Button.variants.link,
      color: 'text.subtle',
      borderRadius: 4,
      ':hover, :focus': {
        outline: 'none',
        background: 'grays.100',
      },
      ':focus-visible': {
        borderColor: 'blues.500',
      },
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
        <>
          <section
            key={router.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Component {...pageProps} />
          </section>
        </>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
