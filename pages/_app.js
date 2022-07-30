import "../styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import client from "../common/apollo-client";
import Head from "next/head";
import TitleLogo from "../components/TitleLogo";
import MainBackground from "../components/MainBackground";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rick and Morty Locations</title>
      </Head>
      <ApolloProvider client={client}>
        <MainBackground />
        <TitleLogo />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
