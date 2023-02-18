import HomePage from "@/components/HomePage/HomePage";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Open Auto Demo</title>
        <meta name="description" content="Open auto demo application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MantineProvider theme={{ colorScheme: "dark" }}>
          <HomePage />
        </MantineProvider>
      </main>
    </>
  );
}
