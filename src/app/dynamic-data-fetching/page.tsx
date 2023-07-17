import Head from "next/head";
import { RandomJoke } from "@/types";
import { SAMPLE_API_ENDPOINT } from "@/api";
import { FetchedRandomJoke } from "@/components/FetchedRandomJoke";

export const TITLE = "Dynamic Data Fetching";

export default async function DynamicDataFetching() {
  const randomJoke = await getRandomJoke();

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <h1>{TITLE}</h1>
      <p>
        Data fetched on the server-side at <b>each</b> request before sending to
        the client.
      </p>
      <FetchedRandomJoke randomJoke={randomJoke} />
    </>
  );
}

export async function getRandomJoke(): Promise<RandomJoke> {
  const response = await fetch(SAMPLE_API_ENDPOINT, { cache: "no-store" });
  const randomJoke = await response.json();

  return randomJoke;
}
