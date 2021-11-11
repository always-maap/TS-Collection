import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import Layout from '../components/layout';
import '../styles/index.css';

const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
