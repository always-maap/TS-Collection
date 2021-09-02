import '@docsearch/css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
