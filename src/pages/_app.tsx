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
        <title>next-ts-tailwind</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
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
