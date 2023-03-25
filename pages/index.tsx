import Head from "next/head";
import App from "@/components/App";

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Pokam</title>
        <meta name="description" content="Samuel Pokam - Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
}
