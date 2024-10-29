"use client";

import { getRandomJoke } from "../../server-actions/action";

export default async function Page() {
  const randomJokeObject = await getRandomJoke();
  return (
    <div>
      <h1>Random Joke</h1>
      <p>{randomJokeObject.setup}</p>
    </div>
  );
}
