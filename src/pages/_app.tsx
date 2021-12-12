import "../styles/global.css";

import React from "react";
import Head from "next/head";

import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { AppType } from "next/dist/shared/lib/utils";

import client from "~/client";
import SetupProvider from "~/features/setup/context";

const App: AppType = (props) => {
  const { Component, pageProps } = props;
  const [queryClient] = React.useState(() => new QueryClient());

  if (pageProps.config.api && pageProps.config.token) {
    client.setup(pageProps.config.api, pageProps.config.token);
  }

  return (
    <React.Fragment>
      <Head>
        <title>TrackYour.Money</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favico/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favico/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favico/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favico/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favico/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favico/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favico/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favico/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favico/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favico/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favico/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favico/favicon-16x16.png"
        />
        <link rel="icon" href="/favico/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta
          name="msapplication-TileImage"
          content="/favico/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#4f46e5"></meta>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SetupProvider config={pageProps.config}>
            <Component {...pageProps} />
          </SetupProvider>
        </Hydrate>
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default App;
