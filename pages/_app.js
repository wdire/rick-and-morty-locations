import "../styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import client from "../common/apollo-client";
import Head from "next/head";
import MainContainer from "../components/MainContainer";
import TitleLogo from "../components/TitleLogo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rick and Morty Locations</title>
      </Head>
      <ApolloProvider client={client}>
        <MainContainer>
          <TitleLogo />
          <Component {...pageProps} />
        </MainContainer>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
