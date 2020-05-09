import React from 'react';
import {AppProps} from "next/app";
import {useRouter} from "next/router";
import Head from "next/head";
import {DefaultSeo} from "next-seo/lib";
import {buildURL} from "../utils";

const GoogleAnalyticsScript: React.FC = () => {

  return (
      <>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164486668-1" />
        <script dangerouslySetInnerHTML={{__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());

              gtag('config', 'UA-164486668-1'); 
            `}}>
        </script>
      </>
      )
};


const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const router = useRouter();

  return (
      <>
        <Head>
          <title>Thomaszdxsn's blog</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          {process.env.NODE_ENV === 'production' && <GoogleAnalyticsScript />}
          <script src="https://profile.codersrank.io/widget/widget.js" async />
        </Head>
        <DefaultSeo
            openGraph={{
              url: buildURL(router.asPath),
            }}
            twitter={{
              handle: '@thomaszdxsn',
              site: '@thomaszdxsn',
              cardType: 'summary_large_image',
            }}
            titleTemplate={'%s | Thomaszdxsn\'s blog'}
        />
        <Component {...pageProps} />
      </>
  )
};

export default App;

