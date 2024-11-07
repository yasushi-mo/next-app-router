"use client";

import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

export default function Page() {
  const { data } = useSWR<{
    id: number;
    type: string;
    setup: string;
    punchline: string;
  }>("https://official-joke-api.appspot.com/random_joke", fetcher);

  return (
    <div>
      <h3>{data?.type}</h3>
      <p>{data?.setup}</p>
      <p>{data?.punchline}</p>
    </div>
  );
}
