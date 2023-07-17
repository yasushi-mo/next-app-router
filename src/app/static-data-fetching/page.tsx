import Head from "next/head";
import { RandomJoke } from "@/types";
import { SAMPLE_API_ENDPOINT } from "@/api";
import { FetchedRandomJoke } from "@/components/FetchedRandomJoke";

export const TITLE = "Static Data Fetching";

export default async function StaticDataFetching() {
  const randomJoke = await getRandomJoke();

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
      <p>
        Data fetched at <b>build-time</b> on the server-side before sending to
        the client.
      </p>
      <FetchedRandomJoke randomJoke={randomJoke} />
    </>
  );
}

export async function getRandomJoke(): Promise<RandomJoke> {
  const response = await fetch(SAMPLE_API_ENDPOINT, {
    next: { revalidate: 10 },
  });
  const randomJoke = await response.json();

  return randomJoke;
}
