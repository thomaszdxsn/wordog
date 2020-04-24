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

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164486668-1" />
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'UA-164486668-1'); 
          `}}>
          </script>
        </Head>
        <Component {...pageProps} />
      </>
  )
};

export default App;

