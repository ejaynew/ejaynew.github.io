// pages/_app.js

import Head from 'next/head';
import '../styles/globals.css'; // Import the global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
