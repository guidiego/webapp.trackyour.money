import "../styles/global.css";

import React from "react";
import Head from "next/head";

import { AppType } from "next/dist/shared/lib/utils";

const App: AppType = (props) => {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>next-ts-tailwind</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
