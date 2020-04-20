import React from 'react';
import {AppProps} from "next/app";

import '../assets/styles.css';
import '../assets/solarized-light.css';


const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />
};

export default App;

