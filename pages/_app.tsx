import React from 'react';
import {AppProps} from "next/app";
import Head from "next/head";

import '../assets/styles.css';
import '../assets/solarized-light.css';


const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
      <>
        <Head>
          <title>Thomaszdxsn's blog</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
  )
};

export default App;

