import Router from "next/router";
import Head from "next/head";
import nProgress from "nprogress";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    nProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    nProgress.done();
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-touch" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
