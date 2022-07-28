import "../styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import client from "../common/apollo-client";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rick and Morty Locations</title>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
